import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { CognitoCallback, CognitoUtil, LoggedInCallback } from "./cognito.service";
import { AuthenticationDetails, CognitoUser, CognitoUserSession, CognitoRefreshToken } from "amazon-cognito-identity-js";
import * as AWS from "aws-sdk/global";
import * as STS from "aws-sdk/clients/sts";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { CustomHttpService } from "./custom-http.service"
import { createAotUrlResolver } from "../../../node_modules/@angular/compiler";

@Injectable()
export class UserLoginService {

    private onLoginSuccess = (callback: CognitoCallback, session: CognitoUserSession) => {

        // console.log("In authenticateUser onSuccess callback");

        AWS.config.credentials = this.cognitoUtil.buildCognitoCreds(session.getIdToken().getJwtToken());

        // So, when CognitoIdentity authenticates a user, it doesn't actually hand us the IdentityID,
        // used by many of our other handlers. This is handled by some sly underhanded calls to AWS Cognito
        // API's by the SDK itself, automatically when the first AWS SDK request is made that requires our
        // security credentials. The identity is then injected directly into the credentials object.
        // If the first SDK call we make wants to use our IdentityID, we have a
        // chicken and egg problem on our hands. We resolve this problem by "priming" the AWS SDK by calling a
        // very innocuous API call that forces this behavior.
        let clientParams: any = {};
        if (environment.sts_endpoint) {
            clientParams.endpoint = environment.sts_endpoint;
        }
        let sts = new STS(clientParams);
        sts.getCallerIdentity(function (err, data) {
            // console.log("UserLoginService: Successfully set the AWS credentials");
            callback.cognitoCallback(null, session);
        });
    }

    private onLoginError = (callback: CognitoCallback, err) => {
        callback.cognitoCallback(err.message, null);
    }
    
    constructor(
        public cognitoUtil: CognitoUtil,
        private http: CustomHttpService) {
    }
    getUser(username) {
        let userData = {
            Username: username,
            Pool: this.cognitoUtil.getUserPool()
        };

        // console.log("UserLoginService: Params set...Authenticating the user");
        let cognitoUser = new CognitoUser(userData);
        return cognitoUser
    }

    authenticate(username: string, password: string, callback: CognitoCallback) {
        // console.log("UserLoginService: starting the authentication");

        let authenticationData = {
            Username: username,
            Password: password,
        };
        let authenticationDetails = new AuthenticationDetails(authenticationData);

        let userData = {
            Username: username,
            Pool: this.cognitoUtil.getUserPool()
        };

        // console.log("UserLoginService: Params set...Authenticating the user");
        let cognitoUser = new CognitoUser(userData);
        // console.log("UserLoginService: config is " + AWS.config);
        cognitoUser.authenticateUser(authenticationDetails, {
            newPasswordRequired: (userAttributes, requiredAttributes) => callback.cognitoCallback(`User needs to set password.`, null),
            onSuccess: result => {
                (<any>window).ga('send', 'event', { //GA tracking code
                    eventCategory: 'login',
                    eventLabel: 'login',
                    eventAction: 'login',
                    eventValue: 10
                  });
                console.log("GA SENT")
                this.onLoginSuccess(callback, result)
            },
            onFailure: err => this.onLoginError(callback, err),
            mfaRequired: (challengeName, challengeParameters) => {
                callback.handleMFAStep(challengeName, challengeParameters, (confirmationCode: string) => {
                    cognitoUser.sendMFACode(confirmationCode, {
                        onSuccess: result => {
                            
                            this.onLoginSuccess(callback, result)
                        } ,
                        onFailure: err => this.onLoginError(callback, err)
                    });
                });
            }
        });
    }

