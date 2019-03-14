import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  CreateUserService
} from '../../shared/service/create-user.service';
import {
  EditComponent
} from '../../applicant/edit/edit.component';
import {
  ResumeExperienceComponent
} from '../../applicant/applicant-resume/resume-experience/resume-experience.component'
import { CustomHttpService } from '../../shared/service/custom-http.service';
import { HttpErrorResponse } from '@angular/common/http';

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
    public http: CustomHttpService,
  ) {}

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

  async submitInfo() {
    console.log('edit', this.edit);
    var updateButton = document.getElementById("submitButton");

    if (!this.user || !this.intent) {
      this.errorMessage = "Something went wrong, please go back.";
      return;
    }
    if (this.intent == "Applicant" && (!this.first || !this.second)) {
      this.errorMessage = "First Name, Last Name and Email are required";
    } else if (this.intent == "Employer" && (!this.company || !this.bio)) {
      this.errorMessage = "Company Name, Description and Email are required";
    } else {
      this.errorMessage = null;
      if (this.intent == "Applicant") {
        var url = "http://18.220.46.51:3000/api/Applicant/" + this.user;

        let x = this;
        this.http.get(url).subscribe(
          data => {
            console.log('data', data)
            data['firstName'] = this.first || '';
            data['lastName'] = this.second || '';
            data['resume']['biography'] = this.bio || '';
            data['phoneNumber'] = this.phoneNumber || ''; 

            x.http.put(url, data).subscribe(
              data => {
                console.log(data)
                x.activate();
              }, // Catch Errors
              (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                  // console.log("Client-side error occured.");
                } else {
                  // console.log("Server-side error occured.");
                }
                console.log(err)
              }
            );
          }
        )
        
      } else {

        var url = "http://18.220.46.51:3000/api/Employer/" + this.user;

        let x = this;
        this.http.get(url).subscribe(
          data => {
            console.log('data', data)
            data['employerName'] = this.company || '';
            data['description'] = this.bio || '';
            data['phoneNumber'] = this.phoneNumber || ''; 

            x.http.put(url, data).subscribe(
              data => {
                console.log(data)
                x.activate();
              }, // Catch Errors
              (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                  // console.log("Client-side error occured.");
                } else {
                  // console.log("Server-side error occured.");
                }
                console.log(err)
              }
            );
          }
        )
        // await this.initializeUser.initializeUser(employerObj, this.intent, null, this.router);
        
      }

      //this.initializeUser.initializeUser(obj, this.intent, this.activate, this.router);

      // this.edit.edu.updateResume(document.getElementById("education-button"))
      // this.edit.achieve.updateResume(document.getElementById("achievement-button"))
      // this.edit.exp.updateResume(document.getElementById("experience-button"))
      // this.edit.vol.updateResume(document.getElementById("volunteer-button"))

    }
  }

  next() {
    if (this.errorMessage == null) {
      this.collectInfoOn = false;
      this.uploadImageOn = true;
    }

  }

  // activate(intent: string, user: string, router){
  //     // var path = "/" + intent;
  //     router.navigate(["/" + intent + "/profile-info"]);
  // }

  activate() {
    // var path = "/" + intent;
    this.router.navigate(["/" + this.intent.toLowerCase() + "/profile-info"]);
  }
}
