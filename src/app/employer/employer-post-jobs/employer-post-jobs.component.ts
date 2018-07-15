import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemType } from '../../shared/item-type-constructor';
import { SkillsMainComponent } from '../../applicant/applicant-resume/resume-skills/skills-main.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employer-post-jobs',
  templateUrl: 'employer-post-jobs.component.html',
  styleUrls: ['./employer-post-jobs.component.css']
})
export class EmployerPostJobsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}
  
  title: string;
  description: string;
  location: string;
  tags: [string];
  payment: any;
  paymentType: string;
  jobType: string;
  jobObject: any;
  errorMessage: string;

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
    // TODO: Do not accept a series of spaces as a skill
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

  submitJob(){
    this.errorMessage = null;
    var jobTypes = ['ENTRY_LEVEL', 'INTERMEDIATE_LEVEL', 'SENIOR_LEVEL', 'INTERNSHIP', 'FREELANCE'];
    var paymentTypes = ['NONE', 'ONETIME', 'HOURLY', 'DAILY', 'WEEKLY', 'BIWEEKLY', 'MONTHLY', 'OTHER'];
    
    if(!this.title || !this.description || !this.location || !this.jobType || !this.payment || !this.paymentType){
      this.errorMessage = "Please fill out all fields!"
      return;
    }
    if(!jobTypes.includes(this.jobType)){
      this.errorMessage = "The job type needs to be one of the following: 'ENTRY_LEVEL', 'INTERMEDIATE_LEVEL', 'SENIOR_LEVEL', 'INTERNSHIP', 'FREELANCE'!"
      return;
    }
    if(!paymentTypes.includes(this.paymentType)){
      this.errorMessage = "The payment type needs to be one of the following: 'NONE', 'ONETIME', 'HOURLY', 'DAILY', 'WEEKLY', 'BIWEEKLY', 'MONTHLY', 'OTHER'!"
      return;
    }
    if(isNaN(this.payment)){
      this.errorMessage = "Payment needs to be a number!"
      return;
    }

    var ulTags = document.getElementById("ulTags");
    var childrenElements = ulTags.children;
    for(var i = 0; i < childrenElements.length - 1; i++){
        var currentElementValue = childrenElements[i].children[1];
        this.jobObject.newJob.tags.push(currentElementValue);
    }

    this.jobObject.newJob.title = this.title;
    this.jobObject.newJob.description = this.description;
    this.jobObject.newJob.location = this.location;
    this.jobObject.newJob.payment = this.payment;
    this.jobObject.newJob.paymentType = this.paymentType;
    this.jobObject.newJob.jobType = this.jobType;

    this.postJob();
  }

  postJob(){
    var url = "http://18.220.46.51:3000/api/NewJob";
    this.http.post(url, this.jobObject).subscribe(
      data => {}, // Catch Errors
      (err: HttpErrorResponse) => {
          alert("Could not post job!");
          if (err.error instanceof Error) {
              console.log("Client-side error occured.");
          } else {
              console.log("Server-side error occured.");
          }
      }
    );
    alert("Job posted!");
    this.router.navigate(['/employer/profile-info']);
  }

  ngOnInit() {
    var user = localStorage.getItem("CognitoIdentityServiceProvider.682kbp7jv1l5a01lojmehrm2a2.LastAuthUser");
    this.jobObject = {
      $class: "network.krow.transactions.employer.NewJob",
      employer: user,
      newJob: {
        $class: "network.krow.assets.IntermediateJob",
        title: "", 
        description: "", 
        location: "", 
        tags: [], 
        payment: "",
        paymentType: "",
        jobType: ""
      }
    }
  }

}