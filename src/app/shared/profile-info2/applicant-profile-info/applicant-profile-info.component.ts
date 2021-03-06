import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
// import { CreateUserService } from '../../../service/create-user.service';
import { UserLoginService } from '../../../service/user-login.service';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import { S3Service } from "../../../service/s3.service"
import { CustomHttpService } from "../../../service/custom-http.service"
import { log } from 'util';
import { DataShareService } from "../../../service/data-share.service"
import { ModalService } from '../../../service/modal.service'; 
import { ShareLinkPopupComponent} from './share-link-popup/share-link-popup.component';

@Component({
  selector: 'app-applicant-profile-info',
  templateUrl: './applicant-profile-info.component.html',
  styleUrls: ['./applicant-profile-info.component.css']
})

export class ApplicantProfileInfoPrivateComponent implements OnInit {
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  tjL = 0;

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
  urlFACEBOOK = undefined;
  urlTWITTER = undefined;
  urlLINKEDIN = undefined;
  urlWEBSITE = undefined;

  id: string;

  education = [];
  experience = [];
  cityState: string;

  in_progress_jobs = [];
  completed_jobs = [];
  terminated_jobs = [];
  terminate_reasons = [];

  curr_emp = false

  img: Object;

  imgURL: string;
  owner = false;
  forceLogin=false
  location=""
  

  constructor(
    public http: CustomHttpService,
    private userService: UserLoginService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private s3service: S3Service,
    private dataService: DataShareService,
    public modalService: ModalService,
  ) {
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
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
    
    this.urlTWITTER = false
    this.urlFACEBOOK = false
    this.urlLINKEDIN = false

    this.imgURL = "https://krow-network-profile-pics.s3.us-east-2.amazonaws.com/pics/" + this.id +".png"
    console.log(this.imgURL)

    // this.http.get("https://s3.us-east-2.amazonaws.com/krow-network-profile-pics/pics/352fa0c7-5921-4782-b476-43e97f9295d1.png").subscribe(
    //   data => {
    //     this.img = data;
    //   }
    
    // )
    
    this.http.get("http://18.220.46.51:3000/api/Applicant/" + this.id).subscribe(
      data => {
        console.log(data)
        this.first = data["firstName"]
        this.last = data["lastName"]
        this.name = this.first + " " + this.last
        for (var i = 0; i < data["terminateReasons"].length; i ++) {
          var x = data["terminateReasons"][i].split("|")
          if (x[0] == 'Resign') {
            this.terminate_reasons.push("Reason for resigning: " + x[1])
          } else {
            this.terminate_reasons.push("Reason for being fired: " + x[1])
          }
          // this.terminate_reasons.push(data["terminateReasons"][i])
        }

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

        var bioTag = document.getElementById("bio")
        
        if (data["resume"]["biography"] == "") {
          this.bio = "No Bio Provided"
        } else {
          this.bio = data["resume"]["biography"]
        }

        // bioTag.innerHTML = this.bio;

        if (data["address"] != "") {
          this.location += data["address"]
        }

        if (data["city"] != "") {
          if (this.location != "") {
            this.location += ", " + data["city"]
          } else {
            this.location += data["city"]
          }
        }

        if (data["state"] != "") {
          if (data["city"] != "" && this.location != "") {
            this.location += ", " + data["state"]
          } else {
            this.location += data["state"]
          }
        }




        // this.cityState = data["city"] + ", " + data["state"]

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
          this.education = []

        } else {
          this.education = []
          for (var i = 0; i < data["resume"]["education"].length; i ++) {
            var element = data["resume"]["education"][i]
            var d = new Date(element["startDate"])
            element["startDate"] = this.monthNames[d.getMonth() + 1] + " " + d.getFullYear().toString()
            
            //((element["startDate"].getMonth() + 1).toString())  + '/' +  element["startDate"].getFullYear().toString()
            
            d = new Date(element["endDate"])
            element["endDate"] = this.monthNames[d.getMonth() + 1] + " " + d.getFullYear().toString()
            this.education.push(element)
            console.log(element)
          }

        }

        console.log (data)

        if (data["resume"]["experience"].length == 0 || data["resume"]["experience"] === undefined) {
          this.experience = []

        } else {
          this.experience = []
          for (var i = 0; i < data["resume"]["experience"].length; i ++) {
            var element = data["resume"]["experience"][i]
            var s = new Date(element["startDate"])
            element["startDate"] = this.monthNames[s.getMonth() + 1] + " " + s.getFullYear().toString()
            
            var e = new Date(element["endDate"])
            element["endDate"] = this.monthNames[e.getMonth() + 1] + " " + e.getFullYear().toString()
            console.log(element)
            if (element.present == true || element.endDate == "undefined NaN") {
              element.endDate = "Present"
            }

            element.skills = element.skills.join(", ")

            this.experience.push(element)
          }
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
          // // console.log(data["terminatedJobs"].length)
          this.tjL = data['terminatedJobs'].length
          for (var i = 0; i < data["terminatedJobs"].length; i++){
            var id = data["terminatedJobs"][i].split("#")[1].toString()
            // // console.log("id" + id)
            // // console.log(data["terminateReasons"][i])
            var n_url = "http://18.220.46.51:3000/api/Job/" + id 
            this.http.get(n_url).subscribe(
              n_data => {
                // // console.log(n_data)
                var start = new Date(n_data["startDate"])
                var end = new Date(n_data["endDate"])
                var nstart = (start.getMonth() + 1) + '/' + start.getDate() + '/' +  start.getFullYear()
                var nend = (end.getMonth() + 1) + '/' + end.getDate() + '/' +  end.getFullYear()

                // // console.log(n_data["startDate"])
                console.log(data["terminateReasons"][i])
                this.terminated_jobs.push(
                  {
                    title: n_data["title"],
                    jobID: n_data["jobID"],
                    startDate: nstart,
                    endDate: nend,
                    reason: data["terminateReasons"][i]
                  }
                  
                )
                
              })
          }
          // // console.log(this.terminated_jobs)
          // // console.log(this.terminated_jobs[0])
          // var nterm = []
          // var c = 0
          // this.terminated_jobs.forEach(element => {
          //   element.reason = this.terminate_reasons[c]
          //   // console.log(element)
          //   nterm.push(element)
          //   c += 1
          // });
          // // console.log(this.terminate_reasons[0])

          // // console.log(this.experience)
        
      }, (err: HttpErrorResponse) => {
        localStorage.clear()
            this.router.navigate(["/login"])
      }
    )
  
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn) {
      sessionStorage.setItem("redirectBack", this.router.url)
        // this.router.navigate(['/login']);
    }
}

newEvent() {
  this.modalService.init(ShareLinkPopupComponent,{name: this.first + " " + this.last},{});
}

removeModal() {
  this.modalService.destroy()
}

copy() {
  alert("The public url to your resume is https://www.krownetwork.com/applicant/profile-info/" + this.user)
}

newChat() {
  this.router.navigate(["chat/" + this.id])
}

reqVerify(id, jname, comp) {
  console.log(id)
  this.dataService.changeData({
    user: this.name,
    jobName: jname,
    verificationID: id,
    aID: this.id,
    company: comp
  })
  this.router.navigate(["applicant/requestVerification/" + id])
}


}


