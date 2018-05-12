import { Component, Input }  from '@angular/core';

import { InterfaceComponent } from '../../../shared/interface-component.component';

@Component({
  templateUrl: `./affiliations-main.component.html`
})
export class AffiliationsMainComponent implements InterfaceComponent {
  @Input() data: any;

  deletedElements = new Array();

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
    event.target.closest(".resumeContainer").children[1].children[1].style = "display:show";
  }
}