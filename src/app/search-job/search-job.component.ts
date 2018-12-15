import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
// import {SearchService} from "../service/search.service"
import { ActivatedRoute } from '@angular/router';
import {GcTalentService} from "../service/gc-talent.service"
@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})
export class SearchJobComponent implements OnInit {

  constructor(
    // public search: SearchService,
    private route: ActivatedRoute,
    public s: GcTalentService
  ) { }

  ngOnInit() {
  }

  go(term) {
    this.s.search(term)

  }

}
