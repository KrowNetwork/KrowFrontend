import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  navigateApplicant(){
    this.router.navigate(["applicant-profile"]);
  }

  navigateEmployer(){
    this.router.navigate(["employer-profile"]);
  }

  ngOnInit() {
  }

}
