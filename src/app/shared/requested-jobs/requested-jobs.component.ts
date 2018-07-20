import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { CreateUserService } from '../../service/create-user.service';

@Component({
  selector: 'app-requested-jobs',
  templateUrl: './requested-jobs.component.html',
})

export class RequestedJobsComponent implements OnInit {

  user: string;
  requested_jobs = []
  has_jobs = true

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    var url = "http://18.220.46.51:3000/api/"
    if (sessionStorage.getItem("accountType") == "applicant") {
      url += "Applicant/" + this.user
    } else if (sessionStorage.getItem("accountType") == "employer") {
      url += "Employer/" + this.user
    }

    var IDs = []
    this.http.get(url).subscribe(
      data => { 
        // var available_jobs = this.http.get(data["availableJobs"].split("")
        if (data["requestedJobs"].length == 0 || data["requestedJobs"] === undefined) {
          this.has_jobs = false
        }
        for (var i = 0; i < data["requestedJobs"].length; i++){

          var id = data["requestedJobs"][i].split("#")[1].toString()
          var n_url = "http://18.220.46.51:3000/api/Job/" + id 
          this.http.get(n_url).subscribe(
            n_data => {
              this.requested_jobs.push(
                {
                  title: n_data["title"]
                  jobID: n_data["jobID"]
                }
              )
            })
        }
        
      })

    
  }

}
