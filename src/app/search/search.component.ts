import { Component, OnInit } from '@angular/core';
import {SearchService} from "../service/search.service"
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    public search: SearchService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let term = this.route.snapshot.queryParams['term'];
    this.search.test()
  }

}
