import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomHttpService } from '../../shared/service/custom-http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-post-jobs',
  templateUrl: './new-post-jobs.component.html',
  styleUrls: ['./new-post-jobs.component.css']
})
export class NewPostJobsComponent implements OnInit {
  user: string;
  id: string;
  errorMessage: string;
  msg = undefined;

  owner= false;
  forceLogin=false;
  curr_emp = false;
  isSubmitting = false;

  jobObject: any;

  title: string;
  category: number;
  description: string;
  paymentType: number;
  payment: number;
  tags = [];
  expiration: number;

  jobForm: FormGroup;

  data =null;

  constructor(
    private router: Router,
    public http: CustomHttpService,
    ) { 
      this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
      console.log(this.router.url.split("/"))
      if (this.router.url.split("/")[3] != undefined) {
        this.id = this.router.url.split("/")[3]
        this.owner = false 
        this.forceLogin = false
        if (sessionStorage.getItem("accountType") == "employer") {
          this.curr_emp = true
        }
      } else {
        this.id = this.user
        this.owner = true
        // this.userService.isAuthenticated(this);
      }

      this.jobForm = new FormGroup({
        title: new FormControl(this.title),
        category:  new FormControl(this.category),
        description: new FormControl(this.description),
        payment: new FormControl(this.payment),
        tags: new FormControl(this.tags),
        paymentType: new FormControl(this.paymentType),
        expiration: new FormControl(this.expiration)
      });
    }

  ngOnInit() {
    var user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    this.category = 0;
    this.paymentType = 0;
    this.expiration = 0;

    this.jobForm.reset({
      category: this.category,
      paymentType: this.paymentType,
      expiration: this.expiration
    });

    this.jobObject = {
      $class: "network.krow.transactions.employer.NewJob",
      employer: user,
      newJob: {
        $class: "network.krow.assets.IntermediateJob",
        title: "", 
        description: "", 
        category: 0,
        tags: [], 
        payment: 0,
        paymentType: "NONE",
        expiration: 0
      }
    }

    this.getJobs();
  }

  getJobs(){
    var url = "http://18.220.46.51:3000/api/Employer/" + this.user;

    this.http.get(url).subscribe(
      data => {
        console.log('data back', data)
      })

    var url2 = "http://18.220.46.51:3000/api/Job";

    this.http.get(url2).subscribe(
      data => {
        console.log('job', data)
      })
  }

  submitJob(){
    let x = this;
    this.isSubmitting = true;
    this.errorMessage = null;

    if(isNaN(x.jobForm.get('payment').value)){
      this.errorMessage = "Payment needs to be a number!"
      return;
    }

    this.jobObject.newJob.title = x.jobForm.get('title').value;
    this.jobObject.newJob.description = x.jobForm.get('description').value;
    this.jobObject.newJob.category = JSON.parse(x.jobForm.get('category').value);
    this.jobObject.newJob.payment = JSON.parse(x.jobForm.get('payment').value);
    this.jobObject.newJob.paymentType = JSON.parse(x.jobForm.get('paymentType').value);
    this.jobObject.newJob.expiration = JSON.parse(x.jobForm.get('expiration').value);
    this.jobObject.newJob.tags = x.getTags();

    switch(this.jobObject.newJob.paymentType){
      case 1:
        this.jobObject.newJob.paymentType = 'HOURLY'
        break;
      case 2:
        this.jobObject.newJob.paymentType = 'ONETIME'
        break;
      case 3:
        this.jobObject.newJob.paymentType = 'DAILY'
        break;
      case 4:
        this.jobObject.newJob.paymentType = 'WEEKLY'
        break;
      case 5:
        this.jobObject.newJob.paymentType = 'BIWEEKLY'
        break;
      case 6:
        this.jobObject.newJob.paymentType = 'MONTHLY'
        break;
      case 7:
        this.jobObject.newJob.paymentType = 'CONTRACT'
        break;
      case 8:
        this.jobObject.newJob.paymentType = 'OTHER'
        break;
    }
    
    if(!this.jobObject.newJob.title){
      this.errorMessage = "Please fill out Job Name!"
      return;
    }
    if(!this.jobObject.newJob.description){
      this.errorMessage = "Please fill out Description!"
      return;
    }
    if(this.jobObject.newJob.category == 0 ){
      this.errorMessage = "Please fill out Category!"
      return;
    }
    if(!this.jobObject.newJob.payment){
      this.errorMessage = "Please fill out Salary!"
      return;
    }
    if(this.jobObject.newJob.paymentType == 0){
      this.errorMessage = "Please fill out Payment Type!"
      return;
    }
    if(this.jobObject.newJob.expiration == 0){
      this.errorMessage = "Please fill out Expiration Time!"
      return;
    }
    

    

    console.log('here',this.jobObject.newJob)
    this.postJob();
    
  }

  postJob(){
    this.msg = "Please wait"
    var url = "http://18.220.46.51:3000/api/NewJob";
    console.log(this.jobObject)
    this.http.post(url, this.jobObject).subscribe(
      data => {
        console.log(data)
        this.msg = "Completed. Redirecting"
        setTimeout(() => 
        {
          this.router.navigate(["/employer"])
        }, 1000);
      }, // Catch Errors
      (err: HttpErrorResponse) => {
          alert("Could not post job!");
          console.log(err)
      }
    );
  }
  submitHandler(event, data){
    if(event.target.value == ""){
      return;
    }
    // console.log(event.target.value)
    // event.target.value = data.newskill
    this.createNew(event);
    event.target.value = "";
  }

  getTags(){
    var collected_kws = document.getElementsByClassName("addedTag")
    var returned_kws = []
    console.log(collected_kws)

    for(var i = 0; i < collected_kws.length; i++){
      returned_kws.push(collected_kws[i].innerHTML.split("<")[0])
    }
    return returned_kws
  }

  createNew(skill){
 
    var data = skill.target.value 
    console.log(data)
    skill.target.value = ""
    var src = skill.composedPath()[1]
    var node = document.createElement("li");
    var ul = src.closest(".tags");
    
    node.setAttribute("class", "addedTag");
    node.setAttribute("style", "margin-bottom: 5px; margin-top: 5px");
 
    var span = "<span class='tagRemove'>x</span>";
    var input = "<input type='hidden' name='tags[]' value='" + data + "'>";
    node.innerHTML = (data + span + input);
    node.children[0].addEventListener("click", function(){
      this.parentNode.remove();
    })
 
    ul.insertBefore(node, src.closest("li"));
  }

  removeSkill(event){
    event.target.parentNode.remove();
  }

}
