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
    // console.log(this.apiKey)
    // console.log("c")

    // console.log(this.head("http://18.200.46.51:3000/Applicant/352fa0c7-5921-4782-b476-43e97f9295d1"))

  }

  // addToken(token) {
  //   this.token = token;
  // }

  getKey() {
    return this.http.get("http://52.15.219.10:4200/hckey?token=" + this.token)
    .map((res: Response) => res)
      // console.log(this.apiKey)
    
  }

  // createAuthorizationHeader(headers: Headers) {
  //   headers.append("x-api-key", this.apiKey) 
  // }

  handlerFct(key) {
    // console.log(key)
    this.apiKey = key
  }

  get(url) {
    // let headers = new Headers();
    return this.apiKey.subscribe(
      data => {
         this.http.get(url, {
          headers: new HttpHeaders().set("x-api-key", data["api"])
        });
      }
    )
    
  }

  post(url, data) {
    this.apiKey.map((res: Response) => {
      var x = new HttpHeaders({"x-api-key":res["api"]})
      console.log("x")
      console.log(x)
      return this.http.post(url, data, {
        headers: x
      });
    })
  }

  head(url) {
    return this.apiKey.map((res: Response) => {
      var x = new HttpHeaders()
      x.append("x-api-key", res["api"].toString())
      x.append("test", "yuh")
      // console.log("x")
      // console.log(x.get("x-api-key"))
       this.http.head(url,  {
        headers: x
      });
    })
  }

  put(url, data) {
    return this.apiKey.subscribe(
      data => {
         this.http.put(url, data, {
          headers: new HttpHeaders().set("x-api-key", data["api"])
        });
      }
    )
  }
  
}