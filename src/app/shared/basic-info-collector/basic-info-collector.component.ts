import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateUserService } from '../../service/create-user.service';

@Component({
    selector: 'basic-info-collector',
    templateUrl: './basic-info-collector.component.html',
})
export class BasicInfoCollectorComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private initializeUser: CreateUserService
    ) { }

    user: string;
    intent: string;
    first: string;
    second: string;
    email: string;
    errorMessage: string;
  
    ngOnInit() {
        this.route
            .queryParams
            .subscribe(params => {
                // Defaults to 0 if no query param provided.
                this.intent = params.as;
            });
        this.user = localStorage.getItem("CognitoIdentityServiceProvider.682kbp7jv1l5a01lojmehrm2a2.LastAuthUser");
    }

    submitInfo(){
        if(!this.user || !this.intent){
            this.errorMessage = "Something went wrong, please go back.";
            return;
        }
        if(!this.first || !this.second || !this.email){
            this.errorMessage = "All fields are required";
            return;
        }
        else{
            this.errorMessage = "";
            var obj = {
                user: this.user,
                first: this.first,
                second: this.second,
                email: this.email,
            }
            this.initializeUser.initializeUser(obj, this.intent, this.activate, this.router);
        }
    }

    activate(intent: string, user: string, router){
        var path = "/" + intent;
        router.navigate([path], { queryParams: { user: user } });
    }
}
