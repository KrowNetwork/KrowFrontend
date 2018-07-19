import { Component } from '@angular/core';
import { log } from 'util';
import { splitAtColon } from '../../../../node_modules/@angular/compiler/src/util';
import { log } from 'util';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';

@Component({
  selector: 'app-applicant-resume',
  templateUrl: './applicant-resume.component.html',
  styleUrls: ['./applicant-resume.component.css']
})
export class ApplicantResumeComponent  implements OnInit{
  hide_job_data = true
  completed_jobs = []
  terminated_jobs = []
  inProgress = []
  constructor(
		private http: HttpClient, 
    private router: Router
	) {
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
    this.id = this.router.url.split("/")[3]

    if (this.id !== undefined) {
      this.hide_job_data = false
      this.loadJobs()
    }

  }

  handleClicked(event){
    var currTarget = event.target.closest(".social-edit").children[1];
    var currStyle = currTarget.style;
    if(currStyle.display == "none"){
      currTarget.style = "display: inline";
    }
    else if(currStyle.display == "inline"){
      currTarget.style = "display: none";
    }
  }
  
  ngOnInit() {
    
  }

  loadJobs() {
    var url = "http://18.220.46.51:3000/api/Applicant/" + this.id 
    this.http.get(url).subscribe(
      data => {
        var x = [data["completedJobs"],  data["terminatedJobs"], data["inprogressJobs"]]
        var nd = []
        x.forEach(arr => {
          var d = []
          arr.forEach(job =>{
            job = job.split("#")[1]
            this.http.get("http://18.220.46.51:3000/api/Job/" + job).subscribe(
              z => {
                d.push({
                  title: z["title"],
                  jobID: z["jobID"]
                })
              })
          })
          nd.push(d)
        });
        this.completed_jobs = nd[0]
        this.terminated_jobs = nd[1]
        this.inProgress = nd[2]
        
      }
    )
    
  }

  goToJob(id) {
    this.router.navigate(["/job/" + id])
  }
  
}
