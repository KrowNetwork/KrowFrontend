import {
  Component
} from "@angular/core";
import {
  Router
} from "@angular/router";
import {
  UserRegistrationService
} from "../../service/user-registration.service";
import {
  CognitoCallback
} from "../../service/cognito.service";
import {
  EmployerEditComponent
} from "../../../employer/employer-edit/employer-edit.component";
import {
  CreateUserService
} from '../../service/create-user.service';

export class RegistrationUser {
  name: string;
  email: string;
  phone_number: string;
  password: string;
}
/**
 * This component is responsible for displaying and controlling
 * the registration of the user.
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements CognitoCallback {
  registrationUser: RegistrationUser;
  router: Router;
  errorMessage: string;
  confirmedMessage:string;
  confirmPassword: string;
  intent: string;
  user: string;
  bgColor = 'none';
  bgColor2 = 'none';
  color = '#202020';
  color2 = '#202020';
  agreed = false;


  constructor(
    public userRegistration: UserRegistrationService,
    router: Router,
    private initializeUser: CreateUserService,
  ) {
    this.router = router;
    this.onInit();
  }

  onInit() {
    this.registrationUser = new RegistrationUser();
    this.errorMessage = null;
  }

  async onRegister() {
    if (this.registrationUser.email == "" || this.registrationUser.password == "" || this.confirmPassword == "") {
      this.errorMessage = "All fields are required";
      return;
    }
    if (this.registrationUser.password != this.confirmPassword) {
      this.errorMessage = "Passwords don't match";
      return;
    }

    // if (this.intent !== "Applicant" && this.intent !== "Employer") {
    //   this.errorMessage = "Please select you're an Applicant or an Employer";
    //   return;
    // }

    if (!this.agreed) {
      this.errorMessage = "Please agree to terms and conditions before move on";
      return;
    }

    this.errorMessage = null;
    this.confirmedMessage = 'Please wait...'
    await this.userRegistration.register(this.registrationUser, this);
  }



  async cognitoCallback(message: string, result: any) {
    if (message != null) { //error
      this.errorMessage = message;
      // console.log("result: " + this.errorMessage);
    } else { //success
      //move to the next step
      // console.log("redirecting");

      this.confirmedMessage = 'Redirecting...'
      // var email = this.registrationUser.email.toLowerCase()
      // if (this.intent == "Applicant") {
      //   var obj = {
      //     user: result.userSub,
      //     first: '',
      //     second: '',
      //     email: email,
      //     bio: '',
      //     address: '',
      //     state: '',
      //     city: '',
      //     country: '',
      //     phoneNumber: ''

      //   } 
      //   console.log('applicant', obj)
      //   await this.initializeUser.initializeUser(obj, this.intent, null, this.router);

      // } else {
      //   var employerObj = {
      //     user: result.userSub,
      //     company: '',
      //     email: email,
      //     bio: '',
      //     location: '',
      //     year: '',
      //     phoneNumber: '',
      //     links: [{
      //         type: 'FACEBOOK',
      //         url: ''
      //       },
      //       {
      //         type: 'TWITTER',
      //         url: ''
      //       },
      //       {
      //         type: 'LINKEDIN',
      //         url: ''
      //       },
      //       {
      //         type: 'WEBSITE',
      //         url: ''
      //       }
      //     ],
      //     jobType: 0,
      //     size: 0,
      //     keyWords: [],
      //   }
      //   console.log('employer', obj);
      //   await this.initializeUser.initializeUser(employerObj, this.intent, null, this.router);
      // }
      
      window.location.href = '/secureHome';
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

  agreedToTerms(){
    this.agreed = !this.agreed
  }
}
