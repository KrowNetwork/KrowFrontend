import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { CreateUserService } from '../service/create-user.service';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import { UserLoginService } from '../service/user-login.service';
import { CustomHttpService } from '../service/custom-http.service';
declare var $: any;

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
    // this.userService.verifyUserType(localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"))
    // console.log("Applicant Component: constructor");

    if (sessionStorage.getItem("accountType") == "applicant") {
      this.is_applicant = true
      this.btnText = "Find Job"
      // var x = document.getElementById("btn")
      // console.log(x)
      // x.setAttribute("class", "la la-search")
    } else {
      this.is_applicant = false
      this.btnText = "Post Jobs"
      // var x = document.getElementById("btn")
      // console.log(x)
      // x.setAttribute("class", "la la-plus")
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
    // console.log("c")
  }

  bigBtn() {
    if (this.is_applicant) {
      this.router.navigate(["/jobs/job-search"])
    } else {
      this.router.navigate(["/employer/employer-post-jobs"])
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
