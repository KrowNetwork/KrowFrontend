import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  updateInfo(event) {
    // Test vatiable, get userId from login
    var userId = "SAMPLEAPPLICANT"

    // Url to API
    var url = "http://18.220.46.51:3000/api/Applicant/" + userId;

    // Get current Data
    this.http.get(url).subscribe(
      data => {
        // Get element id that triggered event
        var valueToChange = event.target.id.toString();

        // Check for empty entry
        if(event.target.value == ""){
          console.log("Empty Entry");
          // Return to old state
          event.target.value = data[valueToChange];
          return;
        }
        
        // Check if url
        if(valueToChange.slice(0, 3) == "url"){
          var urls = ["F","T","L","W"];
          var index = urls.indexOf(valueToChange[3]);
          //TODO: index
          // Change data value
          data[valueToChange] = event.target.value;
          console.log(index);
          return;
        }
        else{
          // Change data value
          data[valueToChange] = event.target.value;
        }

        // Get timestamp and change data timestamp
        var timestamp = new Date();
        data["lastUpdated"] = timestamp;

        // Update entry
        this.http.put(url, data).subscribe(
          data => {
            console.log(data[valueToChange]);
          }, // Catch Errors
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log("Client-side error occured.");
            } else {
              console.log("Server-side error occured.");
            }
          }
        );
      }, // Catch Errors
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );
  };

  ngOnInit() {
    // Test Id, get from login in the future
    var test = document.getElementById("test-ID");
    var ID = test.attributes[3].value;
    if(ID == "SAMPLEEMPLOYER"){

      // Set Company/Name 
      document.getElementById("app-responsive-component-profile").innerText = "Company";

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

      // Get Data
      this.http.get("http://18.220.46.51:3000/api/Employer/" + ID).subscribe(
        data => {

          //TODO: Figure out multiple "url" links and dividing them up
          // Display data fetched from API
          employerName.children[1].children[0].attributes[4].value = data["employerName"];
          description.children[1].children[0].attributes[4].value = data["description"];
          document.getElementById("address").attributes[4].value = data["address"];
          document.getElementById("city").attributes[4].value = data["city"];
          document.getElementById("state").attributes[4].value = data["state"];
          document.getElementById("country").attributes[4].value = data["country"];
          document.getElementById("phoneNumber").attributes[4].value = data["phoneNumber"];
          document.getElementById("email").attributes[4].value = data["email"];
          document.getElementById("url").attributes[4].value = data["url"];

          // Test: Log Class
          console.log(data["$class"].split(".")[3].toUpperCase());
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
    else if(ID == "SAMPLEAPPLICANT"){

      // Set Company/Name 
      document.getElementById("app-responsive-component-profile").innerText = "Name";

      // Change First input value, id, title to match first name
      var firstName = document.getElementById("app-responsive-component-profile-first");
      firstName.children[0].innerHTML = "First";
      firstName.children[1].children[0].attributes[2].value = "Will";
      firstName.children[1].children[0].attributes[1].value = "firstName";

      // Change Second input value, id, title to match last name
      var lastName = document.getElementById("app-responsive-component-profile-second");
      lastName.attributes[1].value = "col-lg-6";
      lastName.children[0].innerHTML = "Last";
      lastName.children[1].children[0].attributes[2].value = "Smith";
      lastName.children[1].children[0].attributes[1].value = "lastName";

      // Get Data
      this.http.get("http://18.220.46.51:3000/api/Applicant/" + ID).subscribe(
        data => {

          //TODO: Figure out multiple "url" links and dividing them up
          // Display data fetched from API
          firstName.children[1].children[0].attributes[4].value = data["firstName"];
          lastName.children[1].children[0].attributes[4].value = data["lastName"];
          document.getElementById("address").attributes[4].value = data["address"];
          document.getElementById("city").attributes[4].value = data["city"];
          document.getElementById("state").attributes[4].value = data["state"];
          document.getElementById("country").attributes[4].value = data["country"];
          document.getElementById("phoneNumber").attributes[4].value = data["phoneNumber"];
          document.getElementById("email").attributes[4].value = data["email"];
          document.getElementById("urlW").attributes[4].value = data["url"];

          // Test: Log Class
          console.log(data["$class"].split(".")[3].toUpperCase());
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
  }
}