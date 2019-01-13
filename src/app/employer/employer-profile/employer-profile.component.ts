import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UserLoginService } from "../../shared/service/user-login.service";
@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css']
})
export class EmployerProfileComponent implements OnInit {

  constructor(
    public userService: UserLoginService,
    private router: Router,
  ) {
    this.userService.isAuthenticated(this);
    

  }
   isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn) {
      // sessionStorage.setItem("redirectBack", this.router.url)
        this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

}
