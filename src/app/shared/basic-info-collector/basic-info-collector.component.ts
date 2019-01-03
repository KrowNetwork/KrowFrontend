import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateUserService } from '../../service/create-user.service';
import { EditComponent } from '../edit/edit.component';

@Component({
    selector: 'basic-info-collector',
    templateUrl: './basic-info-collector.component.html',
    // template: '<p>test</p>',
})
export class BasicInfoCollectorComponent implements OnInit {
    
    @ViewChild(EditComponent) edit: EditComponent 

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private initializeUser: CreateUserService,
    ) { }

    user: string;
    intent: "Applicant";
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
        console.log('edit', this.edit);
        if(!this.user || !this.intent){
            this.errorMessage = "Something went wrong, please go back.";
            return;
        }
        if(!this.edit.first || !this.edit.second || !this.edit.email){
            this.errorMessage = "First Name, Last Name and Email are required";
            return;
        }
        else{
            this.errorMessage = null;
            if (this.intent == "Applicant") {
                var obj = {
                    user: this.user,
                    first: this.edit.first,
                    second: this.edit.second,
                    email: this.edit.email,
                    bio: this.edit.bio,
                    address: this.edit.address,
                    state: this.edit.state,
                    city: this.edit.city,
                    country: this.edit.country,
                    phoneNumber: this.edit.phoneNumber
                }
            } else {
                var obj = {
                    user: this.user,
                    first: this.edit.first,
                    second: this.edit.second,
                    email: this.edit.email,
                    bio: "",
                    address: this.edit.address,
                    state: this.edit.state,
                    city: this.edit.city,
                    country: this.edit.country,
                    phoneNumber: this.edit.phoneNumber
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
