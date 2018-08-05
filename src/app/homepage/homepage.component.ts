import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { CreateUserService } from '../service/create-user.service';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import { UserLoginService } from '../service/user-login.service';
import { CustomHttpService } from '../service/custom-http.service';

@Component({
  selector: 'app-homepage',
  templateUrl: "./homepage.component.html",
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  is_applicant = false;
  isLoggedInB = false;
  btnText: string;
  constructor(
    public http: CustomHttpService,
    private createUser: CreateUserService,
    private activatedRoute: ActivatedRoute,
    public userService: UserLoginService,
    private router: Router
  ) {
    // console.log("f")
    // todo - private v public
    this.userService.isAuthenticated(this);
    this.userService.verifyUserType(localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"))
    // console.log("Applicant Component: constructor");

    if (sessionStorage.getItem("accountType") == "applicant") {
      this.is_applicant = true
      this.btnText = "Find Job"
    } else {
      this.is_applicant = false
    }

    // // console.log(this.is_applicant)
  
  
  }
  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (isLoggedIn) {
      this.isLoggedInB = true
      // sessionStorage.setItem("redirectBack", this.router.url)
      //   // this.router.navigate(['/login']);
    }
}

  ngOnInit() {
    // console.log("c")
  }

  bigBtn() {
    if (this.is_applicant) {
      this.router.navigate(["/applicant/job-search"])
    }
  }

  goToProfile() {
    if (this.is_applicant) {
      this.router.navigate(["/applicant"])
    } else {
      this.router.navigate(["/employer"])
    }
  }

}
