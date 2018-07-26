import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

@Injectable()
export class CustomHttpService{

  apiKey = ""
  token = this.token = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt." + localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser") + ".accessToken");

  constructor(private http: HttpClient) {

    this.http.post("http://52.15.219.10:4200/hckey", {"token": this.token}).subscribe(
      data => {
        this.apiKey = data["api"]
      }
    )

  }

  // addToken(token) {
  //   this.token = token;
  // }

  createAuthorizationHeader(headers: Headers) {
    headers.append("x-api-key", this.apiKey) 
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: new HttpHeaders().set("x-api-key", this.apiKey)
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: new HttpHeaders().set("x-api-key", this.apiKey)
    });
  }

  head(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.head(url, {
      headers: new HttpHeaders().set("x-api-key", this.apiKey)
    });
  }

  put(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(url, data, {
      headers: new HttpHeaders().set("x-api-key", this.apiKey)
    });
  }
}