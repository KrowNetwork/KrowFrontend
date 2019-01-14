import { Component, OnInit } from '@angular/core';
import { CustomHttpService } from "../../shared/service/custom-http.service"
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

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
  ) {
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
   }

  ngOnInit() {

  }

  submitHandler() {
    if (this.one) {
      this.submitOne()
    } else if (this.two) {
      this.submitTwo()
    } else if (this.three) {
      this.submitThree()
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
      date: date.value
    }
    // console.log(this.data)

    var a = document.getElementsByClassName("steps-sec")["0"].firstChild
    a.setAttribute("class", "step")

    var a = document.getElementsByClassName("steps-sec")["0"].children[1]
    a.setAttribute("class", "step active")

    document.getElementsByClassName("profile-form-edit")["0"].firstChild.style.display = "none"
    var p = document.createElement("button")
    var i = document.createElement("input")
    i.type = "file"
    i.multiple = true 
    i.id = "file"

    var self = this
    i.addEventListener("change", function(e) {
      for (var i = 0; i < e.target["files"].length; i++) { 
        var f = e.target["files"][i]
        console.log(f)
        if (f.type.split("/")[0] != "application") {
          console.log("oops")
        } else {
          self.files.push(f);
        }
      }
      
    })

    // p.innerHTML = "Select Resumes"
    // p.addEventListener("click", function(e) {})
    
    document.getElementsByClassName("profile-form-edit")["0"].appendChild(i)
    // document.getElementsByClassName("profile-form-edit")["0"].appendChild(p)

    this.one = false
  }

  submitTwo() {
    // console.log(document.getElementsByClassName("profile-form-edit")["0"])
    document.getElementsByClassName("profile-form-edit")["0"].children[1].style.display = "none"
    
    var a = document.getElementsByClassName("steps-sec")["0"].children[1]
    a.setAttribute("class", "step")

    var a = document.getElementsByClassName("steps-sec")["0"].children[2]
    a.setAttribute("class", "step active")

    var confirmHtml = 
    `
    <form>
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

        <div class="col-lg-6">
          <span class="pf-title">Job Type</span>
          <div class="pf-field">
            <select data-placeholder="Please Select a Type" class="chosen job_type" value="` + this.data["job_type"] +  `" disabled>
              <option>` + this.data["job_type"] + `</option>
            </select>
          </div>
        </div>

        <div class="col-lg-6">
          <span class="pf-title">Experience Level</span>
          <div class="pf-field">
            <select data-placeholder="Please Select Experience Level" class="chosen exp_lvl" value="` + this.data["exp_lvl"] +  `" disabled>
              <option>` + this.data["exp_lvl"] + `</option>
            </select>
          </div>
        </div>

        <div class="col-lg-12">
          <span class="pf-title">Job Location</span>
          <div class="pf-field">
            <input class="location" type="text" placeholder="New York City" value="` + this.data["location"] +  `" disabled/>
          </div>
        </div>

      </div>
    </form>
    `

    document.getElementsByClassName("profile-form-edit")["0"].innerHTML = confirmHtml
    document.getElementById("submitBtn").innerHTML = "Submit"
    this.two = false
  }
  filename: string;
  submitThree() {

    this.http.createFolder("https://api.krownetwork.com/create-employer-folder", {folder: this.data['title'], id: this.user, bufferString: JSON.stringify(this.data)}).subscribe(
      data => {
        console.log(data)
      }
    )

    this.files.forEach(file => {
      const formData = new FormData();
      formData.append('filepath', file, file.name);
      // formData.append("folder", )
      console.log(formData.get("filepath"))
      var params = {
        folder: this.data["title"], id: this.user}
      var reader = new FileReader();
      this.filename = file.name
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
      
      this.http.rpost("http://localhost:2000/upload-employer-file", formData, params).subscribe(
        data => {
          console.log(data)
        }
      )
      
        
    })
    // this.files = event.target.files;
     
 }
 filestring: any;
 _handleReaderLoaded(readerEvt) {
   console.log(this.filename)
     var binaryString = readerEvt.target.result;
    //  this.filestring = new Buffer(btoa(binaryString)).toString("base64"); 
     var body = {
      data: binaryString.split("data:application/pdf;base64,")[1],
      filename: this.filename
    }
    console.log(body)
    this.http2.post("https://www.rapidparser.com/api/rest/v1/parse", body, {headers: {Authorization: "Bearer 2535fde9-7970-406d-a6a0-420b75290dc7", "Content-Type": "application/json"}}).subscribe(
      data => {
        console.log("a", data)
      }, (err: HttpErrorResponse) =>
        {
          console.log(err)
        }
      
    ) // Converting binary string data.
    
}

  }


