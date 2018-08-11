import { Component, OnInit } from '@angular/core';
import { CustomHttpService } from '../service/custom-http.service'
import { HttpClient, HttpErrorResponse, HttpBackend  } from '@angular/common/http';
import { UserLoginService } from "../service/user-login.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  msg: string;
  name: string;
  email: string;
  subject: string;
  constructor(
    private http: CustomHttpService,
    private userService: UserLoginService,
    private router: Router
  ) { 
    this.userService.isAuthenticated(this);
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn) {
      sessionStorage.setItem("redirectBack", this.router.url)
        this.router.navigate(['/login']);
    }
}

  ngOnInit() {

  }

  sendFeedback() {
    var data = {
      name: this.name,
      email: this.email,
      msg: this.msg,
      subject: this.subject
    }
    this.http.post("https://api.krownetwork.com/feedback", data).subscribe(
      data => {
        alert("Success!")

      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // console.log("Client-side error occured.");
        } else {
          // console.log("Server-side error occured.");
        }
        console.log(err)
      })
  }
}
