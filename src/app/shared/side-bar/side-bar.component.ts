import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  UserLoginService
} from '../service/user-login.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  private _opened: boolean = false;

  id: string;
  loggedIn = false;
  userType: string;

  constructor(
    private router: Router,
    public userService: UserLoginService,
  ) { 
    this.userService.isAuthenticated(this);
  }

  ngOnInit() {
    this.id = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    this.userType = sessionStorage.getItem("accountType");
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (isLoggedIn) {
      this.loggedIn = true
      console.log(this.loggedIn)
      // sessionStorage.setItem("redirectBack", this.router.url)
      //   // this.router.navigate(['/login']);
    }
}

 
}
