import { Component, OnInit, Input, Inject, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CreateUserService } from '../../service/create-user.service';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { log } from 'util';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { CustomHttpService } from '../../service/custom-http.service';
import { ItemType } from '../../shared/item-type-constructor';
import { EducationMainComponent } from '../../applicant/applicant-resume/resume-education/education-main.component';
import { ResumeVolunteerComponent } from '../../applicant/applicant-resume/resume-volunteer/resume-volunteer.component';
import { ResumeExperienceComponent } from '../../applicant/applicant-resume/resume-experience/resume-experience.component';
import { ResumeEducationComponent } from '../../applicant/applicant-resume/resume-education/resume-education.component';
import { ResumeAchievementsComponent } from '../../applicant/applicant-resume/resume-achievements/resume-achievements.component';
import { InternalFormsSharedModule } from '@angular/forms/src/directives';
import { InterfaceComponent } from '../../shared/interface-component.component';
import { VolunteerMainComponent } from '../../applicant/applicant-resume/resume-volunteer/volunteer-main.component';
import { ExperienceMainComponent } from '../../applicant/applicant-resume/resume-experience/experience-main.component';
import { v } from '@angular/core/src/render3';
var aws = require('aws-sdk');

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ ResumeVolunteerComponent, ResumeExperienceComponent, ResumeEducationComponent ]
})
export class EditComponent implements OnInit {
  @Input() isSignup: string = 'false';
  @ViewChild(ResumeEducationComponent) edu: ResumeEducationComponent;
  @ViewChild(ResumeVolunteerComponent) vol: ResumeVolunteerComponent;
  @ViewChild(ResumeAchievementsComponent) achieve: ResumeAchievementsComponent;
  @ViewChild(ResumeExperienceComponent) exp: ResumeExperienceComponent;
  
