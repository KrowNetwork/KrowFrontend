import { Injectable } from '@angular/core';
import { CustomHttpService } from "./custom-http.service"
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    public http: CustomHttpService
  ) { 
  }
  // test() {
  //   console.log("adgfasdf")
  //   this.http.search("tucker").subscribe(
  //     data => {
  //       console.log(JSON.stringify(data))
  //     }
  //   )
  // }

  search(term) {
    return this.http.search(term)
  }
  
}
