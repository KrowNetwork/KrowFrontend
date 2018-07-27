import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import { CustomHttpService } from '../../service/custom-http.service';



@Component({
  selector: 'app-hire-requests',
  templateUrl: './hire-requests.component.html',
})
export class HireRequestsComponent implements OnInit {
  accountType: string;
  applicant:  string;
  jobs = [];
  available_jobs = [];

  
  constructor(
    private http: CustomHttpService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.accountType = sessionStorage.getItem("accountType")
    if (this.accountType == "applicant") {
      this.applicant = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
      // Test Id, get from login in the future
      var hidden = sessionStorage.getItem("accountType")
      // var hidden = document.getElementById("test-ID");
      var url = "http://18.220.46.51:3000/api/applicant/" + this.applicant;
      var IDs = []
      this.http.get(url).subscribe(
        data => { 
          // var available_jobs = this.http.get(data["availableJobs"].split("")
          for (var i = 0; i < data["hireRequests"].length; i++){
  
            var id = data["hireRequests"][i].split("#")[1].toString()
            var n_url = "http://18.220.46.51:3000/api/Job/" + id 
            this.http.get(n_url).subscribe(
              n_data => {
                this.jobs.push(n_data)
              })
          }
          
        })
      // // console.log(this.available_jobs)
    }
  
    } 
 
  
  viewJob(id) {
    if (this.accountType == "applicant") {
      sessionStorage.setItem("canAcceptJob", "true")
    } 
    this.router.navigate(["/job/" + id])
  }  
}
