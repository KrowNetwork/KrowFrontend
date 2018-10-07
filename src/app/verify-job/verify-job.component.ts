import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import { HttpClient } from '@angular/common/http'
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

    }

    
  }

  sendVer() {
    var item = this.item.response.data
    console.log(item)
    if (this.code == item.Item.code.S) {
      item.Item.verifierFirstName = {S: this.firstName}
      item.Item.verifierLastName = {S: this.lastName}
      item.Item.veriedDate = {S: new Date().toISOString()}
      item.Item.verified.BOOL = true

      var params = {
        TableName: "verifications",
        Item: item.Item
      }

      this.ddb.putItem(params, function(err, data) {
        console.log(err, data)
        if (err === undefined) {
          var p = {
            applicant: data.Item.applicantID.S,
            verifyID: data.Item.verificationID.S,
            verificationEmail: data.Item.email.S
          }
          this.http.post("https://api.krownetwork.com/verify", p).subscribe(
            data => {
              console.log(data)
            }
          )
        }
      })




    }
  }

  sendReq() {
    this.dataShare.shared.subscribe(data => this.name = data)
    this.name["to"] = this.email

    this.http.post("https://api.krownetwork.com/request-verification", this.name).subscribe(
      data => {
        console.log(data)
      }
    )
    console.log("Done")
  }

}
