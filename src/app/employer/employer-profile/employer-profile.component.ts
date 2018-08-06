import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../../service/user-login.service';
import { SELECT_ITEM_HEIGHT_EM } from '@angular/material';

import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { CustomHttpService } from '../../service/custom-http.service';
declare var $: any;
// $(document).on('ready',function(){
//   // $(window).on('load',function(){
//       "use strict";
//     $('.res-openmenu').on('click', function(){
//       $('.responsive-header').addClass('active');
//       $('.responsive-opensec').slideDown();
//       $('.res-closemenu').removeClass('active')
//       $(this).addClass('active');
//     });
//     $('.res-closemenu').on('click', function(){
//       $('.responsive-header').removeClass('active');
//       $('.responsive-opensec').slideUp();
//       $('.res-openmenu').removeClass('active')
//       $(this).addClass('active');
//     });

//   });

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
  isActive = false
  opActive = true
  

  constructor(public router: Router, public userService: UserLoginService, public http: CustomHttpService) {
    this.userService.isAuthenticated(this);
    // console.log("Employer Component: constructor");

    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
    // userService.verifyUserType(this.user)
    // isApplicant = false 
    
    if (sessionStorage.getItem("accountType") == "applicant") {
      this.hide_applicant_links = false
      this.hide_employer_links = true
      this.isApplicant = true;
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

  openMenu() {
    $('.res-openmenu').on('click', function(){
      $('.responsive-header').addClass('active');
      $('.responsive-opensec').slideDown();
      $('.res-closemenu').removeClass('active')
      $(this).addClass('active');
    });
  }
  
  closeMenu() {
    $('.res-closemenu').on('click', function(){
      $('.responsive-header').removeClass('active');
      $('.responsive-opensec').slideUp();
      $('.res-openmenu').removeClass('active')
      $(this).addClass('active');
    });
  }
  
  toggleMenu() {
    $(".responsivemenu .menu-item-has-children > a").on("click",function(){
      $(this).parent().siblings().children("ul").slideUp();
      $(this).parent().siblings().removeClass("active");
      $(this).parent().children("ul").slideToggle();
      $(this).parent().toggleClass("active");
      // console.log("f")
      // return false;
  });
  }


  // IMAGES
  LOADER = require("../../../images/loader.gif");
  LOGO1 = require("../../../images/icon.png");
  LOGO2 = require("../../../images/icon2.png");
  KROW_LOGO = require("../../../images/krow-logo.png");
  KROW_HEADER_2 = require("../../../images/krow-header-2.png");
  
  ngOnInit() {
  
  }

 
  goToProfile() {
    if (this.isApplicant) {
      this.router.navigate(["/applicant/profile-info"])
  } else { 
      this.router.navigate(["/employer/profile-info"])
  }
  }
}
