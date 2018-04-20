import { Component, Input }  from '@angular/core';

import { InterfaceComponent } from '../../../shared/interface-component.component';
//TODO: Fontawesome icons for Work
@Component({
  templateUrl: `experience-main.component.html`
})
export class ExperienceMainComponent implements InterfaceComponent {
  @Input() data: any;

  changeHandler(event){
    event.target.closest("app-resume-experience").children[0].children[1].children[1].style = "display:show";
  }
}