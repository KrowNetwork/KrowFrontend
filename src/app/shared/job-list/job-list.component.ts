import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { S3Service } from "../../shared/service/s3.service"
import { CustomHttpService } from '../../shared/service/custom-http.service';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobList = [];
  term = "";
  constructor(
    private router: Router,
    public s3service: S3Service,
    public http: CustomHttpService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.term = params['search'];
      console.log('search term', this.term);

      if(this.term !== ""){
        this.getSearchQueryData()
      }
    });

    
  }

  getSearchQueryData(){
    // console.log("Loading new data for query: " + this.searchUserQuery);
    // Submit string to server to get a list of job ids
    console.log('terms', this.term)
    var filter = {"where": {"title" : this.term}}

    // this.http2.get(url, {params: {"url": "http://18.220.46.51:4200/search?key'=42fc1e42-5eb8-4a8f-8904-7c58529f0f58&term=" +  this.term + "&location=" + location}}).subscribe(
    this.http.get("http://18.220.46.51:3000/api/Job?filter=" + JSON.stringify(filter)).subscribe(
      (data: any) => {
        console.log('search',data);

        data.forEach(job => {
          job.imgURL = "https://krow-network-profile-pics.s3.us-east-2.amazonaws.com/pics/" + job.employerID+".png"

          if (!job.hasOwnProperty('error')) {
            var days = Math.round(Math.abs((new Date(job.created).getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000)));

            if (days === 0) {
              job.dayString = 'Today';
            } else if (days == 1) {
              job.dayString = '1 Day Ago';
            } else {
              job.dayString = days + ' Days Ago';
            }

            if (job.tags.length === 0) {
              job.tags = 'No Tags'
            }

            if (job.paymentType === "ONETIME") {
              job.pay = "$" + job.payment;
            } else if (job.paymentType === "DAILY") {
              job.pay = "$" + job.payment + "/day";
            } else if (job.paymentType === "HOURLY") {
              job.pay = "$" + job.payment + "/hour";
            } else if (job.paymentType === "WEEKLY") {
              job.pay = "$" + job.payment + "/week";
            } else if (job.paymentType === "BIWEEKLY") {
              job.pay = "$" + job.payment + "/2 weeks";
            } else if (job.paymentType === "MONTHLY") {
              job.pay = "$" + job.payment + "/month";
            } else if (job.paymentType === "OTHER") {
              job.pay = "other";
            } else if (job.paymentType === "CONTRACT") {
              job.pay = "contract";
            }
          }
          this.jobList.push(job);
        });
        
      }, // Catch Errors  
      
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
          console.log(err);
        }
        console.log(err)
      }
    );
  }

  goToJobPage(jobID){
    this.router.navigate(['/job/info'], { queryParams: { jobID: jobID } })
  }

}
