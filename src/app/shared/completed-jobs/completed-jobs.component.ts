import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { CreateUserService } from '../../service/create-user.service';
import { CustomHttpService } from '../../service/custom-http.service';


@Component({
  selector: 'app-completed-jobs',
  templateUrl: './completed-jobs.component.html',
  // styleUrls: ['./available-jobs.component.css']

})
export class CompletedJobsComponent implements OnInit {

  user: string;
  completed_jobs = []
  has_jobs = true

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
        if (data["completedJobs"].length == 0 || data["completedJobs"] === undefined) {
          this.has_jobs = false
        }
        // var available_jobs = this.http.get(data["availableJobs"].split("")
        console.log(data["completedJobs"])
        for (var i = 0; i < data["completedJobs"].length; i++){

          var id = data["completedJobs"][i].split("#")[1].toString()
          var n_url = "http://18.220.46.51:3000/api/Job/" + id 
          this.http.get(n_url).subscribe(
            n_data => {
              this.completed_jobs.push(
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
