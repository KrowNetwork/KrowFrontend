(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Root: Landing router -->\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_aws_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/aws.service */ "./src/app/service/aws.service.ts");
/* harmony import */ var _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/user-login.service */ "./src/app/service/user-login.service.ts");
/* harmony import */ var _service_cognito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/cognito.service */ "./src/app/service/cognito.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(awsUtil, userService, cognito, router) {
        this.awsUtil = awsUtil;
        this.userService = userService;
        this.cognito = cognito;
        this.router = router;
        console.log("App Component: constructor");
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("AppComponent: Checking if the user is already authenticated");
        this.userService.isAuthenticated(this);
    };
    AppComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        console.log("AppComponent: the user is authenticated: " + isLoggedIn);
        if (!isLoggedIn) {
            this.router.navigate(["/login"]);
        }
        var mythis = this;
        this.cognito.getIdToken({ callback: function () { },
            callbackWithParam: function (token) {
                // Include the passed-in callback here as well so that it's executed downstream
                console.log("AppComponent: calling initAwsService in callback");
                mythis.awsUtil.initAwsService(null, isLoggedIn, token);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_service_aws_service__WEBPACK_IMPORTED_MODULE_1__["AwsUtil"],
            _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"],
            _service_cognito_service__WEBPACK_IMPORTED_MODULE_3__["CognitoUtil"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _main_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/login/login.component */ "./src/app/main/login/login.component.ts");
/* harmony import */ var _main_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/register/register.component */ "./src/app/main/register/register.component.ts");
/* harmony import */ var _main_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/page-not-found/page-not-found.component */ "./src/app/main/page-not-found/page-not-found.component.ts");
/* harmony import */ var _shared_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/coming-soon/coming-soon.component */ "./src/app/shared/coming-soon/coming-soon.component.ts");
/* harmony import */ var _main_newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/newpassword/newpassword.component */ "./src/app/main/newpassword/newpassword.component.ts");
/* harmony import */ var _main_confirm_confirmRegistration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/confirm/confirmRegistration.component */ "./src/app/main/confirm/confirmRegistration.component.ts");
/* harmony import */ var _main_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _main_forgot_forgotPassword_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/forgot/forgotPassword.component */ "./src/app/main/forgot/forgotPassword.component.ts");
/* harmony import */ var _main_resend_resendCode_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/resend/resendCode.component */ "./src/app/main/resend/resendCode.component.ts");
/* harmony import */ var _employer_employer_profile_employer_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./employer/employer-profile/employer-profile.component */ "./src/app/employer/employer-profile/employer-profile.component.ts");
/* harmony import */ var _employer_employer_post_jobs_employer_post_jobs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./employer/employer-post-jobs/employer-post-jobs.component */ "./src/app/employer/employer-post-jobs/employer-post-jobs.component.ts");
/* harmony import */ var _job_job_profile_job_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./job/job-profile/job-profile.component */ "./src/app/job/job-profile/job-profile.component.ts");
/* harmony import */ var _shared_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/job-details/job-details.component */ "./src/app/shared/job-details/job-details.component.ts");
/* harmony import */ var _applicant_applicant_profile_applicant_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./applicant/applicant-profile/applicant-profile.component */ "./src/app/applicant/applicant-profile/applicant-profile.component.ts");
/* harmony import */ var _applicant_applicant_resume_applicant_resume_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./applicant/applicant-resume/applicant-resume.component */ "./src/app/applicant/applicant-resume/applicant-resume.component.ts");
/* harmony import */ var _shared_requested_jobs_requested_jobs_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/requested-jobs/requested-jobs.component */ "./src/app/shared/requested-jobs/requested-jobs.component.ts");
/* harmony import */ var _shared_hire_requests_hire_requests_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/hire-requests/hire-requests.component */ "./src/app/shared/hire-requests/hire-requests.component.ts");
/* harmony import */ var _shared_job_search_job_search_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/job-search/job-search.component */ "./src/app/shared/job-search/job-search.component.ts");
/* harmony import */ var _shared_job_search_job_search_main_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/job-search/job-search-main.component */ "./src/app/shared/job-search/job-search-main.component.ts");
/* harmony import */ var _applicant_applicant_resume_resume_education_resume_education_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./applicant/applicant-resume/resume-education/resume-education.component */ "./src/app/applicant/applicant-resume/resume-education/resume-education.component.ts");
/* harmony import */ var _applicant_applicant_resume_resume_education_education_main_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./applicant/applicant-resume/resume-education/education-main.component */ "./src/app/applicant/applicant-resume/resume-education/education-main.component.ts");
/* harmony import */ var _applicant_applicant_resume_resume_skills_resume_skills_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./applicant/applicant-resume/resume-skills/resume-skills.component */ "./src/app/applicant/applicant-resume/resume-skills/resume-skills.component.ts");
/* harmony import */ var _applicant_applicant_resume_resume_skills_skills_main_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./applicant/applicant-resume/resume-skills/skills-main.component */ "./src/app/applicant/applicant-resume/resume-skills/skills-main.component.ts");
/* harmony import */ var _applicant_applicant_resume_resume_experience_resume_experience_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./applicant/applicant-resume/resume-experience/resume-experience.component */ "./src/app/applicant/applicant-resume/resume-experience/resume-experience.component.ts");
/* harmony import */ var _applicant_applicant_resume_resume_experience_experience_main_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./applicant/applicant-resume/resume-experience/experience-main.component */ "./src/app/applicant/applicant-resume/resume-experience/experience-main.component.ts");
/* harmony import */ var _applicant_applicant_resume_resume_achievements_resume_achievements_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./applicant/applicant-resume/resume-achievements/resume-achievements.component */ "./src/app/applicant/applicant-resume/resume-achievements/resume-achievements.component.ts");
/* harmony import */ var _applicant_applicant_resume_resume_achievements_achievements_main_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./applicant/applicant-resume/resume-achievements/achievements-main.component */ "./src/app/applicant/applicant-resume/resume-achievements/achievements-main.component.ts");
/* harmony import */ var _applicant_applicant_resume_resume_affiliations_resume_affiliations_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./applicant/applicant-resume/resume-affiliations/resume-affiliations.component */ "./src/app/applicant/applicant-resume/resume-affiliations/resume-affiliations.component.ts");
/* harmony import */ var _applicant_applicant_resume_resume_affiliations_affiliations_main_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./applicant/applicant-resume/resume-affiliations/affiliations-main.component */ "./src/app/applicant/applicant-resume/resume-affiliations/affiliations-main.component.ts");
/* harmony import */ var _shared_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/profile-info/profile-info.component */ "./src/app/shared/profile-info/profile-info.component.ts");
/* harmony import */ var _shared_available_jobs_available_jobs_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/available-jobs/available-jobs.component */ "./src/app/shared/available-jobs/available-jobs.component.ts");
/* harmony import */ var _shared_completed_jobs_completed_jobs_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./shared/completed-jobs/completed-jobs.component */ "./src/app/shared/completed-jobs/completed-jobs.component.ts");
/* harmony import */ var _shared_terminated_jobs_terminated_jobs_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shared/terminated-jobs/terminated-jobs.component */ "./src/app/shared/terminated-jobs/terminated-jobs.component.ts");
/* harmony import */ var _shared_in_progress_jobs_in_progress_jobs_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shared/in-progress-jobs/in-progress-jobs.component */ "./src/app/shared/in-progress-jobs/in-progress-jobs.component.ts");
/* harmony import */ var _shared_basic_info_collector_basic_info_collector_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./shared/basic-info-collector/basic-info-collector.component */ "./src/app/shared/basic-info-collector/basic-info-collector.component.ts");
/* harmony import */ var _service_update_resume_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./service/update-resume.service */ "./src/app/service/update-resume.service.ts");
/* harmony import */ var _service_cognito_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./service/cognito.service */ "./src/app/service/cognito.service.ts");
/* harmony import */ var _service_aws_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./service/aws.service */ "./src/app/service/aws.service.ts");
/* harmony import */ var _service_user_login_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./service/user-login.service */ "./src/app/service/user-login.service.ts");
/* harmony import */ var _service_user_parameters_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./service/user-parameters.service */ "./src/app/service/user-parameters.service.ts");
/* harmony import */ var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./service/user-registration.service */ "./src/app/service/user-registration.service.ts");
/* harmony import */ var _service_create_user_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./service/create-user.service */ "./src/app/service/create-user.service.ts");
/* harmony import */ var _applicant_applicant_resume_resume_education_education_directive__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./applicant/applicant-resume/resume-education/education.directive */ "./src/app/applicant/applicant-resume/resume-education/education.directive.ts");
/* harmony import */ var _applicant_applicant_resume_resume_experience_experience_directive__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./applicant/applicant-resume/resume-experience/experience.directive */ "./src/app/applicant/applicant-resume/resume-experience/experience.directive.ts");
/* harmony import */ var _applicant_applicant_resume_resume_achievements_achievement_directive__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./applicant/applicant-resume/resume-achievements/achievement.directive */ "./src/app/applicant/applicant-resume/resume-achievements/achievement.directive.ts");
/* harmony import */ var _applicant_applicant_resume_resume_affiliations_affiliations_directive__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./applicant/applicant-resume/resume-affiliations/affiliations.directive */ "./src/app/applicant/applicant-resume/resume-affiliations/affiliations.directive.ts");
/* harmony import */ var _shared_job_search_job_search_directive__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./shared/job-search/job-search.directive */ "./src/app/shared/job-search/job-search.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Main imports




// UI Materials
/*
  VIVEK
*/
// Enable Http to get data from server

// Router imports

// Main components









// Employer components


// Job components


// Applicant components






// Resume components










// Shared components






// Services







// Directives





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // VIVEK (Add module declarations here, I'll worry about splitting it up later)
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _employer_employer_profile_employer_profile_component__WEBPACK_IMPORTED_MODULE_15__["EmployerProfileComponent"],
                _employer_employer_post_jobs_employer_post_jobs_component__WEBPACK_IMPORTED_MODULE_16__["EmployerPostJobsComponent"],
                _applicant_applicant_profile_applicant_profile_component__WEBPACK_IMPORTED_MODULE_19__["ApplicantProfileComponent"],
                _shared_available_jobs_available_jobs_component__WEBPACK_IMPORTED_MODULE_36__["AvailableJobsComponent"],
                _shared_completed_jobs_completed_jobs_component__WEBPACK_IMPORTED_MODULE_37__["CompletedJobsComponent"],
                _shared_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_35__["ProfileInfoComponent"],
                _shared_terminated_jobs_terminated_jobs_component__WEBPACK_IMPORTED_MODULE_38__["TerminatedJobsComponent"],
                _shared_in_progress_jobs_in_progress_jobs_component__WEBPACK_IMPORTED_MODULE_39__["InProgressJobsComponent"],
                _applicant_applicant_resume_applicant_resume_component__WEBPACK_IMPORTED_MODULE_20__["ApplicantResumeComponent"],
                _main_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _main_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _applicant_applicant_resume_resume_education_resume_education_component__WEBPACK_IMPORTED_MODULE_25__["ResumeEducationComponent"],
                _applicant_applicant_resume_resume_skills_resume_skills_component__WEBPACK_IMPORTED_MODULE_27__["ResumeSkillsComponent"],
                _applicant_applicant_resume_resume_experience_resume_experience_component__WEBPACK_IMPORTED_MODULE_29__["ResumeExperienceComponent"],
                _applicant_applicant_resume_resume_achievements_resume_achievements_component__WEBPACK_IMPORTED_MODULE_31__["ResumeAchievementsComponent"],
                _applicant_applicant_resume_resume_affiliations_resume_affiliations_component__WEBPACK_IMPORTED_MODULE_33__["ResumeAffiliationsComponent"],
                _shared_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_9__["ComingSoonComponent"],
                _main_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                _shared_requested_jobs_requested_jobs_component__WEBPACK_IMPORTED_MODULE_21__["RequestedJobsComponent"],
                _shared_hire_requests_hire_requests_component__WEBPACK_IMPORTED_MODULE_22__["HireRequestsComponent"],
                _shared_job_search_job_search_component__WEBPACK_IMPORTED_MODULE_23__["JobSearchComponent"],
                _shared_job_search_job_search_directive__WEBPACK_IMPORTED_MODULE_52__["JobSearchDirective"],
                _shared_job_search_job_search_main_component__WEBPACK_IMPORTED_MODULE_24__["JobSearchMainComponent"],
                _applicant_applicant_resume_resume_achievements_achievements_main_component__WEBPACK_IMPORTED_MODULE_32__["AchievementsMainComponent"],
                _applicant_applicant_resume_resume_achievements_achievement_directive__WEBPACK_IMPORTED_MODULE_50__["AchievementDirective"],
                _applicant_applicant_resume_resume_affiliations_affiliations_directive__WEBPACK_IMPORTED_MODULE_51__["AffiliationsDirective"],
                _applicant_applicant_resume_resume_education_education_main_component__WEBPACK_IMPORTED_MODULE_26__["EducationMainComponent"],
                _applicant_applicant_resume_resume_education_education_directive__WEBPACK_IMPORTED_MODULE_48__["EducationDirective"],
                _applicant_applicant_resume_resume_experience_experience_main_component__WEBPACK_IMPORTED_MODULE_30__["ExperienceMainComponent"],
                _applicant_applicant_resume_resume_experience_experience_directive__WEBPACK_IMPORTED_MODULE_49__["ExperienceDirective"],
                _applicant_applicant_resume_resume_affiliations_affiliations_main_component__WEBPACK_IMPORTED_MODULE_34__["AffiliationsMainComponent"],
                _applicant_applicant_resume_resume_skills_skills_main_component__WEBPACK_IMPORTED_MODULE_28__["SkillsMainComponent"],
                _main_newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_10__["NewPasswordComponent"],
                _main_confirm_confirmRegistration_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationConfirmationComponent"],
                _main_confirm_confirmRegistration_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"],
                _main_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _main_forgot_forgotPassword_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPassword2Component"],
                _main_forgot_forgotPassword_component__WEBPACK_IMPORTED_MODULE_13__["ForgotPasswordStep1Component"],
                _main_resend_resendCode_component__WEBPACK_IMPORTED_MODULE_14__["ResendCodeComponent"],
                _shared_basic_info_collector_basic_info_collector_component__WEBPACK_IMPORTED_MODULE_40__["BasicInfoCollectorComponent"],
                _job_job_profile_job_profile_component__WEBPACK_IMPORTED_MODULE_17__["JobProfileComponent"],
                _shared_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_18__["JobDetailsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_5__["routing"],
            ],
            entryComponents: [
                _applicant_applicant_resume_resume_experience_experience_main_component__WEBPACK_IMPORTED_MODULE_30__["ExperienceMainComponent"],
                _applicant_applicant_resume_resume_affiliations_affiliations_main_component__WEBPACK_IMPORTED_MODULE_34__["AffiliationsMainComponent"],
                _applicant_applicant_resume_resume_skills_skills_main_component__WEBPACK_IMPORTED_MODULE_28__["SkillsMainComponent"],
                _applicant_applicant_resume_resume_education_education_main_component__WEBPACK_IMPORTED_MODULE_26__["EducationMainComponent"],
                _applicant_applicant_resume_resume_achievements_achievements_main_component__WEBPACK_IMPORTED_MODULE_32__["AchievementsMainComponent"],
                _shared_job_search_job_search_main_component__WEBPACK_IMPORTED_MODULE_24__["JobSearchMainComponent"],
            ],
            providers: [
                _service_update_resume_service__WEBPACK_IMPORTED_MODULE_41__["UpdateResumeService"],
                _service_cognito_service__WEBPACK_IMPORTED_MODULE_42__["CognitoUtil"],
                _service_aws_service__WEBPACK_IMPORTED_MODULE_43__["AwsUtil"],
                _service_user_login_service__WEBPACK_IMPORTED_MODULE_44__["UserLoginService"],
                _service_user_parameters_service__WEBPACK_IMPORTED_MODULE_45__["UserParametersService"],
                _service_user_registration_service__WEBPACK_IMPORTED_MODULE_46__["UserRegistrationService"],
                _service_create_user_service__WEBPACK_IMPORTED_MODULE_47__["CreateUserService"],
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/login/login.component */ "./src/app/main/login/login.component.ts");
/* harmony import */ var _main_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/register/register.component */ "./src/app/main/register/register.component.ts");
/* harmony import */ var _main_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/page-not-found/page-not-found.component */ "./src/app/main/page-not-found/page-not-found.component.ts");
/* harmony import */ var _main_newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/newpassword/newpassword.component */ "./src/app/main/newpassword/newpassword.component.ts");
/* harmony import */ var _main_confirm_confirmRegistration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/confirm/confirmRegistration.component */ "./src/app/main/confirm/confirmRegistration.component.ts");
/* harmony import */ var _main_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _main_forgot_forgotPassword_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/forgot/forgotPassword.component */ "./src/app/main/forgot/forgotPassword.component.ts");
/* harmony import */ var _main_resend_resendCode_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/resend/resendCode.component */ "./src/app/main/resend/resendCode.component.ts");
/* harmony import */ var _employer_employer_profile_employer_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employer/employer-profile/employer-profile.component */ "./src/app/employer/employer-profile/employer-profile.component.ts");
/* harmony import */ var _employer_employer_post_jobs_employer_post_jobs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employer/employer-post-jobs/employer-post-jobs.component */ "./src/app/employer/employer-post-jobs/employer-post-jobs.component.ts");
/* harmony import */ var _job_job_profile_job_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./job/job-profile/job-profile.component */ "./src/app/job/job-profile/job-profile.component.ts");
/* harmony import */ var _applicant_applicant_profile_applicant_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./applicant/applicant-profile/applicant-profile.component */ "./src/app/applicant/applicant-profile/applicant-profile.component.ts");
/* harmony import */ var _applicant_applicant_resume_applicant_resume_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./applicant/applicant-resume/applicant-resume.component */ "./src/app/applicant/applicant-resume/applicant-resume.component.ts");
/* harmony import */ var _shared_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/coming-soon/coming-soon.component */ "./src/app/shared/coming-soon/coming-soon.component.ts");
/* harmony import */ var _shared_job_search_job_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/job-search/job-search.component */ "./src/app/shared/job-search/job-search.component.ts");
/* harmony import */ var _shared_basic_info_collector_basic_info_collector_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/basic-info-collector/basic-info-collector.component */ "./src/app/shared/basic-info-collector/basic-info-collector.component.ts");
/* harmony import */ var _shared_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/profile-info/profile-info.component */ "./src/app/shared/profile-info/profile-info.component.ts");
/* harmony import */ var _shared_available_jobs_available_jobs_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/available-jobs/available-jobs.component */ "./src/app/shared/available-jobs/available-jobs.component.ts");
/* harmony import */ var _shared_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/job-details/job-details.component */ "./src/app/shared/job-details/job-details.component.ts");
// Router imports

// Main components








// Employer components


// Job components

// Applicant components


// Shared components



// Profile components (shared)



var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _main_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    },
    {
        path: 'register',
        component: _main_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    },
    {
        path: 'newPassword',
        component: _main_newpassword_newpassword_component__WEBPACK_IMPORTED_MODULE_4__["NewPasswordComponent"]
    },
    {
        path: 'confirmRegistration/:username',
        component: _main_confirm_confirmRegistration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationConfirmationComponent"]
    },
    {
        path: 'forgotPassword/:email',
        component: _main_forgot_forgotPassword_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPassword2Component"]
    },
    {
        path: 'forgotPassword',
        component: _main_forgot_forgotPassword_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordStep1Component"]
    },
    {
        path: 'resendCode',
        component: _main_resend_resendCode_component__WEBPACK_IMPORTED_MODULE_8__["ResendCodeComponent"]
    }
];
var secureHome = [
    {
        path: '',
        redirectTo: '/secureHome',
        pathMatch: 'full'
    },
    {
        path: 'secureHome',
        component: _main_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    },
    {
        path: 'basicInfo',
        component: _shared_basic_info_collector_basic_info_collector_component__WEBPACK_IMPORTED_MODULE_16__["BasicInfoCollectorComponent"]
    },
    {
        path: 'applicant',
        component: _applicant_applicant_profile_applicant_profile_component__WEBPACK_IMPORTED_MODULE_12__["ApplicantProfileComponent"],
        children: [
            {
                path: '',
                component: _shared_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_17__["ProfileInfoComponent"]
            },
            {
                path: 'profile-info',
                component: _shared_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_17__["ProfileInfoComponent"]
            },
            {
                path: 'profile-info/:applicantID',
                component: _shared_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_17__["ProfileInfoComponent"]
            },
            {
                path: 'applicant-resume',
                component: _applicant_applicant_resume_applicant_resume_component__WEBPACK_IMPORTED_MODULE_13__["ApplicantResumeComponent"]
            },
            {
                path: 'applicant-resume/:applicantID',
                component: _applicant_applicant_resume_applicant_resume_component__WEBPACK_IMPORTED_MODULE_13__["ApplicantResumeComponent"]
            },
            {
                path: 'completed-jobs',
                //component: CompletedJobsComponent, 
                component: _shared_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_14__["ComingSoonComponent"]
            },
            {
                path: 'terminated-jobs',
                //component: TerminatedJobsComponent, 
                component: _shared_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_14__["ComingSoonComponent"]
            },
            {
                path: 'in-progress-jobs',
                //component: InProgressJobsComponent, 
                component: _shared_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_14__["ComingSoonComponent"]
            },
            {
                path: 'requested-jobs',
                //component: RequestedJobsComponent, 
                component: _shared_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_14__["ComingSoonComponent"]
            },
            {
                path: 'hire-requests',
                //component: HireRequestsComponent, 
                component: _shared_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_14__["ComingSoonComponent"]
            },
            {
                path: 'job-search',
                component: _shared_job_search_job_search_component__WEBPACK_IMPORTED_MODULE_15__["JobSearchComponent"]
                //component: ComingSoonComponent
            }
        ]
    },
    {
        path: 'employer',
        component: _employer_employer_profile_employer_profile_component__WEBPACK_IMPORTED_MODULE_9__["EmployerProfileComponent"],
        children: [
            {
                path: '',
                component: _shared_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_17__["ProfileInfoComponent"]
            },
            {
                path: 'profile-info',
                component: _shared_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_17__["ProfileInfoComponent"]
            },
            {
                path: 'employer-post-jobs',
                component: _employer_employer_post_jobs_employer_post_jobs_component__WEBPACK_IMPORTED_MODULE_10__["EmployerPostJobsComponent"],
            },
            {
                path: 'completed-jobs',
                //component: CompletedJobsComponent, 
                component: _shared_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_14__["ComingSoonComponent"]
            },
            {
                path: 'terminated-jobs',
                //component: TerminatedJobsComponent, 
                component: _shared_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_14__["ComingSoonComponent"]
            },
            {
                path: 'in-progress-jobs',
                //component: InProgressJobsComponent, 
                component: _shared_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_14__["ComingSoonComponent"]
            },
            {
                path: 'available-jobs',
                component: _shared_available_jobs_available_jobs_component__WEBPACK_IMPORTED_MODULE_18__["AvailableJobsComponent"],
            },
            {
                path: 'job-search',
                component: _shared_job_search_job_search_component__WEBPACK_IMPORTED_MODULE_15__["JobSearchComponent"],
            }
        ]
    },
    {
        path: 'job',
        component: _job_job_profile_job_profile_component__WEBPACK_IMPORTED_MODULE_11__["JobProfileComponent"],
        children: [
            {
                path: ':jobID',
                component: _shared_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_19__["JobDetailsComponent"]
            }
            // { 
            //     path: 'profile-info',
            //     component: ProfileInfoComponent
            // },
            // { 
            //     path: 'employer-post-jobs', 
            //     component: EmployerPostJobsComponent,
            // },
            // { 
            //     path: 'completed-jobs', 
            //     //component: CompletedJobsComponent, 
            //     component: ComingSoonComponent
            // },
            // { 
            //     path: 'terminated-jobs', 
            //     //component: TerminatedJobsComponent, 
            //     component: ComingSoonComponent
            // },
            // { 
            //     path: 'in-progress-jobs', 
            //     //component: InProgressJobsComponent, 
            //     component: ComingSoonComponent
            // },
            // { 
            //     path: 'available-jobs', 
            //     //component: AvailableJobsComponent, 
            //     component: ComingSoonComponent
            // },
            // { 
            //     path: 'job-search', 
            //     component: JobSearchComponent, 
            // }
        ]
    },
    {
        path: 'logout',
        component: _main_confirm_confirmRegistration_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"]
    },
    {
        path: '**',
        component: _main_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"],
    },
];
var routes = [
    {
        path: '',
        children: appRoutes.concat(secureHome, [
            {
                path: '',
                component: _main_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
            }
        ])
    },
    {
        path: '**',
        component: _main_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"],
    },
];
var appRoutingProviders = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/applicant/applicant-profile/applicant-profile.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/applicant/applicant-profile/applicant-profile.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"page-loading\">\r\n\t<img src=\"{{LOADER}}\" alt=\"\" />\r\n\t<span>Loading...</span>\r\n</div> -->\r\n\r\n<p id=\"test-ID\" value=\"Applicant\" style=\"display:none\"></p>\r\n\r\n<div class=\"theme-layout\" id=\"scrollup\">\r\n\t<header class=\"stick-top\">\r\n\t\t<div class=\"menu-sec\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"logo\">\r\n\t\t\t\t\t<a href=\"https://www.krow.network/\" target=\"_blank\" title=\"\">\r\n\t\t\t\t\t\t<!-- <img src=\"{{KROW_HEADER_2}}\" alt=\"\" /> -->\r\n\t\t\t\t\t\t<img src=\"http://placehold.it/178x40\" alt=\"Krow Network Logo\" />\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div><!-- Logo -->\r\n\t\t\t\t<div class=\"btn-extars\">\r\n\t\t\t\t\t<a [routerLink]=\"['job-search']\" routerLinkActive=\"active\" class=\"post-job-btn\"><i class=\"fa fa-search-plus\"></i>Find Job</a>\r\n\t\t\t\t\t<ul class=\"account-btns\">\r\n\t\t\t\t\t\t<li><a [routerLink]=\"['/logout']\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-external-link-square\"></i> LogOut</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div><!-- Btn Extras -->\r\n\t\t\t\t<nav>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['/secureHome']\" routerLinkActive=\"active\">Home</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<!-- <a [routerLink]=\"['/applicant/profile-info']\" routerLinkActive=\"active\">My Applicant Profile</a> -->\r\n\t\t\t\t\t\t\t\t<!-- <a [routerLink]=\"['/employer/profile-info']\" routerLinkActive=\"active\">Switch to Employer</a> -->\r\n\t\t\t\t\t\t\t\t<a (click)=\"goToProfile()\" routerLinkActive=\"active\">Profile</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a style=\"color: #ffffff\">Jobs</a>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['completed-jobs']\" routerLinkActive=\"active\">Completed Jobs</a></li>\r\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['terminated-jobs']\" routerLinkActive=\"active\">Terminated Jobs</a></li>\r\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['in-progress-jobs']\" routerLinkActive=\"active\">In-Progress Jobs</a></li>\r\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['requested-jobs']\" routerLinkActive=\"active\">Requested Jobs</a></li>\r\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['hire-requests']\" routerLinkActive=\"active\">Hire Requests</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n            \t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['applicant-resume']\" routerLinkActive=\"active\">Resume</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</nav><!-- Menus -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</header>\r\n\r\n\t<section class=\"overlape\">\r\n\t\t<div class=\"block no-padding\">\r\n\t\t\t<div data-velocity=\"-.1\" class=\"parallax scrolly-invisible no-parallax\"></div>\r\n\t\t\t<div class=\"container fluid\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<div class=\"inner-header\" style=\"padding-top:90px\" id=\"responsive-title\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<section>\r\n\t\t<div class=\"block no-padding\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t <div class=\"row no-gape\">\r\n\t\t\t\t\t<div class=\"col-lg-1 column\"></div>\r\n\t\t\t\t\t<div class=\"col-lg-10 column\">\r\n\t\t\t\t\t\t<router-outlet ></router-outlet>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-1 column\"></div>\r\n\t\t\t\t </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<footer style=\"margin-top: 15px\">\r\n\t\t<div class=\"block\" style=\"padding-bottom: 0; padding-top: 25px\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-3 column\">\r\n\t\t\t\t\t\t<div class=\"widget\">\r\n\t\t\t\t\t\t\t<div class=\"about_widget\">\r\n\t\t\t\t\t\t\t\t<div class=\"logo\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.krow.network/\" target=\"_blank\" title=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- <img src=\"{{KROW_HEADER_2}}\" alt=\"\" /> -->\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/178x40\" alt=\"Krow Network Logo\" />\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"social\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/KrowNetwork/\" \t\t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-facebook\"\t ></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://twitter.com/krownetwork\"                          target=\"_blank\" title=\"\"><i class=\"fa fa-twitter\" \t ></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.reddit.com/r/Krow/\" \t\t\t\t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-reddit\"  \t ></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.youtube.com/channel/UCmTgljCaCHkCPIbsE3IB4cA\" target=\"_blank\" title=\"\"><i class=\"fa fa-youtube\" \t ></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://github.com/KrowNetwork/krowsite\" \t\t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-github\"  \t ></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://medium.com/@krownetwork\"\t\t\t\t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-medium\" \t ></i></a>\r\n\t\t\t\t\t\t\t\t\t<!--TODO: Figure out, and add pics for the following -->\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.t.me/thekrownetwork\" \t\t\t\t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-telegram\"    ></i>T</a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://bitcointalk.org/index.php?topic=2891187.0\"        target=\"_blank\" title=\"\"><i class=\"fa fa-bitcointalk\" ></i>B</a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"mailto:help@krow.network?Subject=Question\" \t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-mail\"        ></i>M</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div><!-- About Widget -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-6 column\">\r\n\t\t\t\t\t\t<div class=\"widget\">\r\n\t\t\t\t\t\t\t<h3 class=\"footer-title\">Frequently Asked Questions</h3>\r\n\t\t\t\t\t\t\t<div class=\"link_widgets\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">A</a>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">List</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Of</a>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Possible</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">FAQ</a>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Links</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-3 column\">\r\n\t\t\t\t\t\t<div class=\"widget\">\r\n\t\t\t\t\t\t\t<div class=\"download_widget\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\"><img src=\"http://placehold.it/230x65\" alt=\"\" /></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\"><img src=\"http://placehold.it/230x65\" alt=\"\" /></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"bottom-line\">\r\n\t\t\t<span>© 2018 Jobhunt All rights reserved. Design by Creative Layers</span>\r\n\t\t\t<a class=\"scrollup\" title=\"\" id=\"my-cool-button\" (click)=\"scrollup()\" style=\"bottom: 12px; right: 12px\">\r\n\t\t\t\t<i class=\"la la-arrow-up\"></i>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/applicant/applicant-profile/applicant-profile.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/applicant/applicant-profile/applicant-profile.component.ts ***!
  \****************************************************************************/
