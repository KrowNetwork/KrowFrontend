import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { S3Service } from "../../shared/service/s3.service"
import { FormControl, FormGroup } from '@angular/forms';
import { CustomHttpService } from '../../shared/service/custom-http.service';
import { e } from '@angular/core/src/render3';

@Component({
  selector: 'app-employer-edit',
  templateUrl: './employer-edit.component.html',
  styleUrls: ['./employer-edit.component.css']
})
export class EmployerEditComponent implements OnInit {
  imgURL: String;
  user: string;
  id: string;

  companyForm: FormGroup;
  contactForm: FormGroup;
  socialForm: FormGroup;

  company: string;
  location: string;
  description: string;
  year: string;
  phoneNumber: string;
  email: string;
  website: string;
  facebook: string;
  twitter: string;
  linkedin: string;

  size: number;
  jobType: number;
  keyWords = [];

  owner= false;
  forceLogin=false;
  curr_emp = false;

  isChanged = false;

  constructor(
    private router: Router,
    public s3service: S3Service,
    public http: CustomHttpService,
  ) { 
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    console.log(this.router.url.split("/"))
    if (this.router.url.split("/")[3] != undefined) {
      this.id = this.router.url.split("/")[3]
      this.owner = false 
      this.forceLogin = false
      if (sessionStorage.getItem("accountType") == "employer") {
        this.curr_emp = true
      }
    } else {
      this.id = this.user
      this.owner = true
      // this.userService.isAuthenticated(this);
    }
    // console.log("Applicant Component: constructor");
    this.companyForm = new FormGroup({
      company: new FormControl(this.company),
      jobType:  new FormControl(this.jobType),
      size: new FormControl(this.size),
      year: new FormControl(this.year),
      keyWords: new FormControl(this.keyWords),
      description: new FormControl(this.description)
    });

    this.contactForm = new FormGroup({
      phoneNumber: new FormControl(this.phoneNumber),
      email:  new FormControl(this.email),
      website: new FormControl(this.website),
      location: new FormControl(this.location)
    });

    this.socialForm = new FormGroup({
      facebook: new FormControl(this.facebook),
      twitter:  new FormControl(this.twitter),
      linkedin: new FormControl(this.linkedin)
    });
    
  }

