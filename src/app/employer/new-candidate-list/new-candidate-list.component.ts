import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  CustomHttpService
} from '../../shared/service/custom-http.service';
import {
  HttpErrorResponse
} from '@angular/common/http';

@Component({
  selector: 'app-new-candidate-list',
  templateUrl: './new-candidate-list.component.html',
  styleUrls: ['./new-candidate-list.component.css']
})
export class NewCandidateListComponent implements OnInit {
  id: string;
  jobId: string;
  applicantList = [];
  title: string;
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
          this.title = job.title;

          if (job.applicantRequests != null && job.applicantRequests != undefined && job.applicantRequests != "") {

            job.applicantRequests.forEach(applicant => {
              var applicantId = applicant.split('#')[1];

              this.http.get("http://18.220.46.51:3000/api/Applicant/" + applicantId).subscribe(
                (applicantInfo: any) => {
                  applicantInfo.imgURL = "https://krow-network-profile-pics.s3.us-east-2.amazonaws.com/pics/" + applicantInfo.applicantID + ".png";
                  applicantInfo.isRequested = false;
                  applicantInfo.isDenied = false;

                  console.log('applicant', applicantInfo);
                  this.applicantList.push(applicantInfo);
                });
            });
          }

          if (job.hireRequests != null && job.hireRequests != undefined && job.hireRequests != "") {
            job.hireRequests.forEach(requestedApplicant => {
              var applicantId = requestedApplicant.split('#')[1];

              this.http.get("http://18.220.46.51:3000/api/Applicant/" + applicantId).subscribe(
                (applicantInfo: any) => {
                  applicantInfo.imgURL = "https://krow-network-profile-pics.s3.us-east-2.amazonaws.com/pics/" + applicantInfo.applicantID + ".png";
                  applicantInfo.isRequested = true;
                  applicantInfo.isDenied = false;

                  console.log('applicant', applicantInfo);
                  this.applicantList.push(applicantInfo);
                });
            });
          }

          if (job.deniedApplicants != null && job.deniedApplicants != undefined && job.deniedApplicants != "") {
            job.deniedApplicants.forEach(deniedApplicant => {
              var applicantId = deniedApplicant.applicantID;

              this.http.get("http://18.220.46.51:3000/api/Applicant/" + applicantId).subscribe(
                (applicantInfo: any) => {
                  applicantInfo.imgURL = "https://krow-network-profile-pics.s3.us-east-2.amazonaws.com/pics/" + applicantInfo.applicantID + ".png";
                  applicantInfo.isRequested = false;
                  applicantInfo.isDenied = true;

                  console.log('applicant', applicantInfo);
                  this.applicantList.push(applicantInfo);
                });
            });
          }

        }
      });

  }

  goToResume(id) {
    this.router.navigate(['/applicant/profile-info', id])
  }

  requestToHire(applicant) {
    // // console.log(this.profileType)
    var url = "http://18.220.46.51:3000/api/RequestHireApplicant"
    // console.log(this.id )

    var data = {
      "applicant": applicant,
      "employer": localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"),
      "job": this.jobId
    }

    // this.msg = "Please Wait"
    this.http.post(url, data).subscribe(
      data => {
        console.log('data', data)
        // alert("Success!")
        this.http.get("http://18.220.46.51:3000/api/Employer/" + localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")).subscribe(
          emp_data => {
            this.http.get("http://18.220.46.51:3000/api/Applicant/" + applicant).subscribe(
              app_data => {
                var mailData = {
                  to: app_data["email"],
                  comp_name: emp_data["employerName"],
                  job_name: this.title
                }
                this.http.post("https://api.krownetwork.com/hire-request", mailData).subscribe(
                  data => {
                    console.log('data2', data)
                    window.location.reload();
                    // this.msg = "Congratulations! The applicant has been notified!"
                  },
                  (err: HttpErrorResponse) => {
                    if (err.error instanceof Error) {} else {
                      alert(err)
                    }
                  }) // closing email
              },
              (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {} else {
                  alert(err)
                }
              }) //closing job_data
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {} else {
              alert(err)
            }
          }) // closing emp_data
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {} else {
          alert(err);
          // this.msg = "You have already requested to hire this applicant"
        }
      })

     
  }

  unRequestHire(ID) {
    var url = 'http://18.220.46.51:3000/api/UnrequestHireApplicant'
    var data = {
      "applicant": ID,
      "job": this.jobId,
      "employer": localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
    }
    // this.msg = "Please wait"
    this.http.post(url, data).subscribe(
      data => {
        // this.msg = "Success"
        window.location.reload();
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // console.log("Client-side error occured.");
        } else {
          // console.log("Server-side error occured.");
          // console.log(err);
        }
        // this.msg = "There was an error. Please try again"
      }
    )
  }

  // denyShowConfirm(ID) {
  //   this.confirmDeny = true;
  //   this.appDeny = ID;
  // }

  denyApplicant(applicantId) {
    var data = {
      "applicant": applicantId,
      "job": this.jobId,
      "employer":localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"),
      "reason": ""
    }

    // this.msg = "Please wait" 

    this.http.post("http://18.220.46.51:3000/api/DenyApplicant", data).subscribe(
      ret => {
        // this.msg = "Success"
        window.location.reload();
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // console.log("Client-side error occured.");
        } else {
          // console.log("Server-side error occured.");
          // console.log(err);
        }
        // this.msg = "There was an error. Please try again"
      }
    )
  }


}
