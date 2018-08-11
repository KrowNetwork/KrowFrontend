import { Component, OnInit } from '@angular/core';
import { CustomHttpService } from '../service/custom-http.service'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  msg: string;
  name: string;
  email: string;
  subject: string;
  constructor(
    private http: CustomHttpService
  ) { }

  ngOnInit() {

  }

  sendFeedback() {
    var data = {
      name: this.name,
      email: this.email,
      msg: this.msg,
      subject: this.subject
    }
    this.http.post("https://api.krownetwork.com/feedback", data).subscribe(
      data => {
        alert("Success!")

      }
    )
  }
}
