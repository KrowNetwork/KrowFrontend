import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ItemType } from '../../../shared/item-type-constructor';
import { AchievementsMainComponent } from './achievements-main.component';
import { AchievementDirective } from '../resume-achievements/achievement.directive';
import { InterfaceComponent } from '../../../shared/interface-component.component';
import { UpdateResumeService } from '../../../service/update-resume.service';

@Component({
	selector: 'app-resume-achievements',
	templateUrl: './resume-achievements.component.html',
	styleUrls: ['../resume-elements.component.css']
})

export class ResumeAchievementsComponent implements OnInit {

	@ViewChild(AchievementDirective) achievementHost: AchievementDirective;

	constructor(
		private http: HttpClient, 
		private componentFactoryResolver: ComponentFactoryResolver,
		private updateResumeService: UpdateResumeService
	) {}

	updateResume(event){
		this.updateResumeService.updateMain(event.target.closest("app-resume-achievements"));
	}
  
  loadComponent(achievements) {
		if(achievements == "empty"){
			achievements = new Array<ItemType>();
			achievements.push(
				new ItemType(AchievementsMainComponent, {
					title: "",
					description: "",
					startDate: "",
					endDate: "",
				})
			);
		}

		for(var i = 0; i < achievements.length; i++){
			let achievementItem = achievements[i];

			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(achievementItem.component);

			let viewContainerRef = this.achievementHost.viewContainerRef;

			let componentRef = viewContainerRef.createComponent(componentFactory);
			(<InterfaceComponent>componentRef.instance).data = achievementItem.data;
		}
	}
	
	ngOnInit() {
		var user = localStorage.getItem("CognitoIdentityServiceProvider.682kbp7jv1l5a01lojmehrm2a2.LastAuthUser");
		this.http.get("http://18.220.46.51:3000/api/Applicant/" + user).subscribe(
			data => {
				var resumeAchievements = data["resume"]["achievements"];
				var achievements = new Array<ItemType>();
				for(var k = 0; k < resumeAchievements.length; k++){
					achievements.push(
						new ItemType(AchievementsMainComponent, {
							title: resumeAchievements[k]["title"],
							description: resumeAchievements[k]["description"],
							startDate: new Date(resumeAchievements[k]["startDate"]).toString().slice(0, 15),
							endDate: new Date(resumeAchievements[k]["endDate"]).toString().slice(0, 15),
						})
					);
				}
				if(achievements.length == 0){
					this.loadComponent("empty");
				}
				else{
					this.loadComponent(achievements);
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