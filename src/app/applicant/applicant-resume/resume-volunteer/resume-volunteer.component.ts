import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';


import { ItemType } from '../../../shared/item-type-constructor';
import { VolunteerMainComponent } from './volunteer-main.component';
import { VolunteerDirective } from './volunteer.directive';
import { log } from 'util';
import { InterfaceComponent } from '../../../shared/interface-component.component';
import { UpdateResumeService } from '../../../shared/service/update-resume.service';
import { CustomHttpService } from '../../../shared/service/custom-http.service';


@Component({
  selector: 'app-resume-volunteers',
  templateUrl: './resume-volunteer.component.html',
  styleUrls: ['../resume-elements.component.css']
})
export class ResumeVolunteerComponent implements OnInit {
  @Input() isSignup: string = 'false';
  @ViewChild(VolunteerDirective) volunteerHost: VolunteerDirective;

  constructor(
    private http: CustomHttpService, 
    private componentFactoryResolver: ComponentFactoryResolver,
    private updateResumeService: UpdateResumeService,
    private router: Router

  ) {}

  updateResume(event){
    // console.log(event.target.closest("app-resume-education"))
    console.log('vol',event);
    return this.updateResumeService.updateMain(event.target.closest("app-resume-volunteers"));
  }
  
  loadComponent(volunteers) {
    // // console.log()
    if(volunteers == "empty"){
      volunteers = new Array<ItemType>();
      volunteers.push(
        new ItemType(VolunteerMainComponent, {
          title: "",
          description: "",
          startDate: "",
          endDate: "",
        })
      );
    }

    for(var i = 0; i < volunteers.length; i++){
      let volunteerItems = volunteers[i];

      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(volunteerItems.component);

      let viewContainerRef = this.volunteerHost.viewContainerRef;

      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<InterfaceComponent>componentRef.instance).data = volunteerItems.data;
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
      this.http.get("http://18.220.46.51:3000/api/Applicant/" + user).subscribe(
        data => {
          
          var resumeVolunteer = data["resume"]["volunteers"];
          var volunteers = new Array<ItemType>();
          for(var k = 0; k < resumeVolunteer.length; k++){
            var sd =  resumeVolunteer[k]["startDate"].split('T')[0].slice(0, -3);
            var ed =  resumeVolunteer[k]["endDate"].split('T')[0].slice(0, -3);
            console.log(sd, ed)
            volunteers.push(
              new ItemType(VolunteerMainComponent, {
                title: resumeVolunteer[k]["title"],
                description: resumeVolunteer[k]["description"],
                startDate: sd,
                endDate: ed
              })
            );
          }
          if(volunteers.length == 0){
            //this.loadComponent("empty");
          }
          else{
            this.loadComponent(volunteers);
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