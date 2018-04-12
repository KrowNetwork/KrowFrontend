import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-resume',
  templateUrl: './applicant-resume.component.html',
  styleUrls: ['./applicant-resume.component.css']
})
export class ApplicantResumeComponent implements OnInit {

  constructor() { }

  handleClicked(event){
    var currTarget = event.target.parentElement.children[1];
    var currStyle = currTarget.style;
    console.log(currStyle);
    if(currStyle.display == "none"){
      currTarget.style = "display: inline";
    }
    else if(currStyle.display == "inline"){
      currTarget.style = "display: none";
    }
  }

  ngOnInit() {
  }

}
