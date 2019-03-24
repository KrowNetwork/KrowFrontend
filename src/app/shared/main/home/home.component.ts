import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserLoginService } from "../../service/user-login.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { CustomHttpService } from "../../service/custom-http.service"
import { CognitoCallback, CognitoUtil } from "../../service/cognito.service";
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
    info: any;
    constructor(
        public router: Router, 
        public userService: UserLoginService,
        private http: CustomHttpService,
        private cognitoUtil: CognitoUtil
        // private http: CustomHttpService
    ) {
        // console.log("Secure Home Component: constructor");
        this.userService.isAuthenticated(this);

        // FB.login((response)=>
        //     {
        //       console.log('submitLogin',response);
        //       if (response.authResponse)
        //       {
        //         //login success
        //         //login success code here
        //         //redirect to home page
        //        }
        //        else
        //        {
        //        console.log('User login failed');
        //      }
        //   });

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

    async ngOnInit() {

        this.http.post("https://api.krownetwork.com/check-user", {id: this.user}).subscribe(
           async data => {
                console.log(data["response"])
                if (data["response"] == "applicant") {
                    sessionStorage.setItem("accountType", "applicant")
                    await this.getApplicantInfo();
                    
                    // this.router.navigate(['/applicant']);  
                } else if (data["response"] == "employer") {
                    sessionStorage.setItem("accountType", "employer")
                    this.getEmployerInfo();
                    // this.router.navigate(['/employer']);
                
                } else {
                    this.router.navigate(['/basicInfo'], { queryParams: { as: "None" }});
                }
            
        })
    }

    getApplicantInfo(){
        var url = "http://18.220.46.51:3000/api/Applicant/" + this.user;
        // Get Data
        this.http.get(url).subscribe(
            (data:any) => {
                console.log('applicant', data)
                this.info = data;
                if(this.info.firstName === "" && this.info.lastName === "" && this.info["resume"].biography ===""){
                    this.router.navigate(['/basicInfo'], { queryParams: { as: "Applicant" }});
                } else {
                    this.router.navigate(['/applicant']);  
                }
        });
    }

    getEmployerInfo(){
        var url = "http://18.220.46.51:3000/api/Employer/" + this.user;
        // Get Data
        this.http.get(url).subscribe(
            (data:any) => {
                console.log('employer', data)
                this.info = data;
                if(this.info.employerName === "" && this.info.description === ""){
                    this.router.navigate(['/basicInfo'], { queryParams: { as: "Employer" }});
                } else {
                    this.router.navigate(['/employer']);
                }
        });
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


