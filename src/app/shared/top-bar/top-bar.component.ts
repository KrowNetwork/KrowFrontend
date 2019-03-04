import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { CreateUserService } from '../service/create-user.service';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import { UserLoginService } from '../service/user-login.service';
import { CustomHttpService } from '../service/custom-http.service';
declare var $: any;
declare var gtag: Function

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
  resume_text: string;
  term: String;
  user = ""
  
  constructor(
    public http: CustomHttpService,
    private createUser: CreateUserService,
    private activatedRoute: ActivatedRoute,
    public userService: UserLoginService,
    private router: Router
  ) {
    // window.dataLayer
    // function gtag(){window.dataLayer.push(arguments);}
    // console.log("f")
    // todo - private v public
    
    this.userService.isAuthenticated(this);

    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    gtag('js', new Date());
    gtag('set', {'user_id': this.user}); // Set the user ID using signed-in user_id.
    
    // this.http.head("http://18.216.142.10:3000/api/Applicant/" + user).subscribe(
    // data => {
    //             sessionStorage.setItem("accountType", "applicant")
    //             // this.router.navigate(['/applicant']);
                
                        

        
    // }, // Catch Errors
    // (err = HttpErrorResponse) => {      
    //   this.http.head("http://18.216.142.10:3000/api/Employer/" + user).subscribe(
    //     data => {
    //             sessionStorage.setItem("accountType", "employer")
    //       }
    //     )  
    //             // this.router.navigate(['/employer']);        
    // } 
                        // console.log("User does not have an applicant acco        // this.router.navigate(['/basicInfo'], { queryParams: { as: "Applicant" } });
    

        

      
    // this.userService.verifyUserType(localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"))
    // console.log("Applicant Component: constructor");
    if (sessionStorage.getItem("accountType") === undefined) {
      this.http.get("https://api.krownetwork.com/check-user", {id: this.user}).subscribe(
        data => {
          var res = data["response"]
          if (res == "applicant") {
            this.is_applicant = true
            this.btnText = "Edit Resume"
            this.resume_text = "Resume"
          } else if (res == "employer") {
            this.is_applicant = false
            this.btnText = "Edit Profile"
            this.resume_text = "Company"
          } else {
            this.is_applicant = false
            this.btnText = "Edit"
            this.resume_text = "Profile"
          }
          sessionStorage.setItem("accountType", res)
        }
      )
    } else {
      var res = sessionStorage.getItem("accountType")
      if (res == "applicant") {
        this.is_applicant = true
        this.btnText = "Edit Resume"
        this.resume_text = "Resume"
      } else if (res == "employer") {
        this.is_applicant = false
        this.btnText = "Edit Profile"
        this.resume_text = "Company"
      } else {
        this.is_applicant = false
        this.btnText = "PLACEHOLDER"
        this.resume_text = "PLACEHOLDER"
      }
    }
  

    // // console.log(this.is_applicant)
  

  
}

showTracking() {
  if (this.isLoggedInB && this.user != "") {
    return true
  }
  return false
}
  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (isLoggedIn) {
      this.isLoggedInB = true
      console.log(this.isLoggedInB)
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

  removeModal() {
    // this.modalService.destroy()
  }

  bigBtn() {
    if (this.is_applicant) {
      this.router.navigate(["/applicant/edit"])
    } else {
      this.router.navigate(["/employer/edit"])
    }
  }

  goToProfile() {
    if (sessionStorage.getItem("accountType") == "applicant") {
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

  allowSearchBarDisplay(){
      let url = this.router.url

      if(url == '/' || url.match(/\/search\?term=*/)){
        return false;
      } else {
        return true;
      }
  }

  keyDown(event) {
    if (event.key == "Enter") {
      this.search()
    }
  }

  search() {
    this.router.navigate(["/search"], { queryParams: { term: this.term } })
  }

}
