import { Injectable } from '@angular/core';
import { CustomHttpService } from "../service/custom-http.service"

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    public http: CustomHttpService
  ) { 
  }
  test() {
    console.log("adgfasdf")
    this.http.search("18.220.46.51:4200/search?").subscribe(
      data => {
        console.log(data)
      }
    )
  }
  
}
