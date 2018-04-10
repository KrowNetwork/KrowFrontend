import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  updateApplicantInfo(event) {
    
  };

  ngOnInit() {
    // Test Id, get from login in the future
    var test = document.getElementById("test-ID");
    var ID = test.attributes[3].value;
    if(ID == "SAMPLEEMPLOYER"){
      this.http.get("http://18.220.46.51:3000/api/Employer/" + ID).subscribe(
        data => {
          //TODO: Figure out multiple "url" links and dividing them up
          document.getElementById("company-websiteURL").attributes[4].value = data["url"];
          document.getElementById("description-text").attributes[4].value = data["description"];
          document.getElementById("company-name-text").attributes[4].value = data["employerName"];
          document.getElementById("company-phoneNumber").attributes[4].value = data["phoneNumber"];
          document.getElementById("company-email").attributes[4].value = data["email"];
          document.getElementById("personal-address").attributes[4].value = data["address"];
          document.getElementById("personal-city").attributes[4].value = data["city"];
          document.getElementById("personal-state").attributes[4].value = data["state"];
          document.getElementById("personal-country").attributes[4].value = data["country"];

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
    else if(ID == "SAMPLEAPPLICANT"){
      document.getElementById("app-responsive-component-profile").innerText = "Name";

      var firstName = document.getElementById("app-responsive-component-profile-first");
      firstName.children[0].innerHTML = "First";
      firstName.children[1].children[0].attributes[2].value = "Will";

      var lastName = document.getElementById("app-responsive-component-profile-second");
      lastName.attributes[1].value = "col-lg-6";
      lastName.children[0].innerHTML = "Last";
      lastName.children[1].children[0].attributes[2].value = "Smith";

      var socialChildren = document.getElementById("app-responsive-social-div").children;
      socialChildren[0].setAttribute("style", "display: none"); 
      socialChildren[1].setAttribute("style", "display: none");
      socialChildren[2].setAttribute("style", "display: none");
      socialChildren[4].setAttribute("style", "display: none");

      this.http.get("http://18.220.46.51:3000/api/Applicant/" + ID).subscribe(
        data => {
          //TODO: Figure out multiple "url" links and dividing them up
          document.getElementById("app-responsive-component-profile-second").children[1].children[0].attributes[4].value = data["lastName"];
          document.getElementById("app-responsive-component-profile-first").children[1].children[0].attributes[4].value = data["firstName"];
          document.getElementById("personal-address").attributes[4].value = data["address"];
          document.getElementById("personal-city").attributes[4].value = data["city"];
          document.getElementById("personal-state").attributes[4].value = data["state"];
          document.getElementById("personal-country").attributes[4].value = data["country"];
          document.getElementById("company-phoneNumber").attributes[4].value = data["phoneNumber"];
          document.getElementById("company-email").attributes[4].value = data["email"];

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