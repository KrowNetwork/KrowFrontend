import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.css']
})
export class ApplicantProfileComponent implements OnInit {

  constructor() { }

  openJobs(event) {
    var el = event.target.parentElement.children[1];
    var currStyle = el.attributes[1].value;
    console.log(currStyle);
    if(currStyle == "display: block"){
      console.log(1);
      event.target.parentElement[1].value = "inner-child";
      el.style = "display: none";
      console.log(el.style);
    }
    else if(currStyle == "display: none"){      
      console.log(2);
      el.style = "display: block";
      console.log(el.style);
    }
  }

  // IMAGES
  LOADER = require("../../../images/loader.gif");
  LOGO1 = require("../../../images/icon.png");
  LOGO2 = require("../../../images/icon2.png");
  KROW_LOGO = require("../../../images/krow-logo.png");
  KROW_HEADER_2 = require("../../../images/krow-header-2.png");

  ngOnInit() {
  }

}
