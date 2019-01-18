import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { CustomHttpService } from "../../shared/service/custom-http.service";
import { Router } from "../../../../node_modules/@angular/router";

@Component({
  selector: 'app-post-jobs',
  templateUrl: './post-jobs.component.html',
  styleUrls: ['./post-jobs.component.css']
})

export class PostJobsComponent implements OnInit {
  data = {}
  one = true 
  two = true
  three = true
  files = []
  user = ""
  constructor(
    public http: CustomHttpService,
    public http2: HttpClient,
    public router: Router
  ) {
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
   }

  folders = []
  folder = ""
  ngOnInit() {
    this.http2.get("https://api.krownetwork.com/get-employer-folders", {params: {id: this.user}}).subscribe(
      data => {
        this.folders = data["results"]
      })
  }
  async submitHandler() {
    if (this.one) {
      this.submitOne()
    } else if (this.two) {
      this.submitTwo()
    } else if (this.three) {
      // var folder = ""
      var array = new Uint32Array(1);

        if (this.folders.indexOf(this.data["title"]) > -1) {
          this.folder = this.data["title"] + "_" + window.crypto.getRandomValues(array).toString();
      } else {
        this.folder = this.data["title"]
      }

      var a = await this.submitThree()
      


      
    }
  }

  submitOne() {
    var title = document.getElementsByClassName("title")["0"]
    var desc = document.getElementsByClassName("desc")["0"]
    var skills = document.getElementsByClassName("skills")["0"]
    var job_type = document.getElementsByClassName("job_type")["0"]
    var exp_lvl = document.getElementsByClassName("exp_lvl")["0"]
    var location = document.getElementsByClassName("location")["0"]
    var date = document.getElementsByClassName("date")["0"]
    this.data = {
      title: title.value,
      desc: desc.value,
      skills: skills.value.split(", "),
      job_type: job_type.value,
      exp_lvl: exp_lvl.value,
      location: location.value,
      date: date.value,
      date_posted: new Date(),
      type: "Active"
    }
    // console.log(this.data)

    var a = document.getElementsByClassName("steps-sec")["0"].firstChild
    a.setAttribute("class", "step")

    var a = document.getElementsByClassName("steps-sec")["0"].children[1]
    a.setAttribute("class", "step active")

    document.getElementsByClassName("profile-form-edit")["0"].removeChild(document.getElementsByClassName("profile-form-edit")["0"].firstChild)
    var p = document.createElement("button")
    var i = document.createElement("input")
    // i.id = "fileReader"
    i.type = "file"
    i.multiple = true 
    i.id = "file"

    var self = this
    i.addEventListener("change", function(e) {
      for (var i = 0; i < e.target["files"].length; i++) { 
        var f = e.target["files"][i]
        console.log(f)
        // if (f.type.split("/")[0] != "application") {
        //   console.log("oops")
        // } else {
          self.files.push(f);
        // }
      }
      
    })

    // p.innerHTML = "Select Resumes"
    // p.addEventListener("click", function(e) {})
    
    document.getElementsByClassName("profile-form-edit")["0"].appendChild(i)
    // document.getElementsByClassName("profile-form-edit")["0"].appendChild(p)
    var back_btn = document.createElement("button")
    var self = this
    back_btn.addEventListener("click", function(e) {self.back()})
    back_btn.style.cssFloat = "left"
    back_btn.innerHTML = "Back"
    back_btn.id = "backBtn"
    document.getElementById("submitBtn").parentElement.appendChild(back_btn)
    this.one = false
  }

