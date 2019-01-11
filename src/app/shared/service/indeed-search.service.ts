import { Injectable } from '@angular/core';
// import rp from "request-promise"
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class IndeedSearchService {

  constructor(
    public http: HttpClient
  ) { }


  go(term) {
    var url = "https://www.indeed.com/jobs?q=t" + term + "&l="

    this.http.get(url).subscribe(
      data => {
        console.log(data)
      }
    )
  }
}