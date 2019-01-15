import { Component, OnInit } from '@angular/core';
import { CustomHttpService } from "../../shared/service/custom-http.service"

@Component({
  selector: 'app-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.css']
})
export class ManageJobsComponent implements OnInit {
  user: string
  response = []
  constructor(
    public http: CustomHttpService
  ) { 
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")  
  }

  ngOnInit() {
    this.http.rget("https://api.krownetwork.com/get-employer-folders?id=" + this.user).subscribe(
      data => {
        this.response = data["response"];
        console.log(data)
      }
    )
  }

}
