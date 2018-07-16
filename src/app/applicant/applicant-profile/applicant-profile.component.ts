import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../../service/user-login.service';

declare var require: any;

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
})
export class ApplicantProfileComponent implements OnInit {

  constructor(public router: Router, public userService: UserLoginService) {
    this.userService.isAuthenticated(this);
    console.log("Applicant Component: constructor");
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
      if (!isLoggedIn) {
          this.router.navigate(['/login']);
      }
  }

  window: any = window;

  openJobs(event) {
    var el = event.target.parentElement.children[1];
    var currStyle = el.attributes[1].value;
    console.log(currStyle);
    if(currStyle == "display: block;"){
      console.log(1);
      event.target.parentElement.attributes[1].value = "inner-child";
      el.style = "display: none;";
      console.log(el.style);
    }
    else if(currStyle == "display: none;"){      
      console.log(2);
      el.style = "display: block;";
      console.log(el.style);
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
    sessionStorage.setItem("accountType", "Applicant")
  }
}
