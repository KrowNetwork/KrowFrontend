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
    show=false;
    user: String
    constructor(
        public router: Router, 
        public userService: UserLoginService,
        private http: CustomHttpService
        // private http: CustomHttpService
    ) {
        // console.log("Secure Home Component: constructor");
        this.userService.isAuthenticated(this)

        this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        // if(!user){
        //     this.router.navigate(['/login']);
        // }
        console.log(this.user)

            
            
        
        }
    
        
    

    // user: string;
    token: string;

    // $window.onload = function() {

    // }

    ngOnInit() {
        this.http.head("http://18.220.46.51:3000/api/Applicant/" + this.user).subscribe(
            data => {
                if (data["error"] !== undefined) {
                    this.router.navigate(['/basicInfo'], { queryParams: { as: "Applicant" } });                     
                } else {
                    console.log(data)
                    sessionStorage.setItem("accountType", "applicant")
                    this.router.navigate(['/applicant']);
                }
                
            })
            // this.initializeApplicant()
            

    }

    initializeApplicant(){

        this.router.navigate(['/basicInfo'], { queryParams: { as: "Applicant" } });

    }

    initializeEmployer(){
        this.router.navigate(['/basicInfo'], { queryParams: { as: "Employer" } });

    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        console.log(isLoggedIn)
        if (!isLoggedIn) {
            this.router.navigate(['/login']);
        }
    }
}


