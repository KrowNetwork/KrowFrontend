import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomHttpService } from '../../shared/service/custom-http.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-post-jobs',
  templateUrl: './new-post-jobs.component.html',
  styleUrls: ['./new-post-jobs.component.css']
})
export class NewPostJobsComponent implements OnInit {
  user: string;
  id: string;

  owner= false;
  forceLogin=false;
  curr_emp = false;

  title: string;
  category: number;
  description: string;
  paymentType: string;
  salary = [];
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
        salary: new FormControl(this.salary),
        tags: new FormControl(this.tags),
        paymentType: new FormControl(this.paymentType),
        expiration: new FormControl(this.expiration)
      });
    }

  ngOnInit() {
    this.getInfo()
  }

  getInfo() {
    var url = "http://18.220.46.51:3000/api/Job/filter=%7B%22employerID%22%3A%20%224bb9bc44-5730-42e3-8d-2e14009b22db%22%7D";

    let x = this;
    this.http.get(url).subscribe(
      data => {
        console.log('data', data)
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

  createNew(skill){
    // console.log(skill)
    // if(/\S/.test(skill.data.skill.toString())){
    //   // console.log("found something");
    //   return;
    // }

    var data = skill.target.value 
    console.log(data)
    skill.target.value = ""
    // var src = skill.path[1]
    var src = skill.composedPath()[1]
    var node = document.createElement("li");
    var ul = src.closest(".tags");
    
    // ul.appendChild(node)
    node.setAttribute("class", "addedTag");
    node.setAttribute("style", "margin-bottom: 5px; margin-top: 5px");
    // node.set
    // console.log(node)
    // console.log("test")
    // var data = skill.data.skill.toString();
    var span = "<span class='tagRemove'>x</span>";
    var input = "<input type='hidden' name='tags[]' value='" + data + "'>";
    node.innerHTML = (data + span + input);
    node.children[0].addEventListener("click", function(){
      this.parentNode.remove();
    })
    // var ul = src.closest(".tags");
    // console.log(src)
    ul.insertBefore(node, src.closest("li"));
  }

  removeSkill(event){
    event.target.parentNode.remove();
  }

}
