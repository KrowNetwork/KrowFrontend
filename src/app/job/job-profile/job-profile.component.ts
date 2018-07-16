import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../../service/user-login.service';

declare var require: any;

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.css']
})
export class JobProfileComponent implements OnInit {
  switchTo: string;
  btnText: string;
  constructor(public router: Router, public userService: UserLoginService) {
    this.userService.isAuthenticated(this);
    console.log("Job Component: constructor");
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn) {
        this.router.navigate(['/login']);
    }
}

scrollup(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  ngOnInit() {
    this.switch()
  }

  switchSession() {
    if (sessionStorage.getItem("accountType") == "Employer"){
      sessionStorage.setItem("accountType", "Applicant")
    } else {
      sessionStorage.setItem("accountType", "Employer")
    }
    this.switch()
  }

  switch() {
    if (sessionStorage.getItem("accountType") == "Employer"){
      this.switchTo = "Applicant"
      this.btnText = "Post Job"
    } else {
      this.switchTo = "Employer"
      this.btnText = "Find Job"
    }
  }

  goToProfile() {
    this.router.navigate([sessionStorage.getItem("accountType").toLowerCase() + "/profile-info"])
  }

  bigBtn() {
    if (sessionStorage.getItem("accountType") == "Employer")
      this.router.navigate(["employer/post-job"])
    else
      this.router.navigate(["applicant/job-search"])
  }

}
