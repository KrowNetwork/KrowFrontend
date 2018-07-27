import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Subject } from 'rxjs';
import { CustomHttpService } from '../../service/custom-http.service';


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  msg: string;
  constructor(
    private http: CustomHttpService,
  ) { }

  ngOnInit() {
  }


  submitHelp() {
    var msgData = {
      name: document.getElementById("name")["value"],
      email: document.getElementById("email")["email"],
      subject: document.getElementById("subject")["subject"],
      msg: document.getElementById("message")["value"],
      to: "help@krow.network"
    }
    this.msg = "Please wait"
    this.http.post("http://52.15.219.10:4200/help", msgData).subscribe(
      data=> {
        this.msg = "Success"
      },
      
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // console.log("Client-side error occured.");
      } else {
        // console.log("Server-side error occured.");
        // console.log(err);
      }
      this.msg = "There was an error. Please try again"
    }
    )
  }


}
