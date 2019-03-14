import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CustomHttpService } from './custom-http.service';
import {
    Router
  } from "@angular/router";

import * as AWS from "aws-sdk"

@Injectable()
export class CreateUserService {
    user = undefined
    ddb = undefined
    constructor(
        private router: Router,
        private http: CustomHttpService,
        
    ) { }
        
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
        obj["country"] = userObj.country;
        obj["state"] = userObj.state;
        obj["city"] = userObj.city;
        obj["address"] = userObj.address;
        obj["email"] = userObj.email;
        obj["phoneNumber"] = userObj.phoneNumber;
        obj["links"] = [];
        obj["created"] = new Date();
        obj["lastUpdated"] = new Date();
        return obj;
    }

    createUserEmployerObj(userObj) {
        var obj = new Object();
        obj["$class"] = "network.krow.participants.Employer";
        obj["employerID"] = userObj.user;
        obj["employerName"] = userObj.company;
        obj["description"] = userObj.bio;
        obj["completedJobs"] = [];
        obj["terminatedJobs"] = [];
        obj["inprogressJobs"] = [];
        obj["availableJobs"] = [];
        obj["location"] = userObj.location;
        obj["year"] = userObj.year;
        obj["email"] = userObj.email;
        obj["phoneNumber"] = userObj.phoneNumber;
        obj["size"] = "";
        obj["jobType"] = "";
        obj["keyWords"] = [];
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
            console.log("here")
            obj = this.createUserEmployerObj(userObj);
        }
        var url = "http://18.220.46.51:3000/api/" + intent;
        // console.log(intent.toLowerCase());
        
        this.http.post(url, obj).subscribe(
            data => {
                console.log(data);
                this.router.navigate(['/confirmRegistration', userObj.user ]);
            }, // Catch Errors
            (err = HttpErrorResponse) => {
                if (err instanceof Error) {
                    // console.log("Client-side error occured.");
                } else {
                    // console.log("Server-side error occured.");
                }
                 console.log(err);
            }
        );
    }
}
