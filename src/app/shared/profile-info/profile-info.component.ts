import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})

export class ProfileInfoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  updateInfo(children) {
    // Test vatiable, get userId from login
    var test = document.getElementById("test-ID");
    var ID = test.attributes[3].value;
    var id = ID.toString()[6].toString() + ID.slice(7).toLowerCase().toString();

    // Url to API
    var url = "http://18.220.46.51:3000/api/" + id + "/" + ID;

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

      var url = "http://18.220.46.51:3000/api/Employer/" + ID;

      // Get Data
      this.http.get(url).subscribe(
        data => {

        console.log(data);

          // Display data fetched from API
          employerName.children[1].children[0].attributes[4].value = data["employerName"];
          description.children[1].children[0].attributes[4].value = data["description"];
          document.getElementById("address").attributes[4].value = data["address"];
          document.getElementById("city").attributes[4].value = data["city"];
          document.getElementById("state").attributes[4].value = data["state"];
          document.getElementById("country").attributes[4].value = data["country"];
          document.getElementById("phoneNumber").attributes[4].value = data["phoneNumber"];
          document.getElementById("email").attributes[4].value = data["email"];

          for(var i = 0; i < data["links"].length; i++){
            var curr = data["links"][i];
            if(curr["type"] == "FACEBOOK"){
              document.getElementById("urlFACEBOOK").attributes[4].value = curr["url"];
            }
            else if(curr["type"] == "TWITTER"){
              document.getElementById("urlTWITTER").attributes[4].value = curr["url"];
            }
            else if(curr["type"] == "LINKEDIN"){
              document.getElementById("urlLINKEDIN").attributes[4].value = curr["url"];
            }
            else if(curr["type"] == "WEBSITE"){
              document.getElementById("urlWEBSITE").attributes[4].value = curr["url"];
            }
          }

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

      var url = "http://18.220.46.51:3000/api/Applicant/" + ID;

      // Get Data
      this.http.get(url).subscribe(
        data => {

          console.log(data);
          // Display data fetched from API
          firstName.children[1].children[0].attributes[4].value = data["firstName"];
          lastName.children[1].children[0].attributes[4].value = data["lastName"];
          document.getElementById("address").attributes[4].value = data["address"];
          document.getElementById("city").attributes[4].value = data["city"];
          document.getElementById("state").attributes[4].value = data["state"];
          document.getElementById("country").attributes[4].value = data["country"];
          document.getElementById("phoneNumber").attributes[4].value = data["phoneNumber"];
          document.getElementById("email").attributes[4].value = data["email"];

          for(var i = 0; i < data["links"].length; i++){
            var curr = data["links"][i];
            if(curr["type"] == "FACEBOOK"){
              document.getElementById("urlFACEBOOK").attributes[4].value = curr["url"];
            }
            else if(curr["type"] == "TWITTER"){
              document.getElementById("urlTWITTER").attributes[4].value = curr["url"];
            }
            else if(curr["type"] == "LINKEDIN"){
              document.getElementById("urlLINKEDIN").attributes[4].value = curr["url"];
            }
            else if(curr["type"] == "WEBSITE"){
              document.getElementById("urlWEBSITE").attributes[4].value = curr["url"];
            }
          }

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