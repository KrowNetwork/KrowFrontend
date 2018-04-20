import { Component, Input }  from '@angular/core';

import { InterfaceComponent } from '../../../shared/interface-component.component';

@Component({
  templateUrl: `./education-main.component.html`
})
export class EducationMainComponent implements InterfaceComponent {
  @Input() data: any;

  changeHandler(event){
    event.target.closest(".resumeContainer").children[1].children[1].style = "display:show";
  }
}