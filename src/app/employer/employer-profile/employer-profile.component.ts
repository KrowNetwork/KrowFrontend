import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../../service/user-login.service';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';


declare var require: any;

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
})
export class EmployerProfileComponent implements OnInit {
  hide_applicant_links = false
  hide_employer_links = false
  user: string;
  isApplicant = false; 

  constructor(public router: Router, public userService: UserLoginService, public http: HttpClient) {
    this.userService.isAuthenticated(this);
    console.log("Employer Component: constructor");

    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")

    // isApplicant = false 
    this.http.head("http://18.220.46.51:3000/api/Applicant/" + this.user).subscribe(
      data => {
        this.isApplicant = true
      }
    )

    if (this.isApplicant) {
      sessionStorage.setItem("accountType", "applicant")
    } else {
      sessionStorage.setItem("accountType", "employer")
    }

    if (sessionStorage.getItem("accountType") == "applicant") {
      this.hide_applicant_links = false
      this.hide_employer_links = true
    } else {
      this.hide_applicant_links = true
      this.hide_employer_links = false
    }
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
      if (!isLoggedIn) {
          this.router.navigate(['/login']);
      }
  }

  scrollup(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // IMAGES
  LOADER = require("../../../images/loader.gif");
  LOGO1 = require("../../../images/icon.png");
  LOGO2 = require("../../../images/icon2.png");
  KROW_LOGO = require("../../../images/krow-logo.png");
  KROW_HEADER_2 = require("../../../images/krow-header-2.png");
  
  ngOnInit() {
    if (sessionStorage.getItem("accountType") == "applicant") {
      this.router.navigate(["/applicant"])
  }
}
}
