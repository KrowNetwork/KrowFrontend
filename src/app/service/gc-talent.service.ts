import { Injectable } from '@angular/core';
import { CustomHttpService } from "./custom-http.service"
import { google } from "googleapis"

@Injectable({
  providedIn: 'root'
})
export class GcTalentService {
  
  constructor(
    private http: CustomHttpService
  ) { }

  search(term, location=undefined) {
    
  }

}
