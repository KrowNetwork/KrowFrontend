import { Component, OnInit } from "@angular/core";
import { AwsUtil } from "./service/aws.service";
import { UserLoginService } from "./service/user-login.service";
import { CognitoUtil, LoggedInCallback } from "./service/cognito.service";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  })
export class AppComponent implements OnInit, LoggedInCallback {

  constructor(
    public awsUtil: AwsUtil, 
    public userService: UserLoginService, 
    public cognito: CognitoUtil,
    private router: Router
  ) {

    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          (<any>window).ga('set', 'page', event.urlAfterRedirects)
          (<any>window).ga('send', 'pageview')
        } 
      }
    )

  }

  ngOnInit() {
    if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)) {
      alert("Mobile support is not fully integrated. Proceed at your own risk. Use PC or Mac for full functionality.")
    } // this.userService.isAuthenticated(this);
  }
  

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if(!isLoggedIn){
      // this.router.navigate(["/login"]);
    }
    let mythis = this;
    this.cognito.getIdToken({ callback() { },
      callbackWithParam(token: any) {
        // Include the passed-in callback here as well so that it's executed downstream
        mythis.awsUtil.initAwsService(null, isLoggedIn, token);
      }
    });
  }
}