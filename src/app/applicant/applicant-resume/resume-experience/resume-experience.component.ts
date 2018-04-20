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
    if(!experiences){
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

  dateFormat(string){
    var a = string.slice(0, 15);
    return a;
  }

  ngOnInit() {
    this.http.get("http://18.220.46.51:3000/api/Applicant/SAMPLEAPPLICANT").subscribe(
      data => {
        var resumeExperiences = data["resume"]["experience"];
        var startDate = this.dateFormat(new Date(resumeExperiences[0]["startDate"]).toString());
        var endDate = this.dateFormat(new Date(resumeExperiences[0]["endDate"]).toString());
        var experiences = new Array<ItemType>();
        for(var i = 0; i < resumeExperiences.length; i++){
          experiences.push(
            new ItemType(ExperienceMainComponent, {
              type: resumeExperiences[0]["type"],
              position: resumeExperiences[0]["position"],
              title: resumeExperiences[0]["title"],
              description: resumeExperiences[0]["description"],
              startDate: startDate,
              endDate: endDate,
            })
          );
        }
        this.loadComponent(experiences);
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