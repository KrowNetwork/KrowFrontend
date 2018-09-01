import { Component, OnInit, ChangeDetectionStrategy, ViewChild  } from '@angular/core';
import * as AWS from "aws-sdk";
import * as DynamoDBStream from "dynamodb-stream"
import { UserLoginService } from '../service/user-login.service';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import { CustomHttpService } from "../service/custom-http.service";
import { ContextMenuService, ContextMenuComponent } from 'ngx-contextmenu';
// ChangeDetectorRef.detectChanges()

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class MessagingComponent implements OnInit {
  public items = [
    { name: 'John', otherProperty: 'Foo' },
    { name: 'Joe', otherProperty: 'Bar' }
];
@ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
  ddb: any;
  logs_ddb: any;
  params_chats: {};
  params_logs: {};
  user: string;
  chats: undefined;
  chat_details = [];
  room_data = [];
  current_room_data = {}
  message_html = ""
  currentID = String;
  userName = String
  client = undefined
  menuOptions = [
    {
      text: 'Object-Select',
      click: function ($itemScope, $event, modelValue, text, $li) {
          console.log(1)
      }
  },
  {
      text: 'Object-Remove',
      click: function ($itemScope, $event, modelValue, text, $li) {
          console.log(2)
      }
  }
  ]

  constructor(
    public userService: UserLoginService,
    public router: Router,
    public http: CustomHttpService
  ) { 
    // AWS.config.update({region: "us-east-2"})
    // // var credentials = new AWS.SharedIniFileCredentials();
    AWS.config.update({accessKeyId: "AKIAJZJ4OX6ZEI5CTMOA", secretAccessKey: "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", region: "us-east-2"});
    
    this.userService.isAuthenticated(this);

    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    console.log(this.user)
    // console.log((new Date).toISOString())

    this.ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'})
    // this. = new AWS.DynamoDB({apiVersion: '2012-10-08'})
    this.params_chats = {
      TableName: "user_chats",
      Key: {
        userID: {S: this.user}
      }
    }
  }


  isLoggedIn(message: string, isLoggedIn: boolean) {
      if (!isLoggedIn) {
        this.router.navigate(['/login']);
      }
      // sessionStorage.setItem("redirectBack", this.router.url)
    }

  loadUserData(id, chat_id) {
    this.http.get("http://18.220.46.51:3000/api/Applicant/" + id).subscribe(
      data => {
        // console.log(data["error"])

          if (data["error"] === undefined) {
            var uData = {}
            uData["name"] = data["firstName"] + " " + data["lastName"]
            uData["id"] = id;
            uData["chatID"] = chat_id
            this.room_data.push(uData)
          } else {
            this.loadEmployerData(id, chat_id)
          }
    })
  }

  loadEmployerData(id, chat_id) {
    this.http.get("http://18.220.46.51:3000/api/Employer/" + id).subscribe(
      data => {
            // console.log(data)
            var uData = {}
            uData["name"] = data["employerName"]
            uData["id"] = id;
            uData["chatID"] = chat_id
            this.room_data.push(uData)
            // console.log(uData)
    })
  }

  loadChatDetails(chatName) {
    var params_logs = {
      TableName: "chat_logs",
      Key: {
        logID: {S: chatName}
      }
    }
    var self = this
    this.ddb.getItem(params_logs, function(err, data) {
      console.log(data)
      data.Item.users.L.forEach(element => {
        if (element.S != self.user) {
          self.loadUserData(element.S, chatName)
          // console.log(element)
        }
      });
    })

  }

  loadChat(id, userName) {
    var params_logs = {
      TableName: "chat_logs",
      Key: {
        logID: {S: id}
      }
    }
    if (this.client !== undefined) {
      this.client.end()
    }
    this.loadStream(id, userName)
    var self = this
    this.ddb.getItem(params_logs, function(err, data) {
      // console.log("a", data)
      self.current_room_data["user"] = userName
      self.current_room_data["messages"] = data.Item.messages.L
      self.current_room_data["logID"] = id
      // self.current_room_data["messages"].forEach(element => {
      //   self.message_html += 
      //   `
      //   <div class="list">
      //       <div [ngClass]="{ 'message': 1==1, 'sent': message.M.from.S == user, 'replies': message.M.to.S == user}" *ngFor="let message of current_room_data.messages; let i = index">
      //           <span class="sender">` + element.M.from.S +`</span>
      //           <p>` + element.M.message.S + `</p>
      //       </div>
                      
      //   </div>
        
      //   `
      // });
      // console.log(self.message_html)
    })
  }

  ngOnInit() {
    
    var self = this
    this.ddb.getItem(this.params_chats, function(err, data) {

        var c_details = []
        var names = data.Item.chats.L
        console.log(data)
        for (var i = 0; i < names.length; i++) {
          self.loadChatDetails(names[i]["S"])
        
        }
        // self.chat_details = data
    })

    




}

  loadStream(id, userName) {
    this.currentID = id
    this.userName = userName
  //   var ddbStream = new DynamoDBStream( new AWS.DynamoDBStreams(), "arn:aws:dynamodb:us-east-2:599179145875:table/chat_logs/stream/2018-08-30T02:25:13.303")
  //   // console.log(ddbStream)
  //   var self = this
  //   ddbStream.on("modify record", function (newRecord, oldRecord) {
  //     if (newRecord["logID"] == self.currentID) {
              
  //       // console.log(newRecord)
  //       var msgs = [] 
  //       var setup = 
  //       {
  //         M: {
  //           date: {S: "D"},
  //           from: {S: "D"},
  //           message: {S: "D"},
  //         }
  //       }
  //       newRecord.messages.forEach(element => {
  //         // console.log(element)
  //         setup.M.date.S = element.date
  //         setup.M.from.S = element.from
  //         setup.M.message.S = element.message
  //         // console.log(setup)
  //         msgs.push(setup)

  //         setup = {
  //           M: {
  //             date: {S: "D"},
  //             from: {S: "D"},
  //             message: {S: "D"},
  //           }
  //         }
  //       });
  //       self.current_room_data["messages"] = msgs
  //     }
  //   })

  //   // ddbStream.on("insert  record", function (data) {
  //   //   console.log("b", data)
  //   //   self.current_room_data["messages"] = data.Item.messages.L
  //   // })

  //   setInterval(function () {
  //     ddbStream.fetchStreamState(function (err) {
  //         if (err) { return console.error('error fetching stream state', err) }
  //         // console.log('stream state fetched successfully')
  //     })
  // }, 1000)

  var AWS = require("aws-sdk")
  var AWSMqtt = require("aws-mqtt")
  // AWS.config.update({accessKeyId: "AKIAJZJ4OX6ZEI5CTMOA", secretAccessKey: "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", region: "us-east-2"});
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-east-2:d7bb8495-a1a4-4280-be12-9af389a16f88",

  })
  var id2 = (Math.floor((Math.random() * 100000) + 1)) + id

  this.client = AWSMqtt.connect({
      WebSocket: WebSocket, 
      region: AWS.config.region,
      credentials: AWS.config.credentials,
      endpoint: 'a3iz1rb67gh4ak.iot.us-east-2.amazonaws.com', // NOTE: get this value with `aws iot describe-endpoint`
      clientId: id2
    })

    this.client.on('connect', () => {
      this.client.subscribe('/chat/' + id)
    })
    this.client.on('message', (topic, message) => {
      // this is where you will handle the messages you send from Lambda
      message = JSON.parse(message.toString()).message.messages
      console.log(message)
      // var msgs = [] 
      //   var setup = 
      //   {
      //     M: {
      //       date: {S: "D"},
      //       from: {S: "D"},
      //       message: {S: "D"},
      //     }
      //   }
      //   message.messages.forEach(element => {
      //     // console.log(element)
      //     setup.M.date.S = element.date
      //     setup.M.from.S = element.from
      //     setup.M.message.S = element.message
      //     // console.log(setup)
      //     msgs.push(setup)

      //     setup = {
      //       M: {
      //         date: {S: "D"},
      //         from: {S: "D"},
      //         message: {S: "D"},
      //       }
      //     }
      //   });
        this.current_room_data["messages"] = message.L
      })

    this.client.on("close", (err) => {
      console.log(err)
    })



    // console.log("a", self.chat_details)
  }
  
  sendMessage(msg) {
    var setup = {
      M: {
        date: {S: (new Date).toISOString()},
        from: {S: this.user},
        message: {S: msg},
      }
    }
    var params_logs = {
      TableName: "chat_logs",
      Key: {
        logID: {S: this.currentID}
      }
    }
    // this.loadStream(id, userName)
    var self = this
    this.ddb.getItem(params_logs, function(err, data) {
      console.log("a", data)
      // var par = {
        
      // }
      data.Item.messages.L.push(setup)
      data["TableName"] = "chat_logs"
      console.log(data)
      self.ddb.putItem(data, function(err, data) {
        console.log(err)
        console.log(data)
      })
  })
  msg = null;
}

deleteMessage(msg) {
  var c = 0
  console.log(msg)
  for (var i = 0; i <= this.current_room_data["messages"].length; i ++) {
    console.log(this.current_room_data["messages"][i].M.date.S)
    if (this.current_room_data["messages"][i].M.date.S == msg) {
      this.current_room_data["messages"].splice(i, 1)
      console.log(i)
      break
    }
  }
  console.log(this.current_room_data["messages"])

  
  var params_logs = {
    TableName: "chat_logs",
    Key: {
      logID: {S: this.currentID}
    }
  }
  // this.loadStream(id, userName)
  var self = this
  this.ddb.getItem(params_logs, function(err, data) {
    data.Item.messages.L = self.current_room_data["messages"]
    data["TableName"] = "chat_logs"
    self.ddb.putItem(data, function(err, data) {
      if (err) console.log(err)
    })
})
  
}
}

