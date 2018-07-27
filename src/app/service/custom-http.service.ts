import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class CustomHttpService{

  apiKey = undefined;
  token = this.token = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt." + localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser") + ".accessToken");

  constructor(private http: HttpClient) {

    this.apiKey = this.getKey()
    console.log(this.apiKey)
    // console.log(v)
    // console.log("c")

    // console.log(this.head("http://18.200.46.51:3000/Applicant/352fa0c7-5921-4782-b476-43e97f9295d1"))

  }

  // addToken(token) {
  //   this.token = token;
  // }

  getKey() {
    return this.http.get("http://52.15.219.10:4200/hckey?token=" + this.token)
    // .map((res: Response) => {
    //   this.apiKey = res;
    //   return this.apiKey;
    // })
      // console.log(this.apiKey)
    
  }

  // createAuthorizationHeader(headers: Headers) {
  //   headers.append("x-api-key", this.apiKey) 
  // }

  handlerFct(key) {
    // console.log(key)
    this.apiKey = key
  }

  get(url, data=undefined) {
    // let headers = new Headers();
    if (data != undefined) {
      return this.apiKey.flatMap(d => {
        return this.http.get(url, {headers: {"x-api-key": d["api"]}, params: data["parameters"]});
    })
    }
    return this.apiKey.flatMap(d => {
      return this.http.get(url, {headers: {"x-api-key": d["api"]}});
  })
    
  }

  post(url, data) {
    return this.apiKey.flatMap(d => {
      return this.http.post(url, data, {headers: {"x-api-key": d["api"]}});
  })
  }

  head(url, options=undefined) {
    if (options != undefined) {
      return this.apiKey.flatMap(d => {
        return this.http.head(url, {headers: {"x-api-key": d["api"]}, observe: options["observe"]});
    })
    }
    return this.apiKey.flatMap(d => {
        return this.http.head(url, {headers: {"x-api-key": d["api"]}});
    })
  }

  put(url, data) {

    return this.apiKey.flatMap(d => {
      return this.http.put(url, data, {headers: {"x-api-key": d["api"]}});

  })
  
}
}