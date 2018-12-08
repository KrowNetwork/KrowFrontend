import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
// import {SearchService} from "../service/search.service"
import { ActivatedRoute } from '@angular/router';
import {IndeedSearchService} from "../service/indeed-search.service"
@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})
export class SearchJobComponent implements OnInit {

  constructor(
    // public search: SearchService,
    private route: ActivatedRoute,
    public search: IndeedSearchService
  ) { }

  ngOnInit() {
  }

  go(term) {
    this.search.go(term)

  }

}
