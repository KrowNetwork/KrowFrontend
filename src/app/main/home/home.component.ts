import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserLoginService } from "../../service/user-login.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { CustomHttpService } from "../../service/custom-http.service"
import { log } from "util";

declare let AWS: any;
declare let AWSCognito: any;

@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './home.html'
})
export class HomeComponent implements OnInit {

    constructor(
        public router: Router, 
        public userService: UserLoginService,
        private http: CustomHttpService
        // private http: CustomHttpService
    ) {
        // console.log("Secure Home Component: constructor");
        this.userService.isAuthenticated(this)

        var user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        if(!user){
            this.router.navigate(['/login']);
        }

        // if (sessionStorage.getItem("accountType") !== undefined) {
        //     this.router.navigate(["/" + sessionStorage.getItem("accountType")])
        // }
        // this.token = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt." + user + ".idToken");
        // console.log(user)
        
        else {
            this.http.head("https://18.220.46.51:3000/api/Applicant/" + user).subscribe(
            data => {
                // console.log(data["res"])
                // console.log(data)
                sessionStorage.setItem("accountType", "applicant")
                this.router.navigate(['/applicant']);
               
                    
                
                // console.log(data)
                // console.log("User has an applicant account");
                
            }, // Catch Errors
            (err = HttpErrorResponse) => {
                // console.log(err["status"])
                if (err["status"] == 404) {
                    sessionStorage.setItem("accountType", "employer")
                    this.router.navigate(['/employer']);
                } else {
                    sessionStorage.setItem("accountType", "applicant")
                this.router.navigate(['/applicant']);
                }
                                // console.log("User does not have an applicant account");
                // console.log(err)
                // this.router.navigate(['/basicInfo'], { queryParams: { as: "Applicant" } });
            }
        );
        
        }
        
    }

    user: string;
    token: string;

    // $window.onload = function() {

    // }

    ngOnInit() {
    }

    initializeApplicant(){
        this.http.head("https://18.220.46.51:3000/api/Applicant/" + this.user).subscribe(
            data => {
                
                sessionStorage.setItem("accountType", "applicant")
                // console.log("User has an applicant account");
                this.router.navigate(['/applicant']);
            }, // Catch Errors
            (err = HttpErrorResponse) => {
                if (err instanceof Error) {
                    // console.log("Client-side error occured.");
                } else {
                    // console.log("Server-side error occured.");
                }
                // console.log("User does not have an applicant account");
                this.router.navigate(['/basicInfo'], { queryParams: { as: "Applicant" } });
            }
        );

    }

    initializeEmployer(){
        sessionStorage.setItem("accountType", "employer")
        this.http.head("https://18.220.46.51:3000/api/Employer/" + this.user).subscribe(
            data => {
                // console.log("User has an employer account");
                this.router.navigate(['/employer']);
            }, // Catch Errors
            (err = HttpErrorResponse) => {
                if (err instanceof Error) {
                    // console.log("Client-side error occured.");
                } else {
                    // console.log("Server-side error occured.");
                }
                // console.log("User does not have an employer account");
                this.router.navigate(['/basicInfo'], { queryParams: { as: "Employer" } });
            }
        );
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/login']);
        }
    }
}


