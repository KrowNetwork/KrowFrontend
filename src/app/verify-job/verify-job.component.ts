import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import { CustomHttpService } from "../service/custom-http.service"
import { DataShareService } from "../service/data-share.service"

@Component({
  selector: 'app-verify-job',
  templateUrl: './verify-job.component.html',
  styleUrls: ['./verify-job.component.css']
})
export class VerifyJobComponent implements OnInit {
  // @Input() name: string;
  showReq = false;
  showVer = false;
  email = ""
  name: String
  constructor(
    private router: Router,
    private http: CustomHttpService,
    private dataShare: DataShareService
  ) { }

  ngOnInit() {
    // console.log(this.router.url.split("/"))
    if (this.router.url.split("/")[2] == "requestVerification") {
      this.showReq = true
    } else {
      this.showVer = true
    }

    
  }

  sendVer() {
    console.log(this.email)
  }

  sendReq() {
    this.dataShare.shared.subscribe(data => this.name = data)
    this.name["email"] = this.email

    this.http.post("https://api.krownetwork.com/request-verification", this.name)
    console.log("Done")
  }

}
