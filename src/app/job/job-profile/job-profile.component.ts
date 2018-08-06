import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../../service/user-login.service';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { map } from 'rxjs/operators/map';
import { CustomHttpService } from '../../service/custom-http.service';

declare var require: any;
declare var $: any;

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.css']
})
export class JobProfileComponent implements OnInit {
  switchTo: string;
  btnText: string;
  user: string;
  x = undefined
  hide_applicant_links = false
  hide_employer_links = false
  isApplicant_ = false

  constructor(public router: Router, public userService: UserLoginService, public http: CustomHttpService) {
    
    this.userService.isAuthenticated(this);
    // console.log("Job Component: constructor");

    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")

    // isApplicant = false 
    // userService.verifyUserType(this.user)

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
      sessionStorage.setItem("redirectBack", this.router.url)
        this.router.navigate(['/login']);
    }
}

scrollup(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  ngOnInit() {
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
    
    // // console.log(this.show_hire_requests)
    // // console.log(this.show_hire_requests)
    // // console.log(this.x)
    // if (this.x.subscribe(this.x == this.user)) {
    //   this.btnText = "Find Job"
    // }
  }

  
  isApplicant() {
    if (sessionStorage.getItem("accountType") == "applicant") {
      return true 
    }
    return false
  }
  goToProfile() {
    this.router.navigate([sessionStorage.getItem("accountType").toLowerCase() + "/profile-info"])
  }

  // hide_hire_requests_fn() {
  //   return this.hide_hire_requests
  // }

  bigBtn() {
    if (this.btnText == "Find Job")
      this.router.navigate(["applicant/job-search"])
    else
      this.router.navigate(["employer/post-job"])      
  }

  goToAvailableJobs() {
    this.router.navigate(["employer/available-jobs"])
    // [routerLink]="['#/employer/available-jobs']"
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

}
