import { Component, OnInit } from '@angular/core';
import { UserLoginService } from "../../service/user-login.service";
import { Router } from "@angular/router";
import { CustomHttpService } from '../../service/custom-http.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-delete-job',
  templateUrl: './admin-delete-job.component.html',
  styleUrls: ['./admin-delete-job.component.css']
})
export class AdminDeleteJobComponent implements OnInit {
  jobList = [];
  errorMessage: string;
  msg = undefined;

  show = "list"


  constructor(
    public http: CustomHttpService,
    public userService: UserLoginService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.userService.isAdmin(this);
    this.getJobs();
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn){
        this.router.navigate(['/admin-login']);
    }
  }

  async getJobs() {
    var url = "http://18.220.46.51:3000/api/Job/";

    await this.http.get(url).subscribe(
      async (data: any) => {

        console.log('data back', data)

        await data.forEach(async (job) => {
          job.imgURL = "https://krow-network-profile-pics.s3.us-east-2.amazonaws.com/pics/" + job.employerID+".png"

          if (!job.hasOwnProperty('error') && job.flags !== 16) {
            var days = await Math.round(Math.abs((new Date(job.created).getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000)));

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

            
            this.jobList.push(job);
            console.log('job', job)

          }
        });
      });
  }

  delete(jobID) {
    var url = "http://18.220.46.51:3000/api/DeleteJob"
    var data = {
      job: jobID
    }
    //this.msg = "Please wait"
    this.http.post(url, data).subscribe(
      data =>{
        //this.msg = "Deletion Successful"
        console.log(data);
        this.router.navigate(["/admin/home"])
       // location.reload();
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // console.log("Client-side error occured.");
      } else {
        // console.log("Server-side error occured.");
        // console.log(err);
      }
      //this.msg = "There was an error. Please try again"
    })
  }


}
