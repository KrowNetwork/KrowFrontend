import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
// import { CreateUserService } from '../../../service/create-user.service';
import { UserLoginService } from '../../../service/user-login.service';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-applicant-profile-info',
  templateUrl: './applicant-profile-info.component.html',
  styleUrls: ['./applicant-profile-info.component.css']
})
export class ApplicantProfileInfoPrivateComponent implements OnInit {

  // vars 
  user: string;
  first: string;
  last: string;
  name: string;
  bio: string;
  address: string;
  city: string;
  state: string; 
  country: string;
  phone: string;
  email: string; 
  urlFACEBOOK: string;
  urlTWITTER: string;
  urlLINKEDIN: string;
  urlWEBSITE: string;

  education = [];
  experience = [];
  cityState: string;

  in_progress_jobs = [];
  completed_jobs = [];
  terminated_jobs = [];



  constructor(
    public http: HttpClient,
    private userService: UserLoginService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    this.userService.isAuthenticated(this);
    console.log("Applicant Component: constructor");
    
   }

  
  ngOnInit() {
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    
    this.http.get("http://18.220.46.51:3000/api/Applicant/" + this.user).subscribe(
      data => {
        console.log(data)
        this.first = data["firstName"]
        this.last = data["lastName"]
        this.name = this.first + " " + this.last

        if (data["email"] == "") {
          this.email = "No Email Provided"
        } else {
          this.email = data["email"]
        }

        if (data["phoneNumber"] == "") {
          this.phone = "No Phone Number Provided"
        } else {
          this.phone = data["phoneNumber"]
        }

        if (data["resume"]["biography"] == "") {
          this.bio = "No Bio Provided"
        } else {
          this.bio = data["resume"]["biography"]
        }

        this.cityState = data["city"] + ", " + data["state"]

        for(var i = 0; i < data["links"].length; i++){
          var curr = data["links"][i];
          if(curr["type"] == "FACEBOOK"){
            this.urlFACEBOOK = curr["url"];
          }
          else if(curr["type"] == "TWITTER"){
            this.urlTWITTER = curr["url"];
          }
          else if(curr["type"] == "LINKEDIN"){
            this.urlLINKEDIN = curr["url"];
          }
          else if(curr["type"] == "WEBSITE"){
            this.urlWEBSITE = curr["url"];
          }
        }


        if (data["resume"]["education"].length == 0 || data["resume"]["education"] === undefined) {
          this.education = [{
            title: "None",
            desc: "None",
            startDate: "Never",
            endDate: "Never"
          }]

        } else {
          this.education = []
          for (var i = 0; i < data["resume"]["education"].length; i ++) {
            var element = data["resume"]["education"][i]
            element["startDate"] = new Date(element["startDate"])
            element["startDate"] = (element["startDate"].getMonth().toString() + 1) + '/' + element["startDate"].getDate().toString() + '/' +  element["startDate"].getFullYear().toString()
            
            element["endDate"] = new Date(element["endDate"])
            element["endDate"] = (element["endDate"].getMonth().toString() + 1) + '/' + element["endDate"].getDate().toString() + '/' +  element["endDate"].getFullYear().toString()
            this.education.push(element)
          }

        }


        if (data["resume"]["experience"].length == 0 || data["resume"]["experience"] === undefined) {
          this.experience = [{
            title: "None",
            desc: "None",
            startDate: "Never",
            endDate: "Never"
          }]

        } else {
          this.experience = []
          for (var i = 0; i < data["resume"]["experience"].length; i ++) {
            var element = data["resume"]["experience"][i]
            element["startDate"] = new Date(element["startDate"])
            element["startDate"] = (element["startDate"].getMonth().toString() + 1) + '/' + element["startDate"].getDate().toString() + '/' +  element["startDate"].getFullYear().toString()
            
            element["endDate"] = new Date(element["endDate"])
            element["endDate"] = (element["endDate"].getMonth().toString().toString() + 1) + '/' + element["endDate"].getDate().toString() + '/' +  element["endDate"].getFullYear().toString()
            this.experience.push(element)
          }

          // JOBS

          // in progress
          for (var i = 0; i < data["inprogressJobs"].length; i++){

            var id = data["inprogressJobs"][i].split("#")[1].toString()
            var n_url = "http://18.220.46.51:3000/api/Job/" + id 
            this.http.get(n_url).subscribe(
              n_data => {
                var start = new Date(n_data["startDate"])
                var nstart = (start.getMonth() + 1).toString() + '/' + start.getDate().toString() + '/' +  start.getFullYear().toString()
                this.in_progress_jobs.push(
                  {
                    title: n_data["title"],
                    jobID: n_data["jobID"],
                    startDate: nstart
                  }
                  
                )
                
              })
          }

          // completed
          for (var i = 0; i < data["completedJobs"].length; i++){

            var id = data["completedJobs"][i].split("#")[1].toString()
            var n_url = "http://18.220.46.51:3000/api/Job/" + id 
            this.http.get(n_url).subscribe(
              n_data => {
                var start = new Date(n_data["startDate"])
                var end = new Date(n_data["endDate"])
                var nstart = (start.getMonth() + 1).toString() + '/' + start.getDate().toString() + '/' +  start.getFullYear().toString()
                var nend = (end.getMonth() + 1).toString() + '/' + end.getDate().toString() + '/' +  end.getFullYear().toString()
                this.completed_jobs.push(
                  {
                    title: n_data["title"],
                    jobID: n_data["jobID"],
                    startDate: nstart,
                    endDate: nend
                  }
                  
                )
                
              })
          }

          // terminated
          for (var i = 0; i < data["terminatedJobs"].length; i++){

            var id = data["terminatedJobs"][i].split("#")[1].toString()
            var n_url = "http://18.220.46.51:3000/api/Job/" + id 
            this.http.get(n_url).subscribe(
              n_data => {
                var start = new Date(n_data["startDate"])
                var end = new Date(n_data["endDate"])
                var nstart = (start.getMonth() + 1) + '/' + start.getDate() + '/' +  start.getFullYear()
                var nend = (end.getMonth() + 1) + '/' + end.getDate() + '/' +  end.getFullYear()
                this.terminated_jobs.push(
                  {
                    title: n_data["title"],
                    jobID: n_data["jobID"],
                    startDate: nstart,
                    endDate: nend
                  }
                  
                )
                
              })
          }

          // console.log(this.experience)
        }
      }
    )
  
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn) {
      sessionStorage.setItem("redirectBack", this.router.url)
        this.router.navigate(['/login']);
    }
}

}
