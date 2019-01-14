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
    console.log(this.token)
    if (!this.token) {
      this.token = "share"
      console.log("yerr" + this.token)
    }
    this.apiKey = this.getKey()
    // console.log(this.apiKey)
    // // console.log(v)
    // // console.log("c")

    // // console.log(this.head("http://18.200.46.51:3000/Applicant/352fa0c7-5921-4782-b476-43e97f9295d1"))

  }

  // addToken(token) {
  //   this.token = token;
  // }

  searchJob(term, location) {
    return this.http.get("https://api.krownetwork.com/search-jobs", {params: {q: term, location: location}})
  }
  getJob(name) {
    return this.http.get("https://api.krownetwork.com/get-job", {params: {name: name}})
  }

  getKey() {
    return this.http.get("https://api.krownetwork.com/hckey?token=" + this.token)
    // .map((res: Response) => {
    //   this.apiKey = res;
    //   return this.apiKey;
    // })
      // // console.log(this.apiKey)
    
  }

  // createAuthorizationHeader(headers: Headers) {
  //   headers.append("x-api-key", this.apiKey) 
  // }

  handlerFct(key) {
    // // console.log(key)
    this.apiKey = key
  }

  rpost(url, formData, params) {
    var x = this.http.post(url, formData, {params: {folder: params["folder"], id: params["id"]}})
    return x
  }

  get(url, data=undefined) {
    // console.log(this.token)
    var oUrl = "https://api.krownetwork.com/g?url=" + url + "&token=" + this.token
    console.log(oUrl)
    // let headers = new Headers();
     var x =  this.http.get(oUrl, data);
      console.log(x)
      return x
  }

  rget(url, data=undefined) {
    // console.log(this.token)
    var oUrl = url
    // console.log(oUrl)
    // let headers = new Headers();
     var x =  this.http.get(oUrl, data);
      // console.log(x)
      return x
  }

  createFolder(url, params) {
    // console.log(this.token)
    var oUrl = url
    // console.log(oUrl)
    // let headers = new Headers();
     var x =  this.http.get(oUrl, {params: {
       folder: params["folder"],
       id: params["id"],
       bufferString: params["bufferString"]
     }});
      // console.log(x)
      return x
  }

  query(data) {
    var url = "https://api.krownetwork.com/query?token=" + this.token
    console.log(url)
    return this.http.post(url, data)
  }

  search(term) {
    console.log(term)
    var oUrl = "https://api.krownetwork.com/search?term=" + term + "&key=dgf463d4-4fg5-55la-3z0f-7c78ft9s9z64"
    console.log(oUrl)
    // let headers = new Headers();
   return this.http.get(oUrl);
  }

  post(url, data) {
    var oUrl = "https://api.krownetwork.com/p?url=" + url + "&token=" + this.token
      return this.http.post(oUrl, data)
  }

  post_(url, data) {
    var oUrl = "https://api.krownetwork.com/compare?token=" + this.token
      return this.http.post(oUrl, data)
  }

  head(url, options=undefined) {
    var oUrl = "https://api.krownetwork.com/h?url=" + url
    // console.log(oUrl)
    return this.http.get(oUrl);
  }




    // if (options != undefined) {
    //   return this.apiKey.flatMap(d => {
    //     return this.http.head(url, {headers: {"x-api-key": d["api"]}, observe: options["observe"]});
    // })
    // }
    // return this.apiKey.flatMap(d => {
    //     return this.http.head(url, {headers: {"x-api-key": d["api"]}});
    // })
  

  put(url, data) {
    var oUrl = "https://api.krownetwork.com/pu?url=" + url + "&token=" + this.token

    return this.apiKey.flatMap(d => {
      return this.http.post(oUrl, data);

  })
  
}
}