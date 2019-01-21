import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateUserService } from '../../shared/service/create-user.service';
import { EditComponent } from '../../applicant/edit/edit.component';
import { ResumeExperienceComponent } from '../../applicant/applicant-resume/resume-experience/resume-experience.component'

@Component({
    selector: 'basic-info-collector',
    templateUrl: './basic-info-collector.component.html',
    // template: '<p>test</p>',
})
export class BasicInfoCollectorComponent implements OnInit {
    
    @ViewChild(EditComponent) edit: EditComponent 
    @ViewChild('volunteersButton') vol: ElementRef;
    @ViewChild('experienceButton') exp: ElementRef;
    @ViewChild('educationButton') edu: ElementRef;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private initializeUser: CreateUserService,
    ) { }

    user: string;
    intent: "";
    
    //applicant
    first: string;
    second: string;
    address: string;
    state: string;
    city: string;
    country: string;
    
    //employer
    company: string;
    year: string;
    location: string;


    //both
    bio: string;
    email: string;
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

    async submitInfo(){
        console.log('edit', this.edit);
        var updateButton = document.getElementById("submitButton");
        updateButton.style.pointerEvents = 'none';
        updateButton.innerText = "Updating...";
        if(!this.user || !this.intent){
            this.errorMessage = "Something went wrong, please go back.";
            return;
        }
        if(this.intent == "Applicant" && (!this.edit.first || !this.edit.second || !this.edit.email)){
            this.errorMessage = "First Name, Last Name and Email are required";
        }
        else if(this.intent == "Employer" && (!this.company || !this.email || !this.bio) ){
            this.errorMessage = "Company Name, Description and Email are required";
        } else{
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
                await this.initializeUser.initializeUser(obj, this.intent, null, this.router);
                //console.log(this.edit)
                var x = this;
                await setTimeout(async function(){ 
                    await document.getElementById("experience-button").click();
                    // await document.getElementById("education-button").click();
                    // await document.getElementById("volunteers-button").click();
                    // await document.getElementById("achievement-button").click();
                    
                }, 7000);

                await setTimeout(async function(){ 
                    await document.getElementById("education-button").click();
                }, 10000);

                await setTimeout(async function(){ 
                    await document.getElementById("volunteers-button").click()
                    await document.getElementById("achievement-button").click();
                    
                    x.next();
                }, 14000);
            } else {
                var employerObj = {
                    user: this.user,
                    company: this.company,
                    email: this.email,
                    bio: this.bio,
                    location: this.location,
                    year: this.year,
                    phoneNumber: this.phoneNumber,
                }
                await this.initializeUser.initializeUser(employerObj, this.intent, null, this.router);
                var x = this;
                x.next();
                //console.log(this.edit)
                
                // await setTimeout(async function(){ 
                //     await document.getElementById("experience-button").click();
                //     // await document.getElementById("education-button").click();
                //     // await document.getElementById("volunteers-button").click();
                //     // await document.getElementById("achievement-button").click();
                    
                // }, 7000);

                // await setTimeout(async function(){ 
                //     await document.getElementById("education-button").click();
                // }, 10000);

                // await setTimeout(async function(){ 
                //     await document.getElementById("volunteers-button").click()
                //     await document.getElementById("achievement-button").click();
                    
                //     x.next();
                // }, 14000);
            }
            
            //this.initializeUser.initializeUser(obj, this.intent, this.activate, this.router);
            

            
             
            // this.edit.edu.updateResume(document.getElementById("education-button"))
            // this.edit.achieve.updateResume(document.getElementById("achievement-button"))
            // this.edit.exp.updateResume(document.getElementById("experience-button"))
            // this.edit.vol.updateResume(document.getElementById("volunteer-button"))
            
        }
    }

    next(){
        if(this.errorMessage==null){
            this.collectInfoOn = false;
            this.uploadImageOn = true;
        }
        
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
