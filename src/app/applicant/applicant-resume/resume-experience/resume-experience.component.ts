import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { ItemType } from '../../../shared/item-type-constructor';
import { ExperienceMainComponent } from './experience-main.component';
import { ExperienceDirective } from './experience.directive';
import { InterfaceComponent } from '../../../shared/interface-component.component';
import { UpdateResumeService } from '../../../service/update-resume.service';

import { CustomHttpService } from '../../../service/custom-http.service';


@Component({
  selector: 'app-resume-experience',
  templateUrl: './resume-experience.component.html',
  styleUrls: ['../resume-elements.component.css']
})
export class ResumeExperienceComponent implements OnInit {

  @ViewChild(ExperienceDirective) achievementHost: ExperienceDirective;

  constructor(
    private http: CustomHttpService, 
    private componentFactoryResolver: ComponentFactoryResolver,
    private updateResumeService: UpdateResumeService,
    private router: Router

  ) {}

  guid() {

    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  updateResume(event){
    this.updateResumeService.updateMain(event.target.closest("app-resume-experience"));
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
          startDate: "",
          endDate: "",
          verified: false,
          verifyID: this.guid(),
        })
      );
    }
    for(var i = 0; i < experiences.length; i++){
      let experienceItem = experiences[i];

      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(experienceItem.component);

      let viewContainerRef = this.achievementHost.viewContainerRef;

      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<InterfaceComponent>componentRef.instance).data = experienceItem.data;
    }
  }

  formatDate(date) {
    console.log(date)
    var month = '' + (date.getMonth() + 1)
    var day = '' + (date.getDate() + 1).toString()
    var year = date.getFullYear()

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    console.log([year, month, day].join("-"))
    return  [year, month, day].join("-")
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
        var experiences = new Array<ItemType>();
        for(var k = 0; k < resumeExperiences.length; k++){
          experiences.push(
            new ItemType(ExperienceMainComponent, {
              type: resumeExperiences[k]["type"],
              position: resumeExperiences[k]["position"],
              title: resumeExperiences[k]["title"],
              description: resumeExperiences[k]["description"],
              startDate: this.formatDate(new Date(resumeExperiences[k]["startDate"])),
              endDate: this.formatDate(new Date(resumeExperiences[k]["endDate"])),
              verified: resumeExperiences[k]['verified'],
              verifyID: resumeExperiences[k]['verifyID']
            })
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
        this.loadComponent("empty");
        if (err.error instanceof Error) {
          // console.log("Client-side error occured.");
        } else {
          // console.log("Server-side error occured.");
        }
      }
    );
  }

}