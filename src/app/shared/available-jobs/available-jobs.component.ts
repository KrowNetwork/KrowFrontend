import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { CreateUserService } from '../../service/create-user.service';
import { CustomHttpService } from '../../service/custom-http.service';

@Component({
  selector: 'app-available-jobs',
  templateUrl: './available-jobs.component.html',
  styleUrls: ['./available-jobs.component.css']

})
export class AvailableJobsComponent implements OnInit {

  constructor(
    private http: CustomHttpService,
    private createUser: CreateUserService
  ) { }

  employer: string;
  available_jobs = []
  has_jobs = true
  ngOnInit() {
    this.employer = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    // Test Id, get from login in the future
    // var hidden = sessionStorage.getItem("accountType")
    // var hidden = document.getElementById("test-ID");
    var url = "http://18.220.46.51:3000/api/employer/" + this.employer;
    console.log("yur")
    var IDs = []
    this.available_jobs = []
    this.http.get(url).subscribe(
      data => { 
        if (data["availableJobs"].length == 0 || data["availableJobs"] === undefined) {
          this.has_jobs = false
        }
        // var available_jobs = this.http.get(data["availableJobs"].split("")
        for (var i = 0; i < data["availableJobs"].length; i++){

          var id = data["availableJobs"][i].split("#")[1].toString()
          var n_url = "http://18.220.46.51:3000/api/Job/" + id 
          this.http.get(n_url).subscribe(
            n_data => {
              if (n_data["applicantRequests"] !== undefined) {
                n_data["num_applicants"] = n_data["applicantRequests"].length
              } else {
                n_data["num_applicants"] = 0
              }
              
              this.available_jobs.push(n_data)
            })
        }
        
      })

    //   this.http.get(url).subscribe(
    //     data => {jsons.push(data)})
    // }
    // console.log(jsons[0].jobID)
    
  }

}
