import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserLoginService } from "../../service/user-login.service";
import { ChallengeParameters, CognitoCallback, LoggedInCallback } from "../../service/cognito.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  email: string;
    password: string;
    errorMessage: string;
    mfaStep = false;
    mfaData = {
        destination: '',
        callback: null
    };
    status = 'employer';

    constructor(
        public router: Router,
        public userService: UserLoginService) {
        // console.log("Login Component: constructor");
    }

    ngOnInit() {
        this.errorMessage = null;
        // console.log("Checking if the user is already authenticated. If so, then redirect to the secure site");
        this.userService.isAdmin(this);
    }

    onLogin() {
        if (!this.email || !this.password) {
            this.errorMessage = "All fields are required";
            return;
        }
        else{
            this.errorMessage = null;
            this.userService.authenticate(this.email, this.password, this);
        }
    }

    cognitoCallback(message: string, result: any) {
        if (message != null) { //error
            this.errorMessage = message;
            // console.log("result: " + this.errorMessage);
            if (this.errorMessage === 'User is not confirmed.') {
                // console.log("redirecting");
                this.router.navigate(['/confirmRegistration', this.email]);
            } else if (this.errorMessage === 'User needs to set password.') {
                // console.log("redirecting to set new password");
                this.router.navigate(['/newPassword']);
            }
        } else { //success
            // if (sessionStorage.getItem("redirectBack") !== undefined) {
            //     this.router.navigate(sessionStorage.getItem("redirectBack"))
            // } else {
                window.location.href = '/secureHome';
            // }
            
        }
    }

    handleMFAStep(challengeName: string, challengeParameters: ChallengeParameters, callback: (confirmationCode: string) => any): void {
        this.mfaStep = true;
        this.mfaData.destination = challengeParameters.CODE_DELIVERY_DESTINATION;
        this.mfaData.callback = (code: string) => {
            if (code == null || code.length === 0) {
                this.errorMessage = "Code is required";
                return;
            }
            this.errorMessage = null;
            callback(code);
        };
    }
    
    isLoggedIn(message: string, isLoggedIn: boolean) {
        if(isLoggedIn){
            this.router.navigate(['/admin/home']);
        }
        else{
            this.router.navigate(['./login']);
        }
    }

    cancelMFA(): boolean {
        this.mfaStep = false;
        return false;   //necessary to prevent href navigation
    }

}
