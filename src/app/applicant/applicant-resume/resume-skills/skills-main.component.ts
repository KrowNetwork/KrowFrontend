import { Component, Input }  from '@angular/core';

import { InterfaceComponent } from '../../../shared/interface-component.component';

@Component({
  template: `
    <li class="addedTag">
        <i class="endorsement" style="margin-right: 10px; color:rgba(16, 204, 16, 0.932)">
            {{data.endorsementRating}}
        </i>
        {{data.skill}}
        <span onclick="$(this).parent().remove();" class="tagRemove">
            x
        </span>
        <input type="hidden" name="tags[]" value="{{data.skill}}">
    </li>
  `
})
export class SkillsMainComponent implements InterfaceComponent {
  @Input() data: any;
}