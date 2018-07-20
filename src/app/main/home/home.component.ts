import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserLoginService } from "../../service/user-login.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
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
        private http: HttpClient
    ) {
        console.log("Secure Home Component: constructor");
        this.userService.isAuthenticated(this)
        
    }

    user: string;

    ngOnInit() {
        var user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        console.log(user)
        if(!user){
            this.router.navigate(['/login']);
        }
        else{
            this.http.head("http://18.220.46.51:3000/api/Applicant/" + user).subscribe(
            data => {
                // console.log("User has an applicant account");
                sessionStorage.setItem("accountType", "applicant")
                console.log("NAVIGATE TO APPLICANT")
                console.log(sessionStorage.getItem("accountType"))
                this.router.navigate(['/applicant/profile-info']);
            },
            (err: HttpErrorResponse) => {
                // this.loadComponent("empty");
                console.log("http err")
				sessionStorage.setItem("accountType", "employer")
                console.log("NAVIGATE TO EMPLOYER")
                console.log(sessionStorage.getItem("accountType"))
                this.router.navigate(['/employer/profile-info']);
			})
            
            // console.log("User has an applicant account");
            
          
            this.user = user;
        }
    }

    initializeApplicant(){
        sessionStorage.setItem("accountType", "applicant")
        this.http.head("http://18.220.46.51:3000/api/Applicant/" + this.user).subscribe(
            data => {
                console.log("User has an applicant account");
                this.router.navigate(['/applicant']);
            }, // Catch Errors
            (err = HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log("Client-side error occured.");
                } else {
                    console.log("Server-side error occured.");
                }
                console.log("User does not have an applicant account");
                this.router.navigate(['/basicInfo'], { queryParams: { as: "Applicant" } });
            }
        );
    }

    initializeEmployer(){
        sessionStorage.setItem("accountType", "employer")
        this.http.head("http://18.220.46.51:3000/api/Employer/" + this.user).subscribe(
            data => {
                console.log("User has an employer account");
                this.router.navigate(['/employer']);
            }, // Catch Errors
            (err = HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log("Client-side error occured.");
                } else {
                    console.log("Server-side error occured.");
                }
                console.log("User does not have an employer account");
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


