import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { S3Service } from "../../shared/service/s3.service"
import { FormControl, FormGroup } from '@angular/forms';
import { CustomHttpService } from '../../shared/service/custom-http.service';

@Component({
  selector: 'app-new-manage-jobs',
  templateUrl: './new-manage-jobs.component.html',
  styleUrls: ['./new-manage-jobs.component.css']
})
export class NewManageJobsComponent implements OnInit {

  token = ""
  user: string;
  id: string;
  owner= false;
  forceLogin=false;
  curr_emp = false;

  company: string;
  location: string;
  description: string;
  year: string;
  phoneNumber: string;
  email: string;
  website: string;
  facebook: string;
  twitter: string;
  linkedin: string;

  size: number;
  jobType: number;
  numberOfJobs: number;
  keywords = [];
  availableJobs = [];
  companySize: string;
  companyJobType: string;

  jobList = [];

  constructor(
    private router: Router,
    public s3service: S3Service,
    public http: CustomHttpService,
  ) { 
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    this.token = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt." + this.user + ".accessToken")
    console.log(this.router.url.split("/"))
    if (this.router.url.split("/")[3] != undefined) {
      this.id = this.router.url.split("/")[3]
      this.owner = false 
      this.forceLogin = false
      if (sessionStorage.getItem("accountType") == "employer") {
        this.curr_emp = true
      }
    } else {
      this.id = this.user
      this.owner = true
      // this.userService.isAuthenticated(this);
    }
    // console.log("Applicant Component: constructor");
  }

  ngOnInit() {
    this.getEmployerInfo();
  }

  getEmployerInfo(){
    var url = "http://18.220.46.51:3000/api/Employer/" + this.user;
    // Get Data
    this.http.get(url).subscribe(
      data => {

        // console.log('data back', data)
        // Display data fetched from API
        this.company = data["employerName"];
        this.description = data["description"];
        this.size = data["size"];
        this.jobType = data["jobType"];
        this.year = data["year"];
        this.keywords = data["keyWords"]
        this.location = data["location"]
        this.phoneNumber = data["phoneNumber"];
        this.email = data["email"];
        this.availableJobs = data["availableJobs"];
        // Split url links
        for (var i = 0; i < data["links"].length; i++) {
          var curr = data["links"][i];
          if (curr["type"] == "FACEBOOK") {
            this.facebook = "https://" + curr["url"];
          }
          else if (curr["type"] == "TWITTER") {
            this.twitter = "https://" + curr["url"];
          }
          else if (curr["type"] == "LINKEDIN") {
            this.linkedin = "https://" + curr["url"];
          }
          else if (curr["type"] == "WEBSITE") {
            this.website = curr["url"];
          }
        }

        this.getJobs();

      }, // Catch Errors
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );

  }

  getJobs(){
    this.availableJobs.forEach((job) => {

      var jobId = job.split('#')[1];
      var url = "http://18.220.46.51:3000/api/Job/" + jobId;

      this.http.get(url).subscribe(
        (data: any) => {
          console.log('job', data)
          if(!data.hasOwnProperty('error')){
            
            var days = Math.round(Math.abs((new Date(data.created).getTime() - new Date().getTime())/(24*60*60*1000)));

            if(days === 0){
              data.dayString = 'Today';
            } else if( days == 1){
              data.dayString = '1 Day Ago';
            } else {
              data.dayString = days + ' Days Ago';
            }

            if(data.tags.length === 0){
              data.tags = 'No Tags'
            }

            if(data.expiration === 1){
              data.expire = 7;
            } else if(data.expiration === 2){
              data.expire = 14;
            } else if(data.expiration === 3){
              data.expire = 28;
            } else {
              data.expire = -1;
            }

            if(days > data.expire){
              data.status = "Expired"
            } else {
              data.status = "Active"
            }

            if(data.applicantRequests != null && data.applicantRequests != undefined && data.applicantRequests != ""){
              data.applied = data.applicantRequests.length;
            } else {
              data.applied = 0;
            }

            if(data.paymentType === "ONETIME") {
              data.pay = "$"+ data.payment;
            } else if(data.paymentType === "DAILY") {
              data.pay = "$"+ data.payment + "/day";
            } else if(data.paymentType === "HOURLY") {
              data.pay = "$"+ data.payment + "/hour";
            } else if(data.paymentType === "WEEKLY") {
              data.pay = "$"+ data.payment + "/week";
            } else if(data.paymentType === "BIWEEKLY") {
              data.pay = "$"+ data.payment + "/2 weeks";
            } else if(data.paymentType === "MONTHLY") {
              data.pay = "$"+ data.payment + "/month";
            } else if(data.paymentType === "OTHER") {
              data.pay = "other";
            } else if(data.paymentType === "CONTRACT") {
              data.pay = "contract";
            } 
          
          this.jobList.push(data);
          }
      });
    });
  }

  goToJobPage(jobID){
    this.router.navigate(['/job/info'], { queryParams: { jobID: jobID } })
  }

  goToCandidateListPage(jobID){
    this.router.navigate(['/employer/new-candidate-list'], { queryParams: { jobID: jobID } })
  }


}