/*! exports provided: ApplicantProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantProfileComponent", function() { return ApplicantProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user-login.service */ "./src/app/service/user-login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApplicantProfileComponent = /** @class */ (function () {
    function ApplicantProfileComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.window = window;
        // IMAGES
        this.LOADER = __webpack_require__(/*! ../../../images/loader.gif */ "./src/images/loader.gif");
        this.LOGO1 = __webpack_require__(/*! ../../../images/icon.png */ "./src/images/icon.png");
        this.LOGO2 = __webpack_require__(/*! ../../../images/icon2.png */ "./src/images/icon2.png");
        this.KROW_LOGO = __webpack_require__(/*! ../../../images/krow-logo.png */ "./src/images/krow-logo.png");
        this.KROW_HEADER_2 = __webpack_require__(/*! ../../../images/krow-header-2.png */ "./src/images/krow-header-2.png");
        this.userService.isAuthenticated(this);
        console.log("Applicant Component: constructor");
    }
    ApplicantProfileComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        if (!isLoggedIn) {
            this.router.navigate(['/login']);
        }
    };
    ApplicantProfileComponent.prototype.openJobs = function (event) {
        var el = event.target.parentElement.children[1];
        var currStyle = el.attributes[1].value;
        console.log(currStyle);
        if (currStyle == "display: block;") {
            console.log(1);
            event.target.parentElement.attributes[1].value = "inner-child";
            el.style = "display: none;";
            console.log(el.style);
        }
        else if (currStyle == "display: none;") {
            console.log(2);
            el.style = "display: block;";
            console.log(el.style);
        }
    };
    ApplicantProfileComponent.prototype.scrollup = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    ApplicantProfileComponent.prototype.ngOnInit = function () {
        if (this.router.url.split("/")[3] === undefined) {
            if (sessionStorage.getItem("accountType") == "employer") {
                this.router.navigate(["/employer"]);
            }
        }
    };
    ApplicantProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applicant-profile',
            template: __webpack_require__(/*! ./applicant-profile.component.html */ "./src/app/applicant/applicant-profile/applicant-profile.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]])
    ], ApplicantProfileComponent);
    return ApplicantProfileComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/applicant-resume.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/applicant-resume.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3:hover {\r\n    background-color: #fb236a;\r\n    padding-left:46px;\r\n    transition: all 0.7s ease;\r\n}\r\nh3 {\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    margin: 0;\r\n    border-top: 1px solid #edeff7;\r\n    border-bottom: 0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/applicant-resume.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/applicant-resume.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-left\">\r\n  <div class=\"social-edit\" id=\"sn\">\r\n    <h3 style=\"border-top: 0px\" (click)=\"handleClicked($event)\">\r\n      <i class=\"fa fa-toggle-down\" style=\"padding-right:10px\"></i>Education\r\n    </h3>\r\n    <div class=\"col-lg-12\" style=\"display: none\">\r\n      <app-resume-education></app-resume-education>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"padding-left\">\r\n  <div class=\"social-edit\" id=\"sn\">\r\n    <h3 (click)=\"handleClicked($event)\">\r\n      <i class=\"fa fa-toggle-down\" style=\"padding-right:10px\"></i>Experience\r\n    </h3>\r\n    <div class=\"col-lg-12\" style=\"display: none\">\r\n      <app-resume-experience></app-resume-experience>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"padding-left\">\r\n  <div class=\"social-edit\" id=\"sn\">\r\n    <h3 (click)=\"handleClicked($event)\">\r\n      <i class=\"fa fa-toggle-down\" style=\"padding-right:10px\"></i>Affiliations\r\n    </h3>\r\n    <div class=\"col-lg-12\" style=\"display: none\">\r\n      <app-resume-affiliations></app-resume-affiliations>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"padding-left\">\r\n  <div class=\"social-edit\" id=\"sn\">\r\n    <h3 (click)=\"handleClicked($event)\">\r\n      <i class=\"fa fa-toggle-down\" style=\"padding-right:10px\"></i>Skills\r\n    </h3>\r\n    <div class=\"col-lg-12\" style=\"display: none\">\r\n      <app-resume-skills></app-resume-skills>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"padding-left\">\r\n  <div class=\"social-edit\" id=\"sn\">\r\n    <h3 (click)=\"handleClicked($event)\">\r\n      <i class=\"fa fa-toggle-down\" style=\"padding-right:10px\"></i>Achievements\r\n    </h3>\r\n    <div class=\"col-lg-12\" style=\"display: none\">\r\n      <app-resume-achievements></app-resume-achievements>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/applicant-resume.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/applicant-resume.component.ts ***!
  \**************************************************************************/
/*! exports provided: ApplicantResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicantResumeComponent", function() { return ApplicantResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApplicantResumeComponent = /** @class */ (function () {
    function ApplicantResumeComponent() {
    }
    ApplicantResumeComponent.prototype.handleClicked = function (event) {
        var currTarget = event.target.closest(".social-edit").children[1];
        var currStyle = currTarget.style;
        if (currStyle.display == "none") {
            currTarget.style = "display: inline";
        }
        else if (currStyle.display == "inline") {
            currTarget.style = "display: none";
        }
    };
    ApplicantResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applicant-resume',
            template: __webpack_require__(/*! ./applicant-resume.component.html */ "./src/app/applicant/applicant-resume/applicant-resume.component.html"),
            styles: [__webpack_require__(/*! ./applicant-resume.component.css */ "./src/app/applicant/applicant-resume/applicant-resume.component.css")]
        })
    ], ApplicantResumeComponent);
    return ApplicantResumeComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-achievements/achievement.directive.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-achievements/achievement.directive.ts ***!
  \*****************************************************************************************/
/*! exports provided: AchievementDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementDirective", function() { return AchievementDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AchievementDirective = /** @class */ (function () {
    function AchievementDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AchievementDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[achievements-host]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], AchievementDirective);
    return AchievementDirective;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-achievements/achievements-main.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-achievements/achievements-main.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"social-edit\" id=\"sn\">\r\n    <form style=\"padding-left:0px; border-style: solid;\r\n        border-width: 1px;\r\n        border-color: #edeff7;\r\n        border-radius: 8px;\r\n        margin-bottom: 15px\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"del-resume\" (click)=\"deleteItem($event)\" style=\"float: right; margin-top: 10px\">\r\n                <a>\r\n                    <i class=\"la la-trash-o\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"edu-history-sec\">\r\n            <div class=\"edu-history\">\r\n                <i class=\"la la-trophy\" style=\"padding-top: 30px\"></i>\r\n                <div class=\"edu-hisinfo\">\r\n                    <div class=\"row\" style=\"padding:15px; padding-bottom:0px\">\r\n                        <div class=\"col-lg-12\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Achievement</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Spec Ops\" secret=\"title\" value={{data.title}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Description</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Classified\" secret=\"description\" value={{data.description}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">From</span> \r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"April 14, 1865\" secret=\"startDate\" value={{data.startDate}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">To</span> \r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"November 22, 1963\" secret=\"endDate\" value={{data.endDate}}/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-achievements/achievements-main.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-achievements/achievements-main.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AchievementsMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementsMainComponent", function() { return AchievementsMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AchievementsMainComponent = /** @class */ (function () {
    function AchievementsMainComponent() {
        this.deletedElements = new Array();
    }
    AchievementsMainComponent.prototype.deleteItem = function (event) {
        this.changeHandler(event);
        this.deletedElements.push(event.target.closest("form"));
        var element = document.createElement("div");
        element.innerHTML = (" \n      <div class=\"padding-left\" style=\"padding-bottom:30px\">\n        <div class=\"col-lg-12\" style=\"padding:0\">\n          <a class=\"post-job-btn\" style=\"float: right; width: 100%; text-align: center\">Undo</a>\n        </div>\n      </div>\n    ");
        var self = this;
        element.addEventListener('click', function () {
            this.closest(".social-edit").appendChild(self.deletedElements[0]);
            this.parentNode.removeChild(this);
        });
        event.target.closest(".social-edit").replaceChild(element, event.target.closest("form"));
    };
    AchievementsMainComponent.prototype.changeHandler = function (event) {
        event.target.closest(".resumeContainer").children[1].children[1].style = "display:show";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AchievementsMainComponent.prototype, "data", void 0);
    AchievementsMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./achievements-main.component.html */ "./src/app/applicant/applicant-resume/resume-achievements/achievements-main.component.html")
        })
    ], AchievementsMainComponent);
    return AchievementsMainComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-achievements/resume-achievements.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-achievements/resume-achievements.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" class=\"resumeContainer\">\r\n  <div class=\"col-lg-12\">\r\n    <ng-template achievements-host></ng-template>\r\n  </div>\r\n  <div class=\"col-lg-12\">\r\n    <i class=\"la la-plus-circle\" (mouseenter) =\"$event.target.style.color='#fb236a'\" (mouseleave) =\"$event.target.style.color='rgb(85, 85, 85)'\" (click)=\"loadComponent('empty')\" style=\"margin-bottom:15px\"></i>\r\n    <a class=\"post-job-btn\" style=\"display: none; color: #FFFFFF\" (click)=\"updateResume($event)\">UPDATE</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-achievements/resume-achievements.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-achievements/resume-achievements.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ResumeAchievementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeAchievementsComponent", function() { return ResumeAchievementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_item_type_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/item-type-constructor */ "./src/app/shared/item-type-constructor.ts");
/* harmony import */ var _achievements_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./achievements-main.component */ "./src/app/applicant/applicant-resume/resume-achievements/achievements-main.component.ts");
/* harmony import */ var _resume_achievements_achievement_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resume-achievements/achievement.directive */ "./src/app/applicant/applicant-resume/resume-achievements/achievement.directive.ts");
/* harmony import */ var _service_update_resume_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/update-resume.service */ "./src/app/service/update-resume.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResumeAchievementsComponent = /** @class */ (function () {
    function ResumeAchievementsComponent(http, componentFactoryResolver, updateResumeService) {
        this.http = http;
        this.componentFactoryResolver = componentFactoryResolver;
        this.updateResumeService = updateResumeService;
    }
    ResumeAchievementsComponent.prototype.updateResume = function (event) {
        this.updateResumeService.updateMain(event.target.closest("app-resume-achievements"));
    };
    ResumeAchievementsComponent.prototype.loadComponent = function (achievements) {
        if (achievements == "empty") {
            achievements = new Array();
            achievements.push(new _shared_item_type_constructor__WEBPACK_IMPORTED_MODULE_2__["ItemType"](_achievements_main_component__WEBPACK_IMPORTED_MODULE_3__["AchievementsMainComponent"], {
                title: "",
                description: "",
                startDate: "",
                endDate: "",
            }));
        }
        for (var i = 0; i < achievements.length; i++) {
            var achievementItem = achievements[i];
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(achievementItem.component);
            var viewContainerRef = this.achievementHost.viewContainerRef;
            var componentRef = viewContainerRef.createComponent(componentFactory);
            componentRef.instance.data = achievementItem.data;
        }
    };
    ResumeAchievementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        this.http.get("http://18.220.46.51:3000/api/Applicant/" + user).subscribe(function (data) {
            var resumeAchievements = data["resume"]["achievements"];
            var achievements = new Array();
            for (var k = 0; k < resumeAchievements.length; k++) {
                achievements.push(new _shared_item_type_constructor__WEBPACK_IMPORTED_MODULE_2__["ItemType"](_achievements_main_component__WEBPACK_IMPORTED_MODULE_3__["AchievementsMainComponent"], {
                    title: resumeAchievements[k]["title"],
                    description: resumeAchievements[k]["description"],
                    startDate: new Date(resumeAchievements[k]["startDate"]).toString().slice(0, 15),
                    endDate: new Date(resumeAchievements[k]["endDate"]).toString().slice(0, 15),
                }));
            }
            if (achievements.length == 0) {
                _this.loadComponent("empty");
            }
            else {
                _this.loadComponent(achievements);
            }
        }, // Catch Errors
        function (err) {
            _this.loadComponent("empty");
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_resume_achievements_achievement_directive__WEBPACK_IMPORTED_MODULE_4__["AchievementDirective"]),
        __metadata("design:type", _resume_achievements_achievement_directive__WEBPACK_IMPORTED_MODULE_4__["AchievementDirective"])
    ], ResumeAchievementsComponent.prototype, "achievementHost", void 0);
    ResumeAchievementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume-achievements',
            template: __webpack_require__(/*! ./resume-achievements.component.html */ "./src/app/applicant/applicant-resume/resume-achievements/resume-achievements.component.html"),
            styles: [__webpack_require__(/*! ../resume-elements.component.css */ "./src/app/applicant/applicant-resume/resume-elements.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _service_update_resume_service__WEBPACK_IMPORTED_MODULE_5__["UpdateResumeService"]])
    ], ResumeAchievementsComponent);
    return ResumeAchievementsComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-affiliations/affiliations-main.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-affiliations/affiliations-main.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"social-edit\" id=\"sn\">\r\n    <form style=\"padding-left:0px; border-style: solid;\r\n        border-width: 1px;\r\n        border-color: #edeff7;\r\n        border-radius: 8px;\r\n        margin-bottom: 15px\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"del-resume\" (click)=\"deleteItem($event)\" style=\"float: right; margin-top: 10px\">\r\n                <a>\r\n                    <i class=\"la la-trash-o\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"edu-history-sec\">\r\n            <div class=\"edu-history\">\r\n                <i class=\"la la-users\" style=\"padding-top: 30px\"></i>\r\n                <div class=\"edu-hisinfo\">\r\n                    <div class=\"row\" style=\"padding:15px; padding-bottom:0px\">\r\n                        <div class=\"col-lg-12\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Organization</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Organization Name\" secret=\"title\" value={{data.title}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Description</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Sample Description\" secret=\"description\" value={{data.description}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">From</span> \r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Start date\" secret=\"startDate\" value={{data.startDate}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">To</span> \r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"End date\" secret=\"endDate\" value={{data.endDate}}/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-affiliations/affiliations-main.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-affiliations/affiliations-main.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AffiliationsMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffiliationsMainComponent", function() { return AffiliationsMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AffiliationsMainComponent = /** @class */ (function () {
    function AffiliationsMainComponent() {
        this.deletedElements = new Array();
    }
    AffiliationsMainComponent.prototype.deleteItem = function (event) {
        this.changeHandler(event);
        this.deletedElements.push(event.target.closest("form"));
        var element = document.createElement("div");
        element.innerHTML = (" \n      <div class=\"padding-left\" style=\"padding-bottom:30px\">\n        <div class=\"col-lg-12\" style=\"padding:0\">\n          <a class=\"post-job-btn\" style=\"float: right; width: 100%; text-align: center\">Undo</a>\n        </div>\n      </div>\n    ");
        var self = this;
        element.addEventListener('click', function () {
            this.closest(".social-edit").appendChild(self.deletedElements[0]);
            this.parentNode.removeChild(this);
        });
        event.target.closest(".social-edit").replaceChild(element, event.target.closest("form"));
    };
    AffiliationsMainComponent.prototype.changeHandler = function (event) {
        event.target.closest(".resumeContainer").children[1].children[1].style = "display:show";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AffiliationsMainComponent.prototype, "data", void 0);
    AffiliationsMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./affiliations-main.component.html */ "./src/app/applicant/applicant-resume/resume-affiliations/affiliations-main.component.html")
        })
    ], AffiliationsMainComponent);
    return AffiliationsMainComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-affiliations/affiliations.directive.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-affiliations/affiliations.directive.ts ***!
  \******************************************************************************************/
/*! exports provided: AffiliationsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffiliationsDirective", function() { return AffiliationsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AffiliationsDirective = /** @class */ (function () {
    function AffiliationsDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AffiliationsDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[affiliations-host]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], AffiliationsDirective);
    return AffiliationsDirective;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-affiliations/resume-affiliations.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-affiliations/resume-affiliations.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" class=\"resumeContainer\">\r\n  <div class=\"col-lg-12\">\r\n    <ng-template affiliations-host></ng-template>\r\n  </div>\r\n  <div class=\"col-lg-12\">\r\n    <i class=\"la la-plus-circle\" (mouseenter) =\"$event.target.style.color='#fb236a'\" (mouseleave) =\"$event.target.style.color='rgb(85, 85, 85)'\" (click)=\"loadComponent('empty')\" style=\"margin-bottom:15px\"></i>\r\n    <a class=\"post-job-btn\" style=\"display: none; color: #FFFFFF\" (click)=\"updateResume($event)\">UPDATE</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-affiliations/resume-affiliations.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-affiliations/resume-affiliations.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ResumeAffiliationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeAffiliationsComponent", function() { return ResumeAffiliationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_item_type_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/item-type-constructor */ "./src/app/shared/item-type-constructor.ts");
/* harmony import */ var _affiliations_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./affiliations-main.component */ "./src/app/applicant/applicant-resume/resume-affiliations/affiliations-main.component.ts");
/* harmony import */ var _affiliations_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./affiliations.directive */ "./src/app/applicant/applicant-resume/resume-affiliations/affiliations.directive.ts");
/* harmony import */ var _service_update_resume_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/update-resume.service */ "./src/app/service/update-resume.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResumeAffiliationsComponent = /** @class */ (function () {
    function ResumeAffiliationsComponent(http, componentFactoryResolver, updateResumeService) {
        this.http = http;
        this.componentFactoryResolver = componentFactoryResolver;
        this.updateResumeService = updateResumeService;
    }
    ResumeAffiliationsComponent.prototype.updateResume = function (event) {
        this.updateResumeService.updateMain(event.target.closest("app-resume-affiliations"));
    };
    ResumeAffiliationsComponent.prototype.loadComponent = function (affiliations) {
        if (affiliations == "empty") {
            affiliations = new Array();
            affiliations.push(new _shared_item_type_constructor__WEBPACK_IMPORTED_MODULE_2__["ItemType"](_affiliations_main_component__WEBPACK_IMPORTED_MODULE_3__["AffiliationsMainComponent"], {
                title: "",
                description: "",
                startDate: "",
                endDate: "",
            }));
        }
        for (var i = 0; i < affiliations.length; i++) {
            var affiliationItem = affiliations[i];
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(affiliationItem.component);
            var viewContainerRef = this.affiliationHost.viewContainerRef;
            var componentRef = viewContainerRef.createComponent(componentFactory);
            componentRef.instance.data = affiliationItem.data;
        }
    };
    ResumeAffiliationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        this.http.get("http://18.220.46.51:3000/api/Applicant/" + user).subscribe(function (data) {
            var resumeAffiliations = data["resume"]["affiliations"];
            var affiliations = new Array();
            for (var k = 0; k < resumeAffiliations.length; k++) {
                affiliations.push(new _shared_item_type_constructor__WEBPACK_IMPORTED_MODULE_2__["ItemType"](_affiliations_main_component__WEBPACK_IMPORTED_MODULE_3__["AffiliationsMainComponent"], {
                    title: resumeAffiliations[k]["title"],
                    description: resumeAffiliations[k]["description"],
                    startDate: new Date(resumeAffiliations[k]["startDate"]).toString().slice(0, 15),
                    endDate: new Date(resumeAffiliations[k]["endDate"]).toString().slice(0, 15),
                }));
            }
            if (affiliations.length == 0) {
                _this.loadComponent("empty");
            }
            else {
                _this.loadComponent(affiliations);
            }
        }, // Catch Errors
        function (err) {
            _this.loadComponent("empty");
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_affiliations_directive__WEBPACK_IMPORTED_MODULE_4__["AffiliationsDirective"]),
        __metadata("design:type", _affiliations_directive__WEBPACK_IMPORTED_MODULE_4__["AffiliationsDirective"])
    ], ResumeAffiliationsComponent.prototype, "affiliationHost", void 0);
    ResumeAffiliationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume-affiliations',
            template: __webpack_require__(/*! ./resume-affiliations.component.html */ "./src/app/applicant/applicant-resume/resume-affiliations/resume-affiliations.component.html"),
            styles: [__webpack_require__(/*! ../resume-elements.component.css */ "./src/app/applicant/applicant-resume/resume-elements.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _service_update_resume_service__WEBPACK_IMPORTED_MODULE_5__["UpdateResumeService"]])
    ], ResumeAffiliationsComponent);
    return ResumeAffiliationsComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-education/education-main.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-education/education-main.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"social-edit\" id=\"sn\">\r\n    <form style=\"padding-left:0px; border-style: solid;\r\n        border-width: 1px;\r\n        border-color: #edeff7;\r\n        border-radius: 8px;\r\n        margin-bottom: 15px\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"del-resume\" (click)=\"deleteItem($event)\" style=\"float: right; margin-top: 10px\">\r\n                <a>\r\n                    <i class=\"la la-trash-o\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"edu-history-sec\">\r\n            <div class=\"edu-history\">\r\n                <i class=\"la la-graduation-cap\" style=\"padding-top: 30px\"></i>\r\n                <div class=\"edu-hisinfo\">\r\n                    <div class=\"row\" style=\"padding:15px; padding-bottom:0px\">\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">School</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Princeton\" secret=\"title\" value={{data.title}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Degree</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Some Made-Up Degree\" secret=\"description\" value={{data.description}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">From</span> \r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Too Long Ago\" secret=\"startDate\" value={{data.startDate}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">To</span> \r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"I Wish\" secret=\"endDate\" value={{data.endDate}}/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-education/education-main.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-education/education-main.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EducationMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationMainComponent", function() { return EducationMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationMainComponent = /** @class */ (function () {
    function EducationMainComponent() {
        this.deletedElements = new Array();
    }
    EducationMainComponent.prototype.deleteItem = function (event) {
        this.changeHandler(event);
        this.deletedElements.push(event.target.closest("form"));
        var element = document.createElement("div");
        element.innerHTML = (" \n      <div class=\"padding-left\" style=\"padding-bottom:30px\">\n        <div class=\"col-lg-12\" style=\"padding:0\">\n          <a class=\"post-job-btn\" style=\"float: right; width: 100%; text-align: center\">Undo</a>\n        </div>\n      </div>\n    ");
        var self = this;
        element.addEventListener('click', function () {
            this.closest(".social-edit").appendChild(self.deletedElements[0]);
            this.parentNode.removeChild(this);
        });
        event.target.closest(".social-edit").replaceChild(element, event.target.closest("form"));
    };
    EducationMainComponent.prototype.changeHandler = function (event) {
        event.target.closest(".resumeContainer").children[1].children[1].style = "display:show";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EducationMainComponent.prototype, "data", void 0);
    EducationMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./education-main.component.html */ "./src/app/applicant/applicant-resume/resume-education/education-main.component.html")
        })
    ], EducationMainComponent);
    return EducationMainComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-education/education.directive.ts":