  constructor(
    public http: CustomHttpService,
    public http2: HttpClient,
    private createUser: CreateUserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private resumeVolunteer: ResumeVolunteerComponent,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {
    console.log("constructor created", this.isSignup)

  }
  
  
  user: string;
  first: string;
  second: string;
  bio: string;
  address: string;
  city: string;
  state: string;
  country: string;
  phoneNumber: string;
  email: string;
  urlFACEBOOK: string;
  urlTWITTER: string;
  urlLINKEDIN: string;
  urlWEBSITE: string;
  disabled = undefined;
  id: string;
  lockResume = false;
  userType: string;
  profileType: string;
  inProgressJobs = [];
  canDelete = false;
  showDel = false;

  // updateName = false;
  // updateBio = false;
  // updateAddress = false;


  updateInfo(children) {
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    // Test Id, get from login in the future



    // Url to API
    var url = "http://18.220.46.51:3000/api/" + this.profileType + "/" + this.user;

    // Get current Data
    this.http.get(url).subscribe(
      data => {
        var change = false;
        for (var i = 0; i < children.length; i++) {
          var event = children[i].children[1].children[0];

          // Get element id that triggered event
          var valueToChange = ""
          var elValue = ""
          // console.log(event)
          // console.log(event.attributes)
          // console.log(this.bio)
          if (event.value === undefined) {
            valueToChange = "bio"
            elValue = this.bio
          } else {

            valueToChange = event.attributes[1].value;
            elValue = event.value;
            var found = true
          }

          // Value of element



          // Check if values match, in which case, do nothing

          if (valueToChange == "bio") {
            if (data["resume"]["biography"] != elValue) {
              data["resume"]["biography"] = elValue
              change = true;
            }
          } else if (data[valueToChange] != elValue) {


            // Check for empty entry


            // Check if url, in which case, map as json
            if (valueToChange.slice(0, 3) == "url") {
              var found = false;
              // Loop through current links looking for a match to update
              for (var k = 0; k < data["links"].length; k++) {
                if (data["links"][k]["type"][0] == valueToChange[3]) {
                  if (data["links"][k]["url"] != elValue) {
                    data["links"][k]["url"] = elValue;
                    change = true;
                  }
                  found = true;
                }
              }
              // If no matches are found, create new instance
              if (found == false) {
                var type = valueToChange.slice(3);
                data["links"].push(
                  {
                    $class: "network.krow.participants.Link",
                    url: elValue,
                    type: type,
                  }
                )
                change = true;
              }
            }
            else {
              // Change data value
              data[valueToChange] = elValue;
              console.log(data[valueToChange])
              change = true;
            }
          }
        }

        if (change != false) {

          // Get timestamp and change data timestamp
          var timestamp = new Date();
          data["lastUpdated"] = timestamp;

          // Update entry
          console.log(data)
          this.http.put(url, data).subscribe(
            data => {
              console.log(data)
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
      }, // Catch Errors
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // console.log("Client-side error occured.");
        } else {
          // console.log("Server-side error occured.");
        }
        // console.log(err)
      }
    );
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 500);
    });
  };

  async buttonPressed(event) {
    event.target.attributes[2].value = true;
    event.target.style = "float:right; background-color:gray; border-color: gray; opacity=0.8";
    var children = event.target.closest("form").children[0].children;
    var result = await this.updateInfo(children);
    event.target.style = "background-color: #fb236a; border-color: #fb236a; float: right";
    event.target.closest("div").style = "display: none;";
    event.target.attributes[2].value = false;
  }

  changeHandler(event) {
    event.target.closest("form").children[1].style = "display:show";
  }

  ngOnInit() {
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    this.id = this.router.url.split("/")[3]
    if (this.id === undefined) {
      this.id = this.user
      this.lockResume = true
    }

    var type = sessionStorage.getItem("accountType")
    if (type == "applicant") {
      this.profileType = "Applicant"
      this.userType = "applicant"
    } else {
      this.profileType = "Employer"
    }
    // // console.log(this.id)
    // // console.log("x")
    // Test Id, get from login in the future
    var hidden = document.getElementById("test-ID");
    var profileType = hidden.attributes["value"].value;
    if (sessionStorage.getItem("accountType") == "employer") {


      // Set Company/Name 
      document.getElementById("app-responsive-component-profile").innerText = "Company";

      // Change First input value, id, title to match employer name
      var employerName = document.getElementById("app-responsive-component-profile-first");
      employerName.children[0].innerHTML = "Company Name";
      employerName.children[1].children[0].attributes[2].value = "Company Name";
      employerName.children[1].children[0].attributes[1].value = "employerName";

      // Change Second input value, id, title to match description
      var description = document.getElementById("app-responsive-component-profile-second");
      description.children[0].innerHTML = "Description";

      // var ta = document.getElementsByClassName("ta")[0]
      // // console.log(ta)
      // ta.setAttribute("placeholder", "Company Description")
      description.children[1].children[0].setAttribute("type", "textarea")
      description.children[1].children[0].attributes[2].value = "Company Description";
      description.children[1].children[0].attributes[1].value = "description";

      var url = "http://18.220.46.51:3000/api/Employer/" + this.user;

      // Get Data
      this.http.get(url).subscribe(
        data => {
          // Display data fetched from API
          this.first = data["employerName"];
          this.second = data["description"];
          this.address = data["address"];
          this.city = data["city"];
          this.state = data["state"];
          this.country = data["country"];
          this.phoneNumber = data["phoneNumber"];
          this.email = data["email"];

          this.inProgressJobs = data["InprogressJobs"]
          if (this.inProgressJobs.length == 0 || this.inProgressJobs === undefined) {
            this.canDelete = true
          }

          // Split url links
          for (var i = 0; i < data["links"].length; i++) {
            var curr = data["links"][i];
            if (curr["type"] == "FACEBOOK") {
              this.urlFACEBOOK = curr["url"];
            }
            else if (curr["type"] == "TWITTER") {
              this.urlTWITTER = curr["url"];
            }
            else if (curr["type"] == "LINKEDIN") {
              this.urlLINKEDIN = curr["url"];
            }
            else if (curr["type"] == "WEBSITE") {
              this.urlWEBSITE = curr["url"];
            }
          }
        }, // Catch Errors
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // console.log("Client-side error occured.");
          } else {
            // console.log("Server-side error occured.");
          }
        }
      );
    }
    else if (sessionStorage.getItem("accountType") == "applicant") {

      if (this.user == this.id || this.id === undefined) {
        // if (sessionStorage.getItem("view") !== undefined && sessionStorage.getItem("view") == "potApplicant") {
        // this.id = this.user
        this.disabled = false
        this.id = this.user
        this.lockResume = true
      } else {
        this.disabled = true
      }

      // Set Company/Name 
      document.getElementById("app-responsive-component-profile").innerText = "Name";

      // Change First input value, id, title to match first name
      var firstName = document.getElementById("app-responsive-component-profile-first");
      firstName.children[0].innerHTML = "First";
      firstName.children[1].children[0].setAttribute("placeholder", "Will")// = "Will";
      firstName.children[1].children[0].attributes[1].value = "firstName";

      // Change Second input value, id, title to match last name
      var lastName = document.getElementById("app-responsive-component-profile-second");
      lastName.attributes[1].value = "col-lg-6";
      lastName.children[0].innerHTML = "Last";
      lastName.children[1].children[0].attributes[2].value = "Smith";
      lastName.children[1].children[0].attributes[1].value = "lastName";

      var url = "http://18.220.46.51:3000/api/Applicant/" + this.id;

      // Get Data
      this.http.get(url).subscribe(
        data => {
          // Display data fetched from API
          this.first = data["firstName"];
          this.second = data["lastName"];
          this.bio = data["resume"]["biography"]
          // console.log(this.bio)
          this.address = data["address"];
          this.city = data["city"];
          this.state = data["state"];
          this.country = data["country"];
          this.phoneNumber = data["phoneNumber"];
          this.email = data["email"];
          this.inProgressJobs = data["InprogressJobs"]

          if (this.inProgressJobs === undefined || this.inProgressJobs.length == 0) {
            this.canDelete = true
          }

          // console.log(this.canDelete)

          // Split url links
          for (var i = 0; i < data["links"].length; i++) {
            var curr = data["links"][i];
            if (curr["type"] == "FACEBOOK") {
              this.urlFACEBOOK = curr["url"];
            }
            else if (curr["type"] == "TWITTER") {
              this.urlTWITTER = curr["url"];
            }
            else if (curr["type"] == "LINKEDIN") {
              this.urlLINKEDIN = curr["url"];
            }
            else if (curr["type"] == "WEBSITE") {
              this.urlWEBSITE = curr["url"];
            }
          }
        }, // Catch Errors
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // console.log("Client-side error occured.");
          } else {
            // console.log("Server-side error occured.");
          }
        }
      );
    }

  }
  is_disabled() {
    return this.disabled
  }

  viewUserResume() {
    this.router.navigate(["applicant/applicant-resume/" + this.id])
  }

  showDelete() {
    this.showDel = true
  }

  delete() {
    var i = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
    this.http2.post("https://api.krownetwork.com/delete?token=" + localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt." + i + ".accessToken") + "&id=" + i, { id: i }).subscribe(
      data => {
        // console.log(data)
      }, // Catch Errors
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // console.log("Client-side error occured.");
        } else {
          // console.log("Server-side error occured.");
        }
        // console.log(err)
      }
    );
    this.router.navigate(["/logout"])
  }

  continue(err, data) {
    console.log(err)
  }



  requestToHire() {
    // // console.log(this.profileType)
    var url = "http://18.220.46.51:3000/api/RequestHireApplicant"
    // console.log(this.id )
    // var applicantUrl = "http://18.220.46.51:3000/api/Applicant/" + this.id 
    // var jobUrl = "http://18.220.46.51:3000/api/Job/" + sessionStorage.getItem("fromJob")
    // var employerUrl = "http://18.220.46.51:3000/api/Employer/" + localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")

    // // console.log(applicantUrl)
    // // console.log(jobUrl)
    // // console.log(employerUrl)



    var data =
    {
      "applicant": this.id,
      "employer": localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"),
      "job": sessionStorage.getItem("fromJob")
    }

    // jobData.tags = jobData.toString().split(",")


    this.http.post(url, data).subscribe(
      data => {
        alert("Success!")
        this.http.get("http://18.220.46.51:3000/api/Employer/" + localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")).subscribe(
          emp_data => {
            this.http.get("http://18.220.46.51:3000/api/Job/" + sessionStorage.getItem("fromJob")).subscribe(
              job_data => {
                var mailData = {
                  to: this.email,
                  comp_name: emp_data["employerName"],
                  job_name: job_data["title"]
                }
                this.http.post("https://api.krownetwork.com/hire-request", mailData).subscribe(
                  data => {
                    alert("The applicant has been notified!")
                  },
                  (err: HttpErrorResponse) => {
                    if (err.error instanceof Error) {
                      // console.log("Client-side error occured.");
                    } else {
                      // console.log("Server-side error occured.");
                      // console.log(err);
                      alert(err)
                    }
                  }) // closing email
              },
              (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                  // console.log("Client-side error occured.");
                } else {
                  // console.log("Server-side error occured.");
                  // console.log(err);
                  alert(err)
                }
              }) //closing job_data
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              // console.log("Client-side error occured.");
            } else {
              // console.log("Server-side error occured.");
              // console.log(err);
              alert(err)
            }
          }) // closing emp_data
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // console.log("Client-side error occured.");
        } else {
          // console.log("Server-side error occured.");
          // console.log(err);
          alert("You have already requested to hire this applicant")
        }
      }

    )




    //           }
    //       }
    //   }
    // )
    // // console.log(data)

  }

  uploadAndParseResume(event) {
    let file = event.target.files
    const formData: FormData = new FormData();
    formData.append('resumeFile', file[0]);

    this.http2.post('http://localhost:3000/resumeParse', formData).subscribe(data => {
      console.log('parsed resume', data)
      console.log(document.getElementById("updateName"));
      data = data['Krow']
      if (data['basics']['name'] != null || data['basics']['name'] != undefined){
          if(data['basics']['name']['firstName'] != null || data['basics']['name']['firstName'] != undefined){
            this.first = data['basics']['name']['firstName']
            document.getElementById("updateName").setAttribute("style","display: show");
          }

          if(data['basics']['name']['surname'] != null || data['basics']['name']['surname'] != undefined){
            this.second = data['basics']['name']['surname']
            document.getElementById("updateName").setAttribute("style","display: show");
          }
      }
      if (data['summary'] !== null || data['summary'] !== undefined) {
        this.bio = data['summary'][0][Object.keys(data['summary'][0])[0]].trim();
        document.getElementById("updateBio").setAttribute("style","display: show");
      }

      if (data['phone'] !== null || data['phone'] !== undefined) {
        this.phoneNumber = data['basics']['phone'][0]
        document.getElementById("updateSocial").setAttribute("style","display: show");
      }

      if (data['email'] !== null || data['email'] !== undefined) {
        this.email = data['basics']['email'][0]
        document.getElementById("updateSocial").setAttribute("style","display: show");
      }

          if(data['basics']['address'] != null || data['basics']['address'] != undefined){
            let str = data['basics']['address'][0].split(',');
            if(str[0] != null || str[0] != undefined){
              this.address = str[0];
              document.getElementById("updateAddress").setAttribute("style","display: show");
            }
            if(str[1] != null || str[1] != undefined){
              this.city = str[1];
              document.getElementById("updateAddress").setAttribute("style","display: show");
            }
            if(str[2] != null || str[2] != undefined){
              this.state = str[2];
              document.getElementById("updateAddress").setAttribute("style","display: show");
            }
          }
      // }

      if(data['education_and_training'] != null || data['education_and_training'] != undefined){
          for(let i = 0; i < data['education_and_training'].length; i++ ){
            for(let j = 0; j < Object.keys(data['education_and_training'][i]).length; j ++){
              
            let edu_info = data['education_and_training'][i][Object.keys(data['education_and_training'][i])[j]].split(',');
            let educations = new Array<ItemType>();
            educations.push(
              new ItemType(EducationMainComponent, {
                title: edu_info[0],
                description: edu_info[1],
                startDate: "0000-00",
                endDate: "0000-00",
              })
            );

            this.edu.loadComponent(educations);
            document.getElementById("education-button").setAttribute("style","display: show");
            
          }
        }
      } 

      if(data['extracurricular'] != null || data['extracurricular'] != undefined){
        for(let i = 0; i < data['extracurricular'].length; i++ ){
          if(data['extracurricular'][i]["Volunteer Experience"] != null || data['extracurricular'][i]["Volunteer Experience"] != undefined ){
            let vol_info = data['extracurricular'][i]["Volunteer Experience"].split(',');
            let volunteers = new Array<ItemType>();
            volunteers.push(
              new ItemType(VolunteerMainComponent, {
                title: vol_info[0],
                description: vol_info[1],
                startDate: "0000-00",
                endDate: "0000-00",
              })
            );

            this.vol.loadComponent(volunteers);
            document.getElementById("volunteers-button").setAttribute("style","display: show");
          }
        }
      }

      if(data['work_experience'] != null || data['work_experience'] != undefined){
        for(let i = 0; i < data['work_experience'].length; i++ ){

          var startDate = null;
          var endDate = null;
          var description = null;
          var position = null;
          var title = null;

          if(data['work_experience'][i]["date_start"] != null || data['work_experience'][i]["date_start"] != undefined){
            var dates = data['work_experience'][i]["date_start"].split(/[ ,]+/);
            switch(dates[0].toUpperCase()){
              case "JAN" || "JANUARY":
                startDate = dates[1] + "-01" 
              case "FEB" || "FEBRUARY":
                startDate = dates[1] + "-02"
              case "MAR" || "MARCH":
                startDate = dates[1] + "-03" 
              case "APR" || "APRIL":
                startDate = dates[1] + "-04" 
              case "MAY" || "MAY":
                startDate = dates[1] + "-05" 
              case "JUN" || "JUN":
                startDate = dates[1] + "-06" 
              case "JUL" || "JULY":
                startDate = dates[1] + "-07" 
              case "AUG" || "AUGUST":
                startDate = dates[1] + "-08" 
              case "SEP" || "SEPTEMBER":
                startDate = dates[1] + "-09" 
              case "OCT" || "OCTOBER":
                startDate = dates[1] + "-10" 
              case "NOV" || "NOVEMBER":
                startDate = dates[1] + "-11" 
              case "DEC" || "DECEMBER":
                startDate = dates[1] + "-12" 

            }
          }

          if(data['work_experience'][i]["date_end"] != null || data['work_experience'][i]["date_end"] != undefined){
            var dates = data['work_experience'][i]["date_end"].split(/[ ,]+/);
            switch(dates[0].toUpperCase()){
              case "JAN" || "JANUARY":
                endDate = dates[1] + "-01" 
              case "FEB" || "FEBRUARY":
                endDate = dates[1] + "-02"
              case "MAR" || "MARCH":
                endDate = dates[1] + "-03" 
              case "APR" || "APRIL":
                endDate = dates[1] + "-04" 
              case "MAY" || "MAY":
                endDate = dates[1] + "-05" 
              case "JUN" || "JUN":
                endDate = dates[1] + "-06" 
              case "JUL" || "JULY":
                endDate = dates[1] + "-07" 
              case "AUG" || "AUGUST":
                endDate = dates[1] + "-08" 
              case "SEP" || "SEPTEMBER":
                endDate = dates[1] + "-09" 
              case "OCT" || "OCTOBER":
                endDate = dates[1] + "-10" 
              case "NOV" || "NOVEMBER":
                endDate = dates[1] + "-11" 
              case "DEC" || "DECEMBER":
                endDate = dates[1] + "-12" 

            }
          }

          if(data['work_experience'][i]["jobtitle"] != null || data['work_experience'][i]["jobtitle"] != undefined){
            position = data['work_experience'][i]["jobtitle"];
          }

          if(data['work_experience'][i]["text"] != null || data['work_experience'][i]["text"] != undefined){
            description = data['work_experience'][i]["text"];
          }

          if(data['work_experience'][i]["organization"] != null || data['work_experience'][i]["organization"] != undefined){
            title = data['work_experience'][i]["organization"];
          }

          
            let experiences = new Array<ItemType>();
            experiences.push(
              new ItemType(ExperienceMainComponent, {
                type: "",
                position: position,
                title: title,
                description: description,
                startDate: startDate,
                endDate: endDate,
                verified: false,
                verifyID: this.exp.guid(),
                present: true,
                skills: [],
                fileName: null,
                fileUrl: null
              })
            );

            this.exp.loadComponent(experiences);
            document.getElementById("experience-button").setAttribute("style","display: show");
        }
      }


    })
  }
}
