import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { CreateUserService } from '../service/create-user.service';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import { UserLoginService } from '../service/user-login.service';
import { CustomHttpService } from '../service/custom-http.service';
declare var $: any;

@Component({
  selector: 'app-top-bar',
  templateUrl: "./top-bar.component.html",
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  is_applicant = false;
  isLoggedInB = false;
  isFeedbackOn = false;
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

    var user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    this.http.head("http://18.220.46.51:3000/api/Applicant/" + user).subscribe(
    data => {
        // console.log(data)
            if (data["error"] === undefined) {
                sessionStorage.setItem("accountType", "applicant")
                // this.router.navigate(['/applicant']);
            } else {
                this.http.head("http://18.220.46.51:3000/api/Employer/" + user).subscribe(
                    data => {
                        if (data["error"] === undefined) {
                            sessionStorage.setItem("accountType", "employer")
                            // this.router.navigate(['/employer']);        
                        
            }})}

        
    }, // Catch Errors
    (err = HttpErrorResponse) => {      
        
    } 
                        // console.log("User does not have an applicant acco        // this.router.navigate(['/basicInfo'], { queryParams: { as: "Applicant" } });
    )

        

      
    // this.userService.verifyUserType(localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"))
    // console.log("Applicant Component: constructor");

    if (sessionStorage.getItem("accountType") == "applicant") {
      this.is_applicant = true
      this.btnText = "Edit Resume"
      // var x = document.getElementById("btn")
      // console.log(x)
      // x.setAttribute("class", "la la-search")
    } else {
      this.is_applicant = false
      this.btnText = "Edit Profile"
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
      this.router.navigate(["/applicant/edit"])
    } else {
      this.router.navigate(["/employer/edit"])
    }
  }

  goToProfile() {
    if (this.is_applicant) {
      this.router.navigate(["/applicant"])
    } else {
      this.router.navigate(["/employer"])
    }
  }

  goToFeedback() {
      this.router.navigate(["/feedback"])
  }

  hideFeedback() {
      this.isFeedbackOn = true;
  }

}