/*!************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-education/education.directive.ts ***!
  \************************************************************************************/
/*! exports provided: EducationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationDirective", function() { return EducationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationDirective = /** @class */ (function () {
    function EducationDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    EducationDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[education-host]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], EducationDirective);
    return EducationDirective;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-education/resume-education.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-education/resume-education.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" class=\"resumeContainer\">\r\n  <div class=\"col-lg-12\">\r\n    <ng-template education-host></ng-template>\r\n  </div>\r\n  <div class=\"col-lg-12\">\r\n    <i class=\"la la-plus-circle\" (mouseenter) =\"$event.target.style.color='#fb236a'\" (mouseleave) =\"$event.target.style.color='rgb(85, 85, 85)'\" (click)=\"loadComponent('empty')\" style=\"margin-bottom:15px\"></i>\r\n    <a class=\"post-job-btn\" style=\"display: none; color: #FFFFFF\" (click)=\"updateResume($event)\">UPDATE</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-education/resume-education.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-education/resume-education.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ResumeEducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeEducationComponent", function() { return ResumeEducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_item_type_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/item-type-constructor */ "./src/app/shared/item-type-constructor.ts");
/* harmony import */ var _education_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education-main.component */ "./src/app/applicant/applicant-resume/resume-education/education-main.component.ts");
/* harmony import */ var _resume_education_education_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resume-education/education.directive */ "./src/app/applicant/applicant-resume/resume-education/education.directive.ts");
/* harmony import */ var _service_update_resume_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/update-resume.service */ "./src/app/service/update-resume.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResumeEducationComponent = /** @class */ (function () {
    function ResumeEducationComponent(http, componentFactoryResolver, updateResumeService) {
        this.http = http;
        this.componentFactoryResolver = componentFactoryResolver;
        this.updateResumeService = updateResumeService;
    }
    ResumeEducationComponent.prototype.updateResume = function (event) {
        this.updateResumeService.updateMain(event.target.closest("app-resume-education"));
    };
    ResumeEducationComponent.prototype.loadComponent = function (educations) {
        if (educations == "empty") {
            educations = new Array();
            educations.push(new _shared_item_type_constructor__WEBPACK_IMPORTED_MODULE_2__["ItemType"](_education_main_component__WEBPACK_IMPORTED_MODULE_3__["EducationMainComponent"], {
                title: "",
                description: "",
                startDate: "",
                endDate: "",
            }));
        }
        for (var i = 0; i < educations.length; i++) {
            var educationItem = educations[i];
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(educationItem.component);
            var viewContainerRef = this.educationHost.viewContainerRef;
            var componentRef = viewContainerRef.createComponent(componentFactory);
            componentRef.instance.data = educationItem.data;
        }
    };
    ResumeEducationComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        this.http.get("http://18.220.46.51:3000/api/Applicant/" + user).subscribe(function (data) {
            var resumeEducations = data["resume"]["education"];
            var educations = new Array();
            for (var k = 0; k < resumeEducations.length; k++) {
                educations.push(new _shared_item_type_constructor__WEBPACK_IMPORTED_MODULE_2__["ItemType"](_education_main_component__WEBPACK_IMPORTED_MODULE_3__["EducationMainComponent"], {
                    title: resumeEducations[k]["title"],
                    description: resumeEducations[k]["description"],
                    startDate: new Date(resumeEducations[k]["startDate"]).toString().slice(0, 15),
                    endDate: new Date(resumeEducations[k]["endDate"]).toString().slice(0, 15),
                }));
            }
            if (educations.length == 0) {
                _this.loadComponent("empty");
            }
            else {
                _this.loadComponent(educations);
            }
        }, // Catch Errors
        function (err) {
            _this.loadComponent("empty");
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_resume_education_education_directive__WEBPACK_IMPORTED_MODULE_4__["EducationDirective"]),
        __metadata("design:type", _resume_education_education_directive__WEBPACK_IMPORTED_MODULE_4__["EducationDirective"])
    ], ResumeEducationComponent.prototype, "educationHost", void 0);
    ResumeEducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume-education',
            template: __webpack_require__(/*! ./resume-education.component.html */ "./src/app/applicant/applicant-resume/resume-education/resume-education.component.html"),
            styles: [__webpack_require__(/*! ../resume-elements.component.css */ "./src/app/applicant/applicant-resume/resume-elements.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _service_update_resume_service__WEBPACK_IMPORTED_MODULE_5__["UpdateResumeService"]])
    ], ResumeEducationComponent);
    return ResumeEducationComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-elements.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-elements.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".la{\r\n    float: left; \r\n    margin-bottom: 30px; \r\n    width: 50px; \r\n    height: 50px; \r\n    font-size: 50px; \r\n    border-radius: 50%;\r\n}\r\na{\r\n    float: right; \r\n}\r\n"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-experience/experience-main.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-experience/experience-main.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"social-edit\" id=\"sn\">\r\n    <form style=\"padding-left:0px; border-style: solid;\r\n        border-width: 1px;\r\n        border-color: #edeff7;\r\n        border-radius: 8px;\r\n        margin-bottom: 15px\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"del-resume\" (click)=\"deleteItem($event)\" style=\"float: right; margin-top: 10px\">\r\n                <a>\r\n                    <i class=\"la la-trash-o\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"edu-history-sec\">\r\n            <div class=\"edu-history\">\r\n                <i class=\"la la-briefcase\" style=\"padding-top: 30px\"></i>\r\n                <div class=\"edu-hisinfo\">\r\n                    <div class=\"row\" style=\"padding:15px; padding-bottom:0px\">\r\n                        <div class=\"col-lg-12\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Company</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Creative Company Name\" secret=\"title\" value={{data.title}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Position</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"What You Did\" secret=\"position\" value={{data.position}}/>\r\n                            </div>\r\n                        </div>\r\n                        <!-- \r\n                            TODO: THIS\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Type</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (click)=\"displayDropdown($event)\"/>\r\n                            </div>\r\n                        </div> \r\n                            'PROFESSIONALWORK', \r\n                            'PERSONALWORK', \r\n                            'INTERNSHIP', \r\n                            'EXTERNSHIP', \r\n                            'SHADOWING', \r\n                            'VOLUNTEER', \r\n                            'EDUCATION', \r\n                            'INTERNATIONAL', \r\n                            'HOBBY', \r\n                            'MENTORSHIP', \r\n                            'LEADERSHIP', \r\n                            'RESEARCH', \r\n                            'COCURRICULAR', \r\n                            'COOPERATIVE', \r\n                            'COMMUNITY', \r\n                            'OTHER'\r\n                        -->\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Type</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Proffesional? Hobby? Startup?\" secret=\"type\" value={{data.type}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Description</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Details\" secret=\"description\" value={{data.description}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">From</span> \r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Start date\" secret=\"startDate\" value={{data.startDate}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">To</span> \r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"End date\" secret=\"endDate\" value={{data.endDate}}/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-experience/experience-main.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-experience/experience-main.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ExperienceMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceMainComponent", function() { return ExperienceMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//TODO: Fontawesome icons for Work
var ExperienceMainComponent = /** @class */ (function () {
    function ExperienceMainComponent() {
        this.deletedElements = new Array();
    }
    ExperienceMainComponent.prototype.displayDropdown = function (event) {
        console.log("display");
    };
    ExperienceMainComponent.prototype.deleteItem = function (event) {
        this.changeHandler(event);
        this.deletedElements.push(event.target.closest("form"));
        var element = document.createElement("div");
        element.innerHTML = (" \n      <div class=\"padding-left\" style=\"padding-bottom:30px\">\n        <div class=\"col-lg-12\" style=\"padding:0\">\n          <a class=\"post-job-btn\" style=\"float: right; width: 100%; text-align: center\">Undo</a>\n        </div>\n      </div>\n    ");
        var self = this;
        element.addEventListener('click', function () {
            this.closest(".social-edit").appendChild(self.deletedElements[0]);
            this.parentNode.removeChild(this);
        });
        event.target.closest(".social-edit").replaceChild(element, event.target.closest("form"));
    };
    ExperienceMainComponent.prototype.changeHandler = function (event) {
        event.target.closest("app-resume-experience").children[0].children[1].children[1].style = "display:show";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ExperienceMainComponent.prototype, "data", void 0);
    ExperienceMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./experience-main.component.html */ "./src/app/applicant/applicant-resume/resume-experience/experience-main.component.html")
        })
    ], ExperienceMainComponent);
    return ExperienceMainComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-experience/experience.directive.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-experience/experience.directive.ts ***!
  \**************************************************************************************/
/*! exports provided: ExperienceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceDirective", function() { return ExperienceDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceDirective = /** @class */ (function () {
    function ExperienceDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ExperienceDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[experience-host]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], ExperienceDirective);
    return ExperienceDirective;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-experience/resume-experience.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-experience/resume-experience.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" class=\"resumeContainer\">\r\n  <div class=\"col-lg-12\">\r\n    <ng-template experience-host></ng-template>\r\n  </div>\r\n  <div class=\"col-lg-12\">\r\n    <i class=\"la la-plus-circle\" (mouseenter) =\"$event.target.style.color='#fb236a'\" (mouseleave) =\"$event.target.style.color='rgb(85, 85, 85)'\" (click)=\"loadComponent('empty')\" style=\"margin-bottom:15px\"></i>\r\n    <a class=\"post-job-btn\" style=\"display: none; color: #FFFFFF\" (click)=\"updateResume($event)\">UPDATE</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-experience/resume-experience.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-experience/resume-experience.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ResumeExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeExperienceComponent", function() { return ResumeExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_item_type_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/item-type-constructor */ "./src/app/shared/item-type-constructor.ts");
/* harmony import */ var _experience_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience-main.component */ "./src/app/applicant/applicant-resume/resume-experience/experience-main.component.ts");
/* harmony import */ var _experience_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience.directive */ "./src/app/applicant/applicant-resume/resume-experience/experience.directive.ts");
/* harmony import */ var _service_update_resume_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/update-resume.service */ "./src/app/service/update-resume.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResumeExperienceComponent = /** @class */ (function () {
    function ResumeExperienceComponent(http, componentFactoryResolver, updateResumeService) {
        this.http = http;
        this.componentFactoryResolver = componentFactoryResolver;
        this.updateResumeService = updateResumeService;
    }
    ResumeExperienceComponent.prototype.updateResume = function (event) {
        this.updateResumeService.updateMain(event.target.closest("app-resume-experience"));
    };
    ResumeExperienceComponent.prototype.loadComponent = function (experiences) {
        if (experiences == "empty") {
            experiences = new Array();
            experiences.push(new _shared_item_type_constructor__WEBPACK_IMPORTED_MODULE_2__["ItemType"](_experience_main_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceMainComponent"], {
                type: "",
                position: "",
                title: "",
                description: "",
                startDate: "",
                endDate: "",
            }));
        }
        for (var i = 0; i < experiences.length; i++) {
            var experienceItem = experiences[i];
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(experienceItem.component);
            var viewContainerRef = this.achievementHost.viewContainerRef;
            var componentRef = viewContainerRef.createComponent(componentFactory);
            componentRef.instance.data = experienceItem.data;
        }
    };
    ResumeExperienceComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        this.http.get("http://18.220.46.51:3000/api/Applicant/" + user).subscribe(function (data) {
            var resumeExperiences = data["resume"]["experience"];
            var experiences = new Array();
            for (var k = 0; k < resumeExperiences.length; k++) {
                experiences.push(new _shared_item_type_constructor__WEBPACK_IMPORTED_MODULE_2__["ItemType"](_experience_main_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceMainComponent"], {
                    type: resumeExperiences[k]["type"],
                    position: resumeExperiences[k]["position"],
                    title: resumeExperiences[k]["title"],
                    description: resumeExperiences[k]["description"],
                    startDate: new Date(resumeExperiences[k]["startDate"]).toString().slice(0, 15),
                    endDate: new Date(resumeExperiences[k]["endDate"]).toString().slice(0, 15),
                }));
            }
            if (experiences.length == 0) {
                _this.loadComponent("empty");
            }
            else {
                _this.loadComponent(experiences);
            }
        }, // Catch Errors
        function (err) {
            _this.loadComponent("empty");
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_experience_directive__WEBPACK_IMPORTED_MODULE_4__["ExperienceDirective"]),
        __metadata("design:type", _experience_directive__WEBPACK_IMPORTED_MODULE_4__["ExperienceDirective"])
    ], ResumeExperienceComponent.prototype, "achievementHost", void 0);
    ResumeExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume-experience',
            template: __webpack_require__(/*! ./resume-experience.component.html */ "./src/app/applicant/applicant-resume/resume-experience/resume-experience.component.html"),
            styles: [__webpack_require__(/*! ../resume-elements.component.css */ "./src/app/applicant/applicant-resume/resume-elements.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _service_update_resume_service__WEBPACK_IMPORTED_MODULE_5__["UpdateResumeService"]])
    ], ResumeExperienceComponent);
    return ResumeExperienceComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-skills/resume-skills.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-skills/resume-skills.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\"  class=\"resumeContainer\">\r\n  <div class=\"col-lg-12\">\r\n    <div class=\"pf-field no-margin\">\r\n      <ul class=\"tags\" id=\"ulTags\" style=\"margin-bottom: 15px\">\r\n        <li class=\"tagAdd taglist\" id=\"lastNode\" style=\"margin-top: 5px\">\r\n          <input \r\n            type=\"text\" \r\n            id=\"search-field\" \r\n            placeholder=\"Web Design\" \r\n            (keydown)=\"changeHandler($event)\"\r\n            (keyup)=\"$event.keyCode == 13 ? submitHandler($event) : null\">\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-12\" *ngIf=\"update==true\">\r\n    <a class=\"post-job-btn\" style=\"margin-bottom: 15px; color: #FFFFFF\" (click)=\"updateResume($event)\">UPDATE</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-skills/resume-skills.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-skills/resume-skills.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ResumeSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeSkillsComponent", function() { return ResumeSkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_update_resume_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/update-resume.service */ "./src/app/service/update-resume.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_item_type_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/item-type-constructor */ "./src/app/shared/item-type-constructor.ts");
/* harmony import */ var _skills_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills-main.component */ "./src/app/applicant/applicant-resume/resume-skills/skills-main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResumeSkillsComponent = /** @class */ (function () {
    function ResumeSkillsComponent(updateResumeService, http, componentFactoryResolver) {
        this.updateResumeService = updateResumeService;
        this.http = http;
        this.componentFactoryResolver = componentFactoryResolver;
        this.update = false;
    }
    ResumeSkillsComponent.prototype.updateResume = function (event) {
        this.updateResumeService.updateSkills(event.target.closest("app-resume-skills"));
    };
    ResumeSkillsComponent.prototype.changeHandler = function (event) {
        this.update = true;
    };
    ResumeSkillsComponent.prototype.loadComponent = function (skillList) {
        for (var i = 0; i < skillList.length; i++) {
            this.createNew(skillList[i]);
        }
    };
    ResumeSkillsComponent.prototype.submitHandler = function (event) {
        if (event.target.value == "") {
            return;
        }
        var list = new Array();
        list.push(new _shared_item_type_constructor__WEBPACK_IMPORTED_MODULE_3__["ItemType"](_skills_main_component__WEBPACK_IMPORTED_MODULE_4__["SkillsMainComponent"], {
            skill: event.target.value,
        }));
        event.target.value = "";
        this.createNew(list[0]);
    };
    ResumeSkillsComponent.prototype.createNew = function (skill) {
        if (/\S/.test(skill.data.skill.toString())) {
            console.log("found something");
            return;
        }
        var node = document.createElement("li");
        node.setAttribute("class", "addedTag");
        node.setAttribute("style", "margin-bottom: 5px; margin-top: 5px");
        var data = skill.data.skill.toString();
        var span = "<span class='tagRemove'>x</span>";
        var input = "<input type='hidden' name='tags[]' value='" + data + "'>";
        node.innerHTML = (data + span + input);
        node.children[0].addEventListener("click", function () {
            this.closest(".resumeContainer").children[1].children[0].style = "margin-bottom: 15px; display: show";
            this.parentNode.remove();
        });
        var ul = document.getElementById("ulTags");
        ul.insertBefore(node, document.getElementById("lastNode"));
    };
    ResumeSkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        this.http.get("http://18.220.46.51:3000/api/Applicant/" + user).subscribe(function (data) {
            var skills = data["resume"]["skills"];
            var skillList = new Array();
            for (var i = 0; i < skills.length; i++) {
                skillList.push(new _shared_item_type_constructor__WEBPACK_IMPORTED_MODULE_3__["ItemType"](_skills_main_component__WEBPACK_IMPORTED_MODULE_4__["SkillsMainComponent"], {
                    skill: skills[i]["skill"],
                }));
            }
            _this.loadComponent(skillList);
        }, // Catch Errors
        function (err) {
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
        });
    };
    ResumeSkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume-skills',
            template: __webpack_require__(/*! ./resume-skills.component.html */ "./src/app/applicant/applicant-resume/resume-skills/resume-skills.component.html"),
            styles: [__webpack_require__(/*! ../resume-elements.component.css */ "./src/app/applicant/applicant-resume/resume-elements.component.css")]
        }),
        __metadata("design:paramtypes", [_service_update_resume_service__WEBPACK_IMPORTED_MODULE_1__["UpdateResumeService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], ResumeSkillsComponent);
    return ResumeSkillsComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-skills/skills-main.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/applicant/applicant-resume/resume-skills/skills-main.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SkillsMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsMainComponent", function() { return SkillsMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsMainComponent = /** @class */ (function () {
    function SkillsMainComponent() {
    }
    SkillsMainComponent.prototype.removeSkill = function (event) {
        console.log("hi");
        event.target.closest(".resumeContainer").children[1].children[0].style = "margin-bottom: 15px; display: show; color: #FFFFFF";
        event.target.parentNode.remove();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SkillsMainComponent.prototype, "data", void 0);
    SkillsMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n    <li class=\"addedTag\">\n        {{data.skill}}\n        <span (click)=\"removeSkill($event)\" class=\"tagRemove\">\n            x\n        </span>\n        <input type=\"hidden\" name=\"tags[]\" value=\"{{data.skill}}\">\n    </li>\n  "
        })
    ], SkillsMainComponent);
    return SkillsMainComponent;
}());



/***/ }),

/***/ "./src/app/employer/employer-post-jobs/employer-post-jobs.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/employer/employer-post-jobs/employer-post-jobs.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3:hover {\r\n    background-color: #fb236a;\r\n    padding-left:46px;\r\n    transition: all 0.7s ease;\r\n}\r\nh3 {\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    margin: 0;\r\n    border-top: 1px solid #edeff7;\r\n    border-bottom: 0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/employer/employer-post-jobs/employer-post-jobs.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/employer/employer-post-jobs/employer-post-jobs.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\" style=\"margin: 15px\">\r\n    <i class=\"la la-exclamation\"></i>\r\n    {{ errorMessage }}\r\n</div>\r\n\r\n<div class=\"padding-left\">\r\n    <div class=\"social-edit\" id=\"sn\">\r\n        <h3 style=\"border-top: 0px\" (click)=\"handleClicked($event)\">\r\n            <i class=\"fa fa-toggle-down\" style=\"padding-right:10px\"></i>Description\r\n        </h3>\r\n        <div class=\"col-lg-12\" style=\"display: none\">\r\n            <div class=\"col-lg-12\" class=\"resumeContainer\">\r\n                <div class=\"col-lg-12\"> \r\n                    <div class=\"social-edit\" id=\"sn\">\r\n                        <form style=\"padding-left:0px; border-style: solid;\r\n                            border-width: 1px;\r\n                            border-color: #edeff7;\r\n                            border-radius: 8px;\r\n                            margin-bottom: 15px\">\r\n                            <div class=\"edu-history-sec\">\r\n                                <div class=\"edu-history\">\r\n                                    <i class=\"la la-check-square\" style=\"padding-top: 30px\"></i>\r\n                                    <div class=\"edu-hisinfo\">\r\n                                        <div class=\"row\" style=\"padding:15px; padding-bottom:0px\">\r\n                                            <div class=\"col-lg-12\">\r\n                                                <span class=\"pf-title\" style=\"margin-top:0px\">Title</span>\r\n                                                <div class=\"pf-field\">\r\n                                                    <input type=\"text\" placeholder=\"Coolest Job Ever\" secret=\"title\"\r\n                                                        [(ngModel)]=\"title\" [ngModelOptions]=\"{standalone: true}\"/>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-lg-12\">\r\n                                                <span class=\"pf-title\" style=\"margin-top:0px\">Description</span>\r\n                                                <div class=\"pf-field\">\r\n                                                    <textarea style=\"padding: 15px\" rows=\"20\" type=\"text\" placeholder=\"Cool Description\" secret=\"description\"\r\n                                                        [(ngModel)]=\"description\" [ngModelOptions]=\"{standalone: true}\"></textarea>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"padding-left\">\r\n    <div class=\"social-edit\" id=\"sn\">\r\n        <h3 (click)=\"handleClicked($event)\">\r\n            <i class=\"fa fa-toggle-down\" style=\"padding-right:10px\"></i>Info\r\n        </h3>\r\n        <div class=\"col-lg-12\" style=\"display: none\">\r\n            <div class=\"col-lg-12\" class=\"resumeContainer\">\r\n                <div class=\"col-lg-12\"> \r\n                    <div class=\"social-edit\" id=\"sn\">\r\n                        <form style=\"padding-left:0px; border-style: solid;\r\n                            border-width: 1px;\r\n                            border-color: #edeff7;\r\n                            border-radius: 8px;\r\n                            margin-bottom: 15px\">\r\n                            <div class=\"edu-history-sec\">\r\n                                <div class=\"edu-history\">\r\n                                    <i class=\"la la-info\" style=\"padding-top: 30px\"></i>\r\n                                    <div class=\"edu-hisinfo\">\r\n                                        <div class=\"row\" style=\"padding:15px; padding-bottom:0px\">\r\n                                            <div class=\"col-lg-12\">\r\n                                                <span class=\"pf-title\" style=\"margin-top:0px\">Location</span>\r\n                                                <div class=\"pf-field\">\r\n                                                    <input type=\"text\" placeholder=\"New Jersey\" secret=\"title\"\r\n                                                        [(ngModel)]=\"location\" [ngModelOptions]=\"{standalone: true}\"/>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-lg-6\">\r\n                                                <span class=\"pf-title\" style=\"margin-top:0px\">Job Type</span>\r\n                                                <div class=\"pf-field\">\r\n                                                    <input type=\"text\" placeholder=\"New Jersey\" secret=\"title\"\r\n                                                        [(ngModel)]=\"jobType\" [ngModelOptions]=\"{standalone: true}\" list=\"jobTypeList\" />\r\n                                                    <datalist id=\"jobTypeList\">\r\n                                                        <option>ENTRY_LEVEL</option>\r\n                                                        <option>INTERMEDIATE_LEVEL</option>\r\n                                                        <option>SENIOR_LEVEL</option>\r\n                                                        <option>INTERNSHIP</option>\r\n                                                        <option>FREELANCE</option>\r\n                                                    </datalist>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-lg-6\">\r\n                                                <span class=\"pf-title\" style=\"margin-top:0px\">Tags</span>\r\n                                                <div class=\"pf-field no-margin\">\r\n                                                    <ul class=\"tags\" id=\"ulTags\" style=\"margin-bottom: 15px\">\r\n                                                        <li class=\"tagAdd taglist\" id=\"lastNode\" style=\"margin-top: 5px\">\r\n                                                            <input type=\"text\" id=\"search-field\" placeholder=\"Web Design\" \r\n                                                            (keyup)=\"$event.keyCode == 13 ? submitHandler($event) : null\">\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n      \r\n<div class=\"padding-left\">\r\n    <div class=\"social-edit\" id=\"sn\">\r\n        <h3 (click)=\"handleClicked($event)\">\r\n            <i class=\"fa fa-toggle-down\" style=\"padding-right:10px\"></i>Payment\r\n        </h3>\r\n        <div class=\"col-lg-12\" style=\"display: none\">\r\n            <div class=\"col-lg-12\" class=\"resumeContainer\">\r\n                <div class=\"col-lg-12\"> \r\n                    <div class=\"social-edit\" id=\"sn\">\r\n                        <form style=\"padding-left:0px; border-style: solid;\r\n                            border-width: 1px;\r\n                            border-color: #edeff7;\r\n                            border-radius: 8px;\r\n                            margin-bottom: 15px\">\r\n                            <div class=\"edu-history-sec\">\r\n                                <div class=\"edu-history\">\r\n                                    <i class=\"la la-money\" style=\"padding-top: 30px\"></i>\r\n                                    <div class=\"edu-hisinfo\">\r\n                                        <div class=\"row\" style=\"padding:15px; padding-bottom:0px\">\r\n                                            <div class=\"col-lg-6\">\r\n                                                <span class=\"pf-title\" style=\"margin-top:0px\">Payment Amount</span>\r\n                                                <div class=\"pf-field\">\r\n                                                    <input type=\"text\" placeholder=\"999.99\" secret=\"title\"\r\n                                                        [(ngModel)]=\"payment\" [ngModelOptions]=\"{standalone: true}\"/>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-lg-6\">\r\n                                                <span class=\"pf-title\" style=\"margin-top:0px\">Payment Type</span>\r\n                                                <div class=\"pf-field\">\r\n                                                    <input type=\"text\" placeholder=\"Hourly\" secret=\"title\"\r\n                                                        [(ngModel)]=\"paymentType\" [ngModelOptions]=\"{standalone: true}\" list=\"paymentTypeList\" />\r\n                                                    <datalist id=\"paymentTypeList\">\r\n                                                        <option>ONETIME</option>\r\n                                                        <option>HOURLY</option>\r\n                                                        <option>DAILY</option>\r\n                                                        <option>WEEKLY</option>\r\n                                                        <option>BIWEEKLY</option>\r\n                                                        <option>MONTHLY</option>\r\n                                                        <option>NONE</option>\r\n                                                        <option>OTHER</option>\r\n                                                    </datalist>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<section>\r\n    <div class=\"block remove-bottom\" style=\"padding-top: 15px\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"account-popup-area signin-popup-box static\">\r\n                        <div class=\"account-popup\" style=\"\r\n                            left: auto;\r\n                            margin: 0;\r\n                            width: 100%\">\t\r\n                            <form style=\"margin-top: 0; width: 100%\">\r\n                                <button (click)=\"submitJob()\" style=\"margin-top: 0\">POST JOB</button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/employer/employer-post-jobs/employer-post-jobs.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/employer/employer-post-jobs/employer-post-jobs.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EmployerPostJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerPostJobsComponent", function() { return EmployerPostJobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_item_type_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/item-type-constructor */ "./src/app/shared/item-type-constructor.ts");
/* harmony import */ var _applicant_applicant_resume_resume_skills_skills_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../applicant/applicant-resume/resume-skills/skills-main.component */ "./src/app/applicant/applicant-resume/resume-skills/skills-main.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployerPostJobsComponent = /** @class */ (function () {
    function EmployerPostJobsComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
    }
    EmployerPostJobsComponent.prototype.submitHandler = function (event) {
        if (event.target.value == "") {
            return;
        }
        var list = new Array();
        list.push(new _shared_item_type_constructor__WEBPACK_IMPORTED_MODULE_2__["ItemType"](_applicant_applicant_resume_resume_skills_skills_main_component__WEBPACK_IMPORTED_MODULE_3__["SkillsMainComponent"], {
            skill: event.target.value,
        }));
        event.target.value = "";
        this.createNew(list[0]);
    };
    EmployerPostJobsComponent.prototype.createNew = function (skill) {
        // TODO: Do not accept a series of spaces as a skill
        var node = document.createElement("li");
        node.setAttribute("class", "addedTag");
        node.setAttribute("style", "margin-bottom: 5px; margin-top: 5px");
        var data = skill.data.skill.toString();
        var span = "<span class='tagRemove'>x</span>";
        var input = "<input type='hidden' name='tags[]' value='" + data + "'>";
        node.innerHTML = (data + span + input);
        node.children[0].addEventListener("click", function () {
            this.closest(".resumeContainer").children[1].children[0].style = "margin-bottom: 15px; display: show";
            this.parentNode.remove();
        });
        var ul = document.getElementById("ulTags");
        ul.insertBefore(node, document.getElementById("lastNode"));
    };
    EmployerPostJobsComponent.prototype.handleClicked = function (event) {
        var currTarget = event.target.closest(".social-edit").children[1];
        var currStyle = currTarget.style;
        if (currStyle.display == "none") {
            currTarget.style = "display: inline";
        }
        else if (currStyle.display == "inline") {
            currTarget.style = "display: none";
        }
    };
    EmployerPostJobsComponent.prototype.submitJob = function () {
        this.errorMessage = null;
        var jobTypes = ['ENTRY_LEVEL', 'INTERMEDIATE_LEVEL', 'SENIOR_LEVEL', 'INTERNSHIP', 'FREELANCE'];
        var paymentTypes = ['NONE', 'ONETIME', 'HOURLY', 'DAILY', 'WEEKLY', 'BIWEEKLY', 'MONTHLY', 'OTHER'];
        if (!this.title || !this.description || !this.location || !this.jobType || !this.payment || !this.paymentType) {
            this.errorMessage = "Please fill out all fields!";
            return;
        }
        if (!jobTypes.includes(this.jobType)) {
            this.errorMessage = "The job type needs to be one of the following: 'ENTRY_LEVEL', 'INTERMEDIATE_LEVEL', 'SENIOR_LEVEL', 'INTERNSHIP', 'FREELANCE'!";
            return;
        }
        if (!paymentTypes.includes(this.paymentType)) {
            this.errorMessage = "The payment type needs to be one of the following: 'NONE', 'ONETIME', 'HOURLY', 'DAILY', 'WEEKLY', 'BIWEEKLY', 'MONTHLY', 'OTHER'!";
            return;
        }
        if (isNaN(this.payment)) {
            this.errorMessage = "Payment needs to be a number!";
            return;
        }
        var ulTags = document.getElementById("ulTags");
        var childrenElements = ulTags.children;
        for (var i = 0; i < childrenElements.length - 1; i++) {
            var currentElementValue = childrenElements[i].children[1];
            this.jobObject.newJob.tags.push(currentElementValue);
        }
        this.jobObject.newJob.title = this.title;
        this.jobObject.newJob.description = this.description;
        this.jobObject.newJob.location = this.location;
        this.jobObject.newJob.payment = this.payment;
        this.jobObject.newJob.paymentType = this.paymentType;
        this.jobObject.newJob.jobType = this.jobType;
        this.postJob();
    };
    EmployerPostJobsComponent.prototype.postJob = function () {
        var url = "http://18.220.46.51:3000/api/NewJob";
        this.http.post(url, this.jobObject).subscribe(function (data) { }, // Catch Errors
        function (err) {
            alert("Could not post job!");
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
        });
        alert("Job posted!");
        this.router.navigate(['/employer/profile-info']);
    };
    EmployerPostJobsComponent.prototype.ngOnInit = function () {
        var user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        this.jobObject = {
            $class: "network.krow.transactions.employer.NewJob",
            employer: user,
            newJob: {
                $class: "network.krow.assets.IntermediateJob",
                title: "",
                description: "",
                location: "",
                tags: [],
                payment: "",
                paymentType: "",
                jobType: ""
            }
        };
    };
    EmployerPostJobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employer-post-jobs',
            template: __webpack_require__(/*! ./employer-post-jobs.component.html */ "./src/app/employer/employer-post-jobs/employer-post-jobs.component.html"),
            styles: [__webpack_require__(/*! ./employer-post-jobs.component.css */ "./src/app/employer/employer-post-jobs/employer-post-jobs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], EmployerPostJobsComponent);
    return EmployerPostJobsComponent;
}());



