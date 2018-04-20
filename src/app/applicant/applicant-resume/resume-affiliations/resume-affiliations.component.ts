import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';

import { ItemType } from '../../../shared/item-type-constructor';
import { AffiliationsMainComponent } from './affiliations-main.component';
import { AffiliationsDirective } from '../resume-affiliations/affiliations.directive';
import { InterfaceComponent } from '../../../shared/interface-component.component';
import { UpdateResumeService } from '../../../shared/update-resume.service';

@Component({
  selector: 'app-resume-affiliations',
  templateUrl: './resume-affiliations.component.html',
  styleUrls: ['./resume-affiliations.component.css']
})
export class ResumeAffiliationsComponent implements OnInit {

  @ViewChild(AffiliationsDirective) affiliationHost: AffiliationsDirective;

  constructor(
    private http: HttpClient, 
    private componentFactoryResolver: ComponentFactoryResolver,
    private updateResumeService: UpdateResumeService
  ) {}
  
  updateResume(event){
    this.updateResumeService.updateMain(event.target.closest("app-resume-affiliations"));
  }
  
  loadComponent(affiliations) {
    if(!affiliations){
      affiliations = new Array<ItemType>();
      affiliations.push(
        new ItemType(AffiliationsMainComponent, {
          title: "",
          description: "",
          startDate: "",
          endDate: "",
        })
      );
    }
    
    for(var i = 0; i < affiliations.length; i++){
      let affiliationItem = affiliations[i];

      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(affiliationItem.component);

      let viewContainerRef = this.affiliationHost.viewContainerRef;

      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<InterfaceComponent>componentRef.instance).data = affiliationItem.data;
    }
  }

  dateFormat(string){
    var a = string.slice(0, 15);
    return a;
  }

  ngOnInit() {
    this.http.get("http://18.220.46.51:3000/api/Applicant/SAMPLEAPPLICANT").subscribe(
      data => {
        var resumeAffiliations = data["resume"]["affiliations"];
        var startDate = this.dateFormat(new Date(resumeAffiliations[0]["startDate"]).toString());
        var endDate = this.dateFormat(new Date(resumeAffiliations[0]["endDate"]).toString());
        var affiliations = new Array<ItemType>();
        for(var i = 0; i < resumeAffiliations.length; i++){
          affiliations.push(
            new ItemType(AffiliationsMainComponent, {
              title: resumeAffiliations[0]["title"],  
              description: resumeAffiliations[0]["description"],
              startDate: startDate,
              endDate: endDate,
            })
          );
        }
        this.loadComponent(affiliations);
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