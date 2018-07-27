import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { CreateUserService } from '../../service/create-user.service';
import { CustomHttpService } from '../../service/custom-http.service';

@Component({
  selector: 'app-in-progress-jobs',
  templateUrl: './in-progress-jobs.component.html',
})

export class InProgressJobsComponent implements OnInit {

  user: string;
  in_progress_jobs = []
  has_jobs = true
  msg = undefined

  constructor(
    private http: CustomHttpService
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
        if (data["inprogressJobs"].length == 0 || data["inprogressJobs"] === undefined) {
          this.has_jobs = false
        }
        // var available_jobs = this.http.get(data["availableJobs"].split("")
        for (var i = 0; i < data["inprogressJobs"].length; i++){

          var id = data["inprogressJobs"][i].split("#")[1].toString()
          var n_url = "http://18.220.46.51:3000/api/Job/" + id 
          this.http.get(n_url).subscribe(
            n_data => {
              this.in_progress_jobs.push(
                {
                  title: n_data["title"],
                  jobID: n_data["jobID"]
                }
                
              )
              
            })
        }
       
      })


    
  }

}

