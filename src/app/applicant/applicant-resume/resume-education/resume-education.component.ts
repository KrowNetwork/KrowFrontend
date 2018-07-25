import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';


import { ItemType } from '../../../shared/item-type-constructor';
import { EducationMainComponent } from './education-main.component';
import { EducationDirective } from './education.directive';
import { log } from 'util';
import { InterfaceComponent } from '../../../shared/interface-component.component';
import { UpdateResumeService } from '../../../service/update-resume.service';

@Component({
  selector: 'app-resume-education',
  templateUrl: './resume-education.component.html',
  styleUrls: ['../resume-elements.component.css']
})
export class ResumeEducationComponent implements OnInit {

  @ViewChild(EducationDirective) educationHost: EducationDirective;

  constructor(
    private http: HttpClient, 
    private componentFactoryResolver: ComponentFactoryResolver,
    private updateResumeService: UpdateResumeService,
    private router: Router

  ) {}

  updateResume(event){
    console.log(event.target.closest("app-resume-education"))
    this.updateResumeService.updateMain(event.target.closest("app-resume-education"));
  }
  
  loadComponent(educations) {
    // console.log()
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
  formatDate(date) {
    var month = '' + (date.getMonth() + 1)
    var day = '' + date.getDate().toString()
    var year = date.getFullYear()

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

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
        
        var resumeEducations = data["resume"]["education"];
        var educations = new Array<ItemType>();
        for(var k = 0; k < resumeEducations.length; k++){
          var sd =  this.formatDate(new Date(resumeEducations[k]["startDate"]))
          var ed =  this.formatDate(new Date(resumeEducations[k]["endDate"]))

          educations.push(
            new ItemType(EducationMainComponent, {
              title: resumeEducations[k]["title"],
              description: resumeEducations[k]["description"],
              startDate:sd,
              endDate: ed
            })
          );
        }
        if(educations.length == 0){
          this.loadComponent("empty");
        }
        else{
          this.loadComponent(educations);
        }
      }, // Catch Errors
      (err: HttpErrorResponse) => {
        this.loadComponent("empty");
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );
  }

}