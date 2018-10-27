import { Injectable } from '@angular/core';
import { CustomHttpService } from "../service/custom-http.service"
import 'rxjs/add/operator/map';

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
    this.http.search("tucker").subscribe(
      data => {
        console.log(data)
      }
    )
  }

  search(name) {
    return this.http.search(name)
  }
  
}
