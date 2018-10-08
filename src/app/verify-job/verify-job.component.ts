import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { CustomHttpService } from '../service/custom-http.service'
import { DataShareService } from "../service/data-share.service"
import * as AWS from "aws-sdk";
@Component({
  selector: 'app-verify-job',
  templateUrl: './verify-job.component.html',
  styleUrls: ['./verify-job.component.css']
})
export class VerifyJobComponent implements OnInit {
  // @Input() name: string;
  showReq = false;
  showVer = false;
  firstName = ""
  lastName = ""
  code = ""
  businessName = ""
  email = ""
  name: String
  ddb = undefined
  item = undefined
  msg = {
    msg: "",
    type:"danger"
  }
  check = undefined
  fullName = ""
  jobTitle = ""
  company = ""
  esig = ""
  agreementText = "I certify that I am the person listed above, and that the requestor did work at the company named above. I agree that the requestor and I will be held liable in the event this job is fraudlent."
  constructor(
    private router: Router,
    private http: HttpClient,
    private chttp: CustomHttpService,
    private dataShare: DataShareService
  ) {

    AWS.config.update({region: "us-east-2"})
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId : 'us-east-2:d7bb8495-a1a4-4280-be12-9af389a16f88' })

    this.ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'})


   }

  ngOnInit() {
    // console.log(this.router.url.split("/"))
    if (this.router.url.split("/")[2] == "requestVerification") {
      this.showReq = true
    } else {
      this.showVer = true
      var params = {
        TableName: "verifications",
        Key: {
          verificationID: {S: this.router.url.split("/")[2]}
        }
      }
      this.item = this.ddb.getItem(params)
      this.item.send()
      var self = this
      this.item.on("success", function(data) {
        console.log(data)
        self.fullName = data.data.Item.requestor.S
        self.jobTitle = data.data.Item.job_name.S
        self.company = data.data.Item.company.S
        if (data.data.Item.verified.BOOL == true) {
          self.router.navigate(["/"])
        }
      })
    }

    
  }

  sendVer() {
    var item = this.item.response.data
    console.log(this.check)
    console.log(item)
    if (this.check != true) {
      this.msg.msg = "Please certify the statement below"
      this.msg.type = "danger"
    } else {

      if (this.code == item.Item.code.S && this.firstName != "" && this.firstName !== undefined
        && this.lastName != "" && this.lastName !== undefined
        && this.businessName != "" && this.businessName !== undefined
        && this.esig != "" && this.esig != "") 
        {

        item.Item.verifierFirstName = {S: this.firstName}
        item.Item.verifierLastName = {S: this.lastName}
        item.Item.veriedDate = {S: new Date().toISOString()}
        item.Item.verified.BOOL = true
        item.Item.eSignature = {S: this.esig}
        item.Item.agreementText = {S: this.agreementText}
        item.Item.businessName = {S: this.businessName}
        
  
        var params = {
          TableName: "verifications",
          Item: item.Item
        }
        var self = this
        this.ddb.putItem(params, function(err, data) {
          console.log(err, data)
          if (err === null) {
            console.log(item)
            // console.log("here")
            var p = {
              applicant: item.Item.applicantID.S,
              verifyID: item.Item.verificationID.S,
              verificationEmail: item.Item.email.S
            }
            self.http.post("https://api.krownetwork.com/verify", p).subscribe(
              data => {
                console.log(data)
                self.msg.msg = "Success! You may now leave this page"
                self.msg.type = "success"
              }
            )
          }
        })
  
  
  
  
      }
      else {
        this.msg.msg = "Please fill out all the information"
        this.msg.type = "danger"
      }
    }
  }

  sendReq() {
    this.dataShare.shared.subscribe(data => this.name = data)
    this.name["to"] = this.email
    console.log(this.name)

    this.http.post("https://api.krownetwork.com/request-verification", this.name).subscribe(
      data => {
        console.log(data)
        this.msg.msg = "The request has been sent"
        this.msg.type = "success"
      }, // Catch Errors
      (err: HttpErrorResponse) => {
        this.msg.msg = "There was an error. Please try again"
      }
    )
    console.log("Done")
  }

}
