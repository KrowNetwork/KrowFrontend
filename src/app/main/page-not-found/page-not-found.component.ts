import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  PNFIMAGE = require("../../../images/404.png");

  ngOnInit() { 
  }

}
