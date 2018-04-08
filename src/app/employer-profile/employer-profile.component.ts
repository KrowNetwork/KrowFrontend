import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css']
})
export class EmployerProfileComponent implements OnInit {

  constructor() { }

  LOADER = require("../../images/loader.gif");
  LOGO1 = require("../../images/icon.png");
  LOGO2 = require("../../images/icon2.png");


  SCRIPT0 = require("../../js/jquery.min.js");
  SCRIPT1 = require("../../js/script.js");
  SCRIPT2 = require("../../js/wow.min.js");
  SCRIPT4 = require("../../js/parallax.js");
  SCRIPT5 = require("../../js/select-chosen.js");
  SCRIPT7 = require("../../js/tag.js");
  SCRIPT8 = require("../../js/maps3.js");
  
  ngOnInit() {
  }

}