    forgotPassword(username: string, callback: CognitoCallback) {
        let userData = {
            Username: username,
            Pool: this.cognitoUtil.getUserPool()
        };

        let cognitoUser = new CognitoUser(userData);

        cognitoUser.forgotPassword({
            onSuccess: function () {

            },
            onFailure: function (err) {
                callback.cognitoCallback(err.message, null);
            },
            inputVerificationCode() {
                callback.cognitoCallback(null, null);
            }
        });
    }

    confirmNewPassword(email: string, verificationCode: string, password: string, callback: CognitoCallback) {
        let userData = {
            Username: email,
            Pool: this.cognitoUtil.getUserPool()
        };

        let cognitoUser = new CognitoUser(userData);

        cognitoUser.confirmPassword(verificationCode, password, {
            onSuccess: function () {
                callback.cognitoCallback(null, null);
            },
            onFailure: function (err) {
                callback.cognitoCallback(err.message, null);
            }
        });
    }

    logout() {
        // console.log("UserLoginService: Logging out");
        this.cognitoUtil.getCurrentUser().signOut();
        localStorage.clear()
        sessionStorage.clear()

        
    }

    isAdmin(callback: LoggedInCallback, force = false) {
        if (callback == null)
            throw("UserLoginService: Callback in isAuthenticated() cannot be null");

        let cognitoUser = this.cognitoUtil.getCurrentUser();
        var createNewToken=false;
        if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
                // console.log()
                if (err) {
                    // cognitoUser.refreshSession(refreshToken, (err, session) => {
                    //     if (err) {
                        localStorage.clear()
                        callback.isLoggedIn(err, false)
                    //     } else {
                    //         callback.isLoggedIn(session, true)
                    //         console.log(session)
                    //     }

                    } else {
                        if (session.getIdToken().payload['cognito:groups'][0] == "Admin")
                            callback.isLoggedIn(err, true)
                        else {
                            localStorage.clear()
                            callback.isLoggedIn(err, false)
                        }
                    }})

                    // console.log("UserLoginService: Couldn't get the session: " + err, err.stack);
                    // callback.isLoggedIn("cant get user", false);
                    // return
                }
                else {

            // console.log("UserLoginService: can't retrieve the current user");
            callback.isLoggedIn("Can't retrieve the CurrentUser", false);
            return
        }
        // if (createNewToken) {
        //     // this.cognitoUtil.newToken(cognitoUser);
        //     localStorage.setItem("tokenCreation", new Date().toString())
        // }
    }

    isAuthenticated(callback: LoggedInCallback, force = false) {
        if (callback == null)
            throw("UserLoginService: Callback in isAuthenticated() cannot be null");

        let cognitoUser = this.cognitoUtil.getCurrentUser();
        var createNewToken=false;
        if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
                if (err) {
                    // cognitoUser.refreshSession(refreshToken, (err, session) => {
                    //     if (err) {
                        localStorage.clear()
                        callback.isLoggedIn(err, false)
                    //     } else {
                    //         callback.isLoggedIn(session, true)
                    //         console.log(session)
                    //     }

                    } else {

                        callback.isLoggedIn(err, true)
                    }})

                    // console.log("UserLoginService: Couldn't get the session: " + err, err.stack);
                    // callback.isLoggedIn("cant get user", false);
                    // return
                }
                else {

            // console.log("UserLoginService: can't retrieve the current user");
            callback.isLoggedIn("Can't retrieve the CurrentUser", false);
            return
        }
        // if (createNewToken) {
        //     // this.cognitoUtil.newToken(cognitoUser);
        //     localStorage.setItem("tokenCreation", new Date().toString())
        // }
    }

    verifyUserType(userID) {
        this.http.head("http://18.220.46.51:3000/api/Applicant/" + userID).subscribe(
      response => {
                sessionStorage.setItem("accountType", "applicant")
      },
      (err: HttpErrorResponse) => {
          if (err["status"] == 200) {
            sessionStorage.setItem("accountType", "applicant")
          } else {
            sessionStorage.setItem("accountType", "employer")

          }

        
      }
    )
    }
}
