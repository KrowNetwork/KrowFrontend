import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { CreateUserService } from '../../service/create-user.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})

export class ProfileInfoComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private createUser: CreateUserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  user: string;
  first: string;
  second: string;
  address: string;
  city: string;
  state: string; 
  country: string;
  phoneNumber: string;
  email: string; 
  urlFACEBOOK: string;
  urlTWITTER: string;
  urlLINKEDIN: string;
  urlWEBSITE: string;
  disabled = undefined;
  id: string;
  updateInfo(children) {
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    // Test Id, get from login in the future
    var hidden = document.getElementById("test-ID");
    var profileType = hidden.attributes["value"].value;

    // Url to API
    var url = "http://18.220.46.51:3000/api/" + profileType + "/" + this.user;

    // Get current Data
    this.http.get(url).subscribe(
      data => {
        var change = false;
        for(var i = 0; i < children.length; i++){
          var event = children[i].children[1].children[0];

          // Get element id that triggered event
          var valueToChange = event.attributes[1].value;

          // Value of element
          var elValue = event.value;    

          // Check if values match, in which case, do nothing
          if(data[valueToChange] != elValue){

            // Check for empty entry
            if(elValue == ""){
              continue;
            }
            
            // Check if url, in which case, map as json
            else if(valueToChange.slice(0, 3) == "url"){
              var found = false;
              // Loop through current links looking for a match to update
              for(var k = 0; k < data["links"].length; k++){
                if(data["links"][k]["type"][0] == valueToChange[3]){
                  if(data["links"][k]["url"] != elValue){
                    data["links"][k]["url"] = elValue;
                    change = true;
                  }
                  found = true;
                }
              }
              // If no matches are found, create new instance
              if(found == false){
                var type = valueToChange.slice(3);
                data["links"].push(
                  {
                    $class: "network.krow.participants.Link",
                    url: elValue,
                    type: type,
                  }
                )
                change = true;
              }
            }
            else{
              // Change data value
              data[valueToChange] = elValue;
              change = true;
            }
          }
        }

        if(change != false){

          // Get timestamp and change data timestamp
          var timestamp = new Date();
          data["lastUpdated"] = timestamp;

          // Update entry
          this.http.put(url, data).subscribe(
            data => {
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
      }, // Catch Errors
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 500);
    });
  };

  async buttonPressed(event){
    event.target.attributes[2].value = true;
    event.target.style = "float:right; background-color:gray; border-color: gray; opacity=0.8";
    var children = event.target.closest("form").children[0].children;
    var result = await this.updateInfo(children);
    event.target.style = "background-color: #fb236a; border-color: #fb236a; float: right";
    event.target.closest("div").style = "display: none;";
    event.target.attributes[2].value = false;
  }

  changeHandler(event){
    event.target.closest("form").children[1].style = "display:show";
  }

  ngOnInit() {
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    // Test Id, get from login in the future
    var hidden = document.getElementById("test-ID");
    var profileType = hidden.attributes["value"].value;
    console.log(this.router.url)
    if(this.router.url.startsWith("/employer")){

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

      var url = "http://18.220.46.51:3000/api/Employer/" + this.user;

      // Get Data
      this.http.get(url).subscribe(
        data => {
          // Display data fetched from API
          this.first = data["employerName"];
          this.second = data["description"];
          this.address = data["address"];
          this.city = data["city"];
          this.state = data["state"];
          this.country = data["country"];
          this.phoneNumber = data["phoneNumber"];
          this.email = data["email"];

          // Split url links
          for(var i = 0; i < data["links"].length; i++){
            var curr = data["links"][i];
            if(curr["type"] == "FACEBOOK"){
              this.urlFACEBOOK = curr["url"];
            }
            else if(curr["type"] == "TWITTER"){
              this.urlTWITTER = curr["url"];
            }
            else if(curr["type"] == "LINKEDIN"){
              this.urlLINKEDIN = curr["url"];
            }
            else if(curr["type"] == "WEBSITE"){
              this.urlWEBSITE = curr["url"];
            }
          }
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
    else if(this.router.url.startsWith("/applicant")){
      this.activatedRoute.params.subscribe(params => {this.id = params["applicantID"]});
      console.log(this.id)
      if (this.user == this.id || this.id === undefined) {
      // if (sessionStorage.getItem("view") !== undefined && sessionStorage.getItem("view") == "potApplicant") {
        // this.id = this.user
        this.disabled = false
        this.id = this.user
        
      } else {
        this.disabled = true
      }
      console.log(this.id)

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

      var url = "http://18.220.46.51:3000/api/Applicant/" + this.id;

      // Get Data
      this.http.get(url).subscribe(
        data => {
          // Display data fetched from API
          this.first = data["firstName"];
          this.second = data["lastName"];
          this.address = data["address"];
          this.city = data["city"];
          this.state = data["state"];
          this.country = data["country"];
          this.phoneNumber = data["phoneNumber"];
          this.email = data["email"];

          // Split url links
          for(var i = 0; i < data["links"].length; i++){
            var curr = data["links"][i];
            if(curr["type"] == "FACEBOOK"){
              this.urlFACEBOOK = curr["url"];
            }
            else if(curr["type"] == "TWITTER"){
              this.urlTWITTER = curr["url"];
            }
            else if(curr["type"] == "LINKEDIN"){
              this.urlLINKEDIN = curr["url"];
            }
            else if(curr["type"] == "WEBSITE"){
              this.urlWEBSITE = curr["url"];
            }
          }
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
  is_disabled() {
    return this.disabled
  }
}