/***/ }),

/***/ "./src/app/employer/employer-profile/employer-profile.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/employer/employer-profile/employer-profile.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"page-loading\">\r\n\t<img src=\"{{LOADER}}\" alt=\"\" />\r\n\t<span>Loading...</span>\r\n</div> -->\r\n\r\n<p id=\"test-ID\" value=\"Employer\" style=\"display:none\"></p>\r\n\r\n<div class=\"theme-layout\" id=\"scrollup\">\r\n\t<header class=\"stick-top\">\r\n\t\t<div class=\"menu-sec\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"logo\">\r\n\t\t\t\t\t<a href=\"https://www.krow.network/\" target=\"_blank\" title=\"\">\r\n\t\t\t\t\t\t<img src=\"http://placehold.it/178x40\" alt=\"Krow Network Logo\" />\r\n\t\t\t\t\t\t<!-- <img src=\"{{KROW_HEADER_2}}\" alt=\"\" /> -->\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div><!-- Logo -->\r\n\t\t\t\t<div class=\"btn-extars\">\r\n\t\t\t\t\t<a [routerLink]=\"['employer-post-jobs']\" routerLinkActive=\"active\" class=\"post-job-btn\"><i class=\"la la-plus\"></i>Post Jobs</a>\r\n\t\t\t\t\t<ul class=\"account-btns\">\r\n\t\t\t\t\t\t<li><a [routerLink]=\"['/logout']\" routerLinkActive=\"active\"  title=\"\"><i class=\"la la-external-link-square\"></i>LogOut</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div><!-- Btn Extras -->\r\n\t\t\t\t<nav>\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['/secureHome']\" routerLinkActive=\"active\">Home</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/employer/profile-info']\" routerLinkActive=\"active\">Profile</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"menu-item-has-children\">\r\n\t\t\t\t\t\t\t<a>Jobs</a>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['completed-jobs']\" routerLinkActive=\"active\">Completed Jobs</a></li>\r\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['terminated-jobs']\" routerLinkActive=\"active\">Terminated Jobs</a></li>\r\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['in-progress-jobs']\" routerLinkActive=\"active\">In-Progress Jobs</a></li>\r\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['available-jobs']\" routerLinkActive=\"active\">Available Jobs</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</nav><!-- Menus -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</header>\r\n\r\n\t<section class=\"overlape\">\r\n\t\t<div class=\"block no-padding\">\r\n\t\t\t<div data-velocity=\"-.1\" class=\"parallax scrolly-invisible no-parallax\"></div>\r\n\t\t\t<div class=\"container fluid\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<div class=\"inner-header\" style=\"padding-top:90px\" id=\"responsive-title\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<section>\r\n\t\t<div class=\"block no-padding\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t <div class=\"row no-gape\">\r\n\t\t\t\t\t<div class=\"col-lg-1 column\"></div>\r\n\t\t\t\t\t<div class=\"col-lg-10 column\">\r\n\t\t\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-1 column\"></div>\r\n\t\t\t\t </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<footer style=\"margin-top: 15px\">\r\n\t\t<div class=\"block\" style=\"padding-bottom: 0; padding-top: 25px\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-3 column\">\r\n\t\t\t\t\t\t<div class=\"widget\">\r\n\t\t\t\t\t\t\t<div class=\"about_widget\">\r\n\t\t\t\t\t\t\t\t<div class=\"logo\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.krow.network/\" target=\"_blank\" title=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- <img src=\"{{KROW_HEADER_2}}\" alt=\"\" /> -->\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/178x40\" alt=\"Krow Network Logo\" />\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"social\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/KrowNetwork/\" \t\t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-facebook\"\t ></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://twitter.com/krownetwork\"                          target=\"_blank\" title=\"\"><i class=\"fa fa-twitter\" \t ></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.reddit.com/r/Krow/\" \t\t\t\t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-reddit\"  \t ></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.youtube.com/channel/UCmTgljCaCHkCPIbsE3IB4cA\" target=\"_blank\" title=\"\"><i class=\"fa fa-youtube\" \t ></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://github.com/KrowNetwork/krowsite\" \t\t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-github\"  \t ></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://medium.com/@krownetwork\"\t\t\t\t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-medium\" \t ></i></a>\r\n\t\t\t\t\t\t\t\t\t<!--TODO: Figure out, and add pics for the following -->\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.t.me/thekrownetwork\" \t\t\t\t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-telegram\"    ></i>T</a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"https://bitcointalk.org/index.php?topic=2891187.0\"        target=\"_blank\" title=\"\"><i class=\"fa fa-bitcointalk\" ></i>B</a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"mailto:help@krow.network?Subject=Question\" \t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-mail\"        ></i>M</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div><!-- About Widget -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-6 column\">\r\n\t\t\t\t\t\t<div class=\"widget\">\r\n\t\t\t\t\t\t\t<h3 class=\"footer-title\">Frequently Asked Questions</h3>\r\n\t\t\t\t\t\t\t<div class=\"link_widgets\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">A</a>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">List</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Of</a>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Possible</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">FAQ</a>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Links</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-3 column\">\r\n\t\t\t\t\t\t<div class=\"widget\">\r\n\t\t\t\t\t\t\t<div class=\"download_widget\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\"><img src=\"http://placehold.it/230x65\" alt=\"\" /></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\"><img src=\"http://placehold.it/230x65\" alt=\"\" /></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"bottom-line\">\r\n\t\t\t<span>© 2018 Jobhunt All rights reserved. Design by Creative Layers</span>\r\n\t\t\t<a class=\"scrollup\" title=\"\" id=\"my-cool-button\" (click)=\"scrollup()\" style=\"bottom: 12px; right: 12px\">\r\n\t\t\t\t<i class=\"la la-arrow-up\"></i>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</footer>\r\n</div>"

/***/ }),

/***/ "./src/app/employer/employer-profile/employer-profile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/employer/employer-profile/employer-profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: EmployerProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerProfileComponent", function() { return EmployerProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user-login.service */ "./src/app/service/user-login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployerProfileComponent = /** @class */ (function () {
    function EmployerProfileComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        // IMAGES
        this.LOADER = __webpack_require__(/*! ../../../images/loader.gif */ "./src/images/loader.gif");
        this.LOGO1 = __webpack_require__(/*! ../../../images/icon.png */ "./src/images/icon.png");
        this.LOGO2 = __webpack_require__(/*! ../../../images/icon2.png */ "./src/images/icon2.png");
        this.KROW_LOGO = __webpack_require__(/*! ../../../images/krow-logo.png */ "./src/images/krow-logo.png");
        this.KROW_HEADER_2 = __webpack_require__(/*! ../../../images/krow-header-2.png */ "./src/images/krow-header-2.png");
        this.userService.isAuthenticated(this);
        console.log("Employer Component: constructor");
    }
    EmployerProfileComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        if (!isLoggedIn) {
            this.router.navigate(['/login']);
        }
    };
    EmployerProfileComponent.prototype.scrollup = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    EmployerProfileComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("accountType") == "applicant") {
            this.router.navigate(["/applicant"]);
        }
    };
    EmployerProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employer-profile',
            template: __webpack_require__(/*! ./employer-profile.component.html */ "./src/app/employer/employer-profile/employer-profile.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]])
    ], EmployerProfileComponent);
    return EmployerProfileComponent;
}());



/***/ }),

/***/ "./src/app/job/job-profile/job-profile.component.css":
/*!***********************************************************!*\
  !*** ./src/app/job/job-profile/job-profile.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/job/job-profile/job-profile.component.html":
/*!************************************************************!*\
  !*** ./src/app/job/job-profile/job-profile.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"page-loading\">\n\t<img src=\"{{LOADER}}\" alt=\"\" />\n\t<span>Loading...</span>\n</div> -->\n\n<p id=\"test-ID\" value=\"Employer\" style=\"display:none\"></p>\n\n<div class=\"theme-layout\" id=\"scrollup\">\n\t<header class=\"stick-top\">\n\t\t<div class=\"menu-sec\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t<a href=\"https://www.krow.network/\" target=\"_blank\" title=\"\">\n\t\t\t\t\t\t<img src=\"http://placehold.it/178x40\" alt=\"Krow Network Logo\" />\n\t\t\t\t\t\t<!-- <img src=\"{{KROW_HEADER_2}}\" alt=\"\" /> -->\n\t\t\t\t\t</a>\n\t\t\t\t</div><!-- Logo -->\n\t\t\t\t<div class=\"btn-extars\">\n\t\t\t\t\t<!-- <a [routerLink]=\"['employer-post-jobs']\" routerLinkActive=\"active\" class=\"post-job-btn\"><i class=\"la la-plus\"></i>Post Jobs</a> -->\n\t\t\t\t\t<ul class=\"account-btns\">\n\t\t\t\t\t\t<li><a [routerLink]=\"['/logout']\" routerLinkActive=\"active\"  title=\"\"><i class=\"la la-external-link-square\"></i>LogOut</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- Btn Extras -->\n\t\t\t\t<nav>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a [routerLink]=\"['/secureHome']\" routerLinkActive=\"active\">Home</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<!-- <a role=\"button\" (click)=\"switchSession()\">Switch to {{switchTo}}</a> -->\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a role=\"button\" (click)=\"goToProfile()\">Profile</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a (click)=\"bigBtn()\" class=\"post-job-btn\"><i class=\"fa fa-search-plus\"></i>{{btnText}}</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</nav><!-- Menus -->\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\n\t<section class=\"overlape\">\n\t\t<div class=\"block no-padding\">\n\t\t\t<div data-velocity=\"-.1\" class=\"parallax scrolly-invisible no-parallax\"></div>\n\t\t\t<div class=\"container fluid\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t<div class=\"inner-header\" style=\"padding-top:90px\" id=\"responsive-title\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<div class=\"block no-padding\">\n\t\t\t<div class=\"container\">\n\t\t\t\t <div class=\"row no-gape\">\n\t\t\t\t\t<div class=\"col-lg-1 column\"></div>\n\t\t\t\t\t<div class=\"col-lg-10 column\">\n\t\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-1 column\"></div>\n\t\t\t\t </div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<footer style=\"margin-top: 15px\">\n\t\t<div class=\"block\" style=\"padding-bottom: 0; padding-top: 25px\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-3 column\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<div class=\"about_widget\">\n\t\t\t\t\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.krow.network/\" target=\"_blank\" title=\"\">\n\t\t\t\t\t\t\t\t\t\t<!-- <img src=\"{{KROW_HEADER_2}}\" alt=\"\" /> -->\n\t\t\t\t\t\t\t\t\t\t<img src=\"http://placehold.it/178x40\" alt=\"Krow Network Logo\" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"social\">\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/KrowNetwork/\" \t\t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-facebook\"\t ></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://twitter.com/krownetwork\"                          target=\"_blank\" title=\"\"><i class=\"fa fa-twitter\" \t ></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.reddit.com/r/Krow/\" \t\t\t\t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-reddit\"  \t ></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.youtube.com/channel/UCmTgljCaCHkCPIbsE3IB4cA\" target=\"_blank\" title=\"\"><i class=\"fa fa-youtube\" \t ></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://github.com/KrowNetwork/krowsite\" \t\t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-github\"  \t ></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://medium.com/@krownetwork\"\t\t\t\t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-medium\" \t ></i></a>\n\t\t\t\t\t\t\t\t\t<!--TODO: Figure out, and add pics for the following -->\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.t.me/thekrownetwork\" \t\t\t\t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-telegram\"    ></i>T</a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://bitcointalk.org/index.php?topic=2891187.0\"        target=\"_blank\" title=\"\"><i class=\"fa fa-bitcointalk\" ></i>B</a>\n\t\t\t\t\t\t\t\t\t<a href=\"mailto:help@krow.network?Subject=Question\" \t\t\t   target=\"_blank\" title=\"\"><i class=\"fa fa-mail\"        ></i>M</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div><!-- About Widget -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6 column\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<h3 class=\"footer-title\">Frequently Asked Questions</h3>\n\t\t\t\t\t\t\t<div class=\"link_widgets\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">A</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">List</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Of</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Possible</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">FAQ</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Links</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-3 column\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<div class=\"download_widget\">\n\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\"><img src=\"http://placehold.it/230x65\" alt=\"\" /></a>\n\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\"><img src=\"http://placehold.it/230x65\" alt=\"\" /></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"bottom-line\">\n\t\t\t<span>© 2018 Jobhunt All rights reserved. Design by Creative Layers</span>\n\t\t\t<a class=\"scrollup\" title=\"\" id=\"my-cool-button\" (click)=\"scrollup()\" style=\"bottom: 12px; right: 12px\">\n\t\t\t\t<i class=\"la la-arrow-up\"></i>\n\t\t\t</a>\n\t\t</div>\n\t</footer>\n</div>"

/***/ }),

/***/ "./src/app/job/job-profile/job-profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/job/job-profile/job-profile.component.ts ***!
  \**********************************************************/
/*! exports provided: JobProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobProfileComponent", function() { return JobProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user-login.service */ "./src/app/service/user-login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobProfileComponent = /** @class */ (function () {
    function JobProfileComponent(router, userService, http) {
        this.router = router;
        this.userService = userService;
        this.http = http;
        this.x = undefined;
        this.userService.isAuthenticated(this);
        console.log("Job Component: constructor");
    }
    JobProfileComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        if (!isLoggedIn) {
            this.router.navigate(['/login']);
        }
    };
    JobProfileComponent.prototype.scrollup = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    JobProfileComponent.prototype.ngOnInit = function () {
        this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        this.x = this.confirmUserType();
        console.log(this.x);
        if (this.x.subscribe(this.x == this.user)) {
            this.btnText = "Find Job";
        }
    };
    JobProfileComponent.prototype.confirmUserType = function () {
        var _this = this;
        return this.http.head("http://18.220.46.51:3000/api/Applicant/" + this.user).pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            _this.x = res.json();
            return _this.x;
        }));
    };
    JobProfileComponent.prototype.goToProfile = function () {
        this.router.navigate([sessionStorage.getItem("accountType").toLowerCase() + "/profile-info"]);
    };
    JobProfileComponent.prototype.bigBtn = function () {
        if (this.btnText == "Find Job")
            this.router.navigate(["applicant/job-search"]);
        else
            this.router.navigate(["employer/post-job"]);
    };
    JobProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-profile',
            template: __webpack_require__(/*! ./job-profile.component.html */ "./src/app/job/job-profile/job-profile.component.html"),
            styles: [__webpack_require__(/*! ./job-profile.component.css */ "./src/app/job/job-profile/job-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], JobProfileComponent);
    return JobProfileComponent;
}());



/***/ }),

/***/ "./src/app/main/confirm/confirmRegistration.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/confirm/confirmRegistration.component.ts ***!
  \***************************************************************/
/*! exports provided: LogoutComponent, RegistrationConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationConfirmationComponent", function() { return RegistrationConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user-registration.service */ "./src/app/service/user-registration.service.ts");
/* harmony import */ var _service_user_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user-login.service */ "./src/app/service/user-login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.userService.isAuthenticated(this);
    }
    LogoutComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        if (isLoggedIn) {
            this.userService.logout();
            this.router.navigate(['/login']);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'awscognito-angular2-app',
            template: ''
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_user_login_service__WEBPACK_IMPORTED_MODULE_3__["UserLoginService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());

var RegistrationConfirmationComponent = /** @class */ (function () {
    function RegistrationConfirmationComponent(regService, router, route) {
        this.regService = regService;
        this.router = router;
        this.route = route;
        this.radioData = { type: "yeet" };
    }
    RegistrationConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.email = params['username'];
        });
        this.errorMessage = null;
    };
    RegistrationConfirmationComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    RegistrationConfirmationComponent.prototype.onConfirmRegistration = function () {
        if (this.email == "" || this.confirmationCode == "") {
            this.errorMessage = "Confirmation code is required";
            return;
        }
        this.errorMessage = null;
        console.log(this.radioData);
        this.regService.confirmRegistration(this.email, this.confirmationCode, this.radioData, this);
    };
    RegistrationConfirmationComponent.prototype.onSelectionChange = function (value) {
        this.radioData.type = value;
    };
    RegistrationConfirmationComponent.prototype.cognitoCallback = function (message, result) {
        if (message != null) {
            this.errorMessage = message;
            console.log("message: " + this.errorMessage);
        }
        else {
            /*
                VIVEK
            */
            // Pop-up dialog with user agreements then move to secureHome using the same 
            // syntax as bellow on agreed, else we can discuss what to do (disable clickOutsideToClose)
            // Implementation of AngularJS Material is up to you. Do mind,
            // this in context is RegistrationConfirmationComponent, 
            // router comes from the constructor public router: Router therefore is a property of this
            console.log("Moving to collect basic info");
            this.router.navigate(['/secureHome']);
        }
    };
    RegistrationConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'awscognito-angular2-app',
            template: __webpack_require__(/*! ./confirmRegistration.html */ "./src/app/main/confirm/confirmRegistration.html")
        }),
        __metadata("design:paramtypes", [_service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RegistrationConfirmationComponent);
    return RegistrationConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/main/confirm/confirmRegistration.html":
/*!*******************************************************!*\
  !*** ./src/app/main/confirm/confirmRegistration.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"block remove-bottom\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"account-popup-area signin-popup-box static\">\r\n                        <div class=\"account-popup\">\t\r\n                            <h1 style=\"color: #141f72; font-weight: 700\">Krow Network</h1>\t\r\n                            <h3>Confirm Registration</h3>\r\n                            <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\" style=\"color: #fb236a\">\r\n                                {{ errorMessage }}\r\n                            </div>\r\n                            <form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\r\n                                <div class=\"cfield\" *ngIf=\"email===null\">\r\n                                    <input id=\"email\" type=\"email\" placeholder=\"Email\" class=\"form-control\"\r\n                                            [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\">\r\n                                </div>\r\n                                <div class=\"cfield\">\r\n                                    <input id=\"confirmationCode\" type=\"text\" placeholder=\"Confirmation Code\" class=\"form-control\"\r\n                                            [(ngModel)]=\"confirmationCode\" [ngModelOptions]=\"{standalone: true}\">\r\n                                </div>\r\n                                <div class=\"radio\">\r\n                                        <input id=\"applicant\" required type=\"radio\" name=\"accType\" (change)=\"onSelectionChange('Applicant')\" value=\"applicant\"/>\r\n                                        <label for=\"applicant\">Applicant</label>\r\n                                        <input id=\"employer\" required type=\"radio\" name=\"accType\" (change)=\"onSelectionChange('Applicant')\" value=\"employer\"/>\r\n                                        <label for=\"employer\">Employer</label>\r\n                                    </div>\r\n                                <button (click)=\"onConfirmRegistration()\">\r\n                                    Confirm\r\n                                </button>\r\n                                <p>Can't find your code? \r\n                                    <a [routerLink]=\"['/resendCode']\"> <i class=\"fa fa-fw fa-group\"></i> Resend Code</a>\r\n                                </p>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/main/forgot/forgotPassword.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/forgot/forgotPassword.component.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordStep1Component, ForgotPassword2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordStep1Component", function() { return ForgotPasswordStep1Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassword2Component", function() { return ForgotPassword2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user-login.service */ "./src/app/service/user-login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordStep1Component = /** @class */ (function () {
    function ForgotPasswordStep1Component(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMessage = null;
    }
    ForgotPasswordStep1Component.prototype.onNext = function () {
        if (this.email == null) {
            this.errorMessage = "Please enter the account email!";
            return;
        }
        this.errorMessage = null;
        this.userService.forgotPassword(this.email, this);
    };
    ForgotPasswordStep1Component.prototype.cognitoCallback = function (message, result) {
        if (message == null && result == null) {
            this.router.navigate(['/forgotPassword', this.email]);
        }
        else {
            this.errorMessage = message;
        }
    };
    ForgotPasswordStep1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'awscognito-angular2-app',
            template: __webpack_require__(/*! ./forgotPassword.html */ "./src/app/main/forgot/forgotPassword.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]])
    ], ForgotPasswordStep1Component);
    return ForgotPasswordStep1Component;
}());

var ForgotPassword2Component = /** @class */ (function () {
    function ForgotPassword2Component(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        console.log("email from the url: " + this.email);
    }
    ForgotPassword2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.email = params['email'];
        });
        this.errorMessage = null;
    };
    ForgotPassword2Component.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ForgotPassword2Component.prototype.onNext = function () {
        if (this.verificationCode == "" || this.password == "" || this.confirmPassword == "") {
            this.errorMessage = "All fields are required";
            return;
        }
        if (this.password != this.confirmPassword) {
            this.errorMessage = "Passwords do not match!";
            return;
        }
        this.errorMessage = null;
        this.userService.confirmNewPassword(this.email, this.verificationCode, this.password, this);
    };
    ForgotPassword2Component.prototype.cognitoCallback = function (message) {
        if (message != null) {
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    ForgotPassword2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'awscognito-angular2-app',
            template: __webpack_require__(/*! ./forgotPasswordStep2.html */ "./src/app/main/forgot/forgotPasswordStep2.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]])
    ], ForgotPassword2Component);
    return ForgotPassword2Component;
}());



/***/ }),