  async ngOnInit() {
    this.imgURL = "https://krow-network-profile-pics.s3.us-east-2.amazonaws.com/pics/" + this.id +".png"

    var url = "http://18.220.46.51:3000/api/Employer/" + this.user;

      // Get Data
      this.http.get(url).subscribe(
        data => {

          console.log('data back', data)
          // Display data fetched from API
          this.company = data["employerName"];
          this.description = data["description"];
          this.size = data["size"];
          this.jobType = data["jobType"];
          this.year = data["year"];
          this.keyWords = data["keyWords"]
          this.location = data["location"]
          this.phoneNumber = data["phoneNumber"];
          this.email = data["email"];

          // Split url links
          for (var i = 0; i < data["links"].length; i++) {
            var curr = data["links"][i];
            if (curr["type"] == "FACEBOOK") {
              this.facebook = curr["url"];
            }
            else if (curr["type"] == "TWITTER") {
              this.twitter = curr["url"];
            }
            else if (curr["type"] == "LINKEDIN") {
              this.linkedin = curr["url"];
            }
            else if (curr["type"] == "WEBSITE") {
              this.website = curr["url"];
            }
          }

          console.log('company', this.company)
          this.companyForm.reset({
            company: this.company,
            jobType:  this.jobType,
            size: this.size,
            year: this.year,
            description: this.description
          });

          this.contactForm.reset({
            phoneNumber: this.phoneNumber,
            email:  this.email,
            website: this.website,
            location: this.location
          });
      
          this.socialForm.reset({
            facebook: this.facebook,
            twitter:  this.twitter,
            linkedin: this.linkedin
          });
          

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

  async updateEmployer(event){
    this.isChanged = false;
    console.log(this.companyForm.get('company').value)
    var url = "http://18.220.46.51:3000/api/Employer/" + this.user;

    let x = this;
    this.http.get(url).subscribe(
      data => {
        console.log('data', data)
        console.log(x.companyForm.get('keyWords'))
        data['employerName'] = x.companyForm.get('company').value;
        data['jobType'] = x.companyForm.get('jobType').value;
        data['size'] = x.companyForm.get('size').value;
        data['year'] = x.companyForm.get('year').value;
        data['keyWords'] = x.getKeyWords();
        // data['keyWords'] = [];
        data['description'] = x.companyForm.get('description').value;

        data['phoneNumber'] = x.contactForm.get('phoneNumber').value;
        data['email'] = x.contactForm.get('email').value;
        data['location'] = x.contactForm.get('location').value;

        if(data['links'].length == 0){
          data['links'] = [{
            type: 'FACEBOOK',
            url: ''
          },
          {
            type: 'TWITTER',
            url: ''
          },
          {
            type: 'LINKEDIN',
            url: ''
          },
          {
            type: 'WEBSITE',
            url: ''
          }]
        } else {
          data['links'] = [
            {
              type: 'FACEBOOK',
              url: x.socialForm.get('facebook').value
            },
            {
              type: 'TWITTER',
              url: x.socialForm.get('twitter').value
            },
            {
              type: 'LINKEDIN',
              url: x.socialForm.get('linkedin').value
            },
            {
              type: 'WEBSITE',
              url: x.contactForm.get('website').value
            }
          ]
        }


        x.http.put(url, data).subscribe(
          data => {
            console.log(data)
          }, // Catch Errors
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              // console.log("Client-side error occured.");
            } else {
              // console.log("Server-side error occured.");
            }
            console.log(err)
          }
        );
      }
    )
  }

  getKeyWords(){
    var collected_kws = document.getElementsByClassName("addedTag")
    var returned_kws = []
    console.log(collected_kws)

    for(var i = 0; i < collected_kws.length; i++){
      returned_kws.push(collected_kws[i].innerHTML.split("<")[0])
    }
    return returned_kws
  }

  removeProfilePic(){
    var x = this;
    const bucketName = 'krow-network-profile-pics';
    var s3 = this.s3service.getBucket(bucketName);

    s3.deleteObject(
      { 
        Key: "pics/" + this.user + ".png", 
        Bucket: bucketName,
        
      }, function (err, data) {
     if (err) {
       console.log(err, 'there was an error deleting your file');
       
     } else {
       console.log(data)
       window.location.reload();
     }
    })
  }

  changeHandler() {
    this.isChanged = true;
  }

  submitHandler(event, data){
    if(event.target.value == ""){
      return;
    }
    // console.log(event.target.value)
    // event.target.value = data.newskill
    this.createNew(event);
    event.target.value = "";
  }

  createNew(skill){
    // console.log(skill)
    // if(/\S/.test(skill.data.skill.toString())){
    //   // console.log("found something");
    //   return;
    // }

    var data = skill.target.value 
    console.log(data)
    skill.target.value = ""
    // var src = skill.path[1]
    var src = skill.composedPath()[1]
    var node = document.createElement("li");
    var ul = src.closest(".tags");
    
    // ul.appendChild(node)
    node.setAttribute("class", "addedTag");
    node.setAttribute("style", "margin-bottom: 5px; margin-top: 5px");
    // node.set
    // console.log(node)
    // console.log("test")
    // var data = skill.data.skill.toString();
    var span = "<span class='tagRemove'>x</span>";
    var input = "<input type='hidden' name='tags[]' value='" + data + "'>";
    node.innerHTML = (data + span + input);
    node.children[0].addEventListener("click", function(){
      this.isChanged = true;
      this.parentNode.remove();
    })
    // var ul = src.closest(".tags");
    // console.log(src)
    ul.insertBefore(node, src.closest("li"));
  }

  removeSkill(event){
    this.isChanged = true;
    event.target.parentNode.remove();
  }

}
