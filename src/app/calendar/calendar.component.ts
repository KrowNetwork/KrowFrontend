import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../service/user-login.service';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';

import * as Moment from 'moment';
import * as AWS from "aws-sdk"
import * as AWSMqtt from "aws-mqtt"
import { WebSocket } from "ws"
import { ErrorStateMatcher } from '../../../node_modules/@angular/material';
import { CustomHttpService } from "../service/custom-http.service";
import { NewEventCalendarPopupComponent } from './new-event-calendar-popup/new-event-calendar-popup.component'
import { ModalService } from '../service/modal.service';

declare var $: any
$(".details").hide()

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  change = 0
  length = 0
  blank = []
  count = []
  closed = true
  dates = []
  user: string;
  client = undefined;
  ddb = undefined;
  month = undefined;
  year = undefined;
  dateOfMonth = undefined;
  user_calendar = undefined
  showEdit = false;
  current_events = []
  up_to_date = undefined

  constructor(
    private userService: UserLoginService,
    private router: Router,
    private http: CustomHttpService,
    public modalService: ModalService,

  ) {

    $(".details").hide()
    this.userService.isAuthenticated(this, false);
    AWS.config.update({region: "us-east-2"})

    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId : 'us-east-2:d7bb8495-a1a4-4280-be12-9af389a16f88', // your identity pool id here
      Logins : {
          'cognito-idp.us-east-2.amazonaws.com/us-east-2:d7bb8495-a1a4-4280-be12-9af389a16f88' : localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.idToken")
      }
    });
    

    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    this.ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'})
    // this. = new AWS.DynamoDB({apiVersion: '2012-10-08'})
    
   }
   isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
    }
    // sessionStorage.setItem("redirectBack", this.router.url)
  }

  ngOnInit() {
    this.change = Moment().startOf('month').toDate().getDay()
    this.length = Moment().endOf('month').toDate().getDate()
    this.month = Moment().month()
    this.year = Moment().year()
    this.dateOfMonth = Moment().date()
    console.log(new Date(this.year, this.month, this.dateOfMonth))
    var params = {
      TableName: "user_calendars",
      Key: {
        userID: {S: this.user}
      }
    }
    var self = this
    self.user_calendar = this.ddb.getItem(params) 
    self.user_calendar.send()
    // test.send()
    self.user_calendar.on("success", function(data) {
      data = data.data
      var events = data.Item.calendar.M
      // console.log(err)
      console.log(data)
      var arr = []
      for (var x = 0; x < 42; x ++) {
        var iter = []
        var d = new Date(self.year, self.month, x - self.change + 1)
          // if
          if (x < self.change || x -self.change + 1 > self.length) {
            arr.push([" ", " ", "inactive"])
          } else {

              var e = events[d.toISOString().split("T")[0]]
              if (e !== undefined) {

                // console.log(e)
                arr.push([d.toISOString().split("T")[0], x - self.change + 1, "active"])
              } else {

                arr.push([d.toISOString().split("T")[0], x - self.change + 1, "inactive"])
              }
            
          }
      }
      for (var x = 0; x < arr.length; x += 7) {
        self.dates.push([arr[x], arr[x + 1], arr[x + 2], arr[x + 3], arr[x + 4], arr[x + 5], arr[x + 6]])
      }   
      console.log(self.dates)
    })
    // self.up_to_date = self.user_calendar

   
    
    this.loadStream()


  }




  showDetails(date) {
    this.current_events = []
    if (date != " ") {
      var data = this.user_calendar.response.data.Item.calendar.M
      
      if (data[date] !== undefined) {
        this.current_events = []
        this.showEdit = true
        // console.log(data)
        data = data[date].L
        console.log(data)
        for (var z = 0; z < data.length; z ++) {
          var current_event =   {
            title: " ",
            createdBy: " ",
            dateCreated: " ",
            dateDue: " ",
            status: " ",
            description: " "
          }
        
          current_event.title = data[z].M.title.S
          // console.log( data[z].M.createdBy.S)
          var dc = new Date( data[z].M.createdDate.S)
          current_event.dateCreated = (dc.getMonth() + 1) + "/" + (dc.getDate()) + "/" + dc.getFullYear()

          var db = new Date( data[z].M.date.S)
          current_event.dateDue = (db.getMonth() + 1) + "/" + (db.getDate() + 1) + "/" + db.getFullYear()

          current_event.status = data[z].M.status.S

          current_event.description =  data[z].M.details.S

          this.http.get("http://18.220.46.51:3000/api/Applicant/" +  data[z].M.createdBy.S).subscribe(user => {
            if (user["error"] === undefined) {
              current_event.createdBy = user["firstName"] + " " + user["lastName"]
              this.current_events.push(current_event)
            } else {
              this.http.get("http://18.220.46.51:3000/api/Employer/" +  data[z].M.createdBy.S).subscribe(user => {
                current_event.createdBy = user["employerName"]
                this.current_events.push(current_event)
              })
            }
          })
          
          
        }

          
        } else {
          current_event.title = " "
          current_event.dateCreated = " "
          current_event.dateDue = " "
          current_event.status = " "
          current_event.description = " "
          current_event.createdBy = " "
          this.current_events.push(current_event)
        }
      
      
    }
  }

  loadStream() {
    var id2 = (Math.floor((Math.random() * 100000) + 1)) + this.user

    this.client = AWSMqtt.connect({
        WebSocket: WebSocket, 
        region: AWS.config.region,
        credentials: AWS.config.credentials,
        endpoint: 'a3iz1rb67gh4ak.iot.us-east-2.amazonaws.com', // NOTE: get this value with `aws iot describe-endpoint`
        clientId: id2
      })

    this.client.on('connect', () => {
      this.client.subscribe('/calendar/' + this.user)
      console.log("connected")
    })
    this.client.on('message', (topic, message) => {
      // this is where you will handle the messages you send from Lambda
      message = JSON.parse(message.toString()).message
      // console.log("yerrr", message)
      var data = message.data
      var events = message.calendar.M
      // console.log("a", this.up_to_date)
      // this.up_to_date.response.data.Item = data
      // console.log("b", this.up_to_date)
      // console.log(err)
      console.log(data)
      var arr = []
      for (var x = 0; x < 42; x ++) {
        var iter = []
        var d = new Date(this.year, this.month, x - this.change + 1)
          // if
          if (x < this.change || x -this.change + 1 > this.length) {
            arr.push([" ", " ", "inactive"])
          } else {

              var e = events[d.toISOString().split("T")[0]]
              if (e !== undefined) {

                // console.log(e)
                arr.push([d.toISOString().split("T")[0], x - this.change + 1, "active"])
              } else {

                arr.push([d.toISOString().split("T")[0], x - this.change + 1, "inactive"])
              }
            
          }
      }
      this.dates = []
      for (var x = 0; x < arr.length; x += 7) {
        this.dates.push([arr[x], arr[x + 1], arr[x + 2], arr[x + 3], arr[x + 4], arr[x + 5], arr[x + 6]])
      }   

    })
  


    this.client.on("close", (err) => {
      console.log("close", err)
    })
  }

  newEvent() {

    this.modalService.init(NewEventCalendarPopupComponent, {ddb: this.ddb, userCal:  this.user_calendar, user: this.user}, {})

  }

  removeModal() {
    this.modalService.destroy()
  }

  complete(i) {
    console.log(i)
    this.current_events[i].status = "Completed"
  }
}