/***/ "./src/app/main/forgot/forgotPassword.html":
/*!*************************************************!*\
  !*** ./src/app/main/forgot/forgotPassword.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"block remove-bottom\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"account-popup-area signin-popup-box static\">\r\n                        <div class=\"account-popup\">\t\t\r\n                            <h1 style=\"color: #fb236a\">Krow Network</h1>\t\r\n                            <h3>Forgotten Password</h3>\r\n                            <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\" style=\"color: #fb236a\">\r\n                                {{ errorMessage }}\r\n                            </div>\r\n                            <form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\r\n                                <h5>Enter Account Email:</h5>\r\n                                <div class=\"cfield\">\r\n                                    <input id=\"signupEmail\" required type=\"email\" placeholder=\"Email\" class=\"form-control\" \r\n                                        [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\">\r\n                                    <i class=\"la la-user\"></i>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <button (click)=\"onNext()\" id=\"nextPage\" type=\"submit\" class=\"btn btn-info btn-block\">Next\r\n                                    </button>\r\n                                </div>\r\n                            </form>\t\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/main/forgot/forgotPasswordStep2.html":
/*!******************************************************!*\
  !*** ./src/app/main/forgot/forgotPasswordStep2.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"block remove-bottom\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"account-popup-area signin-popup-box static\">\r\n                        <div class=\"account-popup\">\t\t\r\n                            <h1 style=\"color: #fb236a\">Krow Network</h1>\t\r\n                            <h3>Password Reset</h3>\r\n                            <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\" style=\"color: #fb236a\">\r\n                                {{ errorMessage }}\r\n                            </div>\r\n                            <form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\" autocomplete=\"off\">\r\n                                <div class=\"cfield\">\r\n                                    <input id=\"verificationCode\" required type=\"text\" placeholder=\"Verification Code\" class=\"form-control\" \r\n                                        [(ngModel)]=\"verificationCode\" [ngModelOptions]=\"{standalone: true}\">\r\n                                    <i class=\"la la-envelope\"></i>\r\n                                </div>\r\n                                <div class=\"cfield\">\r\n                                    <input id=\"newPassword\" required type=\"password\" placeholder=\"New ********\" class=\"form-control\" \r\n                                        [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\">\r\n                                    <i class=\"la la-key\"></i>\r\n                                </div>\r\n                                \r\n                                <div class=\"cfield\">\r\n                                    <input id=\"newPassword\" required type=\"password\" placeholder=\"Confirm ********\" class=\"form-control\" \r\n                                        [(ngModel)]=\"confirmPassword\" [ngModelOptions]=\"{standalone: true}\">\r\n                                    <i class=\"la la-key\"></i>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <button (click)=\"onNext()\" id=\"signupSubmit\" type=\"submit\" class=\"btn btn-info btn-block\">\r\n                                        Reset Password\r\n                                    </button>\r\n                                </div>\r\n                                <p>\r\n                                    <a [routerLink]=\"['/resendCode']\"><i class=\"fa fa-fw fa-group\"></i>Resend Code</a>\r\n                                </p>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user-login.service */ "./src/app/service/user-login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, userService, http) {
        this.router = router;
        this.userService = userService;
        this.http = http;
        console.log("Secure Home Component: constructor");
        this.userService.isAuthenticated(this);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        console.log(user);
        if (!user) {
            this.router.navigate(['/login']);
        }
        else {
            this.http.head("http://18.220.46.51:3000/api/Applicant/" + user).subscribe(function (data) {
                // console.log("User has an applicant account");
                sessionStorage.setItem("accountType", "applicant");
                _this.router.navigate(['/applicant']);
            });
            this.http.head("http://18.220.46.51:3000/api/Employer/" + user).subscribe(function (data) {
                // console.log("User has an applicant account");
                sessionStorage.setItem("accountType", "employer");
                _this.router.navigate(['/employer']);
            }); // Catch Errors
            this.user = user;
        }
    };
    HomeComponent.prototype.initializeApplicant = function () {
        var _this = this;
        sessionStorage.setItem("accountType", "Applicant");
        this.http.head("http://18.220.46.51:3000/api/Applicant/" + this.user).subscribe(function (data) {
            console.log("User has an applicant account");
            _this.router.navigate(['/applicant']);
        }, // Catch Errors
        function (err) {
            if (err === void 0) { err = _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]; }
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
            console.log("User does not have an applicant account");
            _this.router.navigate(['/basicInfo'], { queryParams: { as: "Applicant" } });
        });
    };
    HomeComponent.prototype.initializeEmployer = function () {
        var _this = this;
        sessionStorage.setItem("accountType", "Employer");
        this.http.head("http://18.220.46.51:3000/api/Employer/" + this.user).subscribe(function (data) {
            console.log("User has an employer account");
            _this.router.navigate(['/employer']);
        }, // Catch Errors
        function (err) {
            if (err === void 0) { err = _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]; }
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
            console.log("User does not have an employer account");
            _this.router.navigate(['/basicInfo'], { queryParams: { as: "Employer" } });
        });
    };
    HomeComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        if (!isLoggedIn) {
            this.router.navigate(['/login']);
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'awscognito-angular2-app',
            template: __webpack_require__(/*! ./home.html */ "./src/app/main/home/home.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/home/home.html":
/*!*************************************!*\
  !*** ./src/app/main/home/home.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"user!=''\">\r\n    <div class=\"block remove-bottom\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"account-popup-area signin-popup-box static\">\r\n                        <div class=\"account-popup\">\t\t\r\n                            <h1 style=\"color: #fb236a\">Welcome to the Krow Network Experience!</h1>\r\n                            <h4>Are you looking for a job?</h4>\r\n                            <div class=\"extra-login\" style=\"margin-top: 0; margin-bottom: 0;\">\r\n                                <span style=\"color: #141f72\">Or</span>\r\n                            </div>\r\n                            <h4 style = \"display: -webkit-inline-box; margin-top: 20px;\">Are you looking to hire?</h4>\r\n                            <form style=\"margin-top:0\">\r\n                                <h5>I am an...</h5>\r\n                                <button (click)=\"initializeApplicant()\">Applicant</button>\r\n                                <button (click)=\"initializeEmployer()\">Employer</button>\r\n                                <a [routerLink]=\"['/logout']\" title=\"\">Logout</a>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/main/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/main/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"block remove-bottom\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"account-popup-area signin-popup-box static\">\r\n                        <div class=\"account-popup\">\t\r\n                            <h1 style=\"color: #141f72; font-weight: 700\">Welcome to the Krow Network!</h1>\t\r\n                            <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\">\r\n                                <i class=\"la la-exclamation\"></i>\r\n                                {{ errorMessage }}\r\n                            </div>\t\r\n                            <form style=\"margin-top: 0\">\r\n                                <div class=\"cfield\">\r\n                                    <input id=\"signupEmail\" required type=\"email\" placeholder=\"Email\" class=\"form-control\" \r\n                                        [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\">\r\n                                    <i class=\"la la-envelope\"></i>\r\n                                </div>\r\n                                <div class=\"cfield\">                                \r\n                                    <input id=\"signupPassword\" required type=\"password\" placeholder=\"********\" class=\"form-control\"\r\n                                        [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\">\r\n                                    <i class=\"la la-key\"></i>\r\n                                </div>\r\n                                <button (click)=\"onLogin()\" style=\"margin-top: 0\">Login</button>\r\n                                <button [routerLink]=\"['/register']\">Register</button>\r\n                                <a [routerLink]=\"['/forgotPassword']\" title=\"\">Forgot Password?</a>\r\n                            </form>\r\n                            <div class=\"extra-login\">\r\n                                <span>Or (Coming Soon)</span>\r\n                                <div class=\"login-social\">\r\n                                    <a class=\"fb-login\" href=\"#\" title=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n                                    <a class=\"goo-login\" href=\"#\" title=\"\"><i class=\"fa fa-google\"></i></a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/main/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user-login.service */ "./src/app/service/user-login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.mfaStep = false;
        this.mfaData = {
            destination: '',
            callback: null
        };
        this.status = 'employer';
        console.log("Login Component: constructor");
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.errorMessage = null;
        console.log("Checking if the user is already authenticated. If so, then redirect to the secure site");
        this.userService.isAuthenticated(this);
    };
    LoginComponent.prototype.onLogin = function () {
        if (!this.email || !this.password) {
            this.errorMessage = "All fields are required";
            return;
        }
        else {
            this.errorMessage = null;
            this.userService.authenticate(this.email, this.password, this);
        }
    };
    LoginComponent.prototype.cognitoCallback = function (message, result) {
        if (message != null) {
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
            if (this.errorMessage === 'User is not confirmed.') {
                console.log("redirecting");
                this.router.navigate(['/confirmRegistration', this.email]);
            }
            else if (this.errorMessage === 'User needs to set password.') {
                console.log("redirecting to set new password");
                this.router.navigate(['/newPassword']);
            }
        }
        else {
            this.router.navigate(['/secureHome']);
        }
    };
    LoginComponent.prototype.handleMFAStep = function (challengeName, challengeParameters, callback) {
        var _this = this;
        this.mfaStep = true;
        this.mfaData.destination = challengeParameters.CODE_DELIVERY_DESTINATION;
        this.mfaData.callback = function (code) {
            if (code == null || code.length === 0) {
                _this.errorMessage = "Code is required";
                return;
            }
            _this.errorMessage = null;
            callback(code);
        };
    };
    LoginComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        if (isLoggedIn) {
            this.router.navigate(['/secureHome']);
        }
        else {
            this.router.navigate(['./login']);
        }
    };
    LoginComponent.prototype.cancelMFA = function () {
        this.mfaStep = false;
        return false; //necessary to prevent href navigation
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/main/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/newpassword/newpassword.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/newpassword/newpassword.component.ts ***!
  \***********************************************************/
/*! exports provided: NewPasswordUser, NewPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPasswordUser", function() { return NewPasswordUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPasswordComponent", function() { return NewPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user-registration.service */ "./src/app/service/user-registration.service.ts");
/* harmony import */ var _service_user_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/user-login.service */ "./src/app/service/user-login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewPasswordUser = /** @class */ (function () {
    function NewPasswordUser() {
    }
    return NewPasswordUser;
}());

/**
 * This component is responsible for displaying and controlling
 * the registration of the user.
 */
var NewPasswordComponent = /** @class */ (function () {
    function NewPasswordComponent(userRegistration, userService, router) {
        this.userRegistration = userRegistration;
        this.userService = userService;
        this.router = router;
        this.onInit();
    }
    NewPasswordComponent.prototype.onInit = function () {
        this.registrationUser = new NewPasswordUser();
        this.errorMessage = null;
    };
    NewPasswordComponent.prototype.ngOnInit = function () {
        this.errorMessage = null;
        console.log("Checking if the user is already authenticated. If so, then redirect to the secure site");
        this.userService.isAuthenticated(this);
    };
    NewPasswordComponent.prototype.onRegister = function () {
        if (this.registrationUser.username == "" || this.registrationUser.password == "" || this.registrationUser.existingPassword == "") {
            this.errorMessage = "All fields are required";
            return;
        }
        console.log(this.registrationUser);
        this.errorMessage = null;
        this.userRegistration.newPassword(this.registrationUser, this);
    };
    NewPasswordComponent.prototype.cognitoCallback = function (message, result) {
        if (message != null) {
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
        }
        else {
            //move to the next step
            console.log("redirecting");
            this.router.navigate(['/securehome']);
        }
    };
    NewPasswordComponent.prototype.isLoggedIn = function (message, isLoggedIn) {
        if (isLoggedIn)
            this.router.navigate(['/securehome']);
    };
    NewPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'awscognito-angular2-app',
            template: __webpack_require__(/*! ./newpassword.html */ "./src/app/main/newpassword/newpassword.html")
        }),
        __metadata("design:paramtypes", [_service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"], _service_user_login_service__WEBPACK_IMPORTED_MODULE_3__["UserLoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewPasswordComponent);
    return NewPasswordComponent;
}());



/***/ }),

/***/ "./src/app/main/newpassword/newpassword.html":
/*!***************************************************!*\
  !*** ./src/app/main/newpassword/newpassword.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"block remove-bottom\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"account-popup-area signin-popup-box static\">\r\n                        <div class=\"account-popup\">\t\r\n                            <h1 style=\"color: #fb236a\">Krow Network</h1>\t\r\n                            <h3>New Password</h3>\r\n                            <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\" style=\"color: #fb236a\">\r\n                                {{ errorMessage }}\r\n                            </div>\r\n                            <form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\r\n                                <div class=\"cfield\">\r\n                                    <input id=\"signupEmail\" type=\"email\" class=\"form-control\" placeholder=\"Email\"\r\n                                            [(ngModel)]=\"registrationUser.username\" [ngModelOptions]=\"{standalone: true}\">\r\n                                </div>\r\n                                <div class=\"cfield\">\r\n                                    <input id=\"existingPassword\" type=\"password\" class=\"form-control\" placeholder=\"********\" \r\n                                            [(ngModel)]=\"registrationUser.existingPassword\" [ngModelOptions]=\"{standalone: true}\">\r\n                                </div>\r\n                                <div class=\"cfield\">\r\n                                    <input id=\"signupPassword\" type=\"password\" class=\"form-control\" placeholder=\"********\" \r\n                                            [(ngModel)]=\"registrationUser.password\" [ngModelOptions]=\"{standalone: true}\">\r\n                                </div>\r\n                                <button (click)=\"onRegister()\">\r\n                                    Set your password\r\n                                </button>\r\n                                <p>Already have an account? <a [routerLink]=\"['/login']\"> <i class=\"fa fa-fw fa-lock\"></i>Login</a></p>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/main/page-not-found/page-not-found.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/page-not-found/page-not-found.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"theme-layout\" id=\"scrollup\">\r\n\t<section>\r\n\t\t<div class=\"block no-padding\">\r\n\t\t\t<div class=\"container fluid\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t<div class=\"main-featured-sec witherror\">\r\n\t\t\t\t\t\t\t<ul class=\"main-slider-sec text-arrows\">\r\n\t\t\t\t\t\t\t\t<!-- TODO: Get svg image and disable overflow -->\r\n\t\t\t\t\t\t\t\t<li><img src=\"http://placehold.it/1600x800\" alt=\"\" /></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t<div class=\"error-sec\" style=\"top: 50%\">\r\n\t\t\t\t\t\t\t\t<img src=\"{{PNFIMAGE}}\" alt=\"\" />\r\n\t\t\t\t\t\t\t\t<span>We Are Sorry, Page Not Found</span>\r\n\t\t\t\t\t\t\t\t<p>Unfortunately the page you were looking for could not be found. It may be temporarily unavailable, moved or no longer exist. Check the Url you entered for any mistakes and try again.</p>\r\n\t\t\t\t\t\t\t\t<h6><a href=\"#\" title=\"\">Back To Homepage</a></h6>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n</div>"

/***/ }),

/***/ "./src/app/main/page-not-found/page-not-found.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
        this.PNFIMAGE = __webpack_require__(/*! ../../../images/404.png */ "./src/images/404.png");
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/main/page-not-found/page-not-found.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/main/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/main/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"block remove-bottom\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"account-popup-area signin-popup-box static\">\r\n                        <div class=\"account-popup\">\t\r\n                            <h1 style=\"color: #fb236a\">Welcome to the Krow Network!</h1>\t\r\n                            <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\" style=\"color: #fb236a\">\r\n                                {{ errorMessage }}\r\n                            </div>\t\r\n                            <form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\r\n                                <div class=\"cfield\">\r\n                                    <input id=\"signupEmail\" required type=\"email\" placeholder=\"Email\" class=\"form-control\" \r\n                                        [(ngModel)]=\"registrationUser.email\" [ngModelOptions]=\"{standalone: true}\">\r\n                                    <i class=\"la la-envelope\"></i>\r\n                                </div>\r\n                                <div class=\"cfield\">                                \r\n                                    <input id=\"signupPassword\" required type=\"password\" placeholder=\"********\" class=\"form-control\"\r\n                                        [(ngModel)]=\"registrationUser.password\" [ngModelOptions]=\"{standalone: true}\">\r\n                                    <i class=\"la la-key\"></i>\r\n                                </div>\r\n                                <div class=\"cfield\">                                \r\n                                    <input id=\"confirmPassword\" required type=\"password\" placeholder=\"Confirm ********\" class=\"form-control\"\r\n                                        [(ngModel)]=\"confirmPassword\" [ngModelOptions]=\"{standalone: true}\">\r\n                                    <i class=\"la la-key\"></i>\r\n                                </div>\r\n                                \r\n                                <button (click)=\"onRegister()\">\r\n                                      Create your account\r\n                                </button>\r\n                                <p>Already have an account? <a [routerLink]=\"['/login']\"> <i class=\"fa fa-fw fa-lock\"></i>Login</a></p>\r\n                            </form>\t\r\n                            <div class=\"extra-login\">\r\n                                <span>Or (Coming Soon!)</span>\r\n                                <div class=\"login-social\">\r\n                                    <a class=\"fb-login\" href=\"#\" title=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n                                    <a class=\"goo-login\" href=\"#\" title=\"\"><i class=\"fa fa-google\"></i></a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/main/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegistrationUser, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationUser", function() { return RegistrationUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user-registration.service */ "./src/app/service/user-registration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationUser = /** @class */ (function () {
    function RegistrationUser() {
    }
    return RegistrationUser;
}());

/**
 * This component is responsible for displaying and controlling
 * the registration of the user.
 */
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userRegistration, router) {
        this.userRegistration = userRegistration;
        this.router = router;
        this.onInit();
    }
    RegisterComponent.prototype.onInit = function () {
        this.registrationUser = new RegistrationUser();
        this.errorMessage = null;
    };
    RegisterComponent.prototype.onRegister = function () {
        if (this.registrationUser.email == "" || this.registrationUser.password == "" || this.confirmPassword == "") {
            this.errorMessage = "All fields are required";
            return;
        }
        if (this.registrationUser.password != this.confirmPassword) {
            this.errorMessage = "Passwords don't match";
            return;
        }
        this.errorMessage = null;
        this.userRegistration.register(this.registrationUser, this);
    };
    RegisterComponent.prototype.cognitoCallback = function (message, result) {
        if (message != null) {
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
        }
        else {
            //move to the next step
            console.log("redirecting");
            this.router.navigate(['/confirmRegistration', result.user.username]);
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/main/register/register.component.html")
        }),
        __metadata("design:paramtypes", [_service_user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/main/resend/resendCode.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/resend/resendCode.component.ts ***!
  \*****************************************************/
/*! exports provided: ResendCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResendCodeComponent", function() { return ResendCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_registration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/user-registration.service */ "./src/app/service/user-registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResendCodeComponent = /** @class */ (function () {
    function ResendCodeComponent(registrationService, router) {
        this.registrationService = registrationService;
        this.router = router;
    }
    ResendCodeComponent.prototype.resendCode = function () {
        if (this.email == "") {
            this.errorMessage = "Email field is required";
            return;
        }
        this.registrationService.resendCode(this.email, this);
    };
    ResendCodeComponent.prototype.cognitoCallback = function (error, result) {
        if (error != null) {
            this.errorMessage = "Something went wrong...please try again";
        }
        else {
            this.router.navigate(['/confirmRegistration', this.email]);
        }
    };
    ResendCodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'awscognito-angular2-app',
            template: __webpack_require__(/*! ./resendCode.html */ "./src/app/main/resend/resendCode.html")
        }),
        __metadata("design:paramtypes", [_service_user_registration_service__WEBPACK_IMPORTED_MODULE_1__["UserRegistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ResendCodeComponent);
    return ResendCodeComponent;
}());



/***/ }),

/***/ "./src/app/main/resend/resendCode.html":
/*!*********************************************!*\
  !*** ./src/app/main/resend/resendCode.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"block remove-bottom\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"account-popup-area signin-popup-box static\">\r\n                        <div class=\"account-popup\">\r\n                            <h1 style=\"color: #fb236a\">Krow Network</h1>\t\r\n                            <h3>Resend Code</h3>\r\n                            <form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\r\n                                <h5>Enter Account Email:</h5>\r\n                                <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\" style=\"color: #fb236a\">\r\n                                    {{ errorMessage }}\r\n                                </div>\r\n                                <div class=\"cfield\">\r\n                                    <input id=\"signupEmail\" type=\"email\" placeholder=\"Email\" class=\"form-control\" \r\n                                            [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\">\r\n                                </div>\r\n                                <button (click)=\"resendCode()\">\r\n                                    Resend Code\r\n                                </button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/service/aws.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/aws.service.ts ***!
  \****************************************/
/*! exports provided: AwsUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwsUtil", function() { return AwsUtil; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cognito_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cognito.service */ "./src/app/service/cognito.service.ts");
/* harmony import */ var aws_sdk_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-sdk/global */ "./node_modules/aws-sdk/browser.js");
/* harmony import */ var aws_sdk_global__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_global__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AwsUtil = /** @class */ (function () {
    function AwsUtil(cognitoUtil) {
        this.cognitoUtil = cognitoUtil;
        aws_sdk_global__WEBPACK_IMPORTED_MODULE_2__["config"].region = _cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]._REGION;
    }
    AwsUtil_1 = AwsUtil;
    /**
     * This is the method that needs to be called in order to init the aws global creds
     */
    AwsUtil.prototype.initAwsService = function (callback, isLoggedIn, idToken) {
        if (AwsUtil_1.runningInit) {
            // Need to make sure I don't get into an infinite loop here, so need to exit if this method is running already
            console.log("AwsUtil: Aborting running initAwsService()...it's running already.");
            // instead of aborting here, it's best to put a timer
            if (callback != null) {
                callback.callback();
                callback.callbackWithParam(null);
            }
            return;
        }
        console.log("AwsUtil: Running initAwsService()");
        AwsUtil_1.runningInit = true;
        var mythis = this;
        // First check if the user is authenticated already
        if (isLoggedIn)
            mythis.setupAWS(isLoggedIn, callback, idToken);
    };
    /**
     * Sets up the AWS global params
     *
     * @param isLoggedIn
     * @param callback
     */
    AwsUtil.prototype.setupAWS = function (isLoggedIn, callback, idToken) {
        console.log("AwsUtil: in setupAWS()");
        if (isLoggedIn) {
            console.log("AwsUtil: User is logged in");
            // Setup mobile analytics
            var options = {
                appId: '32673c035a0b40e99d6e1f327be0cb60',
                appTitle: "aws-cognito-angular2-quickstart"
            };
            // var options = {
            //     appId: '2qoli7lchurj7h3uvhtfcsfqk2',
            //     appTitle: "krow-client"
            // };
            // TODO: The mobile Analytics client needs some work to handle Typescript. Disabling for the time being.
            // var mobileAnalyticsClient = new AMA.Manager(options);
            // mobileAnalyticsClient.submitEvents();
            this.addCognitoCredentials(idToken);
            console.log("AwsUtil: Retrieving the id token");
        }
        else {
            console.log("AwsUtil: User is not logged in");
        }
        if (callback != null) {
            callback.callback();
            callback.callbackWithParam(null);
        }
        AwsUtil_1.runningInit = false;
    };
    AwsUtil.prototype.addCognitoCredentials = function (idTokenJwt) {
        var creds = this.cognitoUtil.buildCognitoCreds(idTokenJwt);
        aws_sdk_global__WEBPACK_IMPORTED_MODULE_2__["config"].credentials = creds;
        creds.get(function (err) {
            if (!err) {
                if (AwsUtil_1.firstLogin) {
                    // save the login info to DDB
                    this.ddb.writeLogEntry("login");
                    AwsUtil_1.firstLogin = false;
                }
            }
        });
    };
    AwsUtil.getCognitoParametersForIdConsolidation = function (idTokenJwt) {
        console.log("AwsUtil: enter getCognitoParametersForIdConsolidation()");
        var url = 'cognito-idp.' + _cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]._REGION.toLowerCase() + '.amazonaws.com/' + _cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]._USER_POOL_ID;
        var logins = [];
        logins[url] = idTokenJwt;
        var params = {
            IdentityPoolId: _cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]._IDENTITY_POOL_ID,
            Logins: logins
        };
        return params;
    };
    AwsUtil.firstLogin = false;
    AwsUtil.runningInit = false;
    AwsUtil = AwsUtil_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]])
    ], AwsUtil);
    return AwsUtil;
    var AwsUtil_1;
}());



/***/ }),

/***/ "./src/app/service/cognito.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/cognito.service.ts ***!
  \********************************************/
/*! exports provided: CognitoUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CognitoUtil", function() { return CognitoUtil; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amazon-cognito-identity-js */ "./node_modules/amazon-cognito-identity-js/es/index.js");
/* harmony import */ var aws_sdk_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-sdk/global */ "./node_modules/aws-sdk/browser.js");
/* harmony import */ var aws_sdk_global__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_global__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CognitoUtil = /** @class */ (function () {
    function CognitoUtil() {
    }
    CognitoUtil_1 = CognitoUtil;
    CognitoUtil.prototype.getUserPool = function () {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cognito_idp_endpoint) {
            CognitoUtil_1._POOL_DATA.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cognito_idp_endpoint;
        }
        return new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserPool"](CognitoUtil_1._POOL_DATA);
    };
    CognitoUtil.prototype.getCurrentUser = function () {
        return this.getUserPool().getCurrentUser();
    };
    // AWS Stores Credentials in many ways, and with TypeScript this means that
    // getting the base credentials we authenticated with from the AWS globals gets really murky,
    // having to get around both class extension and unions. Therefore, we're going to give
    // developers direct access to the raw, unadulterated CognitoIdentityCredentials
    // object at all times.
    CognitoUtil.prototype.setCognitoCreds = function (creds) {
        this.cognitoCreds = creds;
    };
    CognitoUtil.prototype.getCognitoCreds = function () {
        return this.cognitoCreds;
    };
    // This method takes in a raw jwtToken and uses the global AWS config options to build a
    // CognitoIdentityCredentials object and store it for us. It also returns the object to the caller
    // to avoid unnecessary calls to setCognitoCreds.
    CognitoUtil.prototype.buildCognitoCreds = function (idTokenJwt) {
        var url = 'cognito-idp.' + CognitoUtil_1._REGION.toLowerCase() + '.amazonaws.com/' + CognitoUtil_1._USER_POOL_ID;
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cognito_idp_endpoint) {
            url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cognito_idp_endpoint + '/' + CognitoUtil_1._USER_POOL_ID;
        }
        var logins = {};
        logins[url] = idTokenJwt;
        var params = {
            IdentityPoolId: CognitoUtil_1._IDENTITY_POOL_ID,
            Logins: logins
        };
        var serviceConfigs = {};
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cognito_identity_endpoint) {
            serviceConfigs.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cognito_identity_endpoint;
        }
        var creds = new aws_sdk_global__WEBPACK_IMPORTED_MODULE_3__["CognitoIdentityCredentials"](params, serviceConfigs);
        this.setCognitoCreds(creds);
        return creds;
    };
    CognitoUtil.prototype.getCognitoIdentity = function () {
        return this.cognitoCreds.identityId;
    };
    CognitoUtil.prototype.getAccessToken = function (callback) {
        if (callback == null) {
            throw ("CognitoUtil: callback in getAccessToken is null...returning");
        }
        if (this.getCurrentUser() != null) {
            this.getCurrentUser().getSession(function (err, session) {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials:" + err);
                    callback.callbackWithParam(null);
                }
                else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getAccessToken().getJwtToken());
                    }
                }
            });
        }
        else {
            callback.callbackWithParam(null);
        }
    };
    CognitoUtil.prototype.getIdToken = function (callback) {
        if (callback == null) {
            throw ("CognitoUtil: callback in getIdToken is null...returning");
        }
        if (this.getCurrentUser() != null)
            this.getCurrentUser().getSession(function (err, session) {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials:" + err);
                    callback.callbackWithParam(null);
                }
                else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getIdToken().getJwtToken());
                    }
                    else {
                        console.log("CognitoUtil: Got the id token, but the session isn't valid");
                    }
                }
            });
        else
            callback.callbackWithParam(null);
    };
    CognitoUtil.prototype.getRefreshToken = function (callback) {
        if (callback == null) {
            throw ("CognitoUtil: callback in getRefreshToken is null...returning");
        }
        if (this.getCurrentUser() != null)
            this.getCurrentUser().getSession(function (err, session) {
                if (err) {
                    console.log("CognitoUtil: Can't set the credentials:" + err);
                    callback.callbackWithParam(null);
                }
                else {
                    if (session.isValid()) {
                        callback.callbackWithParam(session.getRefreshToken());
                    }
                }
            });
        else
            callback.callbackWithParam(null);
    };
    CognitoUtil.prototype.refresh = function () {
        this.getCurrentUser().getSession(function (err, session) {
            if (err) {
                console.log("CognitoUtil: Can't set the credentials:" + err);
            }
            else {
                if (session.isValid()) {
                    console.log("CognitoUtil: refreshed successfully");
                }
                else {
                    console.log("CognitoUtil: refreshed but session is still not valid");
                }
            }
        });
    };
    CognitoUtil._REGION = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].region;
    CognitoUtil._IDENTITY_POOL_ID = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].identityPoolId;
    CognitoUtil._USER_POOL_ID = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].userPoolId;
    CognitoUtil._CLIENT_ID = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clientId;
    CognitoUtil._POOL_DATA = {
        UserPoolId: CognitoUtil_1._USER_POOL_ID,
        ClientId: CognitoUtil_1._CLIENT_ID
    };
    CognitoUtil = CognitoUtil_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CognitoUtil);
    return CognitoUtil;
    var CognitoUtil_1;
}());



