import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CustomHttpService } from './custom-http.service';

@Injectable()
export class CreateUserService {
    constructor(private http: CustomHttpService) { }
        
    createUserApplicantObj(userObj) {
        var obj = new Object();
        obj["$class"] = "network.krow.participants.Applicant";
        obj["applicantID"] = userObj.user;
        obj["firstName"] = userObj.first;
        obj["lastName"] = userObj.second;
        obj["resume"] = {
            ["$class"]: "network.krow.resume.Resume",
            ["education"]: [],
            ["skills"]: [],
            ["experience"]: [],
            ["achievements"]: [],
            ["affiliations"]: [],
            ["biography"]: userObj.bio,
            ["lastUpdated"]: new Date(),
            // ["id"]: ""
        };
        obj["completedJobs"] = [];
        obj["terminatedJobs"] = [];
        obj["inprogressJobs"] = [];
        obj["requestedJobs"] = [];
        obj["hireRequests"] = [];
        obj["country"] = "";
        obj["state"] = "";
        obj["city"] = "";
        obj["address"] = "";
        obj["email"] = userObj.email;
        obj["phoneNumber"] = "";
        obj["links"] = [];
        obj["created"] = new Date();
        obj["lastUpdated"] = new Date();
        return obj;
    }

    createUserEmployerObj(userObj) {
        var obj = new Object();
        obj["$class"] = "network.krow.participants.Employer";
        obj["employerID"] = userObj.user;
        obj["employerName"] = userObj.first;
        obj["description"] = userObj.second;
        obj["completedJobs"] = [];
        obj["terminatedJobs"] = [];
        obj["inprogressJobs"] = [];
        obj["availableJobs"] = [];
        obj["country"] = "";
        obj["state"] = "";
        obj["city"] = "";
        obj["address"] = "";
        obj["email"] = userObj.email;
        obj["phoneNumber"] = "";
        obj["links"] = [];
        obj["created"] = new Date();
        obj["lastUpdated"] = new Date();
        return obj;
    }

    initializeUser(userObj, intent: string, callback, router){
        // console.log("Initializing a new " + intent + " user with id = " + userObj.user);
        var obj = new Object();
        if(intent == "Applicant"){
            obj = this.createUserApplicantObj(userObj);
        }
        else if(intent == "Employer"){
            obj = this.createUserEmployerObj(userObj);
        }
        var url = "https://18.220.46.51:3000/api/" + intent;
        // console.log(intent.toLowerCase());

        this.http.post(url, obj).subscribe(
            data => {
                // console.log(intent + " account sucessfuly initialized for user " + userObj.user);
                callback(intent.toLowerCase(), userObj.user, router);
            }, // Catch Errors
            (err = HttpErrorResponse) => {
                if (err instanceof Error) {
                    // console.log("Client-side error occured.");
                } else {
                    // console.log("Server-side error occured.");
                }
                // console.log(err);
            }
        );
    }
}
