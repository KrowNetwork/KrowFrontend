import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';

@Component({
  selector: 'app-completed-jobs',
  templateUrl: './completed-jobs.component.html',
})
export class CompletedJobsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Test Id, get from login in the future
    var test = document.getElementById("test-ID");
    var ID = test.attributes[3].value;
    if(ID == "SAMPLEEMPLOYER"){
      this.http.get("http://18.220.46.51:3000/api/JOB/SAMPLEJOB/").subscribe(
        data => {

          console.log(data["$class"]);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
        }
      );
    }
  }

}
