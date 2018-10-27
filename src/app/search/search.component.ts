import { Component, OnInit } from '@angular/core';
import {SearchService} from "../service/search.service"
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    public search: SearchService
  ) { }

  ngOnInit() {
    this.search.test()
  }

}