  submitTwo() {
    // console.log(document.getElementsByClassName("profile-form-edit")["0"])
    try {
      document.getElementsByClassName("profile-form-edit")["0"].removeChild(document.getElementsByClassName("profile-form-edit")["0"].children[1])

    } catch {
      document.getElementsByClassName("profile-form-edit")["0"].removeChild(document.getElementsByClassName("profile-form-edit")["0"].children[0])    }
    
    var a = document.getElementsByClassName("steps-sec")["0"].children[1]
    a.setAttribute("class", "step")

    var a = document.getElementsByClassName("steps-sec")["0"].children[2]
    a.setAttribute("class", "step active")

    var confirmHtml = 
    `
      <div class="row">
        <div class="col-lg-12">
          <span class="pf-title">Job Title</span>
          <div class="pf-field">
            <input type="text" placeholder="Designer" id="title" class="title" value="` + this.data["title"] +  `" disabled/>
          </div>
        </div>
        <div class="col-lg-12">
          <span class="pf-title">Short Description</span>
          <div class="pf-field">
            <textarea class="desc" placeholder="Working on tax breaks on Wall Street. Have had moderate success investing in Yugos on Wall Street. Has managed a small team buying and selling pogo sticks for farmers." disabled>` + this.data["desc"] +`</textarea>
          </div>
        </div>

        <div class="col-lg-12">
          <span class="pf-title">Skill Requirements (Enter as Many as Possible for Better Results) </span>
          <div class="pf-field">
            <ul class="tags">
                    <li class="tagAdd taglist">
                          <input class="skills" placeholder="Split by comma. Example: programming, sales, managment" type="text" id="search-field" value="` + this.data["skills"].join(", ") +  `" disabled>
                    </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4">
          <span class="pf-title">Job Type</span>
          <div class="pf-field">
            <select data-placeholder="Please Select a Type" class="chosen job_type" value="` + this.data["job_type"] +  `" disabled>
              <option>` + this.data["job_type"] + `</option>
            </select>
          </div>
        </div>

        <div class="col-lg-4">
          <span class="pf-title">Experience Level</span>
          <div class="pf-field">
            <select data-placeholder="Please Select Experience Level" class="chosen exp_lvl" value="` + this.data["exp_lvl"] +  `" disabled>
              <option>` + this.data["exp_lvl"] + `</option>
            </select>
          </div>
        </div>

        <div class="col-lg-4">
          <span class="pf-title">Expiration Date</span>
          <div class="pf-field">
            <input class="date" type="date" value="` + this.data["date"] + `" disabled>
          </div>
        </div>


        <div class="col-lg-12">
          <span class="pf-title">Job Location</span>
          <div class="pf-field">
            <input class="location" type="text" placeholder="New York City" value="` + this.data["location"] +  `" disabled/>
          </div>
        </div>

      </div>
    `
    var f = document.createElement("form")
    f.innerHTML = confirmHtml
    document.getElementsByClassName("profile-form-edit")["0"].appendChild(f)
    // document.getElementsByClassName("profile-form-edit")["0"].innerHTML = confirmHtml
    document.getElementById("submitBtn").innerHTML = "Submit"
    
    this.two = false
  }
  filename: string;
  comps = []

//   Array.prototype.contains = function ( needle ) {
//     for (i in this) {
//        if (this[i] == needle) return true;
//     }
//     return false;

async asyncForEach(array, callback) {
  for (var i = 0; i < array.length; i ++) {
    await callback(array[i])
  }
}

  uploadFile(formData, folder) {
    return this.http2.post("https://api.krownetwork.com/upload-employer-file", formData, {params: {folder: folder, id: this.user}}).map(
      data => {
        return data
      }
    )
  }

  ocr(formData) {
    return this.http2.post("https://api.krownetwork.com/ocr/getText/test.jpg", formData).map( data =>{
      return data
    })
  }

  compare(accessToken, postData) {
    return this.http2.post("https://api.krownetwork.com/compare-employer?token=" + accessToken, postData).map(
      data => {
        return data
      }
    )
  }

  createInfoJson(folder, file, bString) {
    return this.http2.get("https://api.krownetwork.com/create-employer-file", {params: {folder: folder, file: file.name + "info.json", id: this.user, bufferString: JSON.stringify(bString)}}).map(
        data => {
          return data
        }
      )
  }
//  }
  async submitThree() {
    alert("Do not leave this page. The page will auto-redirect when done.")

    this.data["comparisons"] = []
    // this.http.createFolder("https://api.krownetwork.com/create-employer-folder", {folder: this.data['title'], id: this.user, bufferString: JSON.stringify(this.data)}).subscribe(
    //   data => {
    //     console.log(data)
    //   }
    // )
    var folder = this.folder
    

    await this.asyncForEach(this.files, async file => {
      const formData = new FormData();
      formData.append('filepath', file, file.name);
      // formData.append("folder", )

      
      await this.uploadFile(formData, folder).toPromise()
      var data = await this.ocr(formData).toPromise()
      var postData = {
        data1: data["res"],
        data2: this.data["title"] + " " + this.data["desc"]
      }

      var accessToken = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.0379a201-001b-4010-9a04-93f4a2ca9370.accessToken")
      var comparison = await this.compare(accessToken, postData).toPromise()
      var n = file.name
      var obj = {}
      obj[n] = comparison 
      // this.comps.push(obj)
      this.data["comparisons"].push(obj)
      var bString = {
        text: postData.data1,
        comp_score: data
      }
      await this.createInfoJson(folder, file, bString).toPromise()

    })

    this.data["count"] = this.files.length + " Resumes"
      this.http.createFolder("https://api.krownetwork.com/create-employer-folder", {folder: this.folder, id: this.user, bufferString: JSON.stringify(this.data)}).subscribe(
        data => {
        }
      )

      // alert("Please wait while the job data gets saved")
    this.router.navigate(["employer/manage-jobs"])

    // while (this.data["comparisons"].length != this.files.length) {
    //   console.log(this.data["comparisons"].length)
    // }
    
    //  = this.comps
    
    // this.files = event.target.files;
     return this.data
 }

