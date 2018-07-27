import { Component, Input }  from '@angular/core';

import { InterfaceComponent } from '../../../shared/interface-component.component';

@Component({
  template: `
    <li class="addedTag">
        {{data.skill}}
        <span (click)="removeSkill($event)" class="tagRemove">
            x
        </span>
        <input type="hidden" name="tags[]" value="{{data.skill}}">
    </li>
  `
})
export class SkillsMainComponent implements InterfaceComponent {
  @Input() data: any;

  removeSkill(event){
    // console.log("hi");
    event.target.closest(".resumeContainer").children[1].children[0].style = "margin-bottom: 15px; display: show; color: #FFFFFF";
    event.target.parentNode.remove();
  }
}