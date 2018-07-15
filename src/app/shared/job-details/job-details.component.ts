import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { CreateUserService } from '../../service/create-user.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private createUser: CreateUserService,
    private activatedRoute: ActivatedRoute
  ) { }

  title: string;
  description: string;
  location: string;
  tags: string;
  created: string;
  lastUpdated: string; 
  startDate: string;
  requestCompletedDate: string;
  endDate: string; 
  jobType: string;
  payment: string;
  paymentType: string;
  employerID: string;

  updateInfo(children) {
    // this.user = localStorage.getItem("CognitoIdentityServiceProvider.682kbp7jv1l5a01lojmehrm2a2.LastAuthUser");
    this.activatedRoute.params.subscribe(params => console.log(params));
    // Test Id, get from login in the future
    var hidden = document.getElementById("test-ID");
    var profileType = hidden.attributes["value"].value;

    // Url to API
    // var url = "http://18.220.46.51:3000/api/" + profileType + "/" + this.user;

    // Get current Data
  //   this.http.get(url).subscribe(
  //     data => {
  //       var change = false;
  //       for(var i = 0; i < children.length; i++){
  //         var event = children[i].children[1].children[0];

  //         // Get element id that triggered event
  //         var valueToChange = event.attributes[1].value;

  //         // Value of element
  //         var elValue = event.value;    

  //         // Check if values match, in which case, do nothing
  //         if(data[valueToChange] != elValue){

  //           // Check for empty entry
  //           if(elValue == ""){
  //             continue;
  //           }
            
  //           // Check if url, in which case, map as json
  //           else if(valueToChange.slice(0, 3) == "url"){
  //             var found = false;
  //             // Loop through current links looking for a match to update
  //             for(var k = 0; k < data["links"].length; k++){
  //               if(data["links"][k]["type"][0] == valueToChange[3]){
  //                 if(data["links"][k]["url"] != elValue){
  //                   data["links"][k]["url"] = elValue;
  //                   change = true;
  //                 }
  //                 found = true;
  //               }
  //             }
  //             // If no matches are found, create new instance
  //             if(found == false){
  //               var type = valueToChange.slice(3);
  //               data["links"].push(
  //                 {
  //                   $class: "network.krow.participants.Link",
  //                   url: elValue,
  //                   type: type,
  //                 }
  //               )
  //               change = true;
  //             }
  //           }
  //           else{
  //             // Change data value
  //             data[valueToChange] = elValue;
  //             change = true;
  //           }
  //         }
  //       }

  //       if(change != false){

  //         // Get timestamp and change data timestamp
  //         var timestamp = new Date();
  //         data["lastUpdated"] = timestamp;

  //         // Update entry
  //         this.http.put(url, data).subscribe(
  //           data => {
  //           }, // Catch Errors
  //           (err: HttpErrorResponse) => {
  //             if (err.error instanceof Error) {
  //               console.log("Client-side error occured.");
  //             } else {
  //               console.log("Server-side error occured.");
  //             }
  //           }
  //         );
  //       }
  //     }, // Catch Errors
  //     (err: HttpErrorResponse) => {
  //       if (err.error instanceof Error) {
  //         console.log("Client-side error occured.");
  //       } else {
  //         console.log("Server-side error occured.");
  //       }
  //     }
  //   );
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve('resolved');
  //     }, 500);
  //   });
  // };
  }
  load(jobID) {
    var url = "http://18.220.46.51:3000/api/job" + "/" + jobID
    // Set Company/Name 
    document.getElementById("app-responsive-component-profile").innerText = "Job";

    // Change First input value, id, title to match employer name
    var employerName = document.getElementById("app-responsive-component-profile-first");
    employerName.children[0].innerHTML = "Company Name";
    employerName.children[1].children[0].attributes[2].value = "Company Name";
    employerName.children[1].children[0].attributes[1].value = "employerName";

    // Change Second input value, id, title to match description
    var description = document.getElementById("app-responsive-component-profile-second");
    description.children[0].innerHTML = "Description";
    description.children[1].children[0].attributes[2].value = "Company Description";
    description.children[1].children[0].attributes[1].value = "description";

    var tags = document.getElementById("app-responsive-component-profile-third");
    tags.children[0].innerHTML = "Tags";
    tags.children[1].children[0].attributes[2].value = "Tags";
    tags.children[1].children[0].attributes[1].value = "tags";


    // Get Data
    this.http.get(url).subscribe(
      data => {
        // Display data fetched from API
        this.title = data["title"];
        this.description = data["description"];
        this.location = data["location"];
        this.tags = data["tags"];
        this.created = data["created"];
        this.lastUpdated = data["lastUpdated"];
        this.startDate = data["startDate"];
        this.employerID = data["employerID"];

        // title: string;
        // description: string;
        // location: string;
        // tags: string;
        // created: string;
        // lastUpdated: string; 
        // startDate: string;
        // requestCompletedDate: string;
        // endDate: string; 
        // jobType: string;
        // payment: string;
        // paymentType: string;
        // employerID: string;

        // Split url links
        // for(var i = 0; i < data["links"].length; i++){
        //   var curr = data["links"][i];
        //   if(curr["type"] == "FACEBOOK"){
        //     this.urlFACEBOOK = curr["url"];
        //   }
        //   else if(curr["type"] == "TWITTER"){
        //     this.urlTWITTER = curr["url"];
        //   }
        //   else if(curr["type"] == "LINKEDIN"){
        //     this.urlLINKEDIN = curr["url"];
        //   }
        //   else if(curr["type"] == "WEBSITE"){
        //     this.urlWEBSITE = curr["url"];
        //   }
        // }
      }, // Catch Errors
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.load(params["jobID"]));
    
  }

}

