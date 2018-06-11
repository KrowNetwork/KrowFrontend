import { Component, Input, OnInit }  from '@angular/core';

import { InterfaceComponent } from '../interface-component.component';

@Component({
  templateUrl: `./job-search-main.component.html`,
  styleUrls: ['./job-search-main.component.css'],
})
export class JobSearchMainComponent implements InterfaceComponent, OnInit {
  @Input() data: any;

  ngOnInit() {
  }
}