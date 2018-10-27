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
    this.http.search("18.220.46.51:4200/search?term=tucker&key=dgf463d4-4fg5-55la-3z0f-7c78ft9s9z64&sort=piss").subscribe(
      data => {
        console.log(data)
      }
    )
  }
  
}
