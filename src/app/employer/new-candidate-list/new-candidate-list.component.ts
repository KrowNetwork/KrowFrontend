import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {CustomHttpService} from '../../shared/service/custom-http.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-new-candidate-list',
  templateUrl: './new-candidate-list.component.html',
  styleUrls: ['./new-candidate-list.component.css']
})
export class NewCandidateListComponent implements OnInit {
  id: string;
  jobId: string;
  applicantList = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public http: CustomHttpService
    ) { 
    this.id = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
  }

  ngOnInit() {
    this.getJobInfo();
  }

  getJobInfo() {
    this.jobId = this.route.snapshot.queryParams['jobID'];

    var url = "http://18.220.46.51:3000/api/Job/" + this.jobId;

    this.http.get(url).subscribe(
      (job: any) => {
        console.log('job', job)
        if (!job.hasOwnProperty('error')) {

          if(job.applicantRequests != null && job.applicantRequests != undefined && job.applicantRequests != ""){
            job.applicantRequests.forEach(applicant => {
               var applicantId = applicant.split('#')[1];
               this.http.get("http://18.220.46.51:3000/api/Applicant/" + applicantId).subscribe(
                (applicant: any) => {
                  applicant.imgURL = "https://krow-network-profile-pics.s3.us-east-2.amazonaws.com/pics/" + applicant.applicantID +".png"
                  console.log('applicant', applicant);
                  this.applicantList.push(applicant)
                });
            });
         }

        }
      });

  }

  goToResume(id){
    this.router.navigate(['/applicant/profile-info', id])
  }

}
