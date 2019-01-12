import { Component, OnInit } from '@angular/core';
import { CustomHttpService } from '../service/custom-http.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-resume-parser',
  templateUrl: './resume-parser.component.html',
  styleUrls: ['./resume-parser.component.css']
})

export class ResumeParserComponent implements OnInit {
  selectedFile: File
  url: string
  constructor(
    // public http: CustomHttpService
    public http: HttpClient
  ) { }

  ngOnInit() {

  }

  onFileChanged(event) {
    if(event.target.files && event.target.files[0]) { 
      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.onUpload()
      }
      reader.readAsDataURL(event.target.files[0]);
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile)
      // this.onUpload()
    }
  }

  onUpload() {
    console.log(this.selectedFile)
    if(this.selectedFile != null){
      
      let headers = new Headers();
      headers.append('Content-Type', 'multipart/form-data');
      // headers.append('authentication', `${student.token}`);
      // let options = new RequestOptions({ headers: headers });

      const formData = new FormData();
      formData.append('filepath', this.selectedFile, this.selectedFile.name);
      console.log(formData.get("filepath"))
      // this.http.post("https://api.krownetwork.com/ocr/doesnotmatter", formData).subscribe(
      this.http.post("http://localhost:2000/ocr/doesnotmatter.jpg", formData).subscribe(
      data => {
        console.log(data)
      }
    )
   }
    
    // } 
    // this.http
  }

}
