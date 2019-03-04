import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { UpdateResumeService } from '../../../shared/service/update-resume.service';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { ItemType } from '../../../shared/item-type-constructor';
import { SkillsMainComponent } from './skills-main.component';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CustomHttpService } from '../../../shared/service/custom-http.service';


@Component({
  selector: 'app-resume-skills',
  templateUrl: './resume-skills.component.html',
  styleUrls: ['../resume-elements.component.css']
})
export class ResumeSkillsComponent implements OnInit {
  
  constructor( 
    private updateResumeService: UpdateResumeService,
    private http: CustomHttpService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private router: Router

  ) { }

  update = false;

  updateResume(event){
    this.updateResumeService.updateSkills(event.target.closest("app-resume-skills"));
  }

  changeHandler(event){
    this.update = true;
  }

  loadComponent(skillList) {
    for(var i = 0; i < skillList.length; i++){
      this.createNew(skillList[i]);
    }
  }

  submitHandler(event){
    if(event.target.value == ""){
      return;
    }
    var list = new Array<ItemType>();
    list.push(
      new ItemType(SkillsMainComponent, {
        skill: event.target.value,
      })
    );
    event.target.value = "";
    this.createNew(list[0]);
  }

  createNew(skill){
    if(/\S/.test(skill.data.skill.toString())){
      // console.log("found something");
      return;
    }
    var node = document.createElement("li"); 
    node.setAttribute("class", "addedTag");
    node.setAttribute("style", "margin-bottom: 5px; margin-top: 5px");
    var data = skill.data.skill.toString();
    var span = "<span class='tagRemove'>x</span>";
    var input = "<input type='hidden' name='tags[]' value='" + data + "'>";
    node.innerHTML = (data + span + input);
    node.children[0].addEventListener("click", function(){
      this.closest(".resumeContainer").children[1].children[0].style = "margin-bottom: 15px; display: show";
      this.parentNode.remove();
    })
    var ul = document.getElementById("ulTags");
    ul.insertBefore(node, document.getElementById("lastNode"));
  }

  ngOnInit() {
    if (sessionStorage.getItem("accountType") == "employer") {
			var user = this.router.url.split("/")[3]
		} else {
			var user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
		}
    this.http.get("http://18.220.46.51:3000/api/Applicant/" + user).subscribe(
      data => {
        var skills = data["resume"]["skills"];
        var skillList = new Array<ItemType>();
        for(var i = 0; i < skills.length; i++){
          skillList.push(
            new ItemType(SkillsMainComponent, {
              skill: skills[i]["skill"],
            })
          );
        }
        this.loadComponent(skillList);
      }, // Catch Errors
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // console.log("Client-side error occured.");
        } else {
          // console.log("Server-side error occured.");
        }
      }
    );
  }

}
