import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef  } from '@angular/core';
import * as AWS from "aws-sdk";
import * as DynamoDBStream from "dynamodb-stream"
import { UserLoginService } from '../service/user-login.service';
import { CognitoUtil } from '../service/cognito.service';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import { CustomHttpService } from "../service/custom-http.service";
import { ContextMenuService, ContextMenuComponent } from 'ngx-contextmenu';
// ChangeDetectorRef.detectChanges()
import { MessagingPopupComponent } from './messaging-popup/messaging-popup.component'
import { ModalService } from '../service/modal.service';
import { AuthenticationDetails, CognitoUser, CognitoUserSession, CognitoIdToken, CognitoAccessToken, CognitoRefreshToken } from "amazon-cognito-identity-js";
var AWSMqtt = require("aws-mqtt")

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class MessagingComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
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
  current_room_data = {
    messages: []
  }
  message_html = ""
  currentID = String;
  userName = String
  client = undefined
  client2 = undefined
  passData = {}
  myVar: String;
  noSend = true
  isHidden = true
  created_user_data = undefined


  constructor(
    public userService: UserLoginService,
    public router: Router,
    public http: CustomHttpService,
    public modalService: ModalService,
    public cognitoUtil: CognitoUtil,
    
    // public session: CognitoUserSession
  ) { 

    const idToken = new CognitoIdToken({
        IdToken: localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.idToken")
    });
    const accessToken = new CognitoAccessToken({
        AccessToken: localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.accessToken")
    });
    const refreshToken = new CognitoRefreshToken({
        RefreshToken: localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.refreshToken")
    });
    
    let tokenData = {
        IdToken: idToken,
        RefreshToken: refreshToken,
        AccessToken: accessToken
    };

     let session = new CognitoUserSession(tokenData);

    this.userService.isAuthenticated(this, false);
    AWS.config.update({region: "us-east-2"})
    // // var credentials = new AWS.SharedIniFileCredentials();
    // AWS.config.update({accessKeyId: "AKIAJZJ4OX6ZEI5CTMOA", secretAccessKey: "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", region: "us-east-2"});
    // console.log(this.cognitoUtil.buildCognitoCreds(session.getIdToken().getJwtToken()))
    // AWS.config.credentials = this.cognitoUtil.buildCognitoCreds(session.getIdToken().getJwtToken());
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId : 'us-east-2:d7bb8495-a1a4-4280-be12-9af389a16f88', // your identity pool id here
      Logins : {
          // Change the key below according to the specific region your user pool is in.
          'cognito-idp.us-east-2.amazonaws.com/us-east-2:d7bb8495-a1a4-4280-be12-9af389a16f88' : localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.idToken")
      }
    });
    

    console.log(AWS.config.credentials)
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
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

  scrollToBottom() {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  } catch(err) { console.log(err) } 
  }


    


  isLoggedIn(message: string, isLoggedIn: boolean) {
      if (!isLoggedIn) {
        this.router.navigate(['/login']);
      }
      // sessionStorage.setItem("redirectBack", this.router.url)
    }

  loadUserData(id, chat_id) {
    this.http.get("http://18.216.142.10:3000/api/Applicant/" + id).subscribe(
      data => {
        // console.log(data["error"])

          if (data["error"] === undefined) {
            var uData = {}
            uData["name"] = data["firstName"] + " " + data["lastName"]
            uData["id"] = id;
            uData["chatID"] = chat_id
            uData["activity"] = "none"
            this.room_data.push(uData)
          } else {
            this.loadEmployerData(id, chat_id)
          }
    })
  }

  loadEmployerData(id, chat_id) {
    this.http.get("http://18.216.142.10:3000/api/Employer/" + id).subscribe(
      data => {
            // console.log(data)
            var uData = {}
            uData["name"] = data["employerName"]
            uData["id"] = id;
            uData["chatID"] = chat_id
            uData["activity"] = "none"
            this.room_data.push(uData)
            // console.log(uData)
    })
  }

  loadChatDetails(chatName, current) {
    var params_logs = {
      TableName: "chat_logs",
      Key: {
        logID: {S: chatName}
      }
    }
    this.room_data = []
    var self = this
    this.ddb.getItem(params_logs, function(err, data) {
      data.Item.users.L.forEach(element => {
        if (element.S != self.user) {
          self.loadUserData(element.S, chatName)
          // console.log(element)
          if (current) {
            self.http.get("http://18.216.142.10:3000/api/Employer/" + element.S).subscribe(
              data => {
                if (data["error"] === undefined) {

                  self.loadChat(chatName, data["employerName"])
                } else {
                  self.http.get("http://18.216.142.10:3000/api/Applicant/" + element.S).subscribe(
                    data => {
                      self.loadChat(chatName, data["firstName"] + " " + data["lastName"])
                    }
                  )
                }
              }
            )
          }
        }
      });
      
    })

  }

  loadChat(id, userName, event=undefined) {
    console.log(event)
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
      self.noSend = false 
      self.isHidden = false
      for (var z = 0; z < self.room_data.length; z ++) {
        if (self.room_data[z].chatID == id) {
          self.room_data[z].activity = "active"
          // break
        } else {
          self.room_data[z].activity = "none"
        }
      }
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
  defineNewUser(userId, chat_id, self) {
    // console.log(err)
    var chat_name = "_" + userId + "_" + this.user
    // console.log(chat_name)


    var p3 = {
      TableName: "user_chats",
      // Key: {
      //   userID: userId
      // },
      Item: {
        chats: {L: [{S: chat_name}]},
        userID: {S: userId}
      }
    }
    var p2 = {
      TableName: "user_chats",
      // Key: {
      //   userID: userId
      // },
      Item: {
        chats: {L: [{S: chat_name}]},
        userID: {S: this.user}
      }
    }

    self.created_user_data = p2
    

    self.ddb.putItem(p3, function(err, data) {
      console.log(err, data)
    })
    self.ddb.putItem(p2, function(err, data) {
      console.log(err, data)
    })

    var chat = {
      TableName: "chat_logs",
      Item: 
        {
          users: {L: [
            {S: userId},
            {S: self.user}
          ]},
        messages: {L: []},
        logID: {S: chat_id}
        }
    }

    self.ddb.putItem(chat, function(err, data) {
      // console.log(err, data)
    })
    delete chat.TableName
    return chat




  }
  ngOnInit() {
    var id3 = (Math.floor((Math.random() * 100000) + 1)) + this.user

    this.client2 = AWSMqtt.connect({
      WebSocket: WebSocket, 
      region: AWS.config.region,
      credentials: AWS.config.credentials,
      endpoint: 'a3iz1rb67gh4ak.iot.us-east-2.amazonaws.com', // NOTE: get this value with `aws iot describe-endpoint`
      clientId: id3
    })

    this.client2.on('connect', () => {
      this.client2.subscribe('/order/' + this.user)
      // console.log("connected")
    })
    this.client2.on('message', (topic, message) => {
      // this is where you will handle the messages you send from Lambda
      message = JSON.parse(message.toString()).message
      var names = message.Item.chats.L[0].S
      for (var a = 0; a < this.room_data.length; a++) {
        if (this.room_data[a].chatID == names) {
          var x = this.room_data[a]
          this.room_data.splice(a, 1)
          this.room_data.unshift(x)
        }
      }
        // console.log(data)

      
      // this.current_room_data["messages"] = message.L
      // this.scrollToBottom()
    })

    this.client2.on("close", (err) => {
      // console.log("close", err)
    })

    if (this.router.url.split("/")[2] !== undefined) {
      // console.log(this.router.url.split("/")[2])
      var i = this.router.url.split("/")[2]
      console.log(i)
      var p1 = {
        TableName: "user_chats",
        Key: {
          userID: {S: this.user}
        }
      }

      console.log(p1)

      var self = this
      var chat_1 = "_" + i + "_" + self.user
      var chat_2 = "_" + self.user + "_" + i
      var chat = undefined
      var self = this
      this.ddb.getItem(p1, function(err, data) {
        console.log("d", Object.keys(data).length)
        console.log("e", err)
        if (Object.keys(data).length === 0) {
            self.defineNewUser(i, chat_1, self)   
            console.log("yeeee")   
          }
        else {
             
            

            var add = true
            for (var x = 0; x < data.Item.chats.L.length; x ++) {
              console.log(data.Item.chats.L[x].S)
              if (data.Item.chats.L[x].S == chat_1 || data.Item.chats.L[x].S == chat_2) {
                // console.log(data.Item.chats.L[x].S)
                add = false;
                break;
              }
            }
              


            if (add) {
              data.Item.chats.L.push({S: chat_1})
              data.TableName = "user_chats"
              self.created_user_data = data
              self.ddb.putItem(data, function(err, data) {
                
              })

              data.Item.userID = {S: i}
              self.ddb.putItem(data, function(err, data) {
              })

              



            }

          }
        }
      )
      var log = {
        TableName: "chat_logs",
        Item: {
        logID: {S: chat_1},
        messages: {L: [
          
        ]},
        users: {L : [
          {S: this.user},
          {S: i}
        ]}
      }
      }
      this.ddb.putItem(log, function(err, data) {
        console.log(err)
      })
      var start = new Date().getSeconds()
    // while (true) {
    //   if (new Date().getSeconds() - start > 5) {
    //     break;
    //   }
    // }
      this.router.navigate(["/chat"])
    }
    if (this.created_user_data === undefined) {

      var self = this
      this.ddb.getItem(this.params_chats, function(err, data) {
          // console.log(err)
          var c_details = []
          // console.log(data.Item)
          var names = data.Item.chats.L
          // console.log(data)
          for (var i = 0; i < names.length; i++) {
            self.loadChatDetails(names[i]["S"], false)
          
          }
          // self.chat_details = data
      })
    } else {
      console.log("weee")
      var data = this.created_user_data
      var c_details = []
          // console.log(data.Item)
      var names = data.Item.chats.L
      // console.log(data)
      for (var a = 0; a < names.length; a++) {
        self.loadChatDetails(names[a]["S"], false)
      
      }
    }

    
  }






sleep(seconds) {
  var start = new Date().getSeconds();
  var x = 0
  while ((new Date().getSeconds() - start) > seconds) {
    x = 0
  }
  // for (var i = 0; i < 1e7; i++) {
  //   if ((new Date().getTime() - start) > milliseconds){
  //     break;
  //   }
  // }
}

pop() {
  this.modalService.init(MessagingPopupComponent, {test: "t"}, {})
}

  loadStream(id, userName) {
    this.currentID = id
    this.userName = userName



  // AWS.config.update({accessKeyId: "AKIAJZJ4OX6ZEI5CTMOA", secretAccessKey: "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", region: "us-east-2"});
 
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
      console.log("connected")
    })
    this.client.on('message', (topic, message) => {
      // this is where you will handle the messages you send from Lambda
      message = JSON.parse(message.toString()).message.messages
      // console.log(message)
      // console.log(message)
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
        this.scrollToBottom()
      })

    this.client.on("close", (err) => {
      console.log("close", err)
    })

    
    // console.log("a", self.chat_details)
  }
  
  sendMessage(msg) {
    this.noSend = true
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
      // console.log("a", data)
      // var par = {
        
      // }
      data.Item.messages.L.push(setup)
      data["TableName"] = "chat_logs"
      // console.log(data)
      self.ddb.putItem(data, function(err, data) {
        // console.log(err)
        // console.log(data)
      })
  })
  msg = null;
  this.myVar = ""
  this.noSend = false
}

deleteMessage(msg) {
  var c = 0
  // console.log(msg)
  for (var i = 0; i <= this.current_room_data["messages"].length; i ++) {
    // console.log(this.current_room_data["messages"][i].M.date.S)
    if (this.current_room_data["messages"][i].M.date.S == msg) {
      this.current_room_data["messages"].splice(i, 1)
      // console.log(i)
      break
    }
  }
  // console.log(this.current_room_data["messages"])

  
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

keyDown(event) {
  if (event.key == "Enter") {
    this.sendMessage(this.myVar)
  }
}

}

