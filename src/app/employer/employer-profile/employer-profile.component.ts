import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../../service/user-login.service';

declare var require: any;

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
})
export class EmployerProfileComponent implements OnInit {

  constructor(public router: Router, public userService: UserLoginService) {
    this.userService.isAuthenticated(this);
    console.log("Employer Component: constructor");
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