/***/ }),

/***/ "./src/app/service/create-user.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/create-user.service.ts ***!
  \************************************************/
/*! exports provided: CreateUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserService", function() { return CreateUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateUserService = /** @class */ (function () {
    function CreateUserService(http) {
        this.http = http;
    }
    CreateUserService.prototype.createUserApplicantObj = function (userObj) {
        var obj = new Object();
        obj["$class"] = "network.krow.participants.Applicant";
        obj["applicantID"] = userObj.user;
        obj["firstName"] = userObj.first;
        obj["lastName"] = userObj.second;
        obj["resume"] = (_a = {},
            _a["$class"] = "network.krow.resume.Resume",
            _a["education"] = [],
            _a["skills"] = [],
            _a["experience"] = [],
            _a["achievements"] = [],
            _a["affiliations"] = [],
            _a["biography"] = "",
            _a["lastUpdated"] = new Date(),
            _a);
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
        var _a;
    };
    CreateUserService.prototype.createUserEmployerObj = function (userObj) {
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
    };
    CreateUserService.prototype.initializeUser = function (userObj, intent, callback, router) {
        console.log("Initializing a new " + intent + " user with id = " + userObj.user);
        var obj = new Object();
        if (intent == "Applicant") {
            obj = this.createUserApplicantObj(userObj);
        }
        else if (intent == "Employer") {
            obj = this.createUserEmployerObj(userObj);
        }
        var url = "http://18.220.46.51:3000/api/" + intent;
        console.log(intent.toLowerCase());
        this.http.post(url, obj).subscribe(function (data) {
            console.log(intent + " account sucessfuly initialized for user " + userObj.user);
            callback(intent.toLowerCase(), userObj.user, router);
        }, // Catch Errors
        function (err) {
            if (err === void 0) { err = _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]; }
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
            console.log(err);
        });
    };
    CreateUserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CreateUserService);
    return CreateUserService;
}());



/***/ }),

/***/ "./src/app/service/update-resume.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/update-resume.service.ts ***!
  \**************************************************/
/*! exports provided: UpdateResumeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateResumeService", function() { return UpdateResumeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var UpdateResumeService = /** @class */ (function () {
    function UpdateResumeService(http) {
        this.http = http;
    }
    UpdateResumeService.prototype.updateMain = function (dom) {
        return __awaiter(this, void 0, void 0, function () {
            var currAttribute, componentsList, updateButton, json, i, currentComponent, existsEmpty, componentInputs, currJson, itemClass, k, input, value, currType, j, currentComponent, node;
            return __generator(this, function (_a) {
                currAttribute = dom.localName.slice(11);
                componentsList = dom.children[0].children[0].children;
                updateButton = dom.children[0].children[1].children[1];
                json = { data: [] };
                for (i = 0; i < componentsList.length; i++) {
                    currentComponent = componentsList[i].children[0].children[0];
                    if (currentComponent.tagName != 'DIV') {
                        existsEmpty = false;
                        componentInputs = currentComponent.children[1].children[0].children[1].children[0].children;
                        currJson = [];
                        itemClass = "network.krow.resume." + currAttribute[0].toUpperCase() + currAttribute.slice(1);
                        if (itemClass.slice(-1) == 's') {
                            itemClass = itemClass.slice(0, -1);
                        }
                        currJson.push({ type: "$class", value: itemClass });
                        for (k = 0; k < componentInputs.length; k++) {
                            input = componentInputs[k].children[1].children[0];
                            value = input.value;
                            if (value == "") {
                                input.setAttribute("style", "background-color: #ff4757; -webkit-text-fill-color: #fff");
                                input.addEventListener("keydown", function (input) {
                                    input.target.setAttribute("style", "background-color: #fff; -webkit-text-fill-color: #101010");
                                });
                                existsEmpty = true;
                                updateButton.innerText = "UPDATE";
                            }
                            else {
                                currType = input.attributes[1].value;
                                if (currAttribute == "experience" && currType == "type") {
                                    value = "PROFESSIONALWORK";
                                }
                                currJson.push({
                                    type: currType,
                                    value: value
                                });
                            }
                        }
                        if (existsEmpty != true) {
                            json.data.push(currJson);
                        }
                        else {
                            return [2 /*return*/];
                        }
                    }
                    if (i == componentsList.length - 1) {
                        this.updateData(updateButton, json, currAttribute);
                    }
                }
                for (j = 0; j < componentsList.length; j++) {
                    currentComponent = componentsList[j].children[0].children[0];
                    if (currentComponent.tagName == 'DIV') {
                        if (j == componentsList.length) {
                            node = document.createElement("ng-template");
                            componentsList[j].parentNode.appendChild(node);
                            componentsList[j].parentNode.removeChild(componentsList[j]);
                        }
                        else {
                            componentsList[j].parentNode.removeChild(componentsList[j]);
                            j -= 1;
                        }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    UpdateResumeService.prototype.updateData = function (updateButton, jsonData, attribute) {
        var _this = this;
        updateButton.style.pointerEvents = 'none';
        updateButton.innerText = "Updating...";
        this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        var url = "http://18.220.46.51:3000/api/Applicant/" + this.user;
        this.http.get(url).subscribe(function (data) {
            if (attribute == "skills") {
                data["resume"][attribute] = [];
                jsonData.forEach(function (element) {
                    data["resume"][attribute].push(element);
                });
            }
            else {
                var newData = new Array();
                for (var i = 0; i < jsonData.data.length; i++) {
                    var dataInstance = jsonData.data[i];
                    var currObj = new Object();
                    for (var k = 0; k < dataInstance.length; k++) {
                        currObj[dataInstance[k].type] = dataInstance[k].value;
                    }
                    newData.push(currObj);
                }
                data["resume"][attribute] = [];
                newData.forEach(function (element) {
                    data["resume"][attribute].push(element);
                });
            }
            // Get timestamp and change data timestamp
            var timestamp = new Date();
            data["lastUpdated"] = timestamp;
            data["resume"]["lastUpdated"] = timestamp;
            _this.postData(data, url, updateButton);
        }, // Catch Errors
        function (err) {
            alert("Could not get data!");
            updateButton.innerText = "UPDATE";
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
        });
    };
    UpdateResumeService.prototype.postData = function (data, url, updateButton) {
        console.log("Posting Data");
        // Update entry
        this.http.put(url, data).subscribe(function (data) {
            updateButton.setAttribute("style", "display: none");
            updateButton.innerText = "UPDATE";
            updateButton.style.pointerEvents = 'auto';
        }, // Catch Errors
        function (err) {
            alert("Could not post data!");
            updateButton.innerText = "UPDATE";
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
        });
    };
    UpdateResumeService.prototype.updateSkills = function (dom) {
        var attribute = "skills";
        var updateButton = dom.children[0].children[1].children[0];
        var objArray = [];
        var childrenElements = dom.children[0].children[0].children[0].children[0].children;
        for (var i = 0; i < childrenElements.length - 1; i++) {
            var currentElementValue = childrenElements[i].children[1].value;
            var obj = (_a = {},
                _a["$class"] = "network.krow.resume.Skill",
                _a["skill"] = currentElementValue,
                _a);
            objArray.push(obj);
        }
        this.updateData(updateButton, objArray, attribute);
        var _a;
    };
    UpdateResumeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UpdateResumeService);
    return UpdateResumeService;
}());



/***/ }),

/***/ "./src/app/service/user-login.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/user-login.service.ts ***!
  \***********************************************/
/*! exports provided: UserLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginService", function() { return UserLoginService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cognito_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cognito.service */ "./src/app/service/cognito.service.ts");
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! amazon-cognito-identity-js */ "./node_modules/amazon-cognito-identity-js/es/index.js");
/* harmony import */ var aws_sdk_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-sdk/global */ "./node_modules/aws-sdk/browser.js");
/* harmony import */ var aws_sdk_global__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_global__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var aws_sdk_clients_sts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aws-sdk/clients/sts */ "./node_modules/aws-sdk/clients/sts.js");
/* harmony import */ var aws_sdk_clients_sts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_sts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserLoginService = /** @class */ (function () {
    function UserLoginService(cognitoUtil, http) {
        var _this = this;
        this.cognitoUtil = cognitoUtil;
        this.http = http;
        this.onLoginSuccess = function (callback, session) {
            console.log("In authenticateUser onSuccess callback");
            aws_sdk_global__WEBPACK_IMPORTED_MODULE_4__["config"].credentials = _this.cognitoUtil.buildCognitoCreds(session.getIdToken().getJwtToken());
            // So, when CognitoIdentity authenticates a user, it doesn't actually hand us the IdentityID,
            // used by many of our other handlers. This is handled by some sly underhanded calls to AWS Cognito
            // API's by the SDK itself, automatically when the first AWS SDK request is made that requires our
            // security credentials. The identity is then injected directly into the credentials object.
            // If the first SDK call we make wants to use our IdentityID, we have a
            // chicken and egg problem on our hands. We resolve this problem by "priming" the AWS SDK by calling a
            // very innocuous API call that forces this behavior.
            var clientParams = {};
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].sts_endpoint) {
                clientParams.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].sts_endpoint;
            }
            var sts = new aws_sdk_clients_sts__WEBPACK_IMPORTED_MODULE_5__(clientParams);
            sts.getCallerIdentity(function (err, data) {
                console.log("UserLoginService: Successfully set the AWS credentials");
                callback.cognitoCallback(null, session);
            });
        };
        this.onLoginError = function (callback, err) {
            callback.cognitoCallback(err.message, null);
        };
    }
    UserLoginService.prototype.authenticate = function (username, password, callback) {
        var _this = this;
        console.log("UserLoginService: starting the authentication");
        var authenticationData = {
            Username: username,
            Password: password,
        };
        var authenticationDetails = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_3__["AuthenticationDetails"](authenticationData);
        var userData = {
            Username: username,
            Pool: this.cognitoUtil.getUserPool()
        };
        console.log("UserLoginService: Params set...Authenticating the user");
        var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_3__["CognitoUser"](userData);
        console.log("UserLoginService: config is " + aws_sdk_global__WEBPACK_IMPORTED_MODULE_4__["config"]);
        cognitoUser.authenticateUser(authenticationDetails, {
            newPasswordRequired: function (userAttributes, requiredAttributes) { return callback.cognitoCallback("User needs to set password.", null); },
            onSuccess: function (result) { return _this.onLoginSuccess(callback, result); },
            onFailure: function (err) { return _this.onLoginError(callback, err); },
            mfaRequired: function (challengeName, challengeParameters) {
                callback.handleMFAStep(challengeName, challengeParameters, function (confirmationCode) {
                    cognitoUser.sendMFACode(confirmationCode, {
                        onSuccess: function (result) { return _this.onLoginSuccess(callback, result); },
                        onFailure: function (err) { return _this.onLoginError(callback, err); }
                    });
                });
            }
        });
    };
    UserLoginService.prototype.forgotPassword = function (username, callback) {
        var userData = {
            Username: username,
            Pool: this.cognitoUtil.getUserPool()
        };
        var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_3__["CognitoUser"](userData);
        cognitoUser.forgotPassword({
            onSuccess: function () {
            },
            onFailure: function (err) {
                callback.cognitoCallback(err.message, null);
            },
            inputVerificationCode: function () {
                callback.cognitoCallback(null, null);
            }
        });
    };
    UserLoginService.prototype.confirmNewPassword = function (email, verificationCode, password, callback) {
        var userData = {
            Username: email,
            Pool: this.cognitoUtil.getUserPool()
        };
        var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_3__["CognitoUser"](userData);
        cognitoUser.confirmPassword(verificationCode, password, {
            onSuccess: function () {
                callback.cognitoCallback(null, null);
            },
            onFailure: function (err) {
                callback.cognitoCallback(err.message, null);
            }
        });
    };
    UserLoginService.prototype.logout = function () {
        console.log("UserLoginService: Logging out");
        this.cognitoUtil.getCurrentUser().signOut();
    };
    UserLoginService.prototype.isAuthenticated = function (callback) {
        if (callback == null)
            throw ("UserLoginService: Callback in isAuthenticated() cannot be null");
        var cognitoUser = this.cognitoUtil.getCurrentUser();
        if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
                if (err) {
                    console.log("UserLoginService: Couldn't get the session: " + err, err.stack);
                    callback.isLoggedIn(err, false);
                }
                else {
                    console.log("UserLoginService: Session is " + session.isValid());
                    callback.isLoggedIn(err, session.isValid());
                }
            });
        }
        else {
            console.log("UserLoginService: can't retrieve the current user");
            callback.isLoggedIn("Can't retrieve the CurrentUser", false);
        }
    };
    UserLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_cognito_service__WEBPACK_IMPORTED_MODULE_2__["CognitoUtil"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], UserLoginService);
    return UserLoginService;
}());



/***/ }),

/***/ "./src/app/service/user-parameters.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/user-parameters.service.ts ***!
  \****************************************************/
/*! exports provided: UserParametersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserParametersService", function() { return UserParametersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cognito_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cognito.service */ "./src/app/service/cognito.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserParametersService = /** @class */ (function () {
    function UserParametersService(cognitoUtil) {
        this.cognitoUtil = cognitoUtil;
    }
    UserParametersService.prototype.getParameters = function (callback) {
        var cognitoUser = this.cognitoUtil.getCurrentUser();
        if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
                if (err)
                    console.log("UserParametersService: Couldn't retrieve the user");
                else {
                    cognitoUser.getUserAttributes(function (err, result) {
                        if (err) {
                            console.log("UserParametersService: in getParameters: " + err);
                        }
                        else {
                            callback.callbackWithParam(result);
                        }
                    });
                }
            });
        }
        else {
            callback.callbackWithParam(null);
        }
    };
    UserParametersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"]])
    ], UserParametersService);
    return UserParametersService;
}());



/***/ }),

/***/ "./src/app/service/user-registration.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/user-registration.service.ts ***!
  \******************************************************/
/*! exports provided: UserRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationService", function() { return UserRegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cognito_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cognito.service */ "./src/app/service/cognito.service.ts");
/* harmony import */ var amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amazon-cognito-identity-js */ "./node_modules/amazon-cognito-identity-js/es/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var aws_sdk_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-sdk/global */ "./node_modules/aws-sdk/browser.js");
/* harmony import */ var aws_sdk_global__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_global__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var UserRegistrationService = /** @class */ (function () {
    function UserRegistrationService(cognitoUtil, router) {
        this.cognitoUtil = cognitoUtil;
        this.router = router;
    }
    UserRegistrationService.prototype.register = function (user, callback) {
        console.log("UserRegistrationService: user is " + user);
        var attributeList = [];
        var dataEmail = {
            Name: 'email',
            Value: user.email
        };
        var dataNickname = {
            Name: 'nickname',
            Value: user.name
        };
        attributeList.push(new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserAttribute"](dataEmail));
        attributeList.push(new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserAttribute"](dataNickname));
        attributeList.push(new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUserAttribute"]({
            Name: 'phone_number',
            Value: user.phone_number
        }));
        this.cognitoUtil.getUserPool().signUp(user.email, user.password, attributeList, null, function (err, result) {
            if (err) {
                callback.cognitoCallback(err.message, null);
            }
            else {
                console.log("UserRegistrationService: registered user is " + result);
                callback.cognitoCallback(null, result);
            }
        });
    };
    UserRegistrationService.prototype.confirmRegistration = function (username, confirmationCode, accountType, callback) {
        var userData = {
            Username: username,
            Pool: this.cognitoUtil.getUserPool()
        };
        var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUser"](userData);
        cognitoUser.confirmRegistration(confirmationCode, true, function (err, result) {
            if (err) {
                callback.cognitoCallback(err.message, null);
            }
            else {
                callback.cognitoCallback(null, result);
            }
        });
        this.router.navigate(['/basicInfo?as=' + accountType.type]);
    };
    UserRegistrationService.prototype.resendCode = function (username, callback) {
        var userData = {
            Username: username,
            Pool: this.cognitoUtil.getUserPool()
        };
        var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUser"](userData);
        cognitoUser.resendConfirmationCode(function (err, result) {
            if (err) {
                callback.cognitoCallback(err.message, null);
            }
            else {
                callback.cognitoCallback(null, result);
            }
        });
    };
    UserRegistrationService.prototype.newPassword = function (newPasswordUser, callback) {
        console.log(newPasswordUser);
        // Get these details and call
        //cognitoUser.completeNewPasswordChallenge(newPassword, userAttributes, this);
        var authenticationData = {
            Username: newPasswordUser.username,
            Password: newPasswordUser.existingPassword,
        };
        var authenticationDetails = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["AuthenticationDetails"](authenticationData);
        var userData = {
            Username: newPasswordUser.username,
            Pool: this.cognitoUtil.getUserPool()
        };
        console.log("UserLoginService: Params set...Authenticating the user");
        var cognitoUser = new amazon_cognito_identity_js__WEBPACK_IMPORTED_MODULE_2__["CognitoUser"](userData);
        console.log("UserLoginService: config is " + aws_sdk_global__WEBPACK_IMPORTED_MODULE_4__["config"]);
        cognitoUser.authenticateUser(authenticationDetails, {
            newPasswordRequired: function (userAttributes, requiredAttributes) {
                // User was signed up by an admin and must provide new
                // password and required attributes, if any, to complete
                // authentication.
                // the api doesn't accept this field back
                delete userAttributes.email_verified;
                cognitoUser.completeNewPasswordChallenge(newPasswordUser.password, requiredAttributes, {
                    onSuccess: function (result) {
                        callback.cognitoCallback(null, userAttributes);
                    },
                    onFailure: function (err) {
                        callback.cognitoCallback(err, null);
                    }
                });
            },
            onSuccess: function (result) {
                callback.cognitoCallback(null, result);
            },
            onFailure: function (err) {
                callback.cognitoCallback(err, null);
            }
        });
    };
    UserRegistrationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"])),
        __metadata("design:paramtypes", [_cognito_service__WEBPACK_IMPORTED_MODULE_1__["CognitoUtil"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserRegistrationService);
    return UserRegistrationService;
}());



/***/ }),

/***/ "./src/app/shared/available-jobs/available-jobs.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/available-jobs/available-jobs.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    margin: 0;\r\n    border-top: 1px solid #edeff7;\r\n    border-bottom: 0px;\r\n}\r\na {\r\n    margin-bottom: 15px;\r\n}\r\n.job-listings-sec {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.job-listing {\r\n    float: left;\r\n    width: 100%;\r\n    display: table;\r\n    border-bottom: 1px solid #e8ecec;\r\n    padding: 20px 0;\r\n    background: #ffffff;\r\n    border-left: 2px solid #ffffff;\r\n    padding-right: 30px;\r\n}\r\n.job-title-sec {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    width: 60%;\r\n}\r\n.main-featured-sec {\r\n    float: left;\r\n    width: 100%;\r\n    z-index: 1;\r\n}"

/***/ }),

/***/ "./src/app/shared/available-jobs/available-jobs.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/available-jobs/available-jobs.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"padding-left\">\r\n    <div class=\"social-edit\"  id=\"sn\">\r\n      <h3 id=\"app-responsive-component-profile\"></h3>\r\n        <div class=\"row\">\r\n          <div id=\"app-responsive-component-profile-jobs\" class=\"col-lg-6\">\r\n            <span class=\"pf-title\"></span>\r\n            <div class=\"pf-field\">\r\n              \r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div> -->\r\n<div class=\"main-featured-sec\">\r\n      <h3 id=\"app-responsive-component-profile\"></h3>\r\n        <div class=\"row\">\r\n          <div id=\"app-responsive-component-profile-jobs\">\r\n          <!-- <div id=\"app-responsive-component-profile-jobs\" class=\"col-lg-6\"> -->\r\n            <ul>\r\n                <li *ngFor=\"let item of available_jobs; let myIndex = index\" class=\"job-listing\">\r\n                  <a [routerLink]=\"['/job/', available_jobs[myIndex].jobID]\">\r\n                    <p class=\"job-title-sec\">Title: {{available_jobs[myIndex].title}}</p>\r\n                    <p class=\"job-title-sec\">Number of Applicants: {{available_jobs[myIndex].num_applicants}}</p>\r\n                  </a>\r\n                </li>\r\n            </ul>\r\n          </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/available-jobs/available-jobs.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/available-jobs/available-jobs.component.ts ***!
  \*******************************************************************/
/*! exports provided: AvailableJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableJobsComponent", function() { return AvailableJobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_create_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/create-user.service */ "./src/app/service/create-user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AvailableJobsComponent = /** @class */ (function () {
    function AvailableJobsComponent(http, createUser) {
        this.http = http;
        this.createUser = createUser;
        this.available_jobs = [];
    }
    AvailableJobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employer = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        // Test Id, get from login in the future
        var hidden = sessionStorage.getItem("accountType");
        // var hidden = document.getElementById("test-ID");
        var url = "http://18.220.46.51:3000/api/employer/" + this.employer;
        console.log("yur");
        var IDs = [];
        this.available_jobs = [];
        this.http.get(url).subscribe(function (data) {
            // var available_jobs = this.http.get(data["availableJobs"].split("")
            for (var i = 0; i < data["availableJobs"].length; i++) {
                var id = data["availableJobs"][i].split("#")[1].toString();
                var n_url = "http://18.220.46.51:3000/api/Job/" + id;
                _this.http.get(n_url).subscribe(function (n_data) {
                    if (n_data["applicantRequests"] !== undefined) {
                        n_data["num_applicants"] = n_data["applicantRequests"].length;
                    }
                    else {
                        n_data["num_applicants"] = 0;
                    }
                    _this.available_jobs.push(n_data);
                });
            }
        });
        console.log(this.available_jobs);
        //   this.http.get(url).subscribe(
        //     data => {jsons.push(data)})
        // }
        // console.log(jsons[0].jobID)
    };
    AvailableJobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-available-jobs',
            template: __webpack_require__(/*! ./available-jobs.component.html */ "./src/app/shared/available-jobs/available-jobs.component.html"),
            styles: [__webpack_require__(/*! ./available-jobs.component.css */ "./src/app/shared/available-jobs/available-jobs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _service_create_user_service__WEBPACK_IMPORTED_MODULE_2__["CreateUserService"]])
    ], AvailableJobsComponent);
    return AvailableJobsComponent;
}());



/***/ }),

