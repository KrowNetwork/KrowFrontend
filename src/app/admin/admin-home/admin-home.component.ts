import { Component, OnInit } from '@angular/core';
import { UserLoginService } from "../../service/user-login.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(
    public userService: UserLoginService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.userService.isAdmin(this);
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn){
        this.router.navigate(['/admin-login']);
    }
}

  goUserSearch() {
    this.router.navigate(['/admin/user-search'])
  }

}