 back() {
   if (this.two == true) {
     // go back to one
     var a = document.getElementsByClassName("steps-sec")["0"].firstChild
     a.setAttribute("class", "step active")
 
     var a = document.getElementsByClassName("steps-sec")["0"].children[1]
     a.setAttribute("class", "step")

    //  if (this.data["exp_lvl"])
    var ops_exp = [
      "Full-Time",
      "Part-Time",
      "Freelancing",
      "Internship/Co-Op",
      "Other"
    ]

    ops_exp.splice(ops_exp.indexOf(this.data["job_type"]), 1)


    var ops_lvl = [
      "High",
      "Medium",
      "Low",
      "N/A"
    ]

    ops_lvl.splice(ops_lvl.indexOf(this.data["exp_lvl"]), 1)


     var redisplay = 
    `
      <div class="row">
        <div class="col-lg-12">
          <span class="pf-title">Job Title</span>
          <div class="pf-field">
            <input type="text" placeholder="Designer" id="title" class="title" value="` + this.data["title"] +  `"/>
          </div>
        </div>
        <div class="col-lg-12">
          <span class="pf-title">Short Description</span>
          <div class="pf-field">
            <textarea class="desc" placeholder="Working on tax breaks on Wall Street. Have had moderate success investing in Yugos on Wall Street. Has managed a small team buying and selling pogo sticks for farmers.">` + this.data["desc"] +`</textarea>
          </div>
        </div>

        <div class="col-lg-12">
          <span class="pf-title">Skill Requirements (Enter as Many as Possible for Better Results) </span>
          <div class="pf-field">
            <ul class="tags">
                    <li class="tagAdd taglist">
                          <input class="skills" placeholder="Split by comma. Example: programming, sales, managment" type="text" id="search-field" value="` + this.data["skills"].join(", ") +  `">
                    </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4">
          <span class="pf-title">Job Type</span>
          <div class="pf-field">
            <select data-placeholder="Please Select a Type" class="chosen job_type" value="` + this.data["job_type"] +  `">
              <option>` + this.data["job_type"] + `</option>
              <option>` + ops_exp[0] + `</option>
              <option>` + ops_exp[1] + `</option>
              <option>` + ops_exp[2] + `</option>
              <option>` + ops_exp[3] + `</option>
            </select>
          </div>
        </div>

        <div class="col-lg-4">
          <span class="pf-title">Experience Level</span>
          <div class="pf-field">
            <select data-placeholder="Please Select Experience Level" class="chosen exp_lvl" value="` + this.data["exp_lvl"] +  `">
              <option>` + this.data["exp_lvl"] + `</option>
              <option>` + ops_lvl[0] + `</option>
              <option>` + ops_lvl[1] + `</option>
              <option>` + ops_lvl[2] + `</option>
            </select>
          </div>
        </div>

        <div class="col-lg-4">
          <span class="pf-title">Expiration Date</span>
          <div class="pf-field">
            <input class="date" type="date" value="` + this.data["date"] + `">
          </div>
        </div>

        <div class="col-lg-12">
          <span class="pf-title">Job Location</span>
          <div class="pf-field">
            <input class="location" type="text" placeholder="New York City" value="` + this.data["location"] +  `"/>
          </div>
        </div>

      </div>
    
    `
    var f = document.createElement("form")
    f.innerHTML = redisplay
    document.getElementsByClassName("profile-form-edit")["0"].appendChild(f)
    console.log(document.getElementsByClassName("profile-form-edit")["0"])
    document.getElementsByClassName("profile-form-edit")["0"].removeChild(document.getElementById("file"))
    this.one = true
    // this.two = true
    
    document.getElementById("submitBtn").parentElement.removeChild(document.getElementById("backBtn"))
   } else {
     console.log(document.getElementsByClassName("profile-form-edit")["0"].firstChild)
    document.getElementsByClassName("profile-form-edit")["0"].removeChild(document.getElementsByClassName("profile-form-edit")["0"].firstChild)
    var i = document.createElement("input")
    // i.id = "fileReader"
    i.type = "file"
    i.multiple = true 
    i.id = "file"

    var self = this
    i.addEventListener("change", function(e) {
      for (var i = 0; i < e.target["files"].length; i++) { 
        var f = e.target["files"][i]
        console.log(f)
        // if (f.type.split("/")[0] != "application") {
        //   console.log("oops")
        // } else {
          self.files.push(f);
        // }
      }
      
    })

    // p.innerHTML = "Select Resumes"
    // p.addEventListener("click", function(e) {})
    
    document.getElementsByClassName("profile-form-edit")["0"].appendChild(i)
    document.getElementById("submitBtn").innerHTML = "Next"

    var a = document.getElementsByClassName("steps-sec")["0"].children[1]
    a.setAttribute("class", "step active")

    var a = document.getElementsByClassName("steps-sec")["0"].children[2]
    a.setAttribute("class", "step")
    this.two = true
    this.three = true
   }
 }
//  filestring: any;
//  _handleReaderLoaded(readerEvt) {
//    console.log(this.filename)
//      var binaryString = readerEvt.target.result;
//     //  this.filestring = new Buffer(btoa(binaryString)).toString("base64"); 
//      var body = {
//       data: binaryString.split("data:application/pdf;base64,")[1],
//       filename: this.filename
//     }
//     console.log(body)
//     this.http2.post("https://api.krownetwork.com/ocr/getText/dontmatter.jpg", body, {headers: {Authorization: "Bearer 2535fde9-7970-406d-a6a0-420b75290dc7", "Content-Type": "application/json"}}).subscribe(
//       data => {
//         console.log("a", data)
//       }, (err: HttpErrorResponse) =>
//         {
//           console.log(err)
//         }
      
//     ) // Converting binary string data.
    
// }

  }