/***/ "./src/app/shared/basic-info-collector/basic-info-collector.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/basic-info-collector/basic-info-collector.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"block remove-bottom\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"account-popup-area signin-popup-box static\">\r\n                        <div class=\"account-popup\" *ngIf=\"intent=='Applicant'\">\t\r\n                            <h1 style=\"color: #fb236a\">Welcome to the Krow Network Applicant Experience!</h1>\t\r\n                            <h3>We just need some basic info to get you started:</h3>\r\n                            <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\" style=\"color: #fb236a\">\r\n                                {{ errorMessage }}\r\n                            </div>\t\r\n                            <form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\r\n                                <div class=\"cfield\">\r\n                                    <input id=\"biaFirst\" required type=\"text\" placeholder=\"First Name\" class=\"form-control\" \r\n                                        [(ngModel)]=\"first\" [ngModelOptions]=\"{standalone: true}\">\r\n                                    <i class=\"la la-user\"></i>\r\n                                </div>\r\n                                <div class=\"cfield\">                                \r\n                                    <input id=\"biaLast\" required type=\"text\" placeholder=\"Last Name\" class=\"form-control\"\r\n                                        [(ngModel)]=\"second\" [ngModelOptions]=\"{standalone: true}\">\r\n                                    <i class=\"la la-user\"></i>\r\n                                </div>\r\n                                <div class=\"cfield\">                                \r\n                                    <input id=\"biaEmail\" required type=\"email\" placeholder=\"Professional Email\" class=\"form-control\"\r\n                                        [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\">\r\n                                    <i class=\"la la-envelope\"></i>\r\n                                </div>\r\n                                <button (click)=\"submitInfo()\">\r\n                                    Let's get started!\r\n                                </button>\r\n                            </form>\t\r\n                        </div>\r\n                        <div class=\"account-popup\" *ngIf=\"intent=='Employer'\">\t\r\n                            <h1 style=\"color: #fb236a\">Welcome to the Krow Network Employer Experience!</h1>\t\r\n                            <h3>We just need some basic info to get you started:</h3>\r\n                            <div *ngIf=\"errorMessage!=null\" class=\"alert alert-danger\" style=\"color: #fb236a\">\r\n                                {{ errorMessage }}\r\n                            </div>\t\r\n                            <form class=\"form-signin\" method=\"POST\" action=\"#\" role=\"form\">\r\n                                <div class=\"cfield\">\r\n                                    <input id=\"bieFirst\" required type=\"text\" placeholder=\"Company Name\" class=\"form-control\" \r\n                                        [(ngModel)]=\"first\" [ngModelOptions]=\"{standalone: true}\">\r\n                                    <i class=\"la la-users\"></i>\r\n                                </div>\r\n                                <div class=\"cfield\">                                \r\n                                    <input id=\"bieSecond\" required type=\"text\" placeholder=\"Company Description\" class=\"form-control\"\r\n                                        [(ngModel)]=\"second\" [ngModelOptions]=\"{standalone: true}\">\r\n                                    <i class=\"la la-paragraph\"></i>\r\n                                </div>\r\n                                <div class=\"cfield\">                                \r\n                                    <input id=\"bieEmail\" required type=\"email\" placeholder=\"Professional Email\" class=\"form-control\"\r\n                                        [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\">\r\n                                    <i class=\"la la-envelope\"></i>\r\n                                </div>\r\n                                <button (click)=\"submitInfo()\">\r\n                                    Let's get started!\r\n                                </button>\r\n                            </form>\t\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/shared/basic-info-collector/basic-info-collector.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/basic-info-collector/basic-info-collector.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicInfoCollectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoCollectorComponent", function() { return BasicInfoCollectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_create_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/create-user.service */ "./src/app/service/create-user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicInfoCollectorComponent = /** @class */ (function () {
    function BasicInfoCollectorComponent(route, router, initializeUser) {
        this.route = route;
        this.router = router;
        this.initializeUser = initializeUser;
    }
    BasicInfoCollectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            _this.intent = params.as;
        });
        this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
    };
    BasicInfoCollectorComponent.prototype.submitInfo = function () {
        if (!this.user || !this.intent) {
            this.errorMessage = "Something went wrong, please go back.";
            return;
        }
        if (!this.first || !this.second || !this.email) {
            this.errorMessage = "All fields are required";
            return;
        }
        else {
            this.errorMessage = "";
            var obj = {
                user: this.user,
                first: this.first,
                second: this.second,
                email: this.email,
            };
            this.initializeUser.initializeUser(obj, this.intent, this.activate, this.router);
        }
    };
    BasicInfoCollectorComponent.prototype.activate = function (intent, user, router) {
        var path = "/" + intent;
        router.navigate([path], { queryParams: { user: user } });
    };
    BasicInfoCollectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'basic-info-collector',
            template: __webpack_require__(/*! ./basic-info-collector.component.html */ "./src/app/shared/basic-info-collector/basic-info-collector.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_create_user_service__WEBPACK_IMPORTED_MODULE_2__["CreateUserService"]])
    ], BasicInfoCollectorComponent);
    return BasicInfoCollectorComponent;
}());



/***/ }),

/***/ "./src/app/shared/coming-soon/coming-soon.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/coming-soon/coming-soon.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Position text in the middle */\r\n#middle {\r\n    height: inherit;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/shared/coming-soon/coming-soon.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/coming-soon/coming-soon.component.ts ***!
  \*************************************************************/
/*! exports provided: ComingSoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonComponent", function() { return ComingSoonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComingSoonComponent = /** @class */ (function () {
    function ComingSoonComponent() {
    }
    ComingSoonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coming-soon',
            template: "\n    <div id=\"middle\">\n      <h1>COMING SOON!</h1>\n    </div>",
            styles: [__webpack_require__(/*! ./coming-soon.component.css */ "./src/app/shared/coming-soon/coming-soon.component.css")]
        })
    ], ComingSoonComponent);
    return ComingSoonComponent;
}());



/***/ }),

/***/ "./src/app/shared/completed-jobs/completed-jobs.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/completed-jobs/completed-jobs.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/completed-jobs/completed-jobs.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/completed-jobs/completed-jobs.component.ts ***!
  \*******************************************************************/
/*! exports provided: CompletedJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedJobsComponent", function() { return CompletedJobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompletedJobsComponent = /** @class */ (function () {
    function CompletedJobsComponent(http) {
        this.http = http;
    }
    CompletedJobsComponent.prototype.ngOnInit = function () {
        // Test Id, get from login in the future
        var test = document.getElementById("test-ID");
        var ID = test.attributes[3].value;
        if (ID == "SAMPLEEMPLOYER") {
            this.http.get("http://18.220.46.51:3000/api/JOB/SAMPLEJOB/").subscribe(function (data) {
                console.log(data["$class"]);
            }, function (err) {
                if (err.error instanceof Error) {
                    console.log("Client-side error occured.");
                }
                else {
                    console.log("Server-side error occured.");
                }
            });
        }
    };
    CompletedJobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-completed-jobs',
            template: __webpack_require__(/*! ./completed-jobs.component.html */ "./src/app/shared/completed-jobs/completed-jobs.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CompletedJobsComponent);
    return CompletedJobsComponent;
}());



/***/ }),

/***/ "./src/app/shared/hire-requests/hire-requests.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/hire-requests/hire-requests.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  hire-requests works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shared/hire-requests/hire-requests.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/hire-requests/hire-requests.component.ts ***!
  \*****************************************************************/
/*! exports provided: HireRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HireRequestsComponent", function() { return HireRequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HireRequestsComponent = /** @class */ (function () {
    function HireRequestsComponent() {
    }
    HireRequestsComponent.prototype.ngOnInit = function () {
    };
    HireRequestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hire-requests',
            template: __webpack_require__(/*! ./hire-requests.component.html */ "./src/app/shared/hire-requests/hire-requests.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], HireRequestsComponent);
    return HireRequestsComponent;
}());



/***/ }),

/***/ "./src/app/shared/in-progress-jobs/in-progress-jobs.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shared/in-progress-jobs/in-progress-jobs.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  in-progress-jobs works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shared/in-progress-jobs/in-progress-jobs.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/in-progress-jobs/in-progress-jobs.component.ts ***!
  \***********************************************************************/
/*! exports provided: InProgressJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InProgressJobsComponent", function() { return InProgressJobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InProgressJobsComponent = /** @class */ (function () {
    function InProgressJobsComponent() {
    }
    InProgressJobsComponent.prototype.ngOnInit = function () {
    };
    InProgressJobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-in-progress-jobs',
            template: __webpack_require__(/*! ./in-progress-jobs.component.html */ "./src/app/shared/in-progress-jobs/in-progress-jobs.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], InProgressJobsComponent);
    return InProgressJobsComponent;
}());



/***/ }),

/***/ "./src/app/shared/item-type-constructor.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/item-type-constructor.ts ***!
  \*************************************************/
/*! exports provided: ItemType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemType", function() { return ItemType; });
var ItemType = /** @class */ (function () {
    function ItemType(component, data) {
        this.component = component;
        this.data = data;
    }
    return ItemType;
}());



/***/ }),

/***/ "./src/app/shared/job-details/job-details.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/job-details/job-details.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3.top{\r\n    margin:0;\r\n    padding:0;\r\n    border:0;\r\n    font-size:100%;\r\n    /* font:inherit; */\r\n    vertical-align:baseline;\r\n    display: inline-block;\r\n}\r\n\r\n.post-job-btn {\r\n    float: right;\r\n    font-family: Open Sans;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    padding: 13px 27px;\r\n    /* margin-top: 40px; */\r\n    border-radius: 23px;\r\n\r\n    letter-spacing: 0.3px;\r\n    display:inline-block\r\n}"

/***/ }),

/***/ "./src/app/shared/job-details/job-details.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/job-details/job-details.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-left\">\n    <a (click)=\"buttonPressed($event)\" class=\"post-job-btn\" id=\"top\" [hidden]=\"show_button()\">Edit</a>\n    <a (click)=\"apply($event)\" class=\"post-job-btn\" id=\"top\" [hidden]=\"show_apply_button()\">Apply</a>\n    <h3 id=\"app-responsive-component-profile\"></h3>\n  <div class=\"social-edit\"  id=\"sn\">\n      \n    <form>\n      <div class=\"row\">\n        <div id=\"app-responsive-component-profile-first\" class=\"col-lg-6\">\n          <span class=\"pf-title\"></span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"\" id=\"text\"\n              [(ngModel)]=\"title\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"is_disabled()\"/>\n            <i class=\"la la-user\"></i>\n          </div>\n        </div>\n        <div id=\"app-responsive-component-profile-second\" class=\"col-lg-12\">\n          <span class=\"pf-title\"></span> \n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"\" id=\"\"\n              [(ngModel)]=\"description\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"is_disabled()\"/>\n            <i class=\"la la-users\"></i>\n          </div>\n        </div>\n        <div id=\"app-responsive-component-profile-third\" class=\"col-lg-12\">\n          <span class=\"pf-title\"></span> \n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"\" id=\"\"\n              [(ngModel)]=\"tags\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"is_disabled()\"/>\n            <i class=\"la la-users\"></i>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-12\" style=\"display:none; padding:0\">\n        <a (click)=\"buttonPressed($event)\" class=\"post-job-btn\" style=\"float:right\" ng-disabled=\"false\">UPDATE</a>\n      </div>\n    </form>\n  </div>\n  <div class=\"social-edit\"  id=\"sn\">\n    <form>\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Location</span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"4632 1/2 Hollywood Boulevard\" \n              [(ngModel)]=\"location\" [ngModelOptions]=\"{standalone: true}\" id=\"location\" [disabled]=\"is_disabled()\"/>\n            <i class=\"la la-map-marker\"></i>   \n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-12\" style=\"display:none; padding:0\">\n        <a (click)=\"buttonPressed($event)\" class=\"post-job-btn\" style=\"float:right\" ng-disabled=\"false\">UPDATE</a>\n      </div>\n    </form>\n  </div>\n  <div class=\"social-edit\"  id=\"sn\">\n    <h3>Dates</h3>\n    <form>\n      <div class=\"row\" id=\"app-responsive-social-div\">\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Date Posted</span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"www.facebook.com/sample\"\n              id=\"urlFACEBOOK\" [(ngModel)]=\"urlFACEBOOK\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"always_disabled()\"/>\n            <i class=\"la la-facebook\"></i>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Twitter</span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"www.twitter.com/sample\" \n              id=\"urlTWITTER\" [(ngModel)]=\"urlTWITTER\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"is_disabled()\"/>\n            <i class=\"la la-twitter\"></i>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Linkedin</span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"www.linkedin.com/sample\" \n              id=\"urlLINKEDIN\" [(ngModel)]=\"urlLINKEDIN\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"is_disabled()\"/>\n            <i class=\"la la-linkedin\"></i>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Website</span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"www.myDomain.com/sample\" \n              id=\"urlWEBSITE\" [(ngModel)]=\"urlWEBSITE\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"is_disabled()\"/>\n            <i class=\"la la-external-link-square\"></i>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Phone</span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"+1 609 963 5896\" \n              id=\"phoneNumber\" [(ngModel)]=\"phoneNumber\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"is_disabled()\"/>\n            <i class=\"la la-phone\"></i>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Mail</span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"mail@mail.com\" \n              id=\"email\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"is_disabled()\"/>\n            <i class=\"la la-envelope\"></i>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-12\" style=\"display:none; padding:0\">\n        <a (click)=\"buttonPressed($event)\" class=\"post-job-btn\" style=\"float:right\" ng-disabled=\"false\">UPDATE</a>\n      </div>\n    </form>\n  </div>\n  <div class=\"social-edit\"  id=\"sn\" *ngIf=\"show_applicants\">\n      <h3>Applicants</h3>\n      <ul class=\"applicants\">\n          <li *ngFor=\"let item of applicant_data; let myIndex = index\" class=\"job-listing\">\n            <!-- <a  > -->\n              <p class=\"job-title-sec\" >Applicant Name: {{applicant_data[myIndex].firstName}} {{applicant_data[myIndex].lastName}}</p>\n              <button (click)=\"goToProfile(applicant_data[myIndex].applicantID)\">View Profile</button>\n          </li>\n        </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/job-details/job-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/job-details/job-details.component.ts ***!
  \*************************************************************/
/*! exports provided: JobDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsComponent", function() { return JobDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_create_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/create-user.service */ "./src/app/service/create-user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




// import { Router } from '@angular/router';
var JobDetailsComponent = /** @class */ (function () {
    function JobDetailsComponent(http, createUser, activatedRoute, router) {
        this.http = http;
        this.createUser = createUser;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.show_applicants = false;
        this.disabled = true;
        this.applicants = [];
        this.applicant_data = [];
        this.x = undefined;
        this.user = undefined;
        this.show_apply = false;
        // show_apply_button = false
        this.profileType = sessionStorage.getItem("accountType");
    }
    JobDetailsComponent.prototype.updateInfo = function (children) {
        var _this = this;
        // this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        this.activatedRoute.params.subscribe(function (params) { return console.log(params); });
        // Test Id, get from login in the future
        // Url to API
        // this.url = "http://18.220.46.51:3000/api/" + profileType + "/" + this.user;
        // Get current Data
        this.http.get(this.url).subscribe(function (data) {
            var change = false;
            for (var i = 0; i < children.length; i++) {
                var event = children[i];
                // Get element id that triggered event
                var valueToChange = event.attributes[1].value;
                console.log(valueToChange);
                // Value of element
                var elValue = event.value;
                console.log(elValue);
                // Check if values match, in which case, do nothing
                if (data[valueToChange] != elValue) {
                    // Check for empty entry
                    if (elValue == "") {
                        continue;
                    }
                    else if (valueToChange.slice(0, 3) == "url") {
                        var found = false;
                        // Loop through current links looking for a match to update
                        for (var k = 0; k < data["links"].length; k++) {
                            if (data["links"][k]["type"][0] == valueToChange[3]) {
                                if (data["links"][k]["url"] != elValue) {
                                    data["links"][k]["url"] = elValue;
                                    change = true;
                                }
                                found = true;
                            }
                        }
                        // If no matches are found, create new instance
                        if (found == false) {
                            var type = valueToChange.slice(3);
                            data["links"].push({
                                $class: "network.krow.participants.Link",
                                url: elValue,
                                type: type,
                            });
                            change = true;
                        }
                    }
                    else {
                        // Change data value
                        data[valueToChange] = elValue;
                        change = true;
                    }
                }
                console.log(data);
            }
            if (change != false) {
                // Get timestamp and change data timestamp
                var timestamp = new Date();
                data["lastUpdated"] = timestamp;
                data["tags"] = data['tags'].toString().split(",");
                // Update entry
                _this.http.put(_this.url, data).subscribe(function (data) {
                }, // Catch Errors
                function (err) {
                    if (err.error instanceof Error) {
                        console.log("Client-side error occured.");
                    }
                    else {
                        console.log("Server-side error occured.");
                        console.log(err.error);
                    }
                });
            }
        }, // Catch Errors
        function (err) {
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
        });
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve('resolved');
            }, 500);
        });
    };
    ;
    JobDetailsComponent.prototype.load = function (jobID) {
        var _this = this;
        this.url = "http://18.220.46.51:3000/api/Job/" + this.jobID;
        // Set Company/Name 
        document.getElementById("app-responsive-component-profile").innerText = "Job";
        // document.getElementById("text").disabled = true;
        // Change First input value, id, title to match employer name
        var employerName = document.getElementById("app-responsive-component-profile-first");
        employerName.children[0].innerHTML = "Job Title";
        employerName.children[1].children[0].attributes[2].value = "Job Title";
        employerName.children[1].children[0].attributes[1].value = "title";
        // Change Second input value, id, title to match description
        var description = document.getElementById("app-responsive-component-profile-second");
        description.children[0].innerHTML = "Description";
        description.children[1].children[0].attributes[2].value = "Job Description";
        description.children[1].children[0].attributes[1].value = "description";
        var tags = document.getElementById("app-responsive-component-profile-third");
        tags.children[0].innerHTML = "Tags";
        tags.children[1].children[0].attributes[2].value = "Tags";
        tags.children[1].children[0].attributes[1].value = "tags";
        // Get Data
        this.http.get(this.url).subscribe(function (data) {
            // Display data fetched from API
            _this.title = data["title"];
            _this.description = data["description"];
            _this.location = data["location"];
            _this.tags = data["tags"];
            _this.created = data["created"];
            _this.lastUpdated = data["lastUpdated"];
            _this.startDate = data["startDate"];
            _this.employerID = data["employerID"];
            _this.jobID = data["jobID"];
            _this.applicants = data["applicantRequests"];
            if (_this.applicants !== undefined) {
                _this.show_applicants = true;
                console.log(_this.applicants[0]);
                console.log("t");
                // console.log(this.applicants[0])
                for (var i = 0; i <= _this.applicants.length; i++) {
                    console.log(_this.applicants[i].toString().split("#")[1]);
                    var url = "http://18.220.46.51:3000/api/Applicant/" + _this.applicants[i].toString().split("#")[1];
                    console.log(url);
                    _this.http.get(url).subscribe(function (data) {
                        console.log(data);
                        _this.applicant_data.push(data);
                    }, function (err) {
                        if (err.error instanceof Error) {
                            console.log("Client-side error occured.");
                        }
                        else {
                            console.log("Server-side error occured.");
                        }
                    });
                }
            }
            // console.log(data["applicantRequests"])
            // console.log(this.applicants)
            // title: string;
            // description: string;
            // location: string;
            // tags: string;
            // created: string;
            // lastUpdated: string; 
            // startDate: string;
            // requestCompletedDate: string;
            // endDate: string; 
            // jobType: string;
            // payment: string;
            // paymentType: string;
            // employerID: string;
            // Split url links
            // for(var i = 0; i < data["links"].length; i++){
            //   var curr = data["links"][i];
            //   if(curr["type"] == "FACEBOOK"){
            //     this.urlFACEBOOK = curr["url"];
            //   }
            //   else if(curr["type"] == "TWITTER"){
            //     this.urlTWITTER = curr["url"];
            //   }
            //   else if(curr["type"] == "LINKEDIN"){
            //     this.urlLINKEDIN = curr["url"];
            //   }
            //   else if(curr["type"] == "WEBSITE"){
            //     this.urlWEBSITE = curr["url"];
            //   }
            // }
        }, // Catch Errors
        function (err) {
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
        });
        // this.applicants = sessionStorage.getItem("applicants")
    };
    JobDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) { _this.jobID = params["jobID"]; });
        console.log(this.jobID);
        this.load(this.jobID);
        this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        this.x = this.confirmUserType();
        console.log(this.x);
        if (this.x.subscribe(this.x == this.user)) {
            this.show_apply = true;
        }
    };
    JobDetailsComponent.prototype.is_disabled = function () {
        return this.disabled;
    };
    JobDetailsComponent.prototype.always_disabled = function () {
        if (sessionStorage.getItem("accountType") == "Employer" && localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser") == this.employerID) {
            return false;
        }
        this.disabled = true;
        return true;
    };
    JobDetailsComponent.prototype.buttonPressed = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var inputs, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.profileType);
                        if (!(this.disabled == true)) return [3 /*break*/, 1];
                        this.disabled = false;
                        event.target.innerHTML = "Save";
                        // event.target.style = "float:right; background-color:gray; border-color: gray; opacity=0.8";
                        // 
                        event.target.style = "background-color: #fb236a; border-color: #fb236a; float: right";
                        // event.target.closest("div").style = "display: none;";
                        event.target.attributes[2].value = false;
                        return [3 /*break*/, 3];
                    case 1:
                        this.disabled = true;
                        event.target.innerHTML = "Edit";
                        inputs = document.getElementsByTagName("input");
                        console.log(inputs);
                        return [4 /*yield*/, this.updateInfo(inputs)];
                    case 2:
                        result = _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    JobDetailsComponent.prototype.show_button = function () {
        if (sessionStorage.getItem("accountType") == "Employer" && localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser") == this.employerID) {
            return false;
        }
        return true;
    };
    JobDetailsComponent.prototype.show_apply_button = function () {
        if (sessionStorage.getItem("accountType") == "applicant")
            return false;
        return true;
    };
    JobDetailsComponent.prototype.hide_applicants = function () {
        if (this.applicants !== undefined) {
            this.show_applicants = true;
        }
    };
    JobDetailsComponent.prototype.apply = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, data;
            return __generator(this, function (_a) {
                url = "http://18.220.46.51:3000/api/RequestJob";
                data = {
                    "applicant": localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"),
                    "job": this.jobID
                };
                this.http.post(url, data).subscribe(function (data) {
                    _this.http.get("http://18.220.46.51:3000/api/Employer/" + _this.employerID).subscribe(function (data) {
                        var email_data = {
                            "applicant_name": data["firstName"] + " " + data["lastName"],
                            to: data["email"],
                            job_name: _this.title
                        };
                        _this.http.post("http://52.15.219.10:4200/applicant-request", email_data).subscribe(function (data) {
                            alert("Congratulations! You've successfully applied!");
                            console.log("Success");
                        }, function (err) {
                            if (err.error instanceof Error) {
                                console.log("Client-side error occured.");
                            }
                            else {
                                console.log("Server-side error occured.");
                                console.log(err);
                            }
                        });
                    });
                }, function (err) {
                    if (err.error instanceof Error) {
                        console.log("Client-side error occured.");
                    }
                    else {
                        console.log("Server-side error occured.");
                        console.log(err);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    JobDetailsComponent.prototype.goToProfile = function (id) {
        sessionStorage.setItem("view", "potApplicant");
        sessionStorage.setItem("fromJob", this.jobID);
        this.router.navigate(["applicant/profile-info/" + id]);
    };
    JobDetailsComponent.prototype.confirmUserType = function () {
        return this.http.head("http://18.220.46.51:3000/api/Applicant/" + this.user);
    };
    JobDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-details',
            template: __webpack_require__(/*! ./job-details.component.html */ "./src/app/shared/job-details/job-details.component.html"),
            styles: [__webpack_require__(/*! ./job-details.component.css */ "./src/app/shared/job-details/job-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _service_create_user_service__WEBPACK_IMPORTED_MODULE_3__["CreateUserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], JobDetailsComponent);
    return JobDetailsComponent;
}());



/***/ }),

/***/ "./src/app/shared/job-search/job-search-main.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/shared/job-search/job-search-main.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3:hover {\r\n    background-color: #fb236a;\r\n    padding-left:46px;\r\n    transition: all 0.7s ease;\r\n}\r\nh3 {\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    padding-left: 30px;\r\n    margin: 0;\r\n    border-top: 1px solid #edeff7;\r\n    border-bottom: 0px;\r\n}\r\nul.results {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\np.thiccc {\r\n    font-weight: bold;\r\n}\r\n.job-listings-sec {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.job-listing {\r\n    float: left;\r\n    width: 100%;\r\n    display: table;\r\n    border-bottom: 1px solid #e8ecec;\r\n    padding: 20px 0;\r\n    background: #ffffff;\r\n    border-left: 2px solid #ffffff;\r\n    padding-right: 30px;\r\n}\r\n.job-title-sec {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    width: 60%;\r\n}\r\n.c-logo {\r\n    float: left;\r\n    width: 130px;\r\n    text-align: center;\r\n}\r\n.c-logo img {\r\n    float: none;\r\n    display: inline-block;\r\n    max-width: 100%;\r\n}\r\n.job-title-sec h3 {\r\n    display: table;\r\n    font-size: 16px;\r\n    font-family: Open Sans;\r\n    color: #202020;\r\n    margin: 0;\r\n        margin-bottom: 0px;\r\n    margin-bottom: 7px;\r\n    margin-top: 3px;\r\n}\r\n.job-title-sec span {\r\n    float: left;\r\n    font-family: Open Sans;\r\n    font-size: 14px;\r\n    margin-top: 1px;\r\n}\r\n.job-lctn {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    font-family: open Sans;\r\n    font-size: 15px;\r\n    color: #888888;\r\n    line-height: 23px;\r\n    width: 25%;\r\n}\r\n.job-lctn i {\r\n    font-size: 24px;\r\n    float: left;\r\n    margin-right: 7px;\r\n}\r\n.fav-job {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    font-size: 25px;\r\n    color: #888888;\r\n    line-height: 10px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n.job-is {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    font-family: Open Sans;\r\n    font-size: 12px;\r\n    border: 1px solid;\r\n    float: right;\r\n    padding: 7px 0;\r\n    border-radius: 20px;\r\n\r\n    width: 108px;\r\n    margin: 9px 0;\r\n    text-align: center;\r\n}\r\n.ft.fill {\r\n    background: #8b91dd;\r\n}\r\n.fill.pt {\r\n    background: #7dc246;\r\n}\r\n.fill.fl {\r\n    background: #fb236a;\r\n}\r\n.fill.tp {\r\n    background: #26ae61;\r\n}\r\n.job-is.ft,\r\n.job-list-modern .job-is.ft{\r\n    color: #8b91dd;\r\n    border-color: #8b91dd;\r\n}\r\n.job-is.pt,\r\n.job-list-modern .job-is.pt{\r\n    color: #7dc246;\r\n    border-color: #7dc246;\r\n}\r\n.job-is.fl,\r\n.job-list-modern .job-is.fl{\r\n    color: #fb236a;\r\n    border-color: #fb236a;\r\n}\r\n.job-is.tp,\r\n.job-list-modern .job-is.tp{\r\n    color: #26ae61;\r\n    border-color: #26ae61;\r\n}\r\n.job-listing:hover {\r\n    border-left-color: #8b91dd;\r\n    -ms-box-shadow: 0px 0px 30px rgba(0,0,0,0.1);\r\n    -o-box-shadow: 0px 0px 30px rgba(0,0,0,0.1);\r\n    box-shadow: 0px 0px 30px rgba(0,0,0,0.1);\r\n\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n.job-listing:last-child {\r\n    border-bottom-color: #ffffff;\r\n}\r\n.heading.light h2 {\r\n    color: #ffffff;\r\n}\r\n.heading.light span {\r\n    color: #ffffff;\r\n}\r\n.layer.color.light::before {\r\n    background: #8b91dd;\r\n    opacity: 0.9;\r\n}\r\n.reviews {\r\n    float: left;\r\n    width: 100%;\r\n    background: #ffffff;\r\n    border-radius: 8px;\r\n\r\n    padding: 30px 30px;\r\n    position: relative;\r\n    margin-top: 47px;\r\n}\r\n.reviews img {\r\n    border-radius: 50%;\r\n\r\n    width: 100px;\r\n    height: 100px;\r\n    margin-top: -75px;\r\n}\r\n.reviews h3 {\r\n    float: left;\r\n    width: 100%;\r\n    font-family: Open Sans;\r\n    font-size: 18px;\r\n    color: #202020;\r\n    margin: 0;\r\n        margin-top: 0px;\r\n        margin-bottom: 0px;\r\n    margin-top: 40px;\r\n    margin-bottom: 20px;\r\n}\r\n.reviews h3 span {\r\n    font-family: Open Sans;\r\n    font-size: 14px;\r\n    color: #888888;\r\n    margin-left: 10px;\r\n}\r\n.reviews p {\r\n    float: left;\r\n    width: 100%;\r\n    margin: 0;\r\n        margin-bottom: 0px;\r\n    font-family: Open Sans;\r\n    font-size: 14px;\r\n    color: #888888;\r\n    letter-spacing: 0px;\r\n    line-height: 24px;\r\n    margin-bottom: 15px;\r\n}\r\n.reviews::before {\r\n    position: absolute;\r\n    right: 40px;\r\n    top: 20px;\r\n    content: '“';\r\n    font-family: Quicksand;\r\n    font-size: 100px;\r\n    font-weight: bolder;\r\n    \r\n    -webkit-transform: rotate(-180deg);\r\n    transform: rotate(-180deg);\r\n\r\n    line-height: 30px;\r\n    color: #8b91dd;\r\n}\r\n.reviews-sec {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.comp-sec {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.company-img {\r\n    float: left;\r\n    width: 20%;\r\n    text-align: center;\r\n}\r\n.company-img a {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.company-img a img {\r\n    float: none;\r\n    display: inline-block;\r\n    max-width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/shared/job-search/job-search-main.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/job-search/job-search-main.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{data.id}}</h3>"

/***/ }),

