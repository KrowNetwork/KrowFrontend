import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ItemType } from '../item-type-constructor';
import { JobSearchMainComponent } from './job-search-main.component';
import { JobSearchDirective } from './job-search.directive';
import { InterfaceComponent } from '../interface-component.component';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, NavigationError } from '@angular/router';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
})
export class JobSearchComponent implements OnInit {
  res = [];
	@ViewChild(JobSearchDirective) achievementHost: JobSearchDirective;

  constructor(
    private http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver,
    private route: ActivatedRoute,
    private router: Router,
	) {}

  searchUserQuery: string;
  errorMessage: string;

  submitSearchQuery(){
    var hidden = document.getElementById("test-ID");
    var typeAcc = hidden.attributes["value"].value;
    var url = "/" + typeAcc.toLowerCase() + "/job-search";
    this.router.navigate([url], { queryParams: { search: this.searchUserQuery }});
  }

  getSearchQueryData(){
    console.log("Loading new data for query: " + this.searchUserQuery);
    // Submit string to server to get a list of job ids
    var url = "http://18.220.46.51:4200/search?key=42fc1e42-5eb8-4a8f-8904-7c58529f0f58";
    this.http.get(url, {params: {"term": this.searchUserQuery}}).subscribe(
      data => {
        console.log(data);
        this.display(this.parse(data))
      }, // Catch Errors  
      
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
          console.log(err);
        }
      }
    );
  }

  parse(results){
    // console.log(results)
    var jobs = [];
    for(var k = 0; k < 10; k++){
      jobs.push(JSON.parse(results[k]))
    }
    return jobs

  }

  display(data) {
    this.res = data;
  }

  // clearPrevious(data){
  //   var myNode = document.getElementById("serchQueryResults");
  //   this.final_results = this.parse(data)
  //   // data 

  //   // if(myNode.firstChild){
  //   //   while (myNode.firstChild) {
  //   //     myNode.removeChild(myNode.firstChild);
  //   //     if(!myNode.firstChild){
  //   //       this.displayResults(data);
  //   //       break;
  //   //     }
  //   //   }
  //   // }
  //   // else{
  //   //   this.displayResults(data);
  //   // }
  // }

  loadComponent(jobItem) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(jobItem.component);
    let viewContainerRef = this.achievementHost.viewContainerRef;
    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<InterfaceComponent>componentRef.instance).data = jobItem.data;

	}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchUserQuery = params['search'];
      console.log(params['search']);
      if(params['search']){
        this.getSearchQueryData();
      }
    });
  }

  getJob(item) {
    this.router.navigate(['/job/', item.jobID])
  }
}