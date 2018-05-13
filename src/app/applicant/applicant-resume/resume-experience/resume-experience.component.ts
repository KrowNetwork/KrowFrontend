import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';

import { ItemType } from '../../../shared/item-type-constructor';
import { ExperienceMainComponent } from '../../applicant-resume/resume-experience/experience-main.component';
import { ExperienceDirective } from '../resume-experience/experience.directive';
import { InterfaceComponent } from '../../../shared/interface-component.component';
import { UpdateResumeService } from '../../../shared/update-resume.service';

@Component({
  selector: 'app-resume-experience',
  templateUrl: './resume-experience.component.html',
  styleUrls: ['./resume-experience.component.css']
})
export class ResumeExperienceComponent implements OnInit {

  @ViewChild(ExperienceDirective) achievementHost: ExperienceDirective;

  constructor(
    private http: HttpClient, 
    private componentFactoryResolver: ComponentFactoryResolver,
    private updateResumeService: UpdateResumeService
  ) {}
  
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

  ngOnInit() {
    this.http.get("http://18.220.46.51:3000/api/Applicant/SAMPLEAPPLICANT").subscribe(
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
              startDate: new Date(resumeExperiences[k]["startDate"]).toString().slice(0, 15),
              endDate: new Date(resumeExperiences[k]["endDate"]).toString().slice(0, 15),
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
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );
  }

}