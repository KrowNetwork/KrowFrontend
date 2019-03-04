import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';


import { ItemType } from '../../../shared/item-type-constructor';
import { EducationMainComponent } from './education-main.component';
import { EducationDirective } from './education.directive';
import { log } from 'util';
import { InterfaceComponent } from '../../../shared/interface-component.component';
import { UpdateResumeService } from '../../../shared/service/update-resume.service';
import { CustomHttpService } from '../../../shared/service/custom-http.service';


@Component({
  selector: 'app-resume-education',
  templateUrl: './resume-education.component.html',
  styleUrls: ['../resume-elements.component.css']
})
export class ResumeEducationComponent implements OnInit {
  @Input() isSignup: string = 'false';
  @ViewChild(EducationDirective) educationHost: EducationDirective;

  constructor(
    private http: CustomHttpService, 
    private componentFactoryResolver: ComponentFactoryResolver,
    private updateResumeService: UpdateResumeService,
    private router: Router

  ) {}

  updateResume(event){
    console.log('edu',event);
    // console.log(event.target.closest("app-resume-education"))
    return this.updateResumeService.updateMain(event.target.closest("app-resume-education"));
  }
  
  loadComponent(educations) {
    // // console.log()
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
    console.log(date)
    var month = (date.getMonth() + 1).toString()
    var day = (date.getDate() + 1).toString()
    var year = date.getFullYear()

    console.log(month)
    console.log(day)

    if (month.length < 2) month = '0' + month;
    if (day.length < 9) day = '0' + day;

    console.log([year, month, day].join("-"))

    return  [year, month, day].join("-")
  }
  ngOnInit() {
    console.log('isSignup', this.isSignup)
    if (sessionStorage.getItem("accountType") == "employer") {
			var user = this.router.url.split("/")[3]
		} else {
			var user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    }
    
    if(this.isSignup != 'true'){
      this.http.get("http://18.216.142.10:3000/api/Applicant/" + user).subscribe(
        data => {
          
          var resumeEducations = data["resume"]["education"];
          var educations = new Array<ItemType>();
          for(var k = 0; k < resumeEducations.length; k++){
            var sd =  resumeEducations[k]["startDate"].split('T')[0].slice(0, -3);
            var ed =  resumeEducations[k]["endDate"].split('T')[0].slice(0, -3);
            console.log(sd, ed)
            educations.push(
              new ItemType(EducationMainComponent, {
                title: resumeEducations[k]["title"],
                description: resumeEducations[k]["description"],
                startDate: sd,
                endDate: ed
              })
            );
          }
          if(educations.length == 0){
            //this.loadComponent("empty");
          }
          else{
            this.loadComponent(educations);
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

}