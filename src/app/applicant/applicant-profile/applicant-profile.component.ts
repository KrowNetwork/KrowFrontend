import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../../service/user-login.service';
import { log } from 'util';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { CustomHttpService } from '../../service/custom-http.service';


declare var require: any;
declare var $: any;

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
})
export class ApplicantProfileComponent implements OnInit {

  hide_applicant_links:boolean; 
  hide_employer_links:boolean; 
  user: string;
  isApplicant = false

  constructor(public router: Router, public userService: UserLoginService, public http: CustomHttpService) {
    this.userService.isAuthenticated(this);
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")

    // isApplicant = false 
    // userService.verifyUserType(this.user)

    if (sessionStorage.getItem("accountType") == "applicant") {
      this.hide_applicant_links = false
      this.hide_employer_links = true
      this.isApplicant = true;
    } else {
      this.hide_applicant_links = true
      this.hide_employer_links = false
    }


  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
      if (!isLoggedIn) {
        sessionStorage.setItem("redirectBack", this.router.url)
          this.router.navigate(['/login']);
      }
  }

  window: any = window;

  openJobs(event) {
    var el = event.target.parentElement.children[1];
    var currStyle = el.attributes[1].value;
    // console.log(currStyle);
    if(currStyle == "display: block;"){
      // console.log(1);
      event.target.parentElement.attributes[1].value = "inner-child";
      el.style = "display: none;";
      // console.log(el.style);
    }
    else if(currStyle == "display: none;"){      
      // console.log(2);
      el.style = "display: block;";
      // console.log(el.style);
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
  ngOnInit() {
    // if (this.router.url.split("/")[3] === undefined) {
    //   if (sessionStorage.getItem("accountType") == "employer") {
    //     this.router.navigate(["/employer"])
    // }
    

    // // console.log(this.isApplicant)

    
      
    
  }

  goToProfile() {
    if (this.isApplicant) {
    if (this.router.url.split("/")[3] === undefined || this.router.url.split("/")[3] == "") {
      this.router.navigate(["/applicant/profile-info"])
    } else {
      this.router.navigate(["/applicant/profile-info/" + this.router.url.split("/")[3]])
    }
  } else { 
    if (this.router.url.split("/")[3] === undefined || this.router.url.split("/")[3] == "") {
      this.router.navigate(["/employer/profile-info"])
    } else {
      this.router.navigate(["/employer/profile-info/" + this.router.url.split("/")[3]])
    }
  }
  }



}

