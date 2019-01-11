import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../service/modal.service';
import * as AWS from "aws-sdk"
import {UserLoginService} from "../../service/user-login.service"
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import { isMoment } from 'moment';
import * as Moment from 'moment';

@Component({
  selector: 'app-new-event-calendar-popup',
  templateUrl: './new-event-calendar-popup.component.html',
  styleUrls: ['./new-event-calendar-popup.component.css']
})
export class NewEventCalendarPopupComponent implements OnInit {
  @Input() userCal = undefined
  @Input() ddb = undefined
  @Input() user: String

  title = undefined
  date = undefined
  details = undefined
  data = undefined
  
  constructor(
    public modalService: ModalService,
    public userService: UserLoginService,
    public router: Router
  ) {
  //   this.userService.isAuthenticated(this, false);
  //   AWS.config.update({region: "us-east-2"})

  //   AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  //     IdentityPoolId : 'us-east-2:d7bb8495-a1a4-4280-be12-9af389a16f88', // your identity pool id here
  //     Logins : {
  //         'cognito-idp.us-east-2.amazonaws.com/us-east-2:d7bb8495-a1a4-4280-be12-9af389a16f88' : localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.idToken")
  //     }
  //   });
    

  //   this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
  //   this.ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'})
  //   // this. = new AWS.DynamoDB({apiVersion: '2012-10-08'})
    
  //  }
   
  //   //
  //   isLoggedIn(message: string, isLoggedIn: boolean) {
  //     if (!isLoggedIn) {
  //       this.router.navigate(['/login']);
  // }
}


  ngOnInit() {
    // console.log(this.userCal)
    this.data = this.userCal.response.data
    console.log(this.data)
  }

  close() {
    this.modalService.destroy();
  }

  complete() {
    console.log(this.title)
    console.log(this.date)
    console.log(this.details)
    // var d = new Date(this.date).toISOString()//.split("T")
    // console.log(d)
    var d = this.date
    // var d = new Date(this.date.split("-")[0], this.date.split("-")[1], this.date.split("-")[2], 4, 0, 0).toISOString()
    // console.log(c)
    
    // d[1].replace("04")
    //new Date(Moment().year(), Moment().month(), Moment().date()).toISOString()
    var event = {M: {
        "createdBy": {S: this.user},
        "createdDate": {S: new Date().toISOString()},
        "date": {S: new Date(this.date).toISOString()},
        "details": {S: this.details},
        "status": {S: "In Progress"},
        "title": {S: this.title}
      }}
      console.log(event)
      console.log(this.data.Item.calendar)
    if (this.data.Item.calendar.M[d] === undefined) {
      this.data.Item.calendar.M[d] = {L: []}
    }
    console.log("x", this.data)
    this.data.Item.calendar.M[d].L.push(event)
    console.log(this.data)
    this.data.TableName = "user_calendars"
    var self = this
    var x = this.ddb.putItem(this.data)
    x.send()
    x.on("success", function(data) {
      // console.log("q", data)
      self.close()
    })
    x.on("error", function(err) {
      console.log("x", err)
      console.log(x)
    })

  }

}
