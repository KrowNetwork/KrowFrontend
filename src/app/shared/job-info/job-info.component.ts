import { Component, OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {CustomHttpService} from '../../shared/service/custom-http.service';
import {HttpErrorResponse} from '@angular/common/http';
import { UserLoginService } from "../../shared/service/user-login.service";

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
  msg = undefined;
  website: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  company: string;
  description: string;
  email: string;
  category: string;

  title: string;
  jobDescription: string;
  tags: any;
  pay: string;
  dateString: string;
  lastUpdated: string;

  canEdit = false;
  canApply = true;
  canDeApply = false;
  isOwner = false;
  requestCompleteB = false;
  isTheApplicant = false;
  isDenied = false;
  canAcceptJob = false;
  isAccepted = false;
  id: string;

  userLoggedIn = false;

  curr_emp = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public http: CustomHttpService,
    public userService: UserLoginService,
  ) {
    this.userService.isAuthenticated(this);
  }

  ngOnInit() {
    this.id = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
    if (sessionStorage.getItem("accountType") == "employer") {
      this.curr_emp = true
    }


    this.getJobInfo();

  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (isLoggedIn) {
      this.userLoggedIn = true;
    }
  }

  login(){
    this.router.navigate(['/login']);
  }

  getJobInfo() {
    this.jobId = this.route.snapshot.queryParams['jobID'];

    var url = "http://18.220.46.51:3000/api/Job/" + this.jobId;

    this.http.get(url).subscribe(
      (data: any) => {
        console.log('job', data)
        if (!data.hasOwnProperty('error')) {

          this.setValues(data);
          this.isDeniedApplicant(data.deniedApplicants);
          this.isApplicant(data.applicantRequests);
          this.canAccept(data.hireRequests);
          this.isEmployee(data.employee);
          if (this.id == this.employerID) {
            this.isOwner = true
          }

          var employeeID = ""
          if (data["employee"] !== undefined && data["employee"] != "") {
            employeeID = data["employee"].split("#")[1]
          }

          if (employeeID !== undefined && employeeID != "") {
            this.canApply = false
          }

          if (this.id == employeeID) {
            this.isTheApplicant = true
          }

          // // console.log(employeeID)
          if (data["requestCompletedDate"] !== undefined && data["requestCompletedDate"] != "") {
            this.requestCompleteB = true
          }

          this.getEmployerInfo();

        }
      });

  }

  setValues(data) {

    this.title = data.title;
    this.jobDescription = data.description;
    this.employerID = data.employerID;

    if (data.tags.length === 0) {
      this.tags = 'No Tags'
    }

    var created = new Date(data.created);
    this.dateString = (created.getMonth() + 1) + '/' + created.getDate() + '/' + created.getFullYear();

    if (data["lastUpdated"] !== undefined) {
      var updatedDate = new Date(data.lastUpdated);
      this.lastUpdated = (updatedDate.getMonth() + 1) + '/' + updatedDate.getDate() + '/' + updatedDate.getFullYear();;
    } else {
      this.lastUpdated = this.dateString
    }

    if (data.paymentType === "ONETIME") {
      this.pay = "$" + data.payment;
    } else if (data.paymentType === "DAILY") {
      this.pay = "$" + data.payment + "/day";
    } else if (data.paymentType === "HOURLY") {
      this.pay = "$" + data.payment + "/hour";
    } else if (data.paymentType === "WEEKLY") {
      this.pay = "$" + data.payment + "/week";
    } else if (data.paymentType === "BIWEEKLY") {
      this.pay = "$" + data.payment + "/2 weeks";
    } else if (data.paymentType === "MONTHLY") {
      this.pay = "$" + data.payment + "/month";
    } else if (data.paymentType === "OTHER") {
      this.pay = "other";
    } else if (data.paymentType === "CONTRACT") {
      this.pay = "contract";
    }

    if (data.paymentType === "ONETIME") {
      this.pay = "$" + data.payment;
    } else if (data.paymentType === "DAILY") {
      this.pay = "$" + data.payment + "/day";
    } else if (data.paymentType === "HOURLY") {
      this.pay = "$" + data.payment + "/hour";
    } else if (data.paymentType === "WEEKLY") {
      this.pay = "$" + data.payment + "/week";
    } else if (data.paymentType === "BIWEEKLY") {
      this.pay = "$" + data.payment + "/2 weeks";
    } else if (data.paymentType === "MONTHLY") {
      this.pay = "$" + data.payment + "/month";
    } else if (data.paymentType === "OTHER") {
      this.pay = "other";
    } else if (data.paymentType === "CONTRACT") {
      this.pay = "contract";
    }


    if (data.category === 1) {
      this.category = "Advertising";
    } else if (data.category === 2) {
      this.category = "Coding & IT";
    } else if (data.category === 3) {
      this.category = "Literature";
    } else if (data.category === 4) {
      this.category = "Video Editing";
    } else if (data.category === 5) {
      this.category = "Web Designing";
    } else if (data.category === 6) {
      this.category = "Business";
    } else if (data.category === 7) {
      this.category = "Lifestyle";
    } else if (data.category === 8) {
      this.category = "Music/Audio";
    } else if (data.category === 9) {
      this.category = "Other";
    }


  }

  isApplicant(applicantRequests){
    if(applicantRequests != null && applicantRequests != undefined && applicantRequests != ""){
       applicantRequests.forEach(applicant => {
          console.log('applicant ',applicant);
          console.log('applicant id', applicant.split('#')[1]);

          if(this.id === applicant.split('#')[1]){
            this.canDeApply = true;
            this.canApply = false;
            this.isDenied = false;
            this.canAcceptJob = false;
            return;
          }
       });
    }
  }

  isDeniedApplicant(deniedApplicants){
    if(deniedApplicants != null && deniedApplicants != undefined && deniedApplicants != ""){
       deniedApplicants.forEach(applicant => {
          console.log('applicant ',applicant);
          console.log('applicant id', applicant.applicantID);

          if(this.id === applicant.applicantID){
            this.canDeApply = false;
            this.canApply = false;
            this.isDenied = true;
            this.canAcceptJob = false;
            return;
          }
       });
    }
  }

  canAccept(hireRequests){
    if(hireRequests != null && hireRequests != undefined && hireRequests != ""){
       hireRequests.forEach(applicant => {
          console.log('applicant ',applicant);
          console.log('applicant id', applicant.applicantID);

          if(this.id === applicant.split('#')[1]){
            this.canDeApply = false;
            this.canApply = false;
            this.isDenied = false;
            this.canAcceptJob = true;
            return;
          }
       });
    }
  }

  isEmployee(employeeId){
    if(employeeId != null && employeeId != undefined && employeeId != ""){
       if(this.id === employeeId.split('#')[1]){
        this.canDeApply = false;
        this.canApply = false;
        this.isDenied = false;
        this.canAcceptJob = false;
        this.isAccepted = true;
       }
    }
  }
  

  edit(){
    this.router.navigate(['/employer/job/edit'], { queryParams: { jobID: this.jobId } })
  }

  profile(){
    this.router.navigate(['/employer/profile-info/' , this.employerID])
  }

  getEmployerInfo() {
    this.imgURL = "https://krow-network-profile-pics.s3.us-east-2.amazonaws.com/pics/" + this.employerID + ".png"
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
          } else if (curr["type"] == "TWITTER") {
            this.twitter = "https://" + curr["url"];
          } else if (curr["type"] == "LINKEDIN") {
            this.linkedin = "https://" + curr["url"];
          } else if (curr["type"] == "WEBSITE") {
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

  async apply() {
    // // console.log(this.profileType)

    var url = "http://18.220.46.51:3000/api/RequestJob"
    var data = {
      "applicant": localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"),
      "job": this.jobId
    }
    this.msg = "Please wait"
    this.http.post(url, data).subscribe(
      data => {
        console.log(1)
        this.http.get("http://18.220.46.51:3000/api/Employer/" + this.employerID).subscribe(
          data => {
            console.log(2)
            this.http.get("http://18.220.46.51:3000/api/Applicant/" + localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")).subscribe(
              appData => {
                var email_data = {
                  "applicant_name": appData["firstName"] + " " + appData["lastName"],
                  to: data["email"],
                  job_name: this.title
                }
                this.http.post("https://api.krownetwork.com/applicant-request", email_data).subscribe(
                  data => {
                    // alert("Congratulations! You've successfully applied!")
                    this.msg = "Congratulations! You've successfully applied!"
                    this.canApply = false
                    this.canDeApply = true
                    // location.reload()
                  },
                  (err: HttpErrorResponse) => {
                    if (err.error instanceof Error) {
                      // console.log("Client-side error occured.");
                    } else {
                      // console.log("Server-side error occured.");
                      // console.log(err);
                    }
                    this.msg = "There was an error. Please try again"
                  })
              })
          })
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // console.log("Client-side error occured.");
        } else {
          // console.log("Server-side error occured.");
          // console.log(err);
        }
        this.msg = "There was an error. Please try again"
      }
    )
  }

  async deapply() {
    var url = "http://18.220.46.51:3000/api/UnrequestJob"
    var data = {
      "applicant": localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"),
      "job": this.jobId
    }
    this.msg = "Please wait"
    this.http.post(url, data).subscribe(
      data => {
        this.http.get("http://18.220.46.51:3000/api/Employer/" + this.employerID).subscribe(
          data => {
            this.http.get("http://18.220.46.51:3000/api/Applicant/" + localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")).subscribe(
              appData => {
                var email_data = {
                  "applicant_name": appData["firstName"] + " " + appData["lastName"],
                  to: data["email"],
                  job_name: this.title
                }
                this.http.post("https://api.krownetwork.com/applicant-unrequest", email_data).subscribe(
                  data => {
                    // alert("Congratulations! You've successfully applied!")
                    this.msg = "You've successfully removed your application"
                    // console.log("Success")
                    this.canApply = true
                    this.canDeApply = false
                  },
                  (err: HttpErrorResponse) => {
                    if (err.error instanceof Error) {
                      // console.log("Client-side error occured.");
                    } else {
                      // console.log("Server-side error occured.");
                      // console.log(err);
                    }
                    this.msg = "There was an error. Please try again"
                  })
              })
          })
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // console.log("Client-side error occured.");
        } else {
          // console.log("Server-side error occured.");
          // console.log(err);
        }
        this.msg = "There was an error. Please try again"
      }
    )
  }

  acceptJob() {
    var url = "http://18.220.46.51:3000/api/AcceptHire"
    var data = {
      job: this.jobId,
      applicant: localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
    }
    this.msg = "Please wait"
    this.http.post(url, data).subscribe(
      data =>{
        this.msg = "Congratulations! You've successfully accepted the job!"
        // alert("Congratulations! You have successfully accepted the job!")
        // mailData = {
        //   applicant_name: 
        // }
        this.isAccepted = true;
        this.http.get("http://18.220.46.51:3000/api/Applicant/" + localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")).subscribe(
          applicantData => {
            this.http.get("http://18.220.46.51:3000/api/Employer/" + this.employerID).subscribe(
              empdata => {
                var mailData = {
                  applicant_name: applicantData["firstName"] + " " + applicantData["lastName"],
                  job_name: this.title,
                  to: empdata["email"]
                }
                this.http.post("https://api.krownetwork.com/accept-hire", mailData).subscribe(
                  x => {
                    // console.log("success")
                  },
                  (err: HttpErrorResponse) => {
                    if (err.error instanceof Error) {
                      // console.log("Client-side error occured.");
                    } else {
                      // console.log("Server-side error occured.");
                      // console.log(err);
                    }
                    this.msg = "There was an error. Please try again"})

              },
            )
            

            
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              // console.log("Client-side error occured.");
            } else {
            }
            this.msg = "There was an error. Please try again"
          })
        
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // console.log("Client-side error occured.");
      } else {
        // console.log("Server-side error occured.");
        // console.log(err);
      }
      this.msg = "There was an error. Please try again"
    })
  }




}
