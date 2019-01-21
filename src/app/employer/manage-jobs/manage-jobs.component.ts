import { Component, OnInit } from '@angular/core';
import { CustomHttpService } from "../../shared/service/custom-http.service"
import { HttpClient } from "@angular/common/http";
import { buffer } from '../../../../node_modules/rxjs-compat/operator/buffer';

@Component({
  selector: 'app-manage-jobs',
  templateUrl: './manage-jobs.component.html',
  styleUrls: ['./manage-jobs.component.css']
})
export class ManageJobsComponent implements OnInit {
  user: string
  response = []
  bases = []
  dataForList = []
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  constructor(
    public http: CustomHttpService,
    public http2: HttpClient
  ) { 
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")  
  }
  done = false

  // async pushToFront(data, counts) {
  //   // console.log(counts)
  //   counts = counts["results"]
  //   var e = 
  //   `<tr>
  //   <td>
  //     <div class="table-list-title">
  //       <h3><a href="#" title="">` + data.title + `</a></h3>
  //       <span><i class="la la-map-marker"></i>` + data.location + `</span>
  //     </div>
  //   </td>
  //   <td>
  //     <span class="applied-field">` + counts + `</span>
  //   </td>
  //   <td>
  //     <span>` + data.date_created + `</span>
  //   </td>
  //   <td>
  //     <span class="status">` + data.type + `</span>
  //   </td>
  //   <td>
  //     <ul class="action_job">
  //       <li><span>View Job</span><a href="#" title=""><i class="la la-eye"></i></a></li>
  //       <li><span>Edit</span><a href="#" title=""><i class="la la-pencil"></i></a></li>
  //       <li><span>Delete</span><a href="#" title=""><i class="la la-trash-o"></i></a></li>
  //     </ul>
  //   </td>
  // </tr>`

  // document.getElementById("jobs").innerHTML += e
  // console.log("Pushed")

  // }

  getFolders() {
    return this.http.rget("https://api.krownetwork.com/get-employer-folders?id=" + this.user).map(
      data => {
        // console.log(data["results"])
        return Array.from(new Set(data["results"]));
      }
    )
  }

  getCount(e) {
    return this.http2.get("https://api.krownetwork.com/get-employer-folder-resume-count", {params: {folder: e, id: this.user}}).map(
      data2 => {
        
        return data2
      }
    )
  }

  getBase(e) {
    return this.http2.get("https://api.krownetwork.com/get-employer-folder-base", {params: {folder: e, id: this.user}}).map(
      res => {
        var obj = {}
        var buff = new Buffer(res["results"][0]["data"])
        var base = JSON.parse(buff.toString())
        console.log(base)
        this.bases.push(base)
        var d = new Date(base.date_posted.toString())
        var date = this.months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear()
        obj["title"] = base.title
        obj["folder"] = e
        obj["location"] = base.location
        obj["date_created"] = date
        obj["type"] = base.type
        obj["counts"] = base.count
        return obj
      }
    )
  }
  async asyncForEach(array, callback) {
    for (var i = 0; i < array.length; i ++) {
      await callback(array[i])
    }
  }

  async ngOnInit() {
    var count = 0
    console.log("start")
    this.getFolders().subscribe(async folders => {
      console.log(folders.length)
      console.log(folders)
      await this.asyncForEach(folders, async folder => {
        console.log(folder)
        var obj = await this.getBase(folder).toPromise()
        console.log(obj)
        // var count = await this.getCount(folder).toPromise()
        // obj["counts"] = count["results"]
        this.dataForList.push(obj)
      })
      // for (var i = 0; i < folders.length; i ++) {

      //   var folder = folders[i]
      // // folders.forEach(async folder => {
      //   // console.log(folder)
        
      //   // .subscribe(obj => {
      //   //   console.log(obj)
      //   // })
      // }
    })

    // this.http.rget("https://api.krownetwork.com/get-employer-folders?id=" + this.user).subscribe(
    //   data => {
    //     console.log(data["results"])
    //     this.response = Array.from(new Set(data["results"]));
    //     console.log(this.response)
    //     // this.response.filter(function(value, index){ return this.response.indexOf(value) == index });
    //     this.response.forEach(e => {
    //       var obj = {
            
    //       }

    //       this.http2.get("https://api.krownetwork.com/get-employer-folder-base", {params: {folder: e, id: this.user}}).subscribe(
    //         data1 => {
    //           var buff = new Buffer(data1["results"][0]["data"])
    //           var base = JSON.parse(buff.toString())
    //           console.log(base)
    //           this.bases.push(base)
    //           var d = new Date(base.date_posted.toString())
    //           var date = this.months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear()
    //           obj["title"] = base.title
    //           obj["location"] = base.location
    //           obj["date_created"] = date
    //           obj["type"] = base.type

    //           this.http2.get("https://api.krownetwork.com/get-employer-folder-resume-count", {params: {folder: e, id: this.user}}).subscribe(
    //             data2 => {
    //               obj["counts"] = data2["results"] + " Resumes"
    //               count += 1
    //               if (count == this.response.length) {
    //                 this.done = true
    //               }
    //             }
    //           )

    //           this.dataForList.push(obj)
    //         }
    //       )
    //     })
    //   }
    // )
    // this.done = true
    
  }

}
