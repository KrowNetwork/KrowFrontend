import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
// import {SearchService} from "../service/search.service"
import { ActivatedRoute, Router } from '@angular/router';
import {GcTalentService} from "../service/gc-talent.service"
@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})
export class SearchJobComponent implements OnInit {
  results = {
    matchingJobs: [],
    nextPageToken: ""
  }
  term = ""
  location = ""
  constructor(
    // public search: SearchService,
    private route: ActivatedRoute,
    public router: Router,
    public s: GcTalentService
  ) { }

  ngOnInit() {
   var urlTree = this.router.parseUrl(this.router.url);
   if (urlTree.queryParams["q"] !== undefined) this.term = urlTree.queryParams["q"]
   if (urlTree.queryParams["location"] !== undefined) this.location = urlTree.queryParams["location"]
    this.search(this.term, this.location)
  }


  go(term, location) {
    this.router.navigate(["/search-job"], { queryParams: { q: term, location: location } })
    this.search(this.term, this.location)
  }

  search(term, location) {
    var ret = this.s.search(term, location)
    ret.subscribe(data => {
      this.results.matchingJobs = data["matchingJobs"]
      this.results.nextPageToken = data["nextPageToken"]
      console.log(data)
    })
  }

  visit(name) {
    var id = name.split("/")[3]
    this.router.navigate(["/job/" + id])
  }

}
