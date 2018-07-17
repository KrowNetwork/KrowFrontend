import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../../service/user-login.service';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { map } from 'rxjs/operators/map';

declare var require: any;

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.component.html',
  styleUrls: ['./job-profile.component.css']
})
export class JobProfileComponent implements OnInit {
  switchTo: string;
  btnText: string;
  user: string;
  x = undefined
  
  constructor(public router: Router, public userService: UserLoginService, public http: HttpClient) {
    
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
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
    this.x = this.confirmUserType()
    console.log(this.x)
    if (this.x.subscribe(this.x == this.user)) {
      this.btnText = "Find Job"
    }
  }

  
  confirmUserType() {
    return this.http.head("http://18.220.46.51:3000/api/Applicant/" + this.user).pipe(map((res: Response) => {

      this.x = res.json();
      return this.x }));
  }
  goToProfile() {
    this.router.navigate([sessionStorage.getItem("accountType").toLowerCase() + "/profile-info"])
  }

  bigBtn() {
    if (this.btnText == "Find Job")
      this.router.navigate(["applicant/job-search"])
    else
      this.router.navigate(["employer/post-job"])      
  }

}
