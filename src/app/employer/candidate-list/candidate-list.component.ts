import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { UserLoginService } from '../../shared/service/user-login.service';

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
    private route: ActivatedRoute,
    public userService: UserLoginService,
    private router: Router,
  ) { 
    this.userService.isAuthenticated(this);
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
    this.token = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt." + this.user + ".accessToken")
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn) {
      // sessionStorage.setItem("redirectBack", this.router.url)
        this.router.navigate(['/login']);
    }
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

  getUrl(folder, filename) {
    return this.http.get("https://api.krownetwork.com/signed-url", {params: {id: this.user, folder: folder, token: this.token, filename: filename}}).map(
      res => {
        console.log(res)
        return res["url"]
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
  async asyncForEach(array, callback) {
    for (var i = 0; i < array.length; i ++) {
      await callback(array[i])
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
    await this.asyncForEach(comparisons, async element => {
      element.score = (element.score * 100).toString().substr(0, 5);
      var signed_url = await this.getUrl(folder, element.title).toPromise()
      element.url = signed_url
      console.log(signed_url)
      this.candidate_data.push(element)
    });


    // this.http.get("https://api.krownetwork.com/get-employer-folder-data", {params: {id: this.user, folder: folder}}).subscribe(
    //   data => {
    //     console.log(data)
    //   }
    // )
    
  }

}
