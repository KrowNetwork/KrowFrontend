import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  user = ""
  token = ""
  constructor(
    public http: HttpClient,
    private route: ActivatedRoute
  ) { 
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
    this.token = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.0379a201-001b-4010-9a04-93f4a2ca9370.accessToken")
  }

  getBase(folder) {
    return this.http.get("https://api.krownetwork.com/get-employer-folder-base", {params: {id: this.user, folder: folder, token: this.token}}).map(
      res => {
        var buff = new Buffer(res["results"][0]["data"])
        var base = JSON.parse(buff.toString())
        return base
      }
    )
  }
  
  compareSort(a, b) {
    if (a.score > b.score) {
      return -1
    } else if (a.score < b.score) {
      return 1
    } else {
      return 0
    }
  }
  candidate_data = []
  async ngOnInit() {
    var folder = this.route.snapshot.queryParamMap.get('job');

    var x = await this.getBase(folder).toPromise()
    console.log(x)
    var comparisons = x.comparisons
    comparisons.sort(this.compareSort)
    console.log(comparisons)
    comparisons.forEach(element => {
      element.score = (element.score * 100).toString().substr(0, 5);
      element.url = "https://storage.googleapis.com"
      this.candidate_data.push(element)
    });


    // this.http.get("https://api.krownetwork.com/get-employer-folder-data", {params: {id: this.user, folder: folder}}).subscribe(
    //   data => {
    //     console.log(data)
    //   }
    // )
    
  }

}
