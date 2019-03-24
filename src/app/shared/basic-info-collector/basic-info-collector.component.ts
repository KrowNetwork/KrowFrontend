import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  CreateUserService
} from '../../shared/service/create-user.service';
import {
  EditComponent
} from '../../applicant/edit/edit.component';
import {
  CustomHttpService
} from '../../shared/service/custom-http.service';
import {
  UserParametersService
} from '../../shared/service/user-parameters.service';
import {
  CognitoUtil
} from '../../shared/service/cognito.service';
import {
  HttpErrorResponse
} from '@angular/common/http';

@Component({
  selector: 'basic-info-collector',
  templateUrl: './basic-info-collector.component.html',
})
export class BasicInfoCollectorComponent implements OnInit {

  @ViewChild(EditComponent) edit: EditComponent
  @ViewChild('volunteersButton') vol: ElementRef;
  @ViewChild('experienceButton') exp: ElementRef;
  @ViewChild('educationButton') edu: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private initializeUser: CreateUserService,
    public http: CustomHttpService,
    private cognitoUtil: CognitoUtil,
    private attr: UserParametersService
  ) {}

  user: string;
  intent: string;

  bgColor: string;
  bgColor2: string;
  color: string;
  color2: string;

  //applicant
  first: string;
  second: string;
  address: string;
  state: string;
  city: string;
  country: string;


  //employer
  company: string;
  year: string;
  location: string;


  //both
  bio: string;
  email: string;
  phoneNumber: string;

  errorMessage = null;
  collectInfoOn = true;
  uploadImageOn = false;
  obj: {};

  ngOnInit() {

    this.getUserEmail();

    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.intent = params.as;
      });
    this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");

    sessionStorage.setItem("accountType", this.intent.toString().toLowerCase())

    this.intent = "Employer";
    this.bgColor = '#fb236a';
    this.bgColor2 = 'none';
    this.color = '#ffffff';
    this.color2 = '#202020';
  }

  async submitInfo() {
    console.log('edit', this.edit);

    if (!this.user || !this.intent) {

      this.errorMessage = "Something went wrong, please go back.";
      return;

    }
    if (this.intent == "Applicant" && (!this.first || !this.second)) {

      this.errorMessage = "First Name, Last Name are required";

    } else if (this.intent == "Employer" && (!this.company || !this.bio)) {

      this.errorMessage = "Company Name, Description are required";

    } else {

      this.errorMessage = null;

      if (this.intent == "Applicant") {


        var obj = {
          user: this.user,
          first: this.first || '',
          second: this.second || '',
          email: this.email  || '',
          bio: this.bio || '',
          address: '',
          state: '',
          city: '',
          country: '',
          phoneNumber: this.phoneNumber || ''

        }
        // var url = "http://18.220.46.51:3000/api/Applicant/" + this.user;

        // let x = this;
        // this.http.get(url).subscribe(
        //   data => {
        //     console.log('data', data)
        //     data['firstName'] = this.first || '';
        //     data['lastName'] = this.second || '';
        //     data['resume']['biography'] = this.bio || '';
        //     data['phoneNumber'] = this.phoneNumber || ''; 

        //     x.http.put(url, data).subscribe(
        //       data => {
        //         console.log(data)
        //         x.activate();
        //       },
        //       (err: HttpErrorResponse) => {
        //         if (err.error instanceof Error) {
        //           // console.log("Client-side error occured.");
        //         } else {
        //           // console.log("Server-side error occured.");
        //         }
        //         console.log(err)
        //       }
        //     );
        //   }
        // )

      } else {

        this.obj = {
          user: this.user,
          company: this.company || '',
          email: this.email  || '',
          bio: this.bio || '',
          location: '',
          year: '',
          phoneNumber: this.phoneNumber || '',
          links: [{
              type: 'FACEBOOK',
              url: ''
            },
            {
              type: 'TWITTER',
              url: ''
            },
            {
              type: 'LINKEDIN',
              url: ''
            },
            {
              type: 'WEBSITE',
              url: ''
            }
          ],
          jobType: 0,
          size: 0,
          keyWords: [],
        }


        // var url = "http://18.220.46.51:3000/api/Employer/" + this.user;

        // let x = this;
        // this.http.get(url).subscribe(
        //   data => {
        //     console.log('data', data)
        //     data['employerName'] = this.company || '';
        //     data['description'] = this.bio || '';
        //     data['phoneNumber'] = this.phoneNumber || ''; 

        //     x.http.put(url, data).subscribe(
        //       data => {
        //         console.log(data)
        //         x.activate();
        //       }, // Catch Errors
        //       (err: HttpErrorResponse) => {
        //         if (err.error instanceof Error) {
        //           // console.log("Client-side error occured.");
        //         } else {
        //           // console.log("Server-side error occured.");
        //         }
        //         console.log(err)
        //       }
        //     );
        //   }
        // )
        // await this.initializeUser.initializeUser(employerObj, this.intent, null, this.router);

      }

      this.initializeUser.initializeUser(this.obj, this.intent, this.activate, this.router);
    }
  }

  isEmployer() {
    this.intent = "Employer";
    this.bgColor = '#fb236a';
    this.bgColor2 = 'none';
    this.color = '#ffffff';
    this.color2 = '#202020';
    console.log(this.intent);
  }

  isCandidate() {
    this.intent = "Applicant";
    this.bgColor = 'none';
    this.bgColor2 = '#fb236a';
    this.color = '#202020';
    this.color2 = '#ffffff';
    console.log(this.intent);
  }

  next() {
    if (this.errorMessage == null) {
      this.collectInfoOn = false;
      this.uploadImageOn = true;
    }

  }

  // activate(intent: string, user: string, router){
  //     // var path = "/" + intent;
  //     router.navigate(["/" + intent + "/profile-info"]);
  // }

  activate() {
    // var path = "/" + intent;
    this.router.navigate(["/" + this.intent.toLowerCase() + "/profile-info"]);
  }

  getUserEmail(){
    var cognitoUser = this.cognitoUtil.getCurrentUser()
    var x = this;

    if (cognitoUser != null) {
      cognitoUser.getSession(function (err, session) {
          if (err) {
              
          }
              // console.log("UserParametersService: Couldn't retrieve the user");
          else {
              cognitoUser.getUserAttributes(function (err, result) {
                  if (err) {
                      //console.log("UserParametersService: in getParameters: " + err);
                  } else {
                      //console.log("UserParametersService: in getParameters 2: " + result);

                      result.forEach((attr) => {
                          if(attr.getName() === 'email'){
                            x.email = attr.getValue();
                          }
                      });
                      
                  }
              });
          }

      });
    }
    
  }
}
