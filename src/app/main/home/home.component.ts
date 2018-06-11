import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserLoginService } from "../../service/user-login.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

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
        var user = localStorage.getItem("CognitoIdentityServiceProvider.682kbp7jv1l5a01lojmehrm2a2.LastAuthUser");
        if(!user){
            this.router.navigate(['/login']);
        }
        else{
            this.user = user;
        }
    }

    initializeApplicant(){
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


