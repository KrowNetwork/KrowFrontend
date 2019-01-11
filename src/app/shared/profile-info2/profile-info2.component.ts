import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { CreateUserService } from '../../shared/service/create-user.service';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import { log } from 'util';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-profile-info2',
  templateUrl: './profile-info2.component.html',
  styleUrls: ['./profile-info2.component.css']
})
export class ProfileInfo2Component implements OnInit {
  view_private: boolean;
  is_applicant: boolean;

  constructor(
    // public http: CustomHttpService,
    private createUser: CreateUserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    // todo - private v public

    if (sessionStorage.getItem("accountType") == "applicant") {
      this.is_applicant = true
    } else {
      this.is_applicant = false
    }

    // console.log(this.is_applicant)

    if (this.router.url.split("/")[3] === undefined) {
      this.view_private = true
    } else {
      this.view_private = false
    }
  
  
  }

  ngOnInit() {
  }

  removeModal() {
    // this.modalService.destroy()
  }

}
