import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateUserService } from '../../service/create-user.service';

@Component({
    selector: 'basic-info-collector',
    templateUrl: './basic-info-collector.component.html',
    // template: '<p>test</p>',
})
export class BasicInfoCollectorComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private initializeUser: CreateUserService
    ) { }

    user: string;
    intent: string;
    first: string;
    second: string;
    email: string;
    bio: string;
    address: string;
    state: string;
    city: string;
    country: string;
    phoneNumber: string;
    errorMessage = null;
    collectInfoOn = true;
    uploadImageOn = false;
  
    ngOnInit() {
        this.route
            .queryParams
            .subscribe(params => {
                // Defaults to 0 if no query param provided.
                this.intent = params.as;
            });
        this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");

        sessionStorage.setItem("accountType", this.intent.toString().toLowerCase())
        
    }

    submitInfo(){
        if(!this.user || !this.intent){
            this.errorMessage = "Something went wrong, please go back.";
            return;
        }
        if(!this.first || !this.second || !this.email){
            this.errorMessage = "All fields are required";
            return;
        }
        else{
            this.errorMessage = null;
            if (this.intent == "Applicant") {
                var obj = {
                    user: this.user,
                    first: this.first,
                    second: this.second,
                    email: this.email,
                    bio: this.bio,
                    address: this.address,
                    state: this.state,
                    city: this.city,
                    country: this.country,
                    phoneNumber: this.phoneNumber
                }
            } else {
                var obj = {
                    user: this.user,
                    first: this.first,
                    second: this.second,
                    email: this.email,
                    bio: "",
                    address: this.address,
                    state: this.state,
                    city: this.city,
                    country: this.country,
                    phoneNumber: this.phoneNumber
                }
            }
            
            //this.initializeUser.initializeUser(obj, this.intent, this.activate, this.router);
            this.initializeUser.initializeUser(obj, this.intent, null, this.router);
            this.next();
        }
    }

    next(){
        this.collectInfoOn = false;
        this.uploadImageOn = true;
    }

    // activate(intent: string, user: string, router){
    //     // var path = "/" + intent;
    //     router.navigate(["/" + intent + "/profile-info"]);
    // }

    activate(){
        // var path = "/" + intent;
        this.router.navigate(["/" + this.intent.toLowerCase() + "/profile-info"]);
    }
}
