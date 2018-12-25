import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { ItemType } from '../../../shared/item-type-constructor';
import { ExperienceMainComponent } from './experience-main.component';
import { ExperienceDirective } from './experience.directive';
import { InterfaceComponent } from '../../../shared/interface-component.component';
import { UpdateResumeService } from '../../../service/update-resume.service';
import { S3Service } from "../../../service/s3.service"
import { CustomHttpService } from '../../../service/custom-http.service';


@Component({
  selector: 'app-resume-experience',
  templateUrl: './resume-experience.component.html',
  styleUrls: ['../resume-elements.component.css']
})
export class ResumeExperienceComponent implements OnInit {
  // check=false;
  @ViewChild(ExperienceDirective) achievementHost: ExperienceDirective;

  constructor(
    private http: CustomHttpService, 
    private componentFactoryResolver: ComponentFactoryResolver,
    private updateResumeService: UpdateResumeService,
    private router: Router,
    public s3service: S3Service

  ) {
  }
  skills = []
  guid() {

    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  updateResume(event){
    var x = document.getElementsByClassName("tags")
    var y = document.getElementsByClassName("cbp")
    var z = []
    //this.updateFiles(document.getElementsByClassName("experienceFile"));
    
    for (var s = 0; s < y.length; s ++) {
      z.push(y[s].getAttribute("ng-reflect-model"))
    }
    var skills_arr = []
    for (var e = 0; e < x.length; e ++) {
      var el = x[e]
      var cb = y[e]
      // console.log(cb)
      var skills = []
      for (var i = 0; i < el.children.length; i++) {
        var element = el.children[i]
        if (element.className == "addedTag") {
          // console.log(element.innerHTML)
          // console.log(element.children[1].getAttribute("value"))
          skills.push(element.innerHTML.split("<")[0])
        }
      }
    // console.log(skills)
    skills_arr.push(skills)
    // console.log("s", skills)
    // console.log(el)
    // console.log(el.closest("app-resume-experience"))
  }
  // console.log(z)
  console.log('here')
  this.updateResumeService.updateMain(event.target.closest("app-resume-experience"), skills_arr, z);
  }

  updateFiles(fileUploads){
    console.log(fileUploads)
    const bucketName = 'krow-network-experience-files';
    let s3 = this.s3service.getBucket(bucketName);
    for(let i = 0; i <  fileUploads.length; i++){
      
      if(fileUploads[i].files.length !== 0){
        console.log('file', fileUploads[i].files)
          s3.upload({ 
            Key: "files/" + fileUploads[i].name + '-' + fileUploads[i].files[0].name,
            Bucket: bucketName,
            Body: fileUploads[i].files[0], 
            ACL: 'public-read',
          }, function (err, data) {
              if (err) {
                console.log(err, 'there was an error uploading your file');
              } else {
                console.log(data)
              }
        });
      }
    }
 
  
  }

  loadComponent(experiences) {
    if(experiences == "empty"){
      experiences = new Array<ItemType>();
      experiences.push(
        new ItemType(ExperienceMainComponent, {
          type: "",
          position: "",
          title: "",
          description: "",
          startDate: "0000-00",
          endDate: "0000-00",
          verified: false,
          verifyID: this.guid(),
          present: true,
          skills: []
        })
      );
    }
    console.log(experiences.length)
    for(var i = 0; i < experiences.length; i++){
      let experienceItem = experiences[i];
      
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(experienceItem.component);

      let viewContainerRef = this.achievementHost.viewContainerRef;
      let componentRef = viewContainerRef.createComponent(componentFactory);
      console.log('resume data', experienceItem.data);
      (<InterfaceComponent>componentRef.instance).data = experienceItem.data;
    }
  }

  formatDate(date) {
    var d = date
    console.log(d.getMonth() + 1)
    console.log(d.getDate() + 1)
    console.log(d.getFullYear())
    return d
  }
  
  ngOnInit() {
    if (sessionStorage.getItem("accountType") == "employer") {
			var user = this.router.url.split("/")[3]
		} else {
			var user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
		}
    this.http.get("http://18.220.46.51:3000/api/Applicant/" + user).subscribe(
      data => {
        var resumeExperiences = data["resume"]["experience"];
        console.log(resumeExperiences)
        var experiences = new Array<ItemType>();
        for(var k = 0; k < resumeExperiences.length; k++){
          var x = {
            type: resumeExperiences[k]["type"],
            position: resumeExperiences[k]["position"],
            title: resumeExperiences[k]["title"],
            description: resumeExperiences[k]["description"],
            startDate: resumeExperiences[k]["startDate"].split('T')[0].slice(0, -3),
            endDate: resumeExperiences[k]["endDate"],
            verified: resumeExperiences[k]['verified'],
            verifyID: resumeExperiences[k]['verifyID'],
            present: resumeExperiences[k]["present"],
            skills: resumeExperiences[k]["skills"],
            //fileName: resumeExperiences[k]["fileName"]
          }
          // this.skills = resumeExperiences[k]['skills']
          // this.skills.forEach(element => {
          //     // this.createNew(element)
          // });
          if (x.endDate !== undefined) {
            x.endDate = x.endDate.split('T')[0].slice(0, -3)
          }
          // if (x.present == true) {
          //   x.present = "on"
          // } else {
          //   // console.log("peepee")
          //   x.present = "off"
          // }
          var y  = new ItemType(ExperienceMainComponent, x)
          
          experiences.push(
            y
          );
        }
        if(experiences.length == 0){
          this.loadComponent("empty");
        }
        else{
          this.loadComponent(experiences);
        }
      }, // Catch Errors
      (err: HttpErrorResponse) => {
        // this.loadComponent("empty");
        if (err.error instanceof Error) {
          // console.log("Client-side error occured.");
        } else {
          // console.log("Server-side error occured.");
        }
      }
    );
  }

}