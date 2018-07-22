import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../../service/user-login.service';
import { SELECT_ITEM_HEIGHT_EM } from '../../../../node_modules/@angular/material';

import { HttpClient, HttpErrorResponse  } from '@angular/common/http';


declare var require: any;

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
})
export class EmployerProfileComponent implements OnInit {
  hide_applicant_links:boolean;
  hide_employer_links:boolean;
  user: string;
  isApplicant = false; 

  constructor(public router: Router, public userService: UserLoginService, public http: HttpClient) {
    this.userService.isAuthenticated(this);
    console.log("Employer Component: constructor");

    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
    userService.verifyUserType(this.user)
    // isApplicant = false 
    
    if (sessionStorage.getItem("accountType") == "applicant") {
      this.hide_applicant_links = false
      this.hide_employer_links = true
    } else {
      this.hide_applicant_links = true
      this.hide_employer_links = false
    }
    console.log(this.hide_applicant_links)
    
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
      if (!isLoggedIn) {
        sessionStorage.setItem("redirectBack", this.router.url)
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
  
  }
}
