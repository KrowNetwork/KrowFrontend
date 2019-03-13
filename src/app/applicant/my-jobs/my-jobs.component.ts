import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {CustomHttpService} from '../../shared/service/custom-http.service';
import {HttpErrorResponse} from '@angular/common/http';
@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css']
})
export class MyJobsComponent implements OnInit {
  id:string;
  jobList = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public http: CustomHttpService,
  ) { 
    this.id = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
  }

  ngOnInit() {
    this.getApplicantInfo();
  }

  getApplicantInfo(){
    var url = "http://18.220.46.51:3000/api/Applicant/" + this.id;

    this.http.get(url).subscribe(
      (data:any) => {

        console.log('applicant', data)

        if(data.requestedJobs != null && data.requestedJobs != undefined && data.requestedJobs != ""){
          data.requestedJobs.forEach(job => {
            var jobId = job.split('#')[1];
            var url = "http://18.220.46.51:3000/api/Job/" + jobId;
            this.http.get(url).subscribe(
              (data: any) => {
                console.log('job', data)
                if (!data.hasOwnProperty('error')) {
                  data.imgURL = "https://krow-network-profile-pics.s3.us-east-2.amazonaws.com/pics/" + data.employerID +".png"
                  var days = Math.round(Math.abs((new Date(data.created).getTime() - new Date().getTime())/(24*60*60*1000)));
                  if(days === 0){
                    data.dayString = 'Today';
                  } else if( days == 1){
                    data.dayString = '1 Day Ago';
                  } else {
                    data.dayString = days + ' Days Ago';
                  }

                  data.status = "Pending"
      
                  if(data.tags.length === 0){
                    data.tags = 'No Tags'
                  }
      
                  // if(data.paymentType === "ONETIME") {
                  //   data.pay = "$"+ data.payment;
                  // } else if(data.paymentType === "DAILY") {
                  //   data.pay = "$"+ data.payment + "/day";
                  // } else if(data.paymentType === "HOURLY") {
                  //   data.pay = "$"+ data.payment + "/hour";
                  // } else if(data.paymentType === "WEEKLY") {
                  //   data.pay = "$"+ data.payment + "/week";
                  // } else if(data.paymentType === "BIWEEKLY") {
                  //   data.pay = "$"+ data.payment + "/2 weeks";
                  // } else if(data.paymentType === "MONTHLY") {
                  //   data.pay = "$"+ data.payment + "/month";
                  // } else if(data.paymentType === "OTHER") {
                  //   data.pay = "other";
                  // } else if(data.paymentType === "CONTRACT") {
                  //   data.pay = "contract";
                  // } 
                
                  this.jobList.push(data);
        
                }
              });
          });
       }

       if(data.hireRequests != null && data.hireRequests != undefined && data.hireRequests != ""){
        data.hireRequests.forEach(job => {
          var jobId = job.split('#')[1];
          var url = "http://18.220.46.51:3000/api/Job/" + jobId;
          this.http.get(url).subscribe(
            (data: any) => {
              console.log('job', data)
              if (!data.hasOwnProperty('error')) {
                data.imgURL = "https://krow-network-profile-pics.s3.us-east-2.amazonaws.com/pics/" + data.employerID +".png"
                var days = Math.round(Math.abs((new Date(data.created).getTime() - new Date().getTime())/(24*60*60*1000)));
                if(days === 0){
                  data.dayString = 'Today';
                } else if( days == 1){
                  data.dayString = '1 Day Ago';
                } else {
                  data.dayString = days + ' Days Ago';
                }

                data.status = "Accept Job"
    
                if(data.tags.length === 0){
                  data.tags = 'No Tags'
                }
    
                // if(data.paymentType === "ONETIME") {
                //   data.pay = "$"+ data.payment;
                // } else if(data.paymentType === "DAILY") {
                //   data.pay = "$"+ data.payment + "/day";
                // } else if(data.paymentType === "HOURLY") {
                //   data.pay = "$"+ data.payment + "/hour";
                // } else if(data.paymentType === "WEEKLY") {
                //   data.pay = "$"+ data.payment + "/week";
                // } else if(data.paymentType === "BIWEEKLY") {
                //   data.pay = "$"+ data.payment + "/2 weeks";
                // } else if(data.paymentType === "MONTHLY") {
                //   data.pay = "$"+ data.payment + "/month";
                // } else if(data.paymentType === "OTHER") {
                //   data.pay = "other";
                // } else if(data.paymentType === "CONTRACT") {
                //   data.pay = "contract";
                // } 
              
                this.jobList.push(data);
      
              }
            });
        });
     }

      })
  }

  goToJobPage(jobID){
    this.router.navigate(['/job/info'], { queryParams: { jobID: jobID } })
  }

}
