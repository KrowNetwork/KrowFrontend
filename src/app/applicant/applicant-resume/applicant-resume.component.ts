import { Component } from '@angular/core';

@Component({
  selector: 'app-applicant-resume',
  templateUrl: './applicant-resume.component.html',
  styleUrls: ['./applicant-resume.component.css']
})
export class ApplicantResumeComponent {

  handleClicked(event){
    var currTarget = event.target.closest(".social-edit").children[1];
    var currStyle = currTarget.style;
    if(currStyle.display == "none"){
      currTarget.style = "display: inline";
    }
    else if(currStyle.display == "inline"){
      currTarget.style = "display: none";
    }
  }
  
}
