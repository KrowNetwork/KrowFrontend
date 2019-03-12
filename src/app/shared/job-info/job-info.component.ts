import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomHttpService } from '../../shared/service/custom-http.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.component.html',
  styleUrls: ['./job-info.component.css']
})
export class JobInfoComponent implements OnInit {

  imgURL: string;
  jobId: string;
  job: any;

  employerID: string;
  website: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  company: string;
  description: string;
  email: string;

  title:string;
  jobDescription: string;
  tags: any;
  pay: string;
  dateString: string;

  curr_emp =false;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public http: CustomHttpService,
  ) { }

  ngOnInit() {

    if (sessionStorage.getItem("accountType") == "employer") {
      this.curr_emp = true
    }

    this.jobId = this.route.snapshot.queryParams['jobID'];
    console.log(this.jobId)


    var url = "http://18.220.46.51:3000/api/Job/" + this.jobId;

      this.http.get(url).subscribe(
        (data: any) => {
          if(!data.hasOwnProperty('error')){
            var days = Math.round(Math.abs((new Date(data.created).getTime() - new Date().getTime())/(24*60*60*1000)));

            if(data.tags.length === 0){
              this.tags = 'No Tags'
            }

            this.title = data.title;
            this.jobDescription = data.description;
            this.employerID = data.employerID;

            var date = new Date(data.created);
            this.dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();

            if(data.paymentType === "ONETIME") {
              this.pay = "$"+ data.payment;
            } else if(data.paymentType === "DAILY") {
              this.pay = "$"+ data.payment + "/day";
            } else if(data.paymentType === "HOURLY") {
              this.pay = "$"+ data.payment + "/hour";
            } else if(data.paymentType === "WEEKLY") {
              this.pay = "$"+ data.payment + "/week";
            } else if(data.paymentType === "BIWEEKLY") {
              this.pay = "$"+ data.payment + "/2 weeks";
            } else if(data.paymentType === "MONTHLY") {
              this.pay = "$"+ data.payment + "/month";
            } else if(data.paymentType === "OTHER") {
              this.pay = "other";
            } else if(data.paymentType === "CONTRACT") {
              this.pay = "contract";
            } 

            this.getEmployerInfo();
          
          }
      });

     
  }

  getEmployerInfo(){
    this.imgURL = "https://krow-network-profile-pics.s3.us-east-2.amazonaws.com/pics/" + this.employerID +".png"
    var url = "http://18.220.46.51:3000/api/Employer/" + this.employerID;
    // Get Data
    this.http.get(url).subscribe(
      data => {

        console.log('data back', data)
        // Display data fetched from API
        this.company = data["employerName"];
        this.description = data["description"];
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

      }, // Catch Errors
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );

    // this.getFolders().subscribe(async folders => {
    //   this.numberOfJobs = folders.length;
    // })
  }

}
