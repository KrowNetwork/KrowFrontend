import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { UpdateResumeService } from '../../../shared/update-resume.service';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { ItemType } from '../../../shared/item-type-constructor';
import { SkillsMainComponent } from './skills-main.component';

@Component({
  selector: 'app-resume-skills',
  templateUrl: './resume-skills.component.html',
  styleUrls: ['./resume-skills.component.css']
})
export class ResumeSkillsComponent implements OnInit {
  
  constructor( 
    private updateResumeService: UpdateResumeService,
    private http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  updateResume(event){
    this.updateResumeService.updateSkills(event.target.closest("app-resume-skills"));
  }

  changeHandler(event){
    event.target.closest(".resumeContainer").children[1].children[0].style = "margin-bottom: 30px; display: show";
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
    console.log("new");
    var list = new Array<ItemType>();
    list.push(
      new ItemType(SkillsMainComponent, {
        endorsementRating: "0",
        skill: event.target.value,
      })
    );
    event.target.value = "";
    this.createNew(list[0]);
  }

  createNew(skill){
    var node = document.createElement("li"); 
    console.log(skill);
    node.setAttribute("class", "addedTag");
    node.setAttribute("style", "margin-bottom: 5px; margin-top: 5px");
    var endorsement = skill.data.endorsementRating;
    var endorsementStyle = "color:rgba(16, 204, 16, 0.932)";
    if(parseInt(endorsement) > 0){
      if(parseInt(endorsement) > 9000){
        endorsement = ">9000";
      }
      else{
        endorsement = "+" + endorsement;
      }
    }
    else if(parseInt(endorsement) == 0){
      endorsementStyle = "color: #f1c40f"
    }
    var img = "<i class='endorsement' style='margin-right: 10px; " + endorsementStyle + "'>" + endorsement + "</i>";
    var data = skill.data.skill.toString();
    var span = "<span onclick='$(this).parent().remove();' class='tagRemove'>x</span>";
    var input = "<input type='hidden' name='tags[]' value='" + data + "'>";
    node.innerHTML = (img + data + span + input);
    var ul = document.getElementById("ulTags");
    ul.insertBefore(node, document.getElementById("lastNode"));
  }

  ngOnInit() {
    this.http.get("http://18.220.46.51:3000/api/Applicant/SAMPLEAPPLICANT").subscribe(
      data => {
        var skills = data["resume"]["skills"];
        var skillList = new Array<ItemType>();
        for(var i = 0; i < skills.length; i++){
          skillList.push(
            new ItemType(SkillsMainComponent, {
              endorsementRating: skills[0]["endorsementRating"],
              skill: skills[0]["skill"],
            })
          );
        }
        this.loadComponent(skillList);
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
