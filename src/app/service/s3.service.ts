import { Injectable } from '@angular/core';
import * as AWS from "aws-sdk"


@Injectable({
  providedIn: 'root'
})
export class S3Service {

  constructor() { }

  getBucket(bucketName) {
    const AWSService = AWS;
    const region = 'us-east-2';
    const IdentityPoolId = 'us-east-2:e83a6051-fdec-4360-9685-ecc4fcd1b014';
    // const file = fileInput.target.files[0];

    
  //Configures the AWS service and initial authorization
    AWSService.config.update({
      region: region,
      credentials: new AWSService.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
      })
    });
  //adds the S3 service, make sure the api version and bucket are correct
    const s3 = new AWSService.S3({
      apiVersion: '2006-03-01',
      params: { 
        Bucket: bucketName,
        accessKeyId: 'AKIAIBG54WK54C5AYA5Q',
        secretAccessKey: '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',
      }
    });

    return s3;
  }
}
