import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
// import { CreateUserService } from '../../../service/create-user.service';
import { UserLoginService } from '../../../service/user-login.service';
import { CustomHttpService } from '../../../service/custom-http.service';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import { log } from 'util';
// import ( SaveResumeService )

@Component({
  selector: 'app-employer-profile-info',
  templateUrl: './employer-profile-info.component.html',
  styleUrls: ['./employer-profile-info.component.css']
})
export class EmployerProfileInfoComponent implements OnInit {

  // vars 
  user: string;
  companyName: string;
  empId: string;
  desc: string;
  name: string;
  bio: string;
  address: string;
  city: string;
  state: string; 
  country: string;
  phone: string;
  email: string; 
  urlFACEBOOK: string;
  urlTWITTER: string;
  urlLINKEDIN: string;
  urlWEBSITE: string;

  education = [];
  experience = [];
  full_addr = ""

  in_progress_jobs = [];
  completed_jobs = [];
  terminated_jobs = [];
  available_jobs = []

  saved = []

  display_edit = false
  imgURL: string;

  constructor(
    public http: CustomHttpService,
    private userService: UserLoginService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

    // this.saveResume.init()
    // this.saveResume.save("test")
    // console.log("Applicant Component: constructor");
    
   }
  ngOnInit() {
    // console.log(this.saveResume.load_saves())
    if (this.router.url.split("/")[3] !== undefined) {
      this.user = this.router.url.split("/")[3]
    } else {
      this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
      this.display_edit = true
    } 

    this.imgURL = "https://s3.us-east-2.amazonaws.com/krow-network-profile-pics/pics/" + this.user + ".png"
    var self = this
      // console.log(res)

    // console.log(this.saved)
    
    this.http.get("http://18.220.46.51:3000/api/Employer/" + this.user).subscribe(
      data => {
        console.log(data)
        this.companyName = data["employerName"]
        if (data["address"] !== undefined && data["address"] != "")
          this.full_addr += data["address"]
        if (data["city"] !== undefined && data["city"] != "")
          this.full_addr += ", " + data["city"]
        if (data["state"] !== undefined && data["state"] != "")
          this.full_addr += ", " + data["state"]

        this.desc = data["description"]

        // console.log(this.desc)

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

        this.empId = data["employerID"]


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
        


    //     if (data["resume"]["education"].length == 0 || data["resume"]["education"] === undefined) {
    //       this.education = [{
    //         title: "None",
    //         desc: "None",
    //         startDate: "Never",
    //         endDate: "Never"
    //       }]

    //     } else {
    //       this.education = []
    //       for (var i = 0; i < data["resume"]["education"].length; i ++) {
    //         var element = data["resume"]["education"][i]
    //         element["startDate"] = new Date(element["startDate"])
    //         element["startDate"] = (element["startDate"].getMonth() + 1) + '/' + element["startDate"].getDate() + '/' +  element["startDate"].getFullYear()
            
    //         element["endDate"] = new Date(element["endDate"])
    //         element["endDate"] = (element["endDate"].getMonth() + 1) + '/' + element["endDate"].getDate() + '/' +  element["endDate"].getFullYear()
    //         this.education.push(element)
    //       }

    //     }


    //     if (data["resume"]["experience"].length == 0 || data["resume"]["experience"] === undefined) {
    //       this.experience = [{
    //         title: "None",
    //         desc: "None",
    //         startDate: "Never",
    //         endDate: "Never"
    //       }]

    //     } else {
    //       this.experience = []
    //       for (var i = 0; i < data["resume"]["experience"].length; i ++) {
    //         var element = data["resume"]["experience"][i]
    //         element["startDate"] = new Date(element["startDate"])
    //         element["startDate"] = (element["startDate"].getMonth() + 1) + '/' + element["startDate"].getDate() + '/' +  element["startDate"].getFullYear()
            
    //         element["endDate"] = new Date(element["endDate"])
    //         element["endDate"] = (element["endDate"].getMonth() + 1) + '/' + element["endDate"].getDate() + '/' +  element["endDate"].getFullYear()
    //         this.experience.push(element)
    //       }

    //       // JOBS

    //       // availalbe
          for (var i = 0; i < data["availableJobs"].length; i++){

            var id = data["availableJobs"][i].split("#")[1].toString()
            var n_url = "http://18.220.46.51:3000/api/Job/" + id 
            this.http.get(n_url).subscribe(
              n_data => {
                var s = new Date(n_data["created"])
                var start = (s.getMonth() + 1) + '/' + s.getDate() + '/' +  s.getFullYear()
                // console.log(n_data["location"])
                this.available_jobs.push(
                  {
                    title: n_data["title"],
                    jobID: n_data["jobID"],
                    location: n_data["location"],
                    created: start
                  }
                  
                )
                
              })
            }
          // }, // Catch Errors
          // (err = HttpErrorResponse) => {
          //   console.log("h" + err)
          //     sessionStorage.setItem("accountType", "applicant")
          //     this.router.navigate(['/applicant']);
          //     // console.log("User does not have an applicant account");
          //     // console.log(err)
          //     // this.router.navigate(['/basicInfo'], { queryParams: { as: "Applicant" } });
          // }

    //       // completed
    //       for (var i = 0; i < data["completedJobs"].length; i++){

    //         var id = data["completedJobs"][i].split("#")[1].toString()
    //         var n_url = "http://18.220.46.51:3000/api/Job/" + id 
    //         this.http.get(n_url).subscribe(
    //           n_data => {
    //             var start = new Date(n_data["startDate"])
    //             var end = new Date(n_data["endDate"])
    //             start = (start.getMonth() + 1) + '/' + start.getDate() + '/' +  start.getFullYear()
    //             end = (end.getMonth() + 1) + '/' + end.getDate() + '/' +  end.getFullYear()
    //             this.completed_jobs.push(
    //               {
    //                 title: n_data["title"],
    //                 jobID: n_data["jobID"],
    //                 startDate: start,
    //                 endDate: end
    //               }
                  
    //             )
                
    //           })
    //       }

    //       // terminated
    //       for (var i = 0; i < data["terminatedJobs"].length; i++){

    //         var id = data["terminatedJobs"][i].split("#")[1].toString()
    //         var n_url = "http://18.220.46.51:3000/api/Job/" + id 
    //         this.http.get(n_url).subscribe(
    //           n_data => {
    //             var start = new Date(n_data["startDate"])
    //             var end = new Date(n_data["endDate"])
    //             start = (start.getMonth() + 1) + '/' + start.getDate() + '/' +  start.getFullYear()
    //             end = (end.getMonth() + 1) + '/' + end.getDate() + '/' +  end.getFullYear()
    //             this.terminated_jobs.push(
    //               {
    //                 title: n_data["title"],
    //                 jobID: n_data["jobID"],
    //                 startDate: start,
    //                 endDate: end
    //               }
                  
    //             )
                
    //           })
    //       }

    //       // // console.log(this.experience)
    //     }
    //   }
    // )
          }, (err: HttpErrorResponse) => {
            this.router.navigate(["/login"])
          }
  )
}

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn) {
      sessionStorage.setItem("redirectBack", this.router.url)
        this.router.navigate(['/login']);
    }

}
  copyUrl() {

    var TextAreaElement = document.createElement("textarea");
  
    // Place in outside of the visible area of the screen regardless of scroll position.
    TextAreaElement.style.position = 'absolute';
    TextAreaElement.style.top = "-100";
    TextAreaElement.style.left = "0";
    
    // add text to the textbox
    TextAreaElement.value = "http://krownetwork.com/employer/profile-info/" + this.empId;

    // append TextAreaElement to document
    document.body.appendChild(TextAreaElement);

    // select the content
    TextAreaElement.select();

    try {
        var successful = document.execCommand('copy');
        // var msg = successful ? 'successful' : 'unsuccessful';
        // // console.log('Copying text "' + text + '" to clipboard was ' + msg);
    } catch (err) {
        // console.log('Cannot copy to clipboard');
    }

    // remove the TextAreaElement from the document
    document.body.removeChild(TextAreaElement);

    // unload
    TextAreaElement = undefined;
  } 
  goToMap() {
    var u = this.full_addr.replace(",", "")
    u = u.split(" ").join("+")
    window.open("https://www.google.com/maps/place/" + u)
  }
}
