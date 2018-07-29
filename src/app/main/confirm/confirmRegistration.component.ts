import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserRegistrationService} from "../../service/user-registration.service";
import {UserLoginService} from "../../service/user-login.service";
import {LoggedInCallback} from "../../service/cognito.service";

@Component({
    selector: 'awscognito-angular2-app',
    template: ''
})
export class LogoutComponent implements LoggedInCallback {
    
    constructor(public router: Router,
                public userService: UserLoginService) {
        this.userService.isAuthenticated(this)
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (isLoggedIn) {
            this.userService.logout();
            sessionStorage.removeItem("accountType")
            this.router.navigate(['/login']);
        }
        else{
            this.router.navigate(['/login']);
        }
    }
}

@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './confirmRegistration.html'
})
export class RegistrationConfirmationComponent implements OnInit, OnDestroy {
    confirmationCode: string;
    email: string;
    errorMessage: string;
    private sub: any;
    radioData = {type: "yeet"};
    constructor(
        public regService: UserRegistrationService, 
        public router: Router, 
        public route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.email = params['username'];
        });
        this.errorMessage = null;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onConfirmRegistration() {
        if (this.email == "" || this.confirmationCode == "") {
            this.errorMessage = "Confirmation code is required";
            return;
        }
        this.errorMessage = null;
        // // console.log(this.radioData)
        this.regService.confirmRegistration(this.email, this.confirmationCode, this.radioData, this);
    }

    onSelectionChange(value) {
        this.radioData.type = value;
    }

    cognitoCallback(message: string, result: any) {
        if (message != null) { //error
            this.errorMessage = message;
            // console.log("message: " + this.errorMessage);
        } else { //success
            /*
                VIVEK
            */
            // Pop-up dialog with user agreements then move to secureHome using the same 
            // syntax as bellow on agreed, else we can discuss what to do (disable clickOutsideToClose)
            // Implementation of AngularJS Material is up to you. Do mind,
            // this in context is RegistrationConfirmationComponent, 
            // router comes from the constructor public router: Router therefore is a property of this
            // console.log("Moving to collect basic info");
            this.router.navigate(['/secureHome']);
        }
    }
}





