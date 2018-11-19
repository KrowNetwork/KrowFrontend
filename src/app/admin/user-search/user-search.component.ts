import { Component, OnInit } from '@angular/core';
import { CustomHttpService } from "./../../service/custom-http.service"
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserLoginService } from "../../service/user-login.service"
@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  fname = ""
  lname = ""
  users = []
  userID = ""
  errorMessage = ""
  constructor(
    private http: CustomHttpService,
    private userService: UserLoginService
  ) { }

  ngOnInit() {

  }

  search() {
    var f = {
      url: "http://18.220.46.51:3000/api/queries/GetUsersByName?fn=" + this.fname + "&ln=" + this.lname
    }
    console.log("ye")
    console.log(f)
    this.http.query(f).subscribe(
      data => {
        this.users = []
        console.log(data)
        for (var i = 0; i < Object.keys(data).length; i ++) {
          this.users.push(data[i])
        }
        console.log(this.users)
        // data.forEach(element => {
          
        // });
      }, (err: HttpErrorResponse) => {
        console.log(err)
      }
    )
  }

  searchID() {
    this.http.get("http://18.220.46.51:3000/api/Applicant/" + this.userID).subscribe(
      data => {
        this.users = []
        console.log(data)
        // for (var i = 0; i < Object.keys(data).length; i ++) {
        this.users.push(data)
        // }
        console.log(this.users)
        // data.forEach(element => {
          
        // });
      }, (err: HttpErrorResponse) => {
        console.log(err)
      }
    )
  }

  inspect(user) {
    var cUser = this.userService.getUser(user.applicantID)
    console.log(cUser)
    console.log(cUser.getUserAttributes(function (err, result) {
      console.log(err, result)
    }))
    // localStorage.setItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt." + cUser.getUsername() +".idToken", cUser.storage[""])
    cUser.getSession(function (err, session) {
      console.log(err)
      console.log(session.getIdToken().decodePayload())
    })
  }

}
