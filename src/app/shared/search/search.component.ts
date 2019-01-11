import { Component, OnInit } from '@angular/core';
import {SearchService} from "../service/search.service"
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  people = []
  name = ""
  constructor(
    public search: SearchService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let term = this.route.snapshot.queryParams['term'];
    this.go(term)
  }

  go(term) {
    this.people = []
    // this.route.snapshot.queryParams['term'] = term
    // console.log(this.name)
    this.search.search(term).subscribe(
      data => {
        console.log(JSON.stringify(data));
        for (var i = 0; i < Object.keys(data).length; i ++) {
          data[i]["image"] = "https://krow-network-profile-pics.s3.us-east-2.amazonaws.com/pics/" + data[i].id + ".png"
          this.people.push(data[i])
        }
        console.log(this.people)
      }
    )
    
    
  }

}
