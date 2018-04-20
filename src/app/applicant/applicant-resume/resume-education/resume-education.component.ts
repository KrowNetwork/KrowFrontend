import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';

import { ItemType } from '../../../shared/item-type-constructor';
import { EducationMainComponent } from './education-main.component';
import { EducationDirective } from '../resume-education/education.directive';
import { InterfaceComponent } from '../../../shared/interface-component.component';
import { UpdateResumeService } from '../../../shared/update-resume.service';

@Component({
  selector: 'app-resume-education',
  templateUrl: './resume-education.component.html',
  styleUrls: ['./resume-education.component.css']
})
export class ResumeEducationComponent implements OnInit {

  @ViewChild(EducationDirective) educationHost: EducationDirective;

  constructor(
    private http: HttpClient, 
    private componentFactoryResolver: ComponentFactoryResolver,
    private updateResumeService: UpdateResumeService
  ) {}

  updateResume(event){
    this.updateResumeService.updateMain(event.target.closest("app-resume-education"));
  }
  
  loadComponent(educations) {
    if(educations == "empty"){
      educations = new Array<ItemType>();
      educations.push(
        new ItemType(EducationMainComponent, {
          title: "",
          description: "",
          startDate: "",
          endDate: "",
        })
      );
    }

    for(var i = 0; i < educations.length; i++){
      let educationItem = educations[i];

      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(educationItem.component);

      let viewContainerRef = this.educationHost.viewContainerRef;

      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<InterfaceComponent>componentRef.instance).data = educationItem.data;
    }
  }
  achievementsachievements
  

  dateFormat(string){
    var a = string.slice(0, 15);
    return a;
  }
  
  ngOnInit() {
    this.http.get("http://18.220.46.51:3000/api/Applicant/SAMPLEAPPLICANT").subscribe(
      data => {
        var resumeEducations = data["resume"]["education"];
        var startDate = this.dateFormat(new Date(resumeEducations[0]["startDate"]).toString());
        var endDate = this.dateFormat(new Date(resumeEducations[0]["endDate"]).toString());
        var educations = new Array<ItemType>();
        for(var i = 0; i < resumeEducations.length; i++){
          educations.push(
            new ItemType(EducationMainComponent, {
              title: resumeEducations[0]["title"],
              description: resumeEducations[0]["description"],
              startDate: startDate,
              endDate: endDate,
            })
          );
        }
        this.loadComponent(educations);
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