/***/ "./src/app/shared/job-search/job-search-main.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/job-search/job-search-main.component.ts ***!
  \****************************************************************/
/*! exports provided: JobSearchMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSearchMainComponent", function() { return JobSearchMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobSearchMainComponent = /** @class */ (function () {
    function JobSearchMainComponent() {
    }
    JobSearchMainComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JobSearchMainComponent.prototype, "data", void 0);
    JobSearchMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./job-search-main.component.html */ "./src/app/shared/job-search/job-search-main.component.html"),
            styles: [__webpack_require__(/*! ./job-search-main.component.css */ "./src/app/shared/job-search/job-search-main.component.css")],
        })
    ], JobSearchMainComponent);
    return JobSearchMainComponent;
}());



/***/ }),

/***/ "./src/app/shared/job-search/job-search.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/job-search/job-search.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"social-edit\" id=\"sn\">\r\n  <form style=\"padding-left:0px\">\r\n    <div class=\"edu-history-sec\" style=\"padding-left: 0px\">\r\n      <div class=\"edu-history\">\r\n        <div class=\"edu-hisinfo\">\r\n          <div class=\"row\" style=\"padding:20px; padding-bottom:0px\">\r\n            <div class=\"col-lg-10\">\r\n              <div class=\"pf-field\">\r\n                <input type=\"text\" placeholder=\"Search\" style=\"margin-bottom: 0\"\r\n                  [(ngModel)]=\"searchUserQuery\" [ngModelOptions]=\"{standalone: true}\"/>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-2\" style=\"padding: 3px 20px 0px 20px;\">\r\n              <a class=\"post-job-btn\" style=\"color: #FFFFFF; margin: auto\" (click)=\"submitSearchQuery()\">Search</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"job-listings-sec\" id=\"serchQueryResults\" ng-controller=\"cardsListController\">\r\n  <!-- <ng-template job-search-host></ng-template> -->\r\n  <!-- <li ng-repeat=\"x in final_results\"><p>{{x}}</p></li> -->\r\n  <!-- <p ng-repeat=\"x in res\">{{x}}</p> -->\r\n  <ul class=\"results\">\r\n    <li *ngFor=\"let item of res; let myIndex = index\" class=\"job-listing\">\r\n      <!-- <a  > -->\r\n        <p class=\"job-title-sec\" >Title: {{res[myIndex].title}}</p>\r\n        <p class=\"job-lctn\" >\r\n          Description: {{res[myIndex].description}}... <br />\r\n          ID: {{res[myIndex].jobID}} <br />\r\n        </p>\r\n        <!-- <hr> -->\r\n      <!-- </a> -->\r\n      <form [routerLink]=\"['/job/', res[myIndex].jobID]\" routerLinkActive=\"active\" >\r\n        <input type=\"submit\" value=\"View\"/>\r\n      </form>\r\n    </li>\r\n  </ul>\r\n</div> "

/***/ }),

/***/ "./src/app/shared/job-search/job-search.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/job-search/job-search.component.ts ***!
  \***********************************************************/
/*! exports provided: JobSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSearchComponent", function() { return JobSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _job_search_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-search.directive */ "./src/app/shared/job-search/job-search.directive.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobSearchComponent = /** @class */ (function () {
    function JobSearchComponent(http, componentFactoryResolver, route, router) {
        this.http = http;
        this.componentFactoryResolver = componentFactoryResolver;
        this.route = route;
        this.router = router;
        this.res = [];
    }
    JobSearchComponent.prototype.submitSearchQuery = function () {
        var hidden = document.getElementById("test-ID");
        var typeAcc = hidden.attributes["value"].value;
        var url = "/" + typeAcc.toLowerCase() + "/job-search";
        this.router.navigate([url], { queryParams: { search: this.searchUserQuery } });
    };
    JobSearchComponent.prototype.getSearchQueryData = function () {
        var _this = this;
        console.log("Loading new data for query: " + this.searchUserQuery);
        // Submit string to server to get a list of job ids
        var url = "http://18.220.46.51:4200/search?key=42fc1e42-5eb8-4a8f-8904-7c58529f0f58";
        this.http.get(url, { params: { "term": this.searchUserQuery } }).subscribe(function (data) {
            console.log(data);
            _this.display(_this.parse(data));
        }, // Catch Errors  
        function (err) {
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
                console.log(err);
            }
        });
    };
    JobSearchComponent.prototype.parse = function (results) {
        // console.log(results)
        var jobs = [];
        for (var k = 0; k < 10; k++) {
            jobs.push(JSON.parse(results[k]));
        }
        return jobs;
    };
    JobSearchComponent.prototype.display = function (data) {
        this.res = data;
    };
    // clearPrevious(data){
    //   var myNode = document.getElementById("serchQueryResults");
    //   this.final_results = this.parse(data)
    //   // data 
    //   // if(myNode.firstChild){
    //   //   while (myNode.firstChild) {
    //   //     myNode.removeChild(myNode.firstChild);
    //   //     if(!myNode.firstChild){
    //   //       this.displayResults(data);
    //   //       break;
    //   //     }
    //   //   }
    //   // }
    //   // else{
    //   //   this.displayResults(data);
    //   // }
    // }
    JobSearchComponent.prototype.loadComponent = function (jobItem) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(jobItem.component);
        var viewContainerRef = this.achievementHost.viewContainerRef;
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = jobItem.data;
    };
    JobSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.searchUserQuery = params['search'];
            console.log(params['search']);
            if (params['search']) {
                _this.getSearchQueryData();
            }
        });
    };
    JobSearchComponent.prototype.getJob = function (item) {
        this.router.navigate(['/job/', item.jobID]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_job_search_directive__WEBPACK_IMPORTED_MODULE_1__["JobSearchDirective"]),
        __metadata("design:type", _job_search_directive__WEBPACK_IMPORTED_MODULE_1__["JobSearchDirective"])
    ], JobSearchComponent.prototype, "achievementHost", void 0);
    JobSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-search',
            template: __webpack_require__(/*! ./job-search.component.html */ "./src/app/shared/job-search/job-search.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], JobSearchComponent);
    return JobSearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/job-search/job-search.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/job-search/job-search.directive.ts ***!
  \***********************************************************/
/*! exports provided: JobSearchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSearchDirective", function() { return JobSearchDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobSearchDirective = /** @class */ (function () {
    function JobSearchDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    JobSearchDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[job-search-host]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], JobSearchDirective);
    return JobSearchDirective;
}());



/***/ }),

/***/ "./src/app/shared/profile-info/profile-info.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/profile-info/profile-info.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    margin: 0;\r\n    border-top: 1px solid #edeff7;\r\n    border-bottom: 0px;\r\n}\r\na {\r\n    margin-bottom: 15px;\r\n}"

/***/ }),

/***/ "./src/app/shared/profile-info/profile-info.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/profile-info/profile-info.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-left\">\r\n    <a (click)=\"viewUserResume()\" class=\"post-job-btn\" id=\"top\" [hidden]=\"lockResume\">View Resume</a>\r\n    <a (click)=\"requestToHire()\" class=\"post-job-btn\" id=\"top\" [hidden]=\"lockResume\">Request to hire</a>\r\n\r\n  <div class=\"social-edit\"  id=\"sn\">\r\n    <h3 id=\"app-responsive-component-profile\"></h3>\r\n    <form>\r\n      <div class=\"row\">\r\n        <div id=\"app-responsive-component-profile-first\" class=\"col-lg-6\">\r\n          <span class=\"pf-title\"></span>\r\n          <div class=\"pf-field\">\r\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"\" id=\"\"\r\n              [(ngModel)]=\"first\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"is_disabled()\"/>\r\n            <i class=\"la la-user\"></i>\r\n          </div>\r\n        </div>\r\n        <div id=\"app-responsive-component-profile-second\" class=\"col-lg-12\">\r\n          <span class=\"pf-title\"></span> \r\n          <div class=\"pf-field\">\r\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"\" id=\"\"\r\n              [(ngModel)]=\"second\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"is_disabled()\"/>\r\n            <i class=\"la la-users\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12\" style=\"display:none; padding:0\">\r\n        <a (click)=\"buttonPressed($event)\" class=\"post-job-btn\" style=\"float:right\" ng-disabled=\"false\">UPDATE</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"social-edit\"  id=\"sn\">\r\n    <h3>Address</h3>\r\n    <form>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <span class=\"pf-title\">Address</span>\r\n          <div class=\"pf-field\">\r\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"4632 1/2 Hollywood Boulevard\" \r\n              [(ngModel)]=\"address\" [ngModelOptions]=\"{standalone: true}\" id=\"address\" [disabled]=\"is_disabled()\"/>\r\n            <i class=\"la la-map-marker\"></i>   \r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <span class=\"pf-title\">City</span>\r\n          <div class=\"pf-field\">\r\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Los Angeles\" \r\n              [(ngModel)]=\"city\" [ngModelOptions]=\"{standalone: true}\"id=\"city\" [disabled]=\"is_disabled()\"/>\r\n            <i class=\"la la-map-marker\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <span class=\"pf-title\">State</span>\r\n          <div class=\"pf-field\">\r\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"California\"\r\n              [(ngModel)]=\"state\" [ngModelOptions]=\"{standalone: true}\" id=\"state\" [disabled]=\"is_disabled()\"/>\r\n            <i class=\"la la-map-o\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <span class=\"pf-title\">Country</span>\r\n          <div class=\"pf-field\">\r\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"USA\"\r\n              [(ngModel)]=\"country\" [ngModelOptions]=\"{standalone: true}\" id=\"country\" [disabled]=\"is_disabled()\"/>\r\n            <i class=\"la la-flag-o\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12\" style=\"display:none; padding:0\">\r\n        <a (click)=\"buttonPressed($event)\" class=\"post-job-btn\" style=\"float:right\" ng-disabled=\"false\">UPDATE</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"social-edit\"  id=\"sn\">\r\n    <h3>Social</h3>\r\n    <form>\r\n      <div class=\"row\" id=\"app-responsive-social-div\">\r\n        <div class=\"col-lg-6\">\r\n          <span class=\"pf-title\">Facebook</span>\r\n          <div class=\"pf-field\">\r\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"www.facebook.com/sample\"\r\n              id=\"urlFACEBOOK\" [(ngModel)]=\"urlFACEBOOK\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"is_disabled()\"/>\r\n            <i class=\"la la-facebook\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <span class=\"pf-title\">Twitter</span>\r\n          <div class=\"pf-field\">\r\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"www.twitter.com/sample\" \r\n              id=\"urlTWITTER\" [(ngModel)]=\"urlTWITTER\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"is_disabled()\"/>\r\n            <i class=\"la la-twitter\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <span class=\"pf-title\">Linkedin</span>\r\n          <div class=\"pf-field\">\r\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"www.linkedin.com/sample\" \r\n              id=\"urlLINKEDIN\" [(ngModel)]=\"urlLINKEDIN\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"is_disabled()\"/>\r\n            <i class=\"la la-linkedin\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <span class=\"pf-title\">Website</span>\r\n          <div class=\"pf-field\">\r\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"www.myDomain.com/sample\" \r\n              id=\"urlWEBSITE\" [(ngModel)]=\"urlWEBSITE\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"is_disabled()\"/>\r\n            <i class=\"la la-external-link-square\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <span class=\"pf-title\">Phone</span>\r\n          <div class=\"pf-field\">\r\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"+1 609 963 5896\" \r\n              id=\"phoneNumber\" [(ngModel)]=\"phoneNumber\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"is_disabled()\"/>\r\n            <i class=\"la la-phone\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <span class=\"pf-title\">Mail</span>\r\n          <div class=\"pf-field\">\r\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"mail@mail.com\" \r\n              id=\"email\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"is_disabled()\"/>\r\n            <i class=\"la la-envelope\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12\" style=\"display:none; padding:0\">\r\n        <a (click)=\"buttonPressed($event)\" class=\"post-job-btn\" style=\"float:right\" ng-disabled=\"false\">UPDATE</a>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/profile-info/profile-info.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/profile-info/profile-info.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInfoComponent", function() { return ProfileInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_create_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/create-user.service */ "./src/app/service/create-user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




// import { splitAtColon } from '../../../../node_modules/@angular/compiler/src/util';
var ProfileInfoComponent = /** @class */ (function () {
    function ProfileInfoComponent(http, createUser, activatedRoute, router) {
        this.http = http;
        this.createUser = createUser;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.disabled = undefined;
        this.lockResume = false;
    }
    ProfileInfoComponent.prototype.updateInfo = function (children) {
        var _this = this;
        this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        // Test Id, get from login in the future
        var hidden = document.getElementById("test-ID");
        var profileType = hidden.attributes["value"].value;
        // Url to API
        var url = "http://18.220.46.51:3000/api/" + profileType + "/" + this.user;
        // Get current Data
        this.http.get(url).subscribe(function (data) {
            var change = false;
            for (var i = 0; i < children.length; i++) {
                var event = children[i].children[1].children[0];
                // Get element id that triggered event
                var valueToChange = event.attributes[1].value;
                // Value of element
                var elValue = event.value;
                // Check if values match, in which case, do nothing
                if (data[valueToChange] != elValue) {
                    // Check for empty entry
                    if (elValue == "") {
                        continue;
                    }
                    else if (valueToChange.slice(0, 3) == "url") {
                        var found = false;
                        // Loop through current links looking for a match to update
                        for (var k = 0; k < data["links"].length; k++) {
                            if (data["links"][k]["type"][0] == valueToChange[3]) {
                                if (data["links"][k]["url"] != elValue) {
                                    data["links"][k]["url"] = elValue;
                                    change = true;
                                }
                                found = true;
                            }
                        }
                        // If no matches are found, create new instance
                        if (found == false) {
                            var type = valueToChange.slice(3);
                            data["links"].push({
                                $class: "network.krow.participants.Link",
                                url: elValue,
                                type: type,
                            });
                            change = true;
                        }
                    }
                    else {
                        // Change data value
                        data[valueToChange] = elValue;
                        change = true;
                    }
                }
            }
            if (change != false) {
                // Get timestamp and change data timestamp
                var timestamp = new Date();
                data["lastUpdated"] = timestamp;
                // Update entry
                _this.http.put(url, data).subscribe(function (data) {
                }, // Catch Errors
                function (err) {
                    if (err.error instanceof Error) {
                        console.log("Client-side error occured.");
                    }
                    else {
                        console.log("Server-side error occured.");
                    }
                });
            }
        }, // Catch Errors
        function (err) {
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
        });
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve('resolved');
            }, 500);
        });
    };
    ;
    ProfileInfoComponent.prototype.buttonPressed = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var children, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.target.attributes[2].value = true;
                        event.target.style = "float:right; background-color:gray; border-color: gray; opacity=0.8";
                        children = event.target.closest("form").children[0].children;
                        return [4 /*yield*/, this.updateInfo(children)];
                    case 1:
                        result = _a.sent();
                        event.target.style = "background-color: #fb236a; border-color: #fb236a; float: right";
                        event.target.closest("div").style = "display: none;";
                        event.target.attributes[2].value = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileInfoComponent.prototype.changeHandler = function (event) {
        event.target.closest("form").children[1].style = "display:show";
    };
    ProfileInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser");
        this.id = this.router.url.split("/")[3];
        // console.log(this.id)
        // console.log("x")
        // Test Id, get from login in the future
        var hidden = document.getElementById("test-ID");
        var profileType = hidden.attributes["value"].value;
        console.log(this.router.url);
        if (this.router.url.startsWith("/employer")) {
            // Set Company/Name 
            document.getElementById("app-responsive-component-profile").innerText = "Company";
            // Change First input value, id, title to match employer name
            var employerName = document.getElementById("app-responsive-component-profile-first");
            employerName.children[0].innerHTML = "Company Name";
            employerName.children[1].children[0].attributes[2].value = "Company Name";
            employerName.children[1].children[0].attributes[1].value = "employerName";
            // Change Second input value, id, title to match description
            var description = document.getElementById("app-responsive-component-profile-second");
            description.children[0].innerHTML = "Description";
            description.children[1].children[0].attributes[2].value = "Company Description";
            description.children[1].children[0].attributes[1].value = "description";
            var url = "http://18.220.46.51:3000/api/Employer/" + this.user;
            // Get Data
            this.http.get(url).subscribe(function (data) {
                // Display data fetched from API
                _this.first = data["employerName"];
                _this.second = data["description"];
                _this.address = data["address"];
                _this.city = data["city"];
                _this.state = data["state"];
                _this.country = data["country"];
                _this.phoneNumber = data["phoneNumber"];
                _this.email = data["email"];
                // Split url links
                for (var i = 0; i < data["links"].length; i++) {
                    var curr = data["links"][i];
                    if (curr["type"] == "FACEBOOK") {
                        _this.urlFACEBOOK = curr["url"];
                    }
                    else if (curr["type"] == "TWITTER") {
                        _this.urlTWITTER = curr["url"];
                    }
                    else if (curr["type"] == "LINKEDIN") {
                        _this.urlLINKEDIN = curr["url"];
                    }
                    else if (curr["type"] == "WEBSITE") {
                        _this.urlWEBSITE = curr["url"];
                    }
                }
            }, // Catch Errors
            function (err) {
                if (err.error instanceof Error) {
                    console.log("Client-side error occured.");
                }
                else {
                    console.log("Server-side error occured.");
                }
            });
        }
        else if (this.router.url.startsWith("/applicant")) {
            // this.activatedRoute.params.subscribe(params => {this.id = params["applicantID"]});
            console.log(this.id);
            if (this.user == this.id || this.id === undefined) {
                // if (sessionStorage.getItem("view") !== undefined && sessionStorage.getItem("view") == "potApplicant") {
                // this.id = this.user
                this.disabled = false;
                this.id = this.user;
                this.lockResume = true;
            }
            else {
                this.disabled = true;
            }
            console.log(this.id);
            // Set Company/Name 
            document.getElementById("app-responsive-component-profile").innerText = "Name";
            // Change First input value, id, title to match first name
            var firstName = document.getElementById("app-responsive-component-profile-first");
            firstName.children[0].innerHTML = "First";
            firstName.children[1].children[0].attributes[2].value = "Will";
            firstName.children[1].children[0].attributes[1].value = "firstName";
            // Change Second input value, id, title to match last name
            var lastName = document.getElementById("app-responsive-component-profile-second");
            lastName.attributes[1].value = "col-lg-6";
            lastName.children[0].innerHTML = "Last";
            lastName.children[1].children[0].attributes[2].value = "Smith";
            lastName.children[1].children[0].attributes[1].value = "lastName";
            var url = "http://18.220.46.51:3000/api/Applicant/" + this.id;
            // Get Data
            this.http.get(url).subscribe(function (data) {
                // Display data fetched from API
                _this.first = data["firstName"];
                _this.second = data["lastName"];
                _this.address = data["address"];
                _this.city = data["city"];
                _this.state = data["state"];
                _this.country = data["country"];
                _this.phoneNumber = data["phoneNumber"];
                _this.email = data["email"];
                // Split url links
                for (var i = 0; i < data["links"].length; i++) {
                    var curr = data["links"][i];
                    if (curr["type"] == "FACEBOOK") {
                        _this.urlFACEBOOK = curr["url"];
                    }
                    else if (curr["type"] == "TWITTER") {
                        _this.urlTWITTER = curr["url"];
                    }
                    else if (curr["type"] == "LINKEDIN") {
                        _this.urlLINKEDIN = curr["url"];
                    }
                    else if (curr["type"] == "WEBSITE") {
                        _this.urlWEBSITE = curr["url"];
                    }
                }
            }, // Catch Errors
            function (err) {
                if (err.error instanceof Error) {
                    console.log("Client-side error occured.");
                }
                else {
                    console.log("Server-side error occured.");
                }
            });
        }
    };
    ProfileInfoComponent.prototype.is_disabled = function () {
        return this.disabled;
    };
    ProfileInfoComponent.prototype.viewUserResume = function () {
        this.router.navigate(["applicant/applicant-resume/" + this.id]);
    };
    ProfileInfoComponent.prototype.requestToHire = function () {
        // console.log(this.profileType)
        var url = "http://18.220.46.51:3000/api/RequestHireApplicant";
        console.log(this.id);
        // var applicantUrl = "http://18.220.46.51:3000/api/Applicant/" + this.id 
        // var jobUrl = "http://18.220.46.51:3000/api/Job/" + sessionStorage.getItem("fromJob")
        // var employerUrl = "http://18.220.46.51:3000/api/Employer/" + localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
        // console.log(applicantUrl)
        // console.log(jobUrl)
        // console.log(employerUrl)
        var data = {
            "applicant": this.id,
            "employer": localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser"),
            "job": sessionStorage.getItem("fromJob")
        };
        // jobData.tags = jobData.toString().split(",")
        this.http.post(url, data).subscribe(function (data) {
            alert("Success! The applicant has been notified!");
        }, function (err) {
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
                console.log(err);
                alert("You have already requested to hire this applicant");
            }
        });
        //           }
        //       }
        //   }
        // )
        // console.log(data)
    };
    ProfileInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-info',
            template: __webpack_require__(/*! ./profile-info.component.html */ "./src/app/shared/profile-info/profile-info.component.html"),
            styles: [__webpack_require__(/*! ./profile-info.component.css */ "./src/app/shared/profile-info/profile-info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _service_create_user_service__WEBPACK_IMPORTED_MODULE_2__["CreateUserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileInfoComponent);
    return ProfileInfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/requested-jobs/requested-jobs.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/requested-jobs/requested-jobs.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  requested-jobs works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shared/requested-jobs/requested-jobs.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/requested-jobs/requested-jobs.component.ts ***!
  \*******************************************************************/
/*! exports provided: RequestedJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestedJobsComponent", function() { return RequestedJobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequestedJobsComponent = /** @class */ (function () {
    function RequestedJobsComponent() {
    }
    RequestedJobsComponent.prototype.ngOnInit = function () {
    };
    RequestedJobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-requested-jobs',
            template: __webpack_require__(/*! ./requested-jobs.component.html */ "./src/app/shared/requested-jobs/requested-jobs.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], RequestedJobsComponent);
    return RequestedJobsComponent;
}());



/***/ }),

/***/ "./src/app/shared/terminated-jobs/terminated-jobs.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/terminated-jobs/terminated-jobs.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  terminated-jobs works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shared/terminated-jobs/terminated-jobs.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/terminated-jobs/terminated-jobs.component.ts ***!
  \*********************************************************************/
/*! exports provided: TerminatedJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminatedJobsComponent", function() { return TerminatedJobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TerminatedJobsComponent = /** @class */ (function () {
    function TerminatedJobsComponent() {
    }
    TerminatedJobsComponent.prototype.ngOnInit = function () {
    };
    TerminatedJobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terminated-jobs',
            template: __webpack_require__(/*! ./terminated-jobs.component.html */ "./src/app/shared/terminated-jobs/terminated-jobs.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TerminatedJobsComponent);
    return TerminatedJobsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    region: 'us-east-2',
    identityPoolId: 'us-east-2:e83a6051-fdec-4360-9685-ecc4fcd1b014',
    userPoolId: 'us-east-2_THcotoVBG',
    clientId: '7tvb9q2vkudvr2a2q18ib0o5qt',
    rekognitionBucket: 'rekognition-pics',
    albumName: "usercontent",
    bucketRegion: 'us-east-1',
    ddbTableName: 'LoginTrail',
    cognito_idp_endpoint: '',
    cognito_identity_endpoint: '',
    sts_endpoint: '',
    dynamodb_endpoint: '',
    s3_endpoint: ''
    // region: 'us-east-1',
    // identityPoolId: 'us-east-1:c91da654-3704-45e0-8614-2b8f4b00a4e7',
    // userPoolId: 'us-east-1_ZdXOmrRsu',
    // clientId: '7tvb9q2vkudvr2a2q18ib0o5qt',
    // rekognitionBucket: 'rekognition-pics',
    // albumName: "usercontent",
    // bucketRegion: 'us-east-1',
    // ddbTableName: 'LoginTrail',
    // cognito_idp_endpoint: '',
    // cognito_identity_endpoint: '',
    // sts_endpoint: '',
    // dynamodb_endpoint: '',
    // s3_endpoint: ''
};


/***/ }),

/***/ "./src/images/404.png":
/*!****************************!*\
  !*** ./src/images/404.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/icon.png":
/*!*****************************!*\
  !*** ./src/images/icon.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/icon2.png":
/*!******************************!*\
  !*** ./src/images/icon2.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/krow-header-2.png":
/*!**************************************!*\
  !*** ./src/images/krow-header-2.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAAAZCAYAAADHckkOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc1NUM2MEUxMkYwRTExRTg4QzA2QTRCQzVFMDgyM0ZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc1NUM2MEUyMkYwRTExRTg4QzA2QTRCQzVFMDgyM0ZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzU1QzYwREYyRjBFMTFFODhDMDZBNEJDNUUwODIzRkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzU1QzYwRTAyRjBFMTFFODhDMDZBNEJDNUUwODIzRkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5GnSBIAAAOW0lEQVR42uxc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"

/***/ }),

/***/ "./src/images/krow-logo.png":
/*!**********************************!*\
  !*** ./src/images/krow-logo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "krow-logo.png";

/***/ }),

/***/ "./src/images/loader.gif":
/*!*******************************!*\
  !*** ./src/images/loader.gif ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "loader.gif";

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tucker Siegel\Documents\KrowFrontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map