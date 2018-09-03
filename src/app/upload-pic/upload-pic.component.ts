import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../service/user-login.service';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { ImageCropperModule } from 'ngx-image-cropper';
import { S3Service } from "../service/s3.service"
import {ImageCropperComponent, CropperSettings, Bounds} from 'ng2-img-cropper';
import { CustomHttpService } from '../service/custom-http.service';


@Component({
  selector: 'app-upload-pic',
  templateUrl: './upload-pic.component.html',
  styleUrls: ['./upload-pic.component.css']
  
})
export class UploadPicComponent implements OnInit {
  @ViewChild('cropper', undefined) cropper:ImageCropperComponent;

  image: string;
  user: string;
  cropperSettings: CropperSettings;
  data: any;
  constructor(private router: Router, public userService: UserLoginService, public http: CustomHttpService, public s3service: S3Service) { 
    this.userService.isAuthenticated(this);
    // console.log("Applicant Component: constructor");
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 512;
    this.cropperSettings.height = 512;
    this.cropperSettings.croppedWidth =512;
    this.cropperSettings.croppedHeight = 512;
    this.cropperSettings.canvasWidth = 512;
    this.cropperSettings.canvasHeight = 512;
    // this.cropperSettings.fileType = "image/jpeg"
    this.cropperSettings.rounded = true;
    // this.cropperSettings.preserveSize = true;
 
      this.data = {};


  }
  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn) {
      sessionStorage.setItem("redirectBack", this.router.url)
        this.router.navigate(['/login']);
    }
}
  ngOnInit() {
  }

  dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.toString().split(',')[1]);

    //var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    var blob = new Blob([ab], {type: 'image/png'}); //or mimeString if you want
    return blob;
}

  done() {
    var blob = this.dataURItoBlob(this.data.image)
    var image = new File([blob], this.user + '.png');
    const bucketName = 'krow-network-profile-pics';




    var s3 = this.s3service.getBucket(bucketName);
    this.image = this.user;
    var hasErr = false;
    s3.upload(
      { 
        Key: "pics/" + this.user + ".png", 
        Bucket: bucketName,
         Body: image, 
         ACL: 'public-read',
         
        
      }, function (err, data) {
     if (err) {
       console.log(err, 'there was an error uploading your file');
       hasErr = true
     } else {
      //  console.log(data)
     }
   });
   if (!hasErr) {
     if (sessionStorage.getItem("accountType") == "applicant")
        this.router.navigate(["/applicant"])
     else
        this.router.navigate(["/employer"])
   }
  }

  imageChangedEvent: any = '';
croppedImage: any = '';

cropped(bounds:Bounds) {
  //// console.log(bounds);
}

fileChangeListener($event) {
  var image:any = new Image();
  var file:File = $event.target.files[0];
  var myReader:FileReader = new FileReader();
  var that = this;
  myReader.onloadend = function (loadEvent:any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);

  };

  myReader.readAsDataURL(file);
}

// nav() {
  
// }
// // fileChangeEvent(event: any): void {
//     this.imageChangedEvent = event;
// }
// imageCropped(image: string) {
//     this.croppedImage = image;
// }

// imageLoaded() {
//     // show cropper
// }
// loadImageFailed() {
//     // show message
// }
// done(){
//   // console.log(this.data)
// }

}
