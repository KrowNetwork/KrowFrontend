import { Component, Input }  from '@angular/core';

import { InterfaceComponent } from '../../../shared/interface-component.component';
//TODO: Fontawesome icons for Work
@Component({
  templateUrl: `experience-main.component.html`
})
export class ExperienceMainComponent implements InterfaceComponent {
  @Input() data: any;

  deletedElements = new Array();

  displayDropdown(event){
    // console.log("display");
  }

  deleteItem(event){
    this.changeHandler(event);
    this.deletedElements.push(event.target.closest("form"))
    var element = document.createElement("div");
    element.innerHTML = (` 
      <div class="padding-left" style="padding-bottom:30px">
        <div class="col-lg-12" style="padding:0">
          <a class="post-job-btn" style="float: right; width: 100%; text-align: center">Undo</a>
        </div>
      </div>
    `);
    var self = this;
    element.addEventListener('click', function() {
      this.closest(".social-edit").appendChild(self.deletedElements[0]);
      this.parentNode.removeChild(this);
    });
    event.target.closest(".social-edit").replaceChild(element, event.target.closest("form"));
  }

  changeHandler(event){
    event.target.closest("app-resume-experience").children[0].children[1].children[1].style = "display:show";
  }

  submitHandler(event){
    if(event.target.value == ""){
      return;
    }

    this.createNew(event.target.value);
    event.target.value = "";
  }

  createNew(skill){
    // if(/\S/.test(skill.data.skill.toString())){
    //   // console.log("found something");
    //   return;
    // }
    var data = skill
    var node = document.createElement("li"); 
    node.setAttribute("class", "addedTag");
    node.setAttribute("style", "margin-bottom: 5px; margin-top: 5px");
    // var data = skill.data.skill.toString();
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

  removeSkill(event){
    // console.log("hi");
    event.target.closest(".resumeContainer").children[1].children[0].style = "margin-bottom: 15px; display: show; color: #FFFFFF";
    event.target.closest("app-resume-experience").children[0].children[1].children[1].style = "display:show";
    event.target.parentNode.remove();
  }
}

