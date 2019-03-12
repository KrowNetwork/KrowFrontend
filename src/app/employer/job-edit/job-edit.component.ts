import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { CustomHttpService } from '../../shared/service/custom-http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {

  user: string;
  id: string;
  jobId: string;
  errorMessage: string;
  msg = undefined;

  owner= false;
  forceLogin=false;
  curr_emp = false;

  jobObject: any;

  title: string;
  category: number;
  description: string;
  paymentType: number;
  payment: number;
  tags = [];
  expiration: number;
  oldPay: string;

  jobForm: FormGroup;

  data =null;

  constructor(
    private route: ActivatedRoute,
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

      this.jobId = this.route.snapshot.queryParams['jobID'];

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
    this.getJob();
  }

  getJob(){
    var url = "http://18.220.46.51:3000/api/Job/" + this.jobId;

    this.http.get(url).subscribe(
      (data:any) => {
        console.log('data back', data);
        this.jobObject = data;
        this.category = 0;
        this.paymentType = 0;
        this.expiration = 0;

        this.tags = data.tags;

        if(data.paymentType === "ONETIME") {
          this.oldPay = "$"+ data.payment;
        } else if(data.paymentType === "DAILY") {
          this.oldPay = "$"+ data.payment + "/day";
        } else if(data.paymentType === "HOURLY") {
          this.oldPay = "$"+ data.payment + "/hour";
        } else if(data.paymentType === "WEEKLY") {
          this.oldPay = "$"+ data.payment + "/week";
        } else if(data.paymentType === "BIWEEKLY") {
          this.oldPay = "$"+ data.payment + "/2 weeks";
        } else if(data.paymentType === "MONTHLY") {
          this.oldPay = "$"+ data.payment + "/month";
        } else if(data.paymentType === "OTHER") {
          this.oldPay = "other";
        } else if(data.paymentType === "CONTRACT") {
          this.oldPay = "contract";
        } 

        switch(data.paymentType){
          case 'HOURLY':
            data.paymentType = 1;
            break;
          case 'ONETIME':
            data.paymentType = 2;
            break;
          case 'DAILY':
            data.paymentType = 3;
            break;
          case 'WEEKLY':
            data.paymentType = 4;
            break;
          case 'BIWEEKLY':
            data.paymentType = 5;
            break;
          case 'MONTHLY':
            data.paymentType = 6;
            break;
          case 'CONTRACT':
            data.paymentType = 7;
            break;
          case 'OTHER':
            data.paymentType = 8;
            break;
        }

        this.jobForm.reset({
          title: data.title,
          category: data.expiration,
          description: data.description,
          paymentType: data.paymentType,
          payment: data.payment,
          expiration: data.expiration
        });
      });

  }

  updateJob(){
    let x = this;
    this.errorMessage = null;

    if(isNaN(x.jobForm.get('payment').value)){
      this.errorMessage = "Payment needs to be a number!"
      return;
    }

    this.jobObject.title = x.jobForm.get('title').value;
    this.jobObject.description = x.jobForm.get('description').value;
    this.jobObject.category = JSON.parse(x.jobForm.get('category').value);
    this.jobObject.payment = JSON.parse(x.jobForm.get('payment').value);
    this.jobObject.paymentType = JSON.parse(x.jobForm.get('paymentType').value);
    this.jobObject.expiration = JSON.parse(x.jobForm.get('expiration').value);
    this.jobObject.tags = x.getTags();
    this.jobObject.lastUpdated = new Date().toISOString();
    

    switch(this.jobObject.paymentType){
      case 1:
        this.jobObject.paymentType = 'HOURLY'
        break;
      case 2:
        this.jobObject.paymentType = 'ONETIME'
        break;
      case 3:
        this.jobObject.paymentType = 'DAILY'
        break;
      case 4:
        this.jobObject.paymentType = 'WEEKLY'
        break;
      case 5:
        this.jobObject.paymentType = 'BIWEEKLY'
        break;
      case 6:
        this.jobObject.paymentType = 'MONTHLY'
        break;
      case 7:
        this.jobObject.paymentType = 'CONTRACT'
        break;
      case 8:
        this.jobObject.paymentType = 'OTHER'
        break;
    }

    var newPay = '$0'
    if(this.jobObject.paymentType === "ONETIME") {
      newPay = "$"+ this.jobObject.payment;
    } else if(this.jobObject.paymentType === "DAILY") {
      newPay = "$"+ this.jobObject.payment + "/day";
    } else if(this.jobObject.paymentType === "HOURLY") {
      newPay = "$"+ this.jobObject.payment + "/hour";
    } else if(this.jobObject.paymentType === "WEEKLY") {
      newPay = "$"+ this.jobObject.payment + "/week";
    } else if(this.jobObject.paymentType === "BIWEEKLY") {
      newPay = "$"+ this.jobObject.payment + "/2 weeks";
    } else if(this.jobObject.paymentType === "MONTHLY") {
      newPay = "$"+ this.jobObject.payment + "/month";
    } else if(this.jobObject.paymentType === "OTHER") {
      newPay = "other";
    } else if(this.jobObject.paymentType === "CONTRACT") {
      newPay = "contract";
    } 

    this.jobObject.salaryChanges.push({'oldSalary': this.oldPay, 'newSalary': newPay, 'changeDate': new Date().toISOString()});

    

    
    
    if(!this.jobObject.title){
      this.errorMessage = "Please fill out Job Name!"
      return;
    }
    if(!this.jobObject.description){
      this.errorMessage = "Please fill out Description!"
      return;
    }
    if(this.jobObject.category == 0 ){
      this.errorMessage = "Please fill out Category!"
      return;
    }
    if(!this.jobObject.payment){
      this.errorMessage = "Please fill out Salary!"
      return;
    }
    if(this.jobObject.paymentType == 0){
      this.errorMessage = "Please fill out Payment Type!"
      return;
    }
    if(this.jobObject.expiration == 0){
      this.errorMessage = "Please fill out Expiration Time!"
      return;
    }
    

    

    console.log('here',this.jobObject)
    var url = "http://18.220.46.51:3000/api/Job/" + this.jobId;
    this.http.put(url, this.jobObject).subscribe(
      data => {
      }, // Catch Errors
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // console.log("Client-side error occured.");
        } else {
          // console.log("Server-side error occured.");
        }
        console.log('err',err)
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
