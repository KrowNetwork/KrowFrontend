import { Injectable } from '@angular/core';
import * as AWS from "aws-sdk"


@Injectable({
  providedIn: 'root'
})
export class S3Service {

  constructor() { }

  getBucket(bucketName) {
    // const AWSService = AWS;
    const region = 'us-east-2';
    const IdentityPoolId = 'us-east-2:e83a6051-fdec-4360-9685-ecc4fcd1b014';
    // const file = fileInput.target.files[0];

    
  //Configures the AWS service and initial authorization
    // AWSService.config.update({
    //   region: region,
    //   credentials: new AWSService.CognitoIdentityCredentials({
    //     IdentityPoolId: IdentityPoolId
    //   })
    // });
    

    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId : 'us-east-2:d7bb8495-a1a4-4280-be12-9af389a16f88', // your identity pool id here
      Logins : {
          // Change the key below according to the specific region your user pool is in.
          'cognito-idp.us-east-2.amazonaws.com/us-east-2:d7bb8495-a1a4-4280-be12-9af389a16f88' : localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.idToken")
      }
    });
    console.log(AWS.config.credentials)
    AWS.config.update({region: "us-east-2"})

  //adds the S3 service, make sure the api version and bucket are correct
    const s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: { 
        Bucket: bucketName,

      }
    });

    return s3;
  }
}
