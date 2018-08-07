import { Component, OnInit, ViewContainerRef  } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpBackend  } from '@angular/common/http';
import { CreateUserService } from '../../service/create-user.service';
import { log } from 'util';
import { encodeUriFragment } from '@angular/router/src/url_tree';
import { CustomHttpService } from '../../service/custom-http.service';
import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';


// import { post } from '../../../../node_modules/@types/selenium-webdriver/http';
// import { splitAtColon } from '../../../../node_modules/@angular/compiler/src/util';
// import { subscribeOn } from '../../../../node_modules/rxjs/operators';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  show_applicants = false;
  jobID: string;
  title: string;
  description: string;
  location: string;
  tags: string;
  created: string;
  lastUpdated: string; 
  startDate: string;
  requestCompletedDate: string;
  endDate: string; 
  jobType: string;
  payment: string;
  paymentType: string;
  employerID: string;
  disabled = true;
  url: string;
  showPop = false;
  contract: string;

  ended = false;

  applicants = [];
  applicant_data = [];
  nameOfApplicants: string;
  employee = {};
  deniedApplicants = [];
  show_denied_applicants = false;

  x = undefined;
  user = undefined;
  hide_employer_buttons = true;
  hide_apply = true;
  hide_accept = false;
  msg = undefined;
  hide_view_employer = true
  show_employee = false

  isTheApplicant = false

  canEdit = false;
  canApply = true;
  canDeApply = false;
  confirmResign = false;
  canAcceptJob = false
  hasEmp = false
  denied = [];

  confirmFire = false;

  isOwner = false

  confirmDeny = false;

  requestCompleteB = false;

  enddate: string;
  startdate: string;
  started = false;

  appDeny = ""

  id: string;

  // msg = undefined

  constructor(
    private http: CustomHttpService,
    private createUser: CreateUserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modal: Modal
        // private viewRef: ViewContainerRef
  ) { 
    if (sessionStorage.getItem("accountType") == "applicant") {
      if (sessionStorage.getItem("canAcceptJob") == "true") {
        // console.log("yass")
        this.hide_accept = false
        this.hide_apply = true
      } else {
        this.hide_accept = true
        this.hide_apply = false 
      }
      this.hide_view_employer = false
      
    } else {
      this.hide_accept = true
      this.hide_employer_buttons = false
      this.hide_apply = true
      this.hide_view_employer = true
    }
  }
  

  // show_apply_button = false

  profileType = sessionStorage.getItem("accountType")


  requestToHire(applicant) {
    // // console.log(this.profileType)
    var url = "http://18.220.46.51:3000/api/RequestHireApplicant"
    // console.log(this.id )
    // var applicantUrl = "http://18.220.46.51:3000/api/Applicant/" + this.id 
    // var jobUrl = "http://18.220.46.51:3000/api/Job/" + sessionStorage.getItem("fromJob")
    // var employerUrl = "http://18.220.46.51:3000/api/Employer/" + localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")

    // // console.log(applicantUrl)
    // // console.log(jobUrl)
    // // console.log(employerUrl)
    
    

    var data =
    {
      "applicant": applicant,
      "employer": localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"),
      "job": this.jobID
    }

          // jobData.tags = jobData.toString().split(",")
          
    this.msg = "Please Wait"
    this.http.post(url, data).subscribe(
      data => {
        // alert("Success!")
        this.http.get("http://18.220.46.51:3000/api/Employer/" + localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")).subscribe(
          emp_data => {
            this.http.get("http://18.220.46.51:3000/api/Applicant/" + applicant).subscribe(
              app_data => {
                var mailData = {
                  to: app_data["email"],
                  comp_name: emp_data["employerName"],
                  job_name:this.title
                }
                this.http.post("https://api.krownetwork.com/hire-request", mailData).subscribe(
                  data => {
                    this.msg = "Congratulations! The applicant has been notified!"
                  }, 
                  (err: HttpErrorResponse) => {
                    if (err.error instanceof Error) {
                      // console.log("Client-side error occured.");
                    } else {
                      // console.log("Server-side error occured.");
                      // console.log(err);
                    alert (err)
                    }
                  }) // closing email
              },
              (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                  // console.log("Client-side error occured.");
                } else {
                  // console.log("Server-side error occured.");
                  // console.log(err);
                alert (err)
                }
              }) //closing job_data
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              // console.log("Client-side error occured.");
            } else {
              // console.log("Server-side error occured.");
              // console.log(err);
            alert (err)
            }
          }) // closing emp_data
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // console.log("Client-side error occured.");
        } else {
          // console.log("Server-side error occured.");
          // console.log(err);
          alert(err);
          this.msg = "You have already requested to hire this applicant"
        }
      })
    }


  updateInfo(children) {
    // this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    // this.activatedRoute.params.subscribe(params => // console.log(params));
    // Test Id, get from login in the future
    

    // Url to API
    // this.url = "http://18.220.46.51:3000/api/" + profileType + "/" + this.user;

    // Get current Data
    this.http.get(this.url).subscribe(
      data => {
        var change = false;
        for(var i = 0; i < children.length; i++){
          var event = children[i];

          // Get element id that triggered event
          var valueToChange = event.attributes[1].value;
          // console.log(valueToChange)

          // Value of element
          var elValue = event.value;    
          // console.log(elValue)

          // Check if values match, in which case, do nothing
          if(data[valueToChange] != elValue){

            // Check for empty entry
            if(elValue == ""){
              continue;
            }
            
            // Check if url, in which case, map as json
            else if(valueToChange.slice(0, 3) == "url"){
              var found = false;
              // Loop through current links looking for a match to update
              for(var k = 0; k < data["links"].length; k++){
                if(data["links"][k]["type"][0] == valueToChange[3]){
                  if(data["links"][k]["url"] != elValue){
                    data["links"][k]["url"] = elValue;
                    change = true;
                  }
                  found = true;
                }
              }
              // If no matches are found, create new instance
              if(found == false){
                var type = valueToChange.slice(3);
                data["links"].push(
                  {
                    $class: "network.krow.participants.Link",
                    url: elValue,
                    type: type,
                  }
                )
                change = true;
              }
            }
            else{
              // Change data value
              data[valueToChange] = elValue;
              change = true;
            }
          }
          // console.log(data)
        }

        if(change != false){

          // Get timestamp and change data timestamp
          var timestamp = new Date();
          data["lastUpdated"] = timestamp;

          data["tags"] = data['tags'].toString().split(",")
          // Update entry
          this.http.put(this.url, data).subscribe(
            data => {
            }, // Catch Errors
            (err: HttpErrorResponse) => {
              if (err.error instanceof Error) {
                // console.log("Client-side error occured.");
              } else {
                // console.log("Server-side error occured.");
                // console.log(err.error)
              }
            }
          );
        }
      }, // Catch Errors
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // console.log("Client-side error occured.");
        } else {
          // console.log("Server-side error occured.");
        }
      }
    );
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 500);
    });
  };
  
  formatDate(date) {
    var month = '' + (date.getMonth() + 1)
    var day = '' + date.getDate().toString()
    var year = date.getFullYear()

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return  [year, month, day].join("-")
  }
  hire_requests = []
  h_data = []
  load(jobID) {
    this.url = "http://18.220.46.51:3000/api/Job/" + this.jobID
    // Set Company/Name 
    // document.getElementById("app-responsive-component-profile").innerText = "Job";

    // // document.getElementById("text").disabled = true;
    // // Change First input value, id, title to match employer name
    // var employerName = document.getElementById("app-responsive-component-profile-first");
    // employerName.children[0].innerHTML = "Job Title";
    // employerName.children[1].children[0].attributes[2].value = "Job Title";
    // employerName.children[1].children[0].attributes[1].value = "title";

    // // Change Second input value, id, title to match description
    // var description = document.getElementById("app-responsive-component-profile-second");
    // description.children[0].innerHTML = "Description";
    // description.children[1].children[0].attributes[2].value = "Job Description";
    // description.children[1].children[0].attributes[1].value = "description";

    // var tags = document.getElementById("app-responsive-component-profile-third");
    // tags.children[0].innerHTML = "Tags";
    // tags.children[1].children[0].attributes[2].value = "Tags";
    // tags.children[1].children[0].attributes[1].value = "tags";


    // Get Data
    this.http.get(this.url).subscribe(
      data => {
        // Display data fetched from API
        this.title = data["title"];
        this.description = data["description"];
        this.location = data["location"];
        this.tags = data["tags"];
        this.created = this.formatDate(new Date(data["created"]));
        this.payment = data["payment"]
        this.paymentType = data["paymentType"]
        this.jobType = data["jobType"] 
        this.contract = data["contract"]
        console.log(data)

        if (data['startDate'] !== undefined && data["startDate"] != "") {
          this.started = true 
          this.startdate = this.formatDate(new Date(data["startDate"]))
        }

        // // console.log(this.payment)

        var details = document.getElementById("job-details")
        details.innerHTML = this.description
        // this.lastUpdated = this.formatDate(new Date(data["lastUpdated"]));
        // if (data["startDate"] !== undefined) {
        //   this.startDate = this.formatDate(new Date(data["startDate"]));
        // } else {
        //   this.startDate = "0000-00-00"
        // }

        if (data["lastUpdated"] !== undefined) {
          this.lastUpdated = this.formatDate(new Date(data["lastUpdated"]));
        } else {
          this.lastUpdated = this.created
        }
        // // console.log(this.lastUpdated)
        
        this.employerID = data["employerID"];
        if (this.id == this.employerID) {
          this.isOwner = true
        }
        this.jobID = data["jobID"];
        this.applicants = data["applicantRequests"];
        this.hire_requests = data["hireRequests"]
        var employeeID = ""
        if (data["employee"] !== undefined && data["employee"] != "") {
          employeeID = data["employee"].split("#")[1]
        }
        
        // // console.log(employeeID)
        if (data["requestCompletedDate"] !== undefined && data["requestCompletedDate"] != "") {
          this.requestCompleteB = true
        }

        if (data["endDate"] !== undefined && data['endDate'] != "") {
          this.ended = true 
          this.requestCompleteB = false;
          this.enddate = this.formatDate(new Date(data['endDate']))

        }

        if (employeeID !== undefined && employeeID != "") {
          this.canApply = false
        } 
        if (this.id == employeeID) {
          this.isTheApplicant = true
        }

        this.deniedApplicants = data["deniedApplicants"]
        // console.log(this.deniedApplicants)

        if (this.employerID == this.id) {
          this.canEdit = true
        }

        // employee
        if (employeeID !== undefined && employeeID != "") {
          
          // this.show_employee = true
          // // console.log(employeeID)
          this.hasEmp = true
          // // console.log(this.applicants[0])
          // for (var i = 0; i <= this.applicants.length; i++){
            var url = "http://18.220.46.51:3000/api/Applicant/" + employeeID
            this.http.get(url).subscribe(
              data => {
                this.employee = {
                  firstName: data['firstName'],
                  lastName: data['lastName'],
                  applicantID: data["applicantID"]
                }
                // this.employee.firstName = data["firstName"]
                // this.employee.lastName = data["lastName"]
                // this.employee.applicantID = data["applicantID"]
                // // console.log(this.employee)
            },
            (err: HttpErrorResponse) => {
              if (err.error instanceof Error) {
                // console.log("Client-side error occured.");
              } else {
                // console.log("Server-side error occured.");
              }
            })
            // // console.log(this.employee)
          }

          // // console.log(this.employee)
        // }
        
        // // console.log(this.employerID)
        // // console.log(this.id)
        // // console.log(this.applicants)
        if (this.applicants !== undefined  && this.applicants.length != 0) {
          
          // this.show_applicants = false
          // // console.log(this.applicants[0])
          for (var i = 0; i < this.applicants.length; i++){
            var url = "http://18.220.46.51:3000/api/Applicant/" + this.applicants[i].split("#")[1]
            this.http.get(url).subscribe(
              data => {
                // // console.log((data["applicantID"]))
                // // console.log(this.id)
                if (data["applicantID"] == this.id) {
                  this.canDeApply = true 
                  this.canApply = false
                }
                // // console.log(this.canDeApply)
                this.applicant_data.push({
                  firstName: data["firstName"],
                  lastName: data["lastName"],
                  applicantID: data["applicantID"]
                })

            },
            (err: HttpErrorResponse) => {
              if (err.error instanceof Error) {
                // console.log("Client-side error occured.");
              } else {
                // console.log("Server-side error occured.");
              }
            })
          }
          // console.log(this.applicant_data)
        }

        // requested hires
        if (this.hire_requests !== undefined  && this.hire_requests.length != 0) {
          
          // this.show_applicants = false
          // // console.log(this.applicants[0])
          for (var i = 0; i < this.hire_requests.length; i++){
            var url = "http://18.220.46.51:3000/api/Applicant/" + this.hire_requests[i].split("#")[1]
            this.http.get(url).subscribe(
              data => {
                // // console.log((data["applicantID"]))
                // // console.log(this.id)
                if (data["applicantID"] == this.id) {
                  this.canDeApply = false 
                  this.canApply = false
                  this.canAcceptJob = true
                }
                // // console.log(this.canDeApply)
                this.h_data.push({
                  firstName: data["firstName"],
                  lastName: data["lastName"],
                  applicantID: data["applicantID"]
                })

            },
            (err: HttpErrorResponse) => {
              if (err.error instanceof Error) {
                // console.log("Client-side error occured.");
              } else {
                // console.log("Server-side error occured.");
              }
            })
          }
          // console.log(this.applicant_data)
        }

        // denied applicants
        if (this.deniedApplicants !== undefined && this.id == this.employerID && this.deniedApplicants.length != 0) {
          
          this.show_denied_applicants = true
          // // console.log(this.applicants[0])
          for (var i = 0; i < this.deniedApplicants.length; i++){

            var url = "http://18.220.46.51:3000/api/Applicant/" + this.deniedApplicants[i].applicantID
            this.http.get(url).subscribe(
              data => {
                this.denied.push(data)
            },
            (err: HttpErrorResponse) => {
              if (err.error instanceof Error) {
                // console.log("Client-side error occured.");
              } else {
                // console.log("Server-side error occured.");
              }
            })
          }
        }
        // console.log(this.denied)

        // // console.log(data["applicantRequests"])
        // // console.log(this.applicants)

        // title: string;
        // description: string;
        // location: string;
        // tags: string;
        // created: string;
        // lastUpdated: string; 
        // startDate: string;
        // requestCompletedDate: string;
        // endDate: string; 
        // jobType: string;
        // payment: string;
        // paymentType: string;
        // employerID: string;

        // Split url links
        // for(var i = 0; i < data["links"].length; i++){
        //   var curr = data["links"][i];
        //   if(curr["type"] == "FACEBOOK"){
        //     this.urlFACEBOOK = curr["url"];
        //   }
        //   else if(curr["type"] == "TWITTER"){
        //     this.urlTWITTER = curr["url"];
        //   }
        //   else if(curr["type"] == "LINKEDIN"){
        //     this.urlLINKEDIN = curr["url"];
        //   }
        //   else if(curr["type"] == "WEBSITE"){
        //     this.urlWEBSITE = curr["url"];
        //   }
        // }
      }, // Catch Errors
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // console.log("Client-side error occured.");
        } else {
          // console.log("Server-side error occured.");
        }
      }
    );
    // this.applicants = sessionStorage.getItem("applicants")
  }
  
  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {this.jobID = params["jobID"]});
    this.id = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
    // console.log("Current job:")
    // console.log(this.jobID)
    this.load(this.jobID)

    // // console.log(this.employerID)
    
    // this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
    // this.x = this.confirmUserType()
    // // console.log(this.x)
    // if (this.confirmUserType() == true)) {
    //   this.show_apply = true
    // }
  }
  
  async apply(event){
    // // console.log(this.profileType)

    var url = "http://18.220.46.51:3000/api/RequestJob"
    var data = {
      "applicant": localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"),
      "job": this.jobID
    }
    this.msg = "Please wait"
    this.http.post(url, data).subscribe(
      data => {
        console.log(1)
        this.http.get("http://18.220.46.51:3000/api/Employer/" + this.employerID).subscribe(
          data => {
            console.log(2)
            this.http.get("http://18.220.46.51:3000/api/Applicant/" +localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser") ).subscribe(
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

  async deapply(event) {
    var url = "http://18.220.46.51:3000/api/UnrequestJob"
    var data = {
      "applicant": localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"),
      "job": this.jobID
    }
    this.msg = "Please wait"
    this.http.post(url, data).subscribe(
      data => {
        this.http.get("http://18.220.46.51:3000/api/Employer/" + this.employerID).subscribe(
          data => {
            this.http.get("http://18.220.46.51:3000/api/Applicant/" +localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser") ).subscribe(
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

  goToEdit() {
    this.router.navigate(["/job/" + this.jobID + "/edit"])
  }

  viewEmp() {
    this.router.navigate(["/employer/profile-info/" + this.employerID])
  }
  resignp1() {
    this.confirmResign = true
  }
  resignp2() {
    var url = "http://18.220.46.51:3000/api/ResignJob"
    var data = {
      "applicant": localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"),
      "job": this.jobID,
      "reason": document.getElementById('reason')["value"]
    }
    // console.log(data)
    this.msg = "Please wait"
    this.http.post(url, data).subscribe(
      data => {
        this.msg = "The employer has been notified of your resigning"
        setTimeout(function() { 
          // console.log("shleep")
        }, 2000);
        this.router.navigate(["/applicant/profile-info/"])
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
      job: this.jobID,
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
              // console.log("Server-side error occured.");
              // console.log(err);
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

  firep1() {
    this.confirmFire = true
  }

  firep2() {
    var url = "http://18.220.46.51:3000/api/FireApplicant"
    // // console.log(this.employee)
    var data = {
      "applicant": this.employee["applicantID"],
      "job": this.jobID,
      "employer":localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"),
      "reason": document.getElementById('reason')["value"]
    }
    // console.log(data)
    this.msg = "Please wait"
    this.http.post(url, data).subscribe(
      data => {
        this.msg = "The applicant has been notified of your firing"
        setTimeout(function() { 
          // console.log("shleep")
        }, 2000);
        this.router.navigate(["/employer/profile-info/"])
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

  denyApplicantp1(ID) {
    this.confirmDeny = true
    this.appDeny = ID
  }

  denyApplicantp2() {
    var data = {
      "applicant": this.appDeny,
      "job": this.jobID,
      "employer":localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"),
      "reason": document.getElementById('reason')["value"]
    }

    this.msg = "Please wait" 

    this.http.post("http://18.220.46.51:3000/api/DenyApplicant", data).subscribe(
      ret => {
        this.msg = "Success"
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

  unRequestHire(ID) {
    var url = 'http://18.220.46.51:3000/api/UnrequestHireApplicant'
    var data = {
      "applicant": ID,
      "job": this.jobID,
      "employer":localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
    } 
    this.msg = "Please wait"
    this.http.post(url, data).subscribe(
      data=>{
        this.msg = "Success"
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

requestComplete() {
  var url = "http://18.220.46.51:3000/api/RequestCompleteJob"
  var data = {
    "applicant": localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"),
    "job": this.jobID
  }
  this.msg = "Please wait"
  this.http.post(url, data).subscribe(
    data=>{
      this.msg = "Success!"
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

complete() {
  var url = "http://18.220.46.51:3000/api/CompleteJob"
  var data = {
    "employer": localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"),
    "job": this.jobID
  }

  this.msg = "Please wait"
  this.http.post(url, data).subscribe(
    data=>{
      this.msg = "Success! The job has been completed"
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

denyCompletion() {
  var url = "http://18.220.46.51:3000/api/DenyRequestCompleteJob"
  var data = {
    "employer": localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"),
    "job": this.jobID
  }

  this.msg = "Please wait"
  this.http.post(url, data).subscribe(
    data=>{
      this.msg = "Success! The job has been completed"
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
canChangeSalary = false
changeSalaryP1() {
  this.canChangeSalary = true
}

changeSalaryP2() {
  var data = {
    // "applicant": this.appDeny,
    "job": this.jobID,
    "employer":localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"),
    "payment": parseFloat(document.getElementById('salary')["value"])
  }

  // console.log(data)
  this.msg = "Please wait"
  var url = 'http://18.220.46.51:3000/api/ChangeSalary'
  this.http.post(url, data).subscribe(
    data=>{
      this.msg = "Success"
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
openNewDialog() {
  console.log(this.contract)
  var res = this.modal.alert()
    .size("lg")
    .showClose(true)
    .title("Contract")
    .body(`
      <h3>Contract</h3>
      <span>` + this.contract + `</span>
    `)
    .open()
    
  res.result
    .then(result => {
      if (result === true) {
        this.acceptJob()
      }
    })
}
  
}

