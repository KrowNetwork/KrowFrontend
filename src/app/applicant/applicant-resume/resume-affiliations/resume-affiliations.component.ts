import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';


import { ItemType } from '../../../shared/item-type-constructor';
import { AffiliationsMainComponent } from './affiliations-main.component';
import { AffiliationsDirective } from './affiliations.directive';
import { InterfaceComponent } from '../../../shared/interface-component.component';
import { UpdateResumeService } from '../../../shared/service/update-resume.service';
import { CustomHttpService } from '../../../shared/service/custom-http.service';

@Component({
  selector: 'app-resume-affiliations',
  templateUrl: './resume-affiliations.component.html',
  styleUrls: ['../resume-elements.component.css']
})
export class ResumeAffiliationsComponent implements OnInit {

  @ViewChild(AffiliationsDirective) affiliationHost: AffiliationsDirective;

  constructor(
    private http: CustomHttpService, 
    private componentFactoryResolver: ComponentFactoryResolver,
    private updateResumeService: UpdateResumeService,
    private router: Router
  ) {}
  
  updateResume(event){
    this.updateResumeService.updateMain(event.target.closest("app-resume-affiliations"));
  }
  
  loadComponent(affiliations) {
    if(affiliations == "empty"){
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
  
  ngOnInit() {
    if (sessionStorage.getItem("accountType") == "employer") {
			var user = this.router.url.split("/")[3]
		} else {
			var user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
		}
    this.http.get("http://18.220.46.51:3000/api/Applicant/" + user).subscribe(
      data => {
        var resumeAffiliations = data["resume"]["affiliations"];
        var affiliations = new Array<ItemType>();
        for(var k = 0; k < resumeAffiliations.length; k++){
          affiliations.push(
            new ItemType(AffiliationsMainComponent, {
              title: resumeAffiliations[k]["title"],
              description: resumeAffiliations[k]["description"],
              startDate: new Date(resumeAffiliations[k]["startDate"]).toString().slice(0, 15),
              endDate: new Date(resumeAffiliations[k]["endDate"]).toString().slice(0, 15),
            })
          );
        }
        if(affiliations.length == 0){
          this.loadComponent("empty");
        }
        else{
          this.loadComponent(affiliations);
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