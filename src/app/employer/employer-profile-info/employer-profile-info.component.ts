import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { S3Service } from "../../shared/service/s3.service"
import { FormControl, FormGroup } from '@angular/forms';
import { CustomHttpService } from '../../shared/service/custom-http.service';

@Component({
  selector: 'app-employer-profile-info',
  templateUrl: './employer-profile-info.component.html',
  styleUrls: ['./employer-profile-info.component.css']
})
export class EmployerProfileInfoComponent implements OnInit {

  imgURL: String;
  user: string;
  id: string;

  companyForm: FormGroup;
  contactForm: FormGroup;
  socialForm: FormGroup;

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
  companySize: string;
  companyJobType: string;

  token = ""

  owner= false;
  forceLogin=false;
  curr_emp = false;

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
    this.imgURL = "https://krow-network-profile-pics.s3.us-east-2.amazonaws.com/pics/" + this.id +".png"

    var url = "http://18.216.142.100:3000/api/Employer/" + this.user;

      // Get Data
      this.http.get(url).subscribe(
        data => {

          console.log('data back', data)
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

          if(this.size == 0){
            this.companySize = "Not Set";
          } else if(this.size == 0){
            this.companySize = "1-10"
          } else if(this.size == 1){
            this.companySize = "11-100"
          } else if(this.size == 2){
            this.companySize = "101-1000"
          } else if(this.size == 3){
            this.companySize = "1001-5000"
          } else if(this.size == 4){
            this.companySize = "5001-10000"
          } else {
            this.companySize = "10000+"
          } 

          if (this.jobType == 0){
            this.companyJobType = "Not Set"
          } else if(this.jobType == 1){
            this.companyJobType = "Full Time"
          } else if(this.jobType == 1){
            this.companyJobType = "Part Time"
          } else if(this.jobType == 1){
            this.companyJobType = "Freelance"
          } else {
            this.companyJobType = "Other"
          } 

        }, // Catch Errors
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
        }
      );

      this.getFolders().subscribe(async folders => {
        this.numberOfJobs = folders.length;
      })
    
  }

  getFolders() {
    return this.http.rget("https://api.krownetwork.com/get-employer-folders?id=" + this.user + "&token=" + this.token).map(
      data => {
        //console.log(data["results"])
        return Array.from(new Set(data["results"]));
      }
    )
  }

}
