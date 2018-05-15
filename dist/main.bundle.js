webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Root: Landing router -->\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_login_login_component__ = __webpack_require__("./src/app/main/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_register_register_component__ = __webpack_require__("./src/app/main/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/main/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__employer_employer_profile_employer_profile_component__ = __webpack_require__("./src/app/employer/employer-profile/employer-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__employer_employer_post_jobs_employer_post_jobs_component__ = __webpack_require__("./src/app/employer/employer-post-jobs/employer-post-jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__applicant_applicant_profile_applicant_profile_component__ = __webpack_require__("./src/app/applicant/applicant-profile/applicant-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__applicant_applicant_resume_applicant_resume_component__ = __webpack_require__("./src/app/applicant/applicant-resume/applicant-resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_profile_info_profile_info_component__ = __webpack_require__("./src/app/shared/profile-info/profile-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_available_jobs_available_jobs_component__ = __webpack_require__("./src/app/shared/available-jobs/available-jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_completed_jobs_completed_jobs_component__ = __webpack_require__("./src/app/shared/completed-jobs/completed-jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_terminated_jobs_terminated_jobs_component__ = __webpack_require__("./src/app/shared/terminated-jobs/terminated-jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_in_progress_jobs_in_progress_jobs_component__ = __webpack_require__("./src/app/shared/in-progress-jobs/in-progress-jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_update_resume_service__ = __webpack_require__("./src/app/shared/update-resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__applicant_applicant_resume_resume_education_resume_education_component__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-education/resume-education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__applicant_applicant_resume_resume_education_education_directive__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-education/education.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__applicant_applicant_resume_resume_education_education_main_component__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-education/education-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__applicant_applicant_resume_resume_skills_resume_skills_component__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-skills/resume-skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__applicant_applicant_resume_resume_skills_skills_main_component__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-skills/skills-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__applicant_applicant_resume_resume_experience_resume_experience_component__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-experience/resume-experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__applicant_applicant_resume_resume_experience_experience_directive__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-experience/experience.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__applicant_applicant_resume_resume_experience_experience_main_component__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-experience/experience-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__applicant_applicant_resume_resume_achievements_resume_achievements_component__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-achievements/resume-achievements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__applicant_applicant_resume_resume_achievements_achievement_directive__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-achievements/achievement.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__applicant_applicant_resume_resume_achievements_achievements_main_component__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-achievements/achievements-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__applicant_applicant_resume_resume_affiliations_resume_affiliations_component__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-affiliations/resume-affiliations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__applicant_applicant_resume_resume_affiliations_affiliations_directive__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-affiliations/affiliations.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__applicant_applicant_resume_resume_affiliations_affiliations_main_component__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-affiliations/affiliations-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_coming_soon_coming_soon_component__ = __webpack_require__("./src/app/shared/coming-soon/coming-soon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__shared_requested_jobs_requested_jobs_component__ = __webpack_require__("./src/app/shared/requested-jobs/requested-jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shared_hire_requests_hire_requests_component__ = __webpack_require__("./src/app/shared/hire-requests/hire-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shared_job_search_job_search_component__ = __webpack_require__("./src/app/shared/job-search/job-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Main imports



// Enable Http to get data from server

// Router imports

// Main components



// Employer components


// Applicant components


// Shared components
























// Create nested Routing path
var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__main_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'employer-profile',
        component: __WEBPACK_IMPORTED_MODULE_8__employer_employer_profile_employer_profile_component__["a" /* EmployerProfileComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_12__shared_profile_info_profile_info_component__["a" /* ProfileInfoComponent */]
            },
            {
                path: 'profile-info',
                component: __WEBPACK_IMPORTED_MODULE_12__shared_profile_info_profile_info_component__["a" /* ProfileInfoComponent */]
            },
            {
                path: 'employer-post-jobs',
                //component: EmployerPostJobsComponent, 
                component: __WEBPACK_IMPORTED_MODULE_32__shared_coming_soon_coming_soon_component__["a" /* ComingSoonComponent */]
            },
            {
                path: 'completed-jobs',
                //component: CompletedJobsComponent, 
                component: __WEBPACK_IMPORTED_MODULE_32__shared_coming_soon_coming_soon_component__["a" /* ComingSoonComponent */]
            },
            {
                path: 'terminated-jobs',
                //component: TerminatedJobsComponent, 
                component: __WEBPACK_IMPORTED_MODULE_32__shared_coming_soon_coming_soon_component__["a" /* ComingSoonComponent */]
            },
            {
                path: 'in-progress-jobs',
                //component: InProgressJobsComponent, 
                component: __WEBPACK_IMPORTED_MODULE_32__shared_coming_soon_coming_soon_component__["a" /* ComingSoonComponent */]
            },
            {
                path: 'available-jobs',
                //component: AvailableJobsComponent, 
                component: __WEBPACK_IMPORTED_MODULE_32__shared_coming_soon_coming_soon_component__["a" /* ComingSoonComponent */]
            },
            {
                path: 'job-search',
                //component: JobSearchComponent, 
                component: __WEBPACK_IMPORTED_MODULE_32__shared_coming_soon_coming_soon_component__["a" /* ComingSoonComponent */]
            }
        ]
    },
    {
        path: 'applicant-profile',
        component: __WEBPACK_IMPORTED_MODULE_10__applicant_applicant_profile_applicant_profile_component__["a" /* ApplicantProfileComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_12__shared_profile_info_profile_info_component__["a" /* ProfileInfoComponent */]
            },
            {
                path: 'profile-info',
                component: __WEBPACK_IMPORTED_MODULE_12__shared_profile_info_profile_info_component__["a" /* ProfileInfoComponent */]
            },
            {
                path: 'applicant-resume',
                component: __WEBPACK_IMPORTED_MODULE_11__applicant_applicant_resume_applicant_resume_component__["a" /* ApplicantResumeComponent */]
            },
            {
                path: 'completed-jobs',
                //component: CompletedJobsComponent, 
                component: __WEBPACK_IMPORTED_MODULE_32__shared_coming_soon_coming_soon_component__["a" /* ComingSoonComponent */]
            },
            {
                path: 'terminated-jobs',
                //component: TerminatedJobsComponent, 
                component: __WEBPACK_IMPORTED_MODULE_32__shared_coming_soon_coming_soon_component__["a" /* ComingSoonComponent */]
            },
            {
                path: 'in-progress-jobs',
                //component: InProgressJobsComponent, 
                component: __WEBPACK_IMPORTED_MODULE_32__shared_coming_soon_coming_soon_component__["a" /* ComingSoonComponent */]
            },
            {
                path: 'requested-jobs',
                //component: RequestedJobsComponent, 
                component: __WEBPACK_IMPORTED_MODULE_32__shared_coming_soon_coming_soon_component__["a" /* ComingSoonComponent */]
            },
            {
                path: 'hire-requests',
                //component: HireRequestsComponent, 
                component: __WEBPACK_IMPORTED_MODULE_32__shared_coming_soon_coming_soon_component__["a" /* ComingSoonComponent */]
            },
            {
                path: 'job-search',
                //component: JobSearchComponent, 
                component: __WEBPACK_IMPORTED_MODULE_32__shared_coming_soon_coming_soon_component__["a" /* ComingSoonComponent */]
            }
        ]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_5__main_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_6__main_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_7__main_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__employer_employer_profile_employer_profile_component__["a" /* EmployerProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_9__employer_employer_post_jobs_employer_post_jobs_component__["a" /* EmployerPostJobsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__applicant_applicant_profile_applicant_profile_component__["a" /* ApplicantProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__shared_available_jobs_available_jobs_component__["a" /* AvailableJobsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__shared_completed_jobs_completed_jobs_component__["a" /* CompletedJobsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shared_profile_info_profile_info_component__["a" /* ProfileInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__shared_terminated_jobs_terminated_jobs_component__["a" /* TerminatedJobsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__shared_in_progress_jobs_in_progress_jobs_component__["a" /* InProgressJobsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__applicant_applicant_resume_applicant_resume_component__["a" /* ApplicantResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__main_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__main_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__applicant_applicant_resume_resume_education_resume_education_component__["a" /* ResumeEducationComponent */],
                __WEBPACK_IMPORTED_MODULE_21__applicant_applicant_resume_resume_skills_resume_skills_component__["a" /* ResumeSkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__applicant_applicant_resume_resume_experience_resume_experience_component__["a" /* ResumeExperienceComponent */],
                __WEBPACK_IMPORTED_MODULE_26__applicant_applicant_resume_resume_achievements_resume_achievements_component__["a" /* ResumeAchievementsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__applicant_applicant_resume_resume_affiliations_resume_affiliations_component__["a" /* ResumeAffiliationsComponent */],
                __WEBPACK_IMPORTED_MODULE_32__shared_coming_soon_coming_soon_component__["a" /* ComingSoonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__main_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_33__shared_requested_jobs_requested_jobs_component__["a" /* RequestedJobsComponent */],
                __WEBPACK_IMPORTED_MODULE_34__shared_hire_requests_hire_requests_component__["a" /* HireRequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_35__shared_job_search_job_search_component__["a" /* JobSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_28__applicant_applicant_resume_resume_achievements_achievements_main_component__["a" /* AchievementsMainComponent */],
                __WEBPACK_IMPORTED_MODULE_27__applicant_applicant_resume_resume_achievements_achievement_directive__["a" /* AchievementDirective */],
                __WEBPACK_IMPORTED_MODULE_30__applicant_applicant_resume_resume_affiliations_affiliations_directive__["a" /* AffiliationsDirective */],
                __WEBPACK_IMPORTED_MODULE_20__applicant_applicant_resume_resume_education_education_main_component__["a" /* EducationMainComponent */],
                __WEBPACK_IMPORTED_MODULE_19__applicant_applicant_resume_resume_education_education_directive__["a" /* EducationDirective */],
                __WEBPACK_IMPORTED_MODULE_25__applicant_applicant_resume_resume_experience_experience_main_component__["a" /* ExperienceMainComponent */],
                __WEBPACK_IMPORTED_MODULE_24__applicant_applicant_resume_resume_experience_experience_directive__["a" /* ExperienceDirective */],
                __WEBPACK_IMPORTED_MODULE_31__applicant_applicant_resume_resume_affiliations_affiliations_main_component__["a" /* AffiliationsMainComponent */],
                __WEBPACK_IMPORTED_MODULE_22__applicant_applicant_resume_resume_skills_skills_main_component__["a" /* SkillsMainComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_25__applicant_applicant_resume_resume_experience_experience_main_component__["a" /* ExperienceMainComponent */],
                __WEBPACK_IMPORTED_MODULE_31__applicant_applicant_resume_resume_affiliations_affiliations_main_component__["a" /* AffiliationsMainComponent */],
                __WEBPACK_IMPORTED_MODULE_22__applicant_applicant_resume_resume_skills_skills_main_component__["a" /* SkillsMainComponent */],
                __WEBPACK_IMPORTED_MODULE_20__applicant_applicant_resume_resume_education_education_main_component__["a" /* EducationMainComponent */],
                __WEBPACK_IMPORTED_MODULE_28__applicant_applicant_resume_resume_achievements_achievements_main_component__["a" /* AchievementsMainComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* DefaultUrlSerializer */],
                __WEBPACK_IMPORTED_MODULE_17__shared_update_resume_service__["a" /* UpdateResumeService */],
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-profile/applicant-profile.component.css":
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 991.5px) {\r\n    #disappear {\r\n        display: none;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/applicant/applicant-profile/applicant-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"page-loading\">\n\t<img src=\"{{LOADER}}\" alt=\"\" />\n\t<span>Loading...</span>\n</div> -->\n\n<p id=\"test-ID\" value=\"SAMPLEAPPLICANT\" style=\"display:none\"></p>\n\n<div class=\"theme-layout\" id=\"scrollup\">\n\t<header class=\"stick-top\">\n\t\t<div class=\"menu-sec\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t<a href=\"https://www.krow.network/\" target=\"_blank\" title=\"\"><img src=\"{{KROW_HEADER_2}}\" alt=\"\" /></a>\n\t\t\t\t</div><!-- Logo -->\n\t\t\t\t<div class=\"btn-extars\">\n\t\t\t\t\t<a [routerLink]=\"['job-search']\" routerLinkActive=\"active\" class=\"post-job-btn\"><i class=\"fa fa-search-plus\"></i>Find Job</a>\n\t\t\t\t\t<ul class=\"account-btns\">\n\t\t\t\t\t\t<li><a [routerLink]=\"['']\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-external-link-square\"></i> LogOut</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- Btn Extras -->\n\t\t\t\t<nav>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a [routerLink]=\"['profile-info']\" routerLinkActive=\"active\">Profile</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"menu-item-has-children\">\n\t\t\t\t\t\t\t<a>Jobs</a>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['completed-jobs']\" routerLinkActive=\"active\">Completed Jobs</a></li>\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['terminated-jobs']\" routerLinkActive=\"active\">Terminated Jobs</a></li>\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['in-progress-jobs']\" routerLinkActive=\"active\">In-Progress Jobs</a></li>\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['requested-jobs']\" routerLinkActive=\"active\">Requested Jobs</a></li>\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['hire-requests']\" routerLinkActive=\"active\">Hire Requests</a></li>\n\t\t\t\t\t\t\t</ul>\n            \t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a [routerLink]=\"['applicant-resume']\" routerLinkActive=\"active\">Resume</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</nav><!-- Menus -->\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\n\t<section class=\"overlape\">\n\t\t<div class=\"block no-padding\">\n\t\t\t<div data-velocity=\"-.1\" class=\"parallax scrolly-invisible no-parallax\"></div>\n\t\t\t<div class=\"container fluid\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t<div class=\"inner-header\" style=\"padding-top:120px\" id=\"responsive-title\">\n\t\t\t\t\t\t\t<h3>Welcome To The Krow Network</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<div class=\"block no-padding\">\n\t\t\t<div class=\"container\">\n\t\t\t\t <div class=\"row no-gape\">\n\t\t\t\t \t<aside class=\"col-lg-3 column border-right\" id=\"disappear\">\n\t\t\t\t \t\t<div class=\"widget\">\n\t\t\t\t \t\t\t<div class=\"tree_widget-sec\">\n\t\t\t\t \t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li class=\"inner-child\">\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['profile-info']\" routerLinkActive=\"active\"><i class=\"la la-briefcase\"></i>Profile</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t \t\t\t\t\t<li class=\"inner-child\">\n\t\t\t\t \t\t\t\t\t\t<a title=\"\" (click)=\"openJobs($event)\" id=\"somestupidshit\"><i class=\"la la-reorder\"></i>Jobs</a>\n\t\t\t\t \t\t\t\t\t\t<ul style=\"display: none;\">\n\t\t\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['completed-jobs']\" routerLinkActive=\"active\">Completed Jobs</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['terminated-jobs']\" routerLinkActive=\"active\">Terminated Jobs</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['in-progress-jobs']\" routerLinkActive=\"active\">In-Progress Jobs</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['requested-jobs']\" routerLinkActive=\"active\">Requested Jobs</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['hire-requests']\" routerLinkActive=\"active\">Hire Requests</a></li>\n\t\t\t\t \t\t\t\t\t\t</ul>\n\t\t\t\t \t\t\t\t\t</li>\n\t\t\t\t \t\t\t\t\t<li class=\"inner-child\">\n\t\t\t\t \t\t\t\t\t\t<a [routerLink]=\"['applicant-resume']\" routerLinkActive=\"active\"><i class=\"la la-file-text\"></i>Resume</a>\n\t\t\t\t \t\t\t\t\t</li>\n\t\t\t\t \t\t\t\t\t<li class=\"inner-child\">\n\t\t\t\t \t\t\t\t\t\t<a [routerLink]=\"['job-search']\" routerLinkActive=\"active\"><i class=\"fa fa-search-plus\"></i>Find Job</a>\n\t\t\t\t \t\t\t\t\t</li>\n\t\t\t\t \t\t\t\t\t<li class=\"inner-child\">\n\t\t\t\t\t\t\t\t\t\t<a><i class=\"la la-unlink\"></i>LogOut</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t \t\t\t\t</ul>\n\t\t\t\t \t\t\t</div>\n\t\t\t\t \t\t</div>\n\t\t\t\t\t</aside>\n\t\t\t\t\t<div class=\"col-lg-9 column\">\n\t\t\t\t\t\t<router-outlet ></router-outlet>\n\t\t\t\t\t</div>\n\t\t\t\t </div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<footer style=\"margin-top: 15px\">\n\t\t<div class=\"block\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-3 column\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<div class=\"about_widget\">\n\t\t\t\t\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.krow.network/\" target=\"_blank\" title=\"\"><img src=\"{{KROW_HEADER_2}}\" alt=\"\" /></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"social\">\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/KrowNetwork/\" target=\"_blank\" title=\"\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://twitter.com/krownetwork\" target=\"_blank\" title=\"\"><i class=\"fa fa-twitter\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.reddit.com/r/Krow/\" target=\"_blank\" title=\"\"><i class=\"fa fa-reddit\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.youtube.com/channel/UCmTgljCaCHkCPIbsE3IB4cA\" target=\"_blank\" title=\"\"><i class=\"fa fa-youtube\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://github.com/KrowNetwork/krowsite\" target=\"_blank\" title=\"\"><i class=\"fa fa-github\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://medium.com/@krownetwork\" target=\"_blank\" title=\"\"><i class=\"fa fa-medium\"></i></a>\n\t\t\t\t\t\t\t\t\t<!--TODO: Figure out, and add pics for the following -->\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.t.me/thekrownetwork\" target=\"_blank\" title=\"\"><i class=\"fa fa-telegram\"></i>T</a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://bitcointalk.org/index.php?topic=2891187.0\" target=\"_blank\" title=\"\"><i class=\"fa fa-bitcointalk\"></i>B</a>\n\t\t\t\t\t\t\t\t\t<a href=\"mailto:help@krow.network?Subject=Question\" target=\"_blank\" title=\"\"><i class=\"fa fa-mail\"></i>M</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div><!-- About Widget -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6 column\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<h3 class=\"footer-title\">Frequently Asked Questions</h3>\n\t\t\t\t\t\t\t<div class=\"link_widgets\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">A</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">List</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Of</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Possible</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">FAQ</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Links</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-3 column\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<div class=\"download_widget\">\n\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\"><img src=\"http://placehold.it/230x65\" alt=\"\" /></a>\n\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\"><img src=\"http://placehold.it/230x65\" alt=\"\" /></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"bottom-line\">\n\t\t\t<span>© 2018 Jobhunt All rights reserved. Design by Creative Layers</span>\n\t\t\t<a class=\"scrollup\" title=\"\" id=\"my-cool-button\" (click)=\"scrollup()\"><i class=\"la la-arrow-up\"></i></a>\n\t\t</div>\n\t</footer>\n</div>\n"

/***/ }),

/***/ "./src/app/applicant/applicant-profile/applicant-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicantProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApplicantProfileComponent = /** @class */ (function () {
    function ApplicantProfileComponent() {
        this.window = window;
        // IMAGES
        this.LOADER = __webpack_require__("./src/images/loader.gif");
        this.LOGO1 = __webpack_require__("./src/images/icon.png");
        this.LOGO2 = __webpack_require__("./src/images/icon2.png");
        this.KROW_LOGO = __webpack_require__("./src/images/krow-logo.png");
        this.KROW_HEADER_2 = __webpack_require__("./src/images/krow-header-2.png");
    }
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
    };
    ApplicantProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-applicant-profile',
            template: __webpack_require__("./src/app/applicant/applicant-profile/applicant-profile.component.html"),
            styles: [__webpack_require__("./src/app/applicant/applicant-profile/applicant-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApplicantProfileComponent);
    return ApplicantProfileComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/applicant-resume.component.css":
/***/ (function(module, exports) {

module.exports = "h3:hover {\r\n    background-color: #fb236a;\r\n    padding-left:46px;\r\n    -webkit-transition: all 0.7s ease;\r\n    transition: all 0.7s ease;\r\n}\r\nh3 {\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    margin: 0;\r\n    border-top: 1px solid #edeff7;\r\n    border-bottom: 0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/applicant-resume.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-left\">\n  <div class=\"social-edit\" id=\"sn\">\n    <h3 style=\"border-top: 0px\" (click)=\"handleClicked($event)\">\n      <i class=\"fa fa-toggle-down\" style=\"padding-right:10px\"></i>Education\n    </h3>\n    <div class=\"col-lg-12\" style=\"display: none\">\n      <app-resume-education></app-resume-education>\n    </div>\n  </div>\n</div>\n\n<div class=\"padding-left\">\n  <div class=\"social-edit\" id=\"sn\">\n    <h3 (click)=\"handleClicked($event)\">\n      <i class=\"fa fa-toggle-down\" style=\"padding-right:10px\"></i>Experience\n    </h3>\n    <div class=\"col-lg-12\" style=\"display: none\">\n      <app-resume-experience></app-resume-experience>\n    </div>\n  </div>\n</div>\n\n<div class=\"padding-left\">\n  <div class=\"social-edit\" id=\"sn\">\n    <h3 (click)=\"handleClicked($event)\">\n      <i class=\"fa fa-toggle-down\" style=\"padding-right:10px\"></i>Affiliations\n    </h3>\n    <div class=\"col-lg-12\" style=\"display: none\">\n      <app-resume-affiliations></app-resume-affiliations>\n    </div>\n  </div>\n</div>\n\n<div class=\"padding-left\">\n  <div class=\"social-edit\" id=\"sn\">\n    <h3 (click)=\"handleClicked($event)\">\n      <i class=\"fa fa-toggle-down\" style=\"padding-right:10px\"></i>Skills\n    </h3>\n    <div class=\"col-lg-12\" style=\"display: none\">\n      <app-resume-skills></app-resume-skills>\n    </div>\n  </div>\n</div>\n\n<div class=\"padding-left\">\n  <div class=\"social-edit\" id=\"sn\">\n    <h3 (click)=\"handleClicked($event)\">\n      <i class=\"fa fa-toggle-down\" style=\"padding-right:10px\"></i>Achievements\n    </h3>\n    <div class=\"col-lg-12\" style=\"display: none\">\n      <app-resume-achievements></app-resume-achievements>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/applicant-resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicantResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-applicant-resume',
            template: __webpack_require__("./src/app/applicant/applicant-resume/applicant-resume.component.html"),
            styles: [__webpack_require__("./src/app/applicant/applicant-resume/applicant-resume.component.css")]
        })
    ], ApplicantResumeComponent);
    return ApplicantResumeComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-achievements/achievement.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AchievementDirective = /** @class */ (function () {
    function AchievementDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AchievementDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[achievements-host]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */]])
    ], AchievementDirective);
    return AchievementDirective;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-achievements/achievements-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"social-edit\" id=\"sn\">\r\n    <form style=\"padding-left:0px; border-style: solid;\r\n        border-width: 1px;\r\n        border-color: #edeff7;\r\n        border-radius: 8px;\r\n        margin-bottom: 15px\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"del-resume\" (click)=\"deleteItem($event)\" style=\"float: right; margin-top: 10px\">\r\n                <a>\r\n                    <i class=\"la la-trash-o\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"edu-history-sec\">\r\n            <div class=\"edu-history\">\r\n                <i class=\"la la-trophy\" style=\"padding-top: 30px\"></i>\r\n                <div class=\"edu-hisinfo\">\r\n                    <div class=\"row\" style=\"padding:15px; padding-bottom:0px\">\r\n                        <div class=\"col-lg-12\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Achievement</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Spec Ops\" secret=\"title\" value={{data.title}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Description</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Classified\" secret=\"description\" value={{data.description}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">From</span> \r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"April 14, 1865\" secret=\"startDate\" value={{data.startDate}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">To</span> \r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"November 22, 1963\" secret=\"endDate\" value={{data.endDate}}/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-achievements/achievements-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementsMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AchievementsMainComponent.prototype, "data", void 0);
    AchievementsMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/applicant/applicant-resume/resume-achievements/achievements-main.component.html")
        })
    ], AchievementsMainComponent);
    return AchievementsMainComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-achievements/resume-achievements.component.css":
/***/ (function(module, exports) {

module.exports = ".la{\r\n    float: left; \r\n    margin-bottom: 30px; \r\n    width: 50px; \r\n    height: 50px; \r\n    font-size: 50px; \r\n    border-radius: 50%;\r\n}\r\na{\r\n    float: right; \r\n}"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-achievements/resume-achievements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" class=\"resumeContainer\">\n  <div class=\"col-lg-12\">\n    <ng-template achievements-host></ng-template>\n  </div>\n  <div class=\"col-lg-12\">\n    <i class=\"la la-plus-circle\" (mouseenter) =\"$event.target.style.color='#fb236a'\" (mouseleave) =\"$event.target.style.color='rgb(85, 85, 85)'\" (click)=\"loadComponent('empty')\" style=\"margin-bottom:15px\"></i>\n    <a class=\"post-job-btn\" style=\"display: none\" (click)=\"updateResume($event)\">UPDATE</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-achievements/resume-achievements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeAchievementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_item_type_constructor__ = __webpack_require__("./src/app/shared/item-type-constructor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__achievements_main_component__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-achievements/achievements-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resume_achievements_achievement_directive__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-achievements/achievement.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_update_resume_service__ = __webpack_require__("./src/app/shared/update-resume.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResumeAchievementsComponent = /** @class */ (function () {
    function ResumeAchievementsComponent(http, componentFactoryResolver, updateResumeService) {
        this.http = http;
        this.componentFactoryResolver = componentFactoryResolver;
        this.updateResumeService = updateResumeService;
    }
    ResumeAchievementsComponent.prototype.updateResume = function (event) {
        event.target.style = "display: none";
        this.updateResumeService.updateMain(event.target.closest("app-resume-achievements"));
    };
    ResumeAchievementsComponent.prototype.loadComponent = function (achievements) {
        if (achievements == "empty") {
            achievements = new Array();
            achievements.push(new __WEBPACK_IMPORTED_MODULE_2__shared_item_type_constructor__["a" /* ItemType */](__WEBPACK_IMPORTED_MODULE_3__achievements_main_component__["a" /* AchievementsMainComponent */], {
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
        this.http.get("http://18.220.46.51:3000/api/Applicant/SAMPLEAPPLICANT").subscribe(function (data) {
            var resumeAchievements = data["resume"]["achievements"];
            var achievements = new Array();
            for (var k = 0; k < resumeAchievements.length; k++) {
                achievements.push(new __WEBPACK_IMPORTED_MODULE_2__shared_item_type_constructor__["a" /* ItemType */](__WEBPACK_IMPORTED_MODULE_3__achievements_main_component__["a" /* AchievementsMainComponent */], {
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
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__resume_achievements_achievement_directive__["a" /* AchievementDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__resume_achievements_achievement_directive__["a" /* AchievementDirective */])
    ], ResumeAchievementsComponent.prototype, "achievementHost", void 0);
    ResumeAchievementsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resume-achievements',
            template: __webpack_require__("./src/app/applicant/applicant-resume/resume-achievements/resume-achievements.component.html"),
            styles: [__webpack_require__("./src/app/applicant/applicant-resume/resume-achievements/resume-achievements.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_5__shared_update_resume_service__["a" /* UpdateResumeService */]])
    ], ResumeAchievementsComponent);
    return ResumeAchievementsComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-affiliations/affiliations-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"social-edit\" id=\"sn\">\r\n    <form style=\"padding-left:0px; border-style: solid;\r\n        border-width: 1px;\r\n        border-color: #edeff7;\r\n        border-radius: 8px;\r\n        margin-bottom: 15px\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"del-resume\" (click)=\"deleteItem($event)\" style=\"float: right; margin-top: 10px\">\r\n                <a>\r\n                    <i class=\"la la-trash-o\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"edu-history-sec\">\r\n            <div class=\"edu-history\">\r\n                <i class=\"la la-users\" style=\"padding-top: 30px\"></i>\r\n                <div class=\"edu-hisinfo\">\r\n                    <div class=\"row\" style=\"padding:15px; padding-bottom:0px\">\r\n                        <div class=\"col-lg-12\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Organization</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Organization Name\" secret=\"title\" value={{data.title}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Description</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Sample Description\" secret=\"description\" value={{data.description}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">From</span> \r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Start date\" secret=\"startDate\" value={{data.startDate}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">To</span> \r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"End date\" secret=\"endDate\" value={{data.endDate}}/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-affiliations/affiliations-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AffiliationsMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AffiliationsMainComponent.prototype, "data", void 0);
    AffiliationsMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/applicant/applicant-resume/resume-affiliations/affiliations-main.component.html")
        })
    ], AffiliationsMainComponent);
    return AffiliationsMainComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-affiliations/affiliations.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AffiliationsDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AffiliationsDirective = /** @class */ (function () {
    function AffiliationsDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    AffiliationsDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[affiliations-host]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */]])
    ], AffiliationsDirective);
    return AffiliationsDirective;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-affiliations/resume-affiliations.component.css":
/***/ (function(module, exports) {

module.exports = ".la{\r\n    float: left; \r\n    margin-bottom: 30px; \r\n    width: 50px; \r\n    height: 50px; \r\n    font-size: 50px; \r\n    border-radius: 50%;\r\n}\r\na{\r\n    float: right; \r\n}"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-affiliations/resume-affiliations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" class=\"resumeContainer\">\n  <div class=\"col-lg-12\">\n    <ng-template affiliations-host></ng-template>\n  </div>\n  <div class=\"col-lg-12\">\n    <i class=\"la la-plus-circle\" (mouseenter) =\"$event.target.style.color='#fb236a'\" (mouseleave) =\"$event.target.style.color='rgb(85, 85, 85)'\" (click)=\"loadComponent('empty')\" style=\"margin-bottom:15px\"></i>\n    <a class=\"post-job-btn\" style=\"display: none\" (click)=\"updateResume($event)\">UPDATE</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-affiliations/resume-affiliations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeAffiliationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_item_type_constructor__ = __webpack_require__("./src/app/shared/item-type-constructor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__affiliations_main_component__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-affiliations/affiliations-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resume_affiliations_affiliations_directive__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-affiliations/affiliations.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_update_resume_service__ = __webpack_require__("./src/app/shared/update-resume.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
            affiliations.push(new __WEBPACK_IMPORTED_MODULE_2__shared_item_type_constructor__["a" /* ItemType */](__WEBPACK_IMPORTED_MODULE_3__affiliations_main_component__["a" /* AffiliationsMainComponent */], {
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
        this.http.get("http://18.220.46.51:3000/api/Applicant/SAMPLEAPPLICANT").subscribe(function (data) {
            var resumeAffiliations = data["resume"]["affiliations"];
            var affiliations = new Array();
            for (var k = 0; k < resumeAffiliations.length; k++) {
                affiliations.push(new __WEBPACK_IMPORTED_MODULE_2__shared_item_type_constructor__["a" /* ItemType */](__WEBPACK_IMPORTED_MODULE_3__affiliations_main_component__["a" /* AffiliationsMainComponent */], {
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
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__resume_affiliations_affiliations_directive__["a" /* AffiliationsDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__resume_affiliations_affiliations_directive__["a" /* AffiliationsDirective */])
    ], ResumeAffiliationsComponent.prototype, "affiliationHost", void 0);
    ResumeAffiliationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resume-affiliations',
            template: __webpack_require__("./src/app/applicant/applicant-resume/resume-affiliations/resume-affiliations.component.html"),
            styles: [__webpack_require__("./src/app/applicant/applicant-resume/resume-affiliations/resume-affiliations.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_5__shared_update_resume_service__["a" /* UpdateResumeService */]])
    ], ResumeAffiliationsComponent);
    return ResumeAffiliationsComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-education/education-main.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"social-edit\" id=\"sn\">\r\n    <form style=\"padding-left:0px; border-style: solid;\r\n        border-width: 1px;\r\n        border-color: #edeff7;\r\n        border-radius: 8px;\r\n        margin-bottom: 15px\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"del-resume\" (click)=\"deleteItem($event)\" style=\"float: right; margin-top: 10px\">\r\n                <a>\r\n                    <i class=\"la la-trash-o\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"edu-history-sec\">\r\n            <div class=\"edu-history\">\r\n                <i class=\"la la-graduation-cap\" style=\"padding-top: 30px\"></i>\r\n                <div class=\"edu-hisinfo\">\r\n                    <div class=\"row\" style=\"padding:15px; padding-bottom:0px\">\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">School</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Princeton\" secret=\"title\" value={{data.title}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Degree</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Some Made-Up Degree\" secret=\"description\" value={{data.description}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">From</span> \r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Too Long Ago\" secret=\"startDate\" value={{data.startDate}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">To</span> \r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"I Wish\" secret=\"endDate\" value={{data.endDate}}/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-education/education-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EducationMainComponent.prototype, "data", void 0);
    EducationMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/applicant/applicant-resume/resume-education/education-main.component.html")
        })
    ], EducationMainComponent);
    return EducationMainComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-education/education.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationDirective = /** @class */ (function () {
    function EducationDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    EducationDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[education-host]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */]])
    ], EducationDirective);
    return EducationDirective;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-education/resume-education.component.css":
/***/ (function(module, exports) {

module.exports = ".la{\r\n    float: left; \r\n    margin-bottom: 30px; \r\n    width: 50px; \r\n    height: 50px; \r\n    font-size: 50px; \r\n    border-radius: 50%;\r\n}\r\na{\r\n    float: right; \r\n}"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-education/resume-education.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" class=\"resumeContainer\">\n  <div class=\"col-lg-12\">\n    <ng-template education-host></ng-template>\n  </div>\n  <div class=\"col-lg-12\">\n    <i class=\"la la-plus-circle\" (mouseenter) =\"$event.target.style.color='#fb236a'\" (mouseleave) =\"$event.target.style.color='rgb(85, 85, 85)'\" (click)=\"loadComponent('empty')\" style=\"margin-bottom:15px\"></i>\n    <a class=\"post-job-btn\" style=\"display: none\" (click)=\"updateResume($event)\">UPDATE</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-education/resume-education.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeEducationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_item_type_constructor__ = __webpack_require__("./src/app/shared/item-type-constructor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__education_main_component__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-education/education-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resume_education_education_directive__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-education/education.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_update_resume_service__ = __webpack_require__("./src/app/shared/update-resume.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
            educations.push(new __WEBPACK_IMPORTED_MODULE_2__shared_item_type_constructor__["a" /* ItemType */](__WEBPACK_IMPORTED_MODULE_3__education_main_component__["a" /* EducationMainComponent */], {
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
        this.http.get("http://18.220.46.51:3000/api/Applicant/SAMPLEAPPLICANT").subscribe(function (data) {
            var resumeEducations = data["resume"]["education"];
            var educations = new Array();
            for (var k = 0; k < resumeEducations.length; k++) {
                educations.push(new __WEBPACK_IMPORTED_MODULE_2__shared_item_type_constructor__["a" /* ItemType */](__WEBPACK_IMPORTED_MODULE_3__education_main_component__["a" /* EducationMainComponent */], {
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
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__resume_education_education_directive__["a" /* EducationDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__resume_education_education_directive__["a" /* EducationDirective */])
    ], ResumeEducationComponent.prototype, "educationHost", void 0);
    ResumeEducationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resume-education',
            template: __webpack_require__("./src/app/applicant/applicant-resume/resume-education/resume-education.component.html"),
            styles: [__webpack_require__("./src/app/applicant/applicant-resume/resume-education/resume-education.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_5__shared_update_resume_service__["a" /* UpdateResumeService */]])
    ], ResumeEducationComponent);
    return ResumeEducationComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-experience/experience-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"social-edit\" id=\"sn\">\r\n    <form style=\"padding-left:0px; border-style: solid;\r\n        border-width: 1px;\r\n        border-color: #edeff7;\r\n        border-radius: 8px;\r\n        margin-bottom: 15px\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"del-resume\" (click)=\"deleteItem($event)\" style=\"float: right; margin-top: 10px\">\r\n                <a>\r\n                    <i class=\"la la-trash-o\"></i>\r\n                </a>\r\n            </div>\r\n        </div>\r\n        <div class=\"edu-history-sec\">\r\n            <div class=\"edu-history\">\r\n                <i class=\"la la-briefcase\" style=\"padding-top: 30px\"></i>\r\n                <div class=\"edu-hisinfo\">\r\n                    <div class=\"row\" style=\"padding:15px; padding-bottom:0px\">\r\n                        <div class=\"col-lg-12\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Company</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Creative Company Name\" secret=\"title\" value={{data.title}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Position</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"What You Did\" secret=\"position\" value={{data.position}}/>\r\n                            </div>\r\n                        </div>\r\n                        <!-- \r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Type</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (click)=\"displayDropdown($event)\"/>\r\n                            </div>\r\n                        </div> \r\n                            'PROFESSIONALWORK', \r\n                            'PERSONALWORK', \r\n                            'INTERNSHIP', \r\n                            'EXTERNSHIP', \r\n                            'SHADOWING', \r\n                            'VOLUNTEER', \r\n                            'EDUCATION', \r\n                            'INTERNATIONAL', \r\n                            'HOBBY', \r\n                            'MENTORSHIP', \r\n                            'LEADERSHIP', \r\n                            'RESEARCH', \r\n                            'COCURRICULAR', \r\n                            'COOPERATIVE', \r\n                            'COMMUNITY', \r\n                            'OTHER'\r\n                        -->\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Type</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Proffesional? Hobby? Startup?\" secret=\"type\" value={{data.type}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">Description</span>\r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Details\" secret=\"description\" value={{data.description}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">From</span> \r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Start date\" secret=\"startDate\" value={{data.startDate}}/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6\">\r\n                            <span class=\"pf-title\" style=\"margin-top:0px\">To</span> \r\n                            <div class=\"pf-field\">\r\n                                <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"End date\" secret=\"endDate\" value={{data.endDate}}/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-experience/experience-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ExperienceMainComponent.prototype, "data", void 0);
    ExperienceMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/applicant/applicant-resume/resume-experience/experience-main.component.html")
        })
    ], ExperienceMainComponent);
    return ExperienceMainComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-experience/experience.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceDirective = /** @class */ (function () {
    function ExperienceDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    ExperienceDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[experience-host]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */]])
    ], ExperienceDirective);
    return ExperienceDirective;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-experience/resume-experience.component.css":
/***/ (function(module, exports) {

module.exports = ".la{\r\n    float: left; \r\n    margin-bottom: 30px; \r\n    width: 50px; \r\n    height: 50px; \r\n    font-size: 50px; \r\n    border-radius: 50%;\r\n}\r\na{\r\n    float: right; \r\n}"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-experience/resume-experience.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" class=\"resumeContainer\">\n  <div class=\"col-lg-12\">\n    <ng-template experience-host></ng-template>\n  </div>\n  <div class=\"col-lg-12\">\n    <i class=\"la la-plus-circle\" (mouseenter) =\"$event.target.style.color='#fb236a'\" (mouseleave) =\"$event.target.style.color='rgb(85, 85, 85)'\" (click)=\"loadComponent('empty')\" style=\"margin-bottom:15px\"></i>\n    <a class=\"post-job-btn\" style=\"display: none\" (click)=\"updateResume($event)\">UPDATE</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-experience/resume-experience.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeExperienceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_item_type_constructor__ = __webpack_require__("./src/app/shared/item-type-constructor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applicant_resume_resume_experience_experience_main_component__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-experience/experience-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resume_experience_experience_directive__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-experience/experience.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_update_resume_service__ = __webpack_require__("./src/app/shared/update-resume.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
            experiences.push(new __WEBPACK_IMPORTED_MODULE_2__shared_item_type_constructor__["a" /* ItemType */](__WEBPACK_IMPORTED_MODULE_3__applicant_resume_resume_experience_experience_main_component__["a" /* ExperienceMainComponent */], {
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
        this.http.get("http://18.220.46.51:3000/api/Applicant/SAMPLEAPPLICANT").subscribe(function (data) {
            var resumeExperiences = data["resume"]["experience"];
            var experiences = new Array();
            for (var k = 0; k < resumeExperiences.length; k++) {
                experiences.push(new __WEBPACK_IMPORTED_MODULE_2__shared_item_type_constructor__["a" /* ItemType */](__WEBPACK_IMPORTED_MODULE_3__applicant_resume_resume_experience_experience_main_component__["a" /* ExperienceMainComponent */], {
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
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__resume_experience_experience_directive__["a" /* ExperienceDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__resume_experience_experience_directive__["a" /* ExperienceDirective */])
    ], ResumeExperienceComponent.prototype, "achievementHost", void 0);
    ResumeExperienceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resume-experience',
            template: __webpack_require__("./src/app/applicant/applicant-resume/resume-experience/resume-experience.component.html"),
            styles: [__webpack_require__("./src/app/applicant/applicant-resume/resume-experience/resume-experience.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_5__shared_update_resume_service__["a" /* UpdateResumeService */]])
    ], ResumeExperienceComponent);
    return ResumeExperienceComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-skills/resume-skills.component.css":
/***/ (function(module, exports) {

module.exports = ".la{\r\n    float: left; \r\n    margin-bottom: 30px; \r\n    width: 50px; \r\n    height: 50px; \r\n    font-size: 50px; \r\n    border-radius: 50%;\r\n}\r\na{\r\n    float: right; \r\n}\r\n"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-skills/resume-skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\"  class=\"resumeContainer\">\n  <div class=\"col-lg-12\">\n    <div class=\"pf-field no-margin\">\n      <ul class=\"tags\" id=\"ulTags\" style=\"margin-bottom: 15px\">\n        <li class=\"tagAdd taglist\" id=\"lastNode\" style=\"margin-top: 5px\">\n          <input \n            type=\"text\" \n            id=\"search-field\" \n            placeholder=\"Web Design\" \n            (keydown)=\"changeHandler($event)\"\n            (keyup)=\"$event.keyCode == 13 ? submitHandler($event) : null\">\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-lg-12\">\n    <a class=\"post-job-btn\" style=\"margin-bottom: 15px; display: none\" (click)=\"updateResume($event)\">UPDATE</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-skills/resume-skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeSkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_update_resume_service__ = __webpack_require__("./src/app/shared/update-resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_item_type_constructor__ = __webpack_require__("./src/app/shared/item-type-constructor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skills_main_component__ = __webpack_require__("./src/app/applicant/applicant-resume/resume-skills/skills-main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResumeSkillsComponent = /** @class */ (function () {
    function ResumeSkillsComponent(updateResumeService, http, componentFactoryResolver) {
        this.updateResumeService = updateResumeService;
        this.http = http;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ResumeSkillsComponent.prototype.updateResume = function (event) {
        this.updateResumeService.updateSkills(event.target.closest("app-resume-skills"));
    };
    ResumeSkillsComponent.prototype.changeHandler = function (event) {
        event.target.closest(".resumeContainer").children[1].children[0].style = "margin-bottom: 15px; display: show";
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
        list.push(new __WEBPACK_IMPORTED_MODULE_3__shared_item_type_constructor__["a" /* ItemType */](__WEBPACK_IMPORTED_MODULE_4__skills_main_component__["a" /* SkillsMainComponent */], {
            skill: event.target.value,
        }));
        event.target.value = "";
        this.createNew(list[0]);
    };
    ResumeSkillsComponent.prototype.createNew = function (skill) {
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
        this.http.get("http://18.220.46.51:3000/api/Applicant/SAMPLEAPPLICANT").subscribe(function (data) {
            var skills = data["resume"]["skills"];
            var skillList = new Array();
            for (var i = 0; i < skills.length; i++) {
                skillList.push(new __WEBPACK_IMPORTED_MODULE_3__shared_item_type_constructor__["a" /* ItemType */](__WEBPACK_IMPORTED_MODULE_4__skills_main_component__["a" /* SkillsMainComponent */], {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resume-skills',
            template: __webpack_require__("./src/app/applicant/applicant-resume/resume-skills/resume-skills.component.html"),
            styles: [__webpack_require__("./src/app/applicant/applicant-resume/resume-skills/resume-skills.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_update_resume_service__["a" /* UpdateResumeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]])
    ], ResumeSkillsComponent);
    return ResumeSkillsComponent;
}());



/***/ }),

/***/ "./src/app/applicant/applicant-resume/resume-skills/skills-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsMainComponent = /** @class */ (function () {
    function SkillsMainComponent() {
    }
    SkillsMainComponent.prototype.removeSkill = function (event) {
        console.log("hi");
        event.target.closest(".resumeContainer").children[1].children[0].style = "margin-bottom: 15px; display: show";
        event.target.parentNode.remove();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SkillsMainComponent.prototype, "data", void 0);
    SkillsMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <li class=\"addedTag\">\n        {{data.skill}}\n        <span (click)=\"removeSkill($event)\" class=\"tagRemove\">\n            x\n        </span>\n        <input type=\"hidden\" name=\"tags[]\" value=\"{{data.skill}}\">\n    </li>\n  "
        })
    ], SkillsMainComponent);
    return SkillsMainComponent;
}());



/***/ }),

/***/ "./src/app/employer/employer-post-jobs/employer-post-jobs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employer/employer-post-jobs/employer-post-jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  employer-post-jobs works!\n</p>\n"

/***/ }),

/***/ "./src/app/employer/employer-post-jobs/employer-post-jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployerPostJobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployerPostJobsComponent = /** @class */ (function () {
    function EmployerPostJobsComponent() {
    }
    EmployerPostJobsComponent.prototype.ngOnInit = function () {
    };
    EmployerPostJobsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employer-post-jobs',
            template: __webpack_require__("./src/app/employer/employer-post-jobs/employer-post-jobs.component.html"),
            styles: [__webpack_require__("./src/app/employer/employer-post-jobs/employer-post-jobs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployerPostJobsComponent);
    return EmployerPostJobsComponent;
}());



/***/ }),

/***/ "./src/app/employer/employer-profile/employer-profile.component.css":
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 991.5px) {\r\n    #disappear {\r\n        display: none;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/employer/employer-profile/employer-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"page-loading\">\n\t<img src=\"{{LOADER}}\" alt=\"\" />\n\t<span>Loading...</span>\n</div> -->\n\n<p id=\"test-ID\" value=\"SAMPLEEMPLOYER\" style=\"display:none\"></p>\n\n<div class=\"theme-layout\" id=\"scrollup\">\n\t<header class=\"stick-top\">\n\t\t<div class=\"menu-sec\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t<a href=\"https://www.krow.network/\" target=\"_blank\" title=\"\"><img src=\"{{KROW_HEADER_2}}\" alt=\"\" /></a>\n\t\t\t\t</div><!-- Logo -->\n\t\t\t\t<div class=\"btn-extars\">\n\t\t\t\t\t<a [routerLink]=\"['employer-post-jobs']\" routerLinkActive=\"active\" class=\"post-job-btn\"><i class=\"la la-plus\"></i>Post Jobs</a>\n\t\t\t\t\t<ul class=\"account-btns\">\n\t\t\t\t\t\t<li><a [routerLink]=\"['']\" routerLinkActive=\"active\" title=\"\"><i class=\"la la-external-link-square\"></i>LogOut</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div><!-- Btn Extras -->\n\t\t\t\t<nav>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a [routerLink]=\"['profile-info']\" routerLinkActive=\"active\">Profile</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"menu-item-has-children\">\n\t\t\t\t\t\t\t<a>Jobs</a>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['completed-jobs']\" routerLinkActive=\"active\">Completed Jobs</a></li>\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['terminated-jobs']\" routerLinkActive=\"active\">Terminated Jobs</a></li>\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['in-progress-jobs']\" routerLinkActive=\"active\">In-Progress Jobs</a></li>\n\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['available-jobs']\" routerLinkActive=\"active\">Available Jobs</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</nav><!-- Menus -->\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\n\t<section class=\"overlape\">\n\t\t<div class=\"block no-padding\">\n\t\t\t<div data-velocity=\"-.1\" class=\"parallax scrolly-invisible no-parallax\"></div>\n\t\t\t<div class=\"container fluid\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t<div class=\"inner-header\" style=\"padding-top:120px\" id=\"responsive-title\">\n\t\t\t\t\t\t\t<h3>Welcome To The Krow Network</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section>\n\t\t<div class=\"block no-padding\">\n\t\t\t<div class=\"container\">\n\t\t\t\t <div class=\"row no-gape\">\n\t\t\t\t \t<aside class=\"col-lg-3 column border-right\" id=\"disappear\">\n\t\t\t\t \t\t<div class=\"widget\">\n\t\t\t\t \t\t\t<div class=\"tree_widget-sec\">\n\t\t\t\t \t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li class=\"inner-child\">\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['profile-info']\" routerLinkActive=\"active\"><i class=\"la la-briefcase\"></i>Profile</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t \t\t\t\t\t<li class=\"inner-child\">\n\t\t\t\t \t\t\t\t\t\t<a title=\"\"><i class=\"la la-reorder\"></i>Jobs</a>\n\t\t\t\t \t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['completed-jobs']\" routerLinkActive=\"active\">Completed Jobs</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['terminated-jobs']\" routerLinkActive=\"active\">Terminated Jobs</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['in-progress-jobs']\" routerLinkActive=\"active\">In-Progress Jobs</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a [routerLink]=\"['available-jobs']\" routerLinkActive=\"active\">Available Jobs</a></li>\n\t\t\t\t \t\t\t\t\t\t</ul>\n\t\t\t\t \t\t\t\t\t</li>\n\t\t\t\t \t\t\t\t\t<li class=\"inner-child\">\n\t\t\t\t \t\t\t\t\t\t<a [routerLink]=\"['employer-post-jobs']\" routerLinkActive=\"active\"><i class=\"la la-plus\"></i>Post Jobs</a>\n\t\t\t\t \t\t\t\t\t</li>\n\t\t\t\t \t\t\t\t\t<li class=\"inner-child\">\n\t\t\t\t\t\t\t\t\t\t<a><i class=\"la la-unlink\"></i>LogOut</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t \t\t\t\t</ul>\n\t\t\t\t \t\t\t</div>\n\t\t\t\t \t\t</div>\n\t\t\t\t\t</aside>\n\t\t\t\t\t<div class=\"col-lg-9 column\">\n\t\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t\t</div>\n\t\t\t\t </div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<footer style=\"margin-top: 15px\">\n\t\t<div class=\"block\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-3 column\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<div class=\"about_widget\">\n\t\t\t\t\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.krow.network/\" target=\"_blank\" title=\"\"><img src=\"{{KROW_HEADER_2}}\" alt=\"\" /></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"social\">\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/KrowNetwork/\" target=\"_blank\" title=\"\"><i class=\"fa fa-facebook\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://twitter.com/krownetwork\" target=\"_blank\" title=\"\"><i class=\"fa fa-twitter\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.reddit.com/r/Krow/\" target=\"_blank\" title=\"\"><i class=\"fa fa-reddit\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.youtube.com/channel/UCmTgljCaCHkCPIbsE3IB4cA\" target=\"_blank\" title=\"\"><i class=\"fa fa-youtube\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://github.com/KrowNetwork/krowsite\" target=\"_blank\" title=\"\"><i class=\"fa fa-github\"></i></a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://medium.com/@krownetwork\" target=\"_blank\" title=\"\"><i class=\"fa fa-medium\"></i></a>\n\t\t\t\t\t\t\t\t\t<!--TODO: Figure out, and add pics for the following -->\n\t\t\t\t\t\t\t\t\t<a href=\"https://www.t.me/thekrownetwork\" target=\"_blank\" title=\"\"><i class=\"fa fa-telegram\"></i>T</a>\n\t\t\t\t\t\t\t\t\t<a href=\"https://bitcointalk.org/index.php?topic=2891187.0\" target=\"_blank\" title=\"\"><i class=\"fa fa-bitcointalk\"></i>B</a>\n\t\t\t\t\t\t\t\t\t<a href=\"mailto:help@krow.network?Subject=Question\" target=\"_blank\" title=\"\"><i class=\"fa fa-mail\"></i>M</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div><!-- About Widget -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6 column\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<h3 class=\"footer-title\">Frequently Asked Questions</h3>\n\t\t\t\t\t\t\t<div class=\"link_widgets\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">A</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">List</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Of</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Possible</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">FAQ</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\">Links</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-3 column\">\n\t\t\t\t\t\t<div class=\"widget\">\n\t\t\t\t\t\t\t<div class=\"download_widget\">\n\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\"><img src=\"http://placehold.it/230x65\" alt=\"\" /></a>\n\t\t\t\t\t\t\t\t<a href=\"#\" title=\"\"><img src=\"http://placehold.it/230x65\" alt=\"\" /></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"bottom-line\">\n\t\t\t<span>© 2018 Jobhunt All rights reserved. Design by Creative Layers</span>\n\t\t\t<a class=\"scrollup\" title=\"\" id=\"my-cool-button\" (click)=\"scrollup()\"><i class=\"la la-arrow-up\"></i></a>\n\t\t</div>\n\t</footer>\n</div>"

/***/ }),

/***/ "./src/app/employer/employer-profile/employer-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployerProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployerProfileComponent = /** @class */ (function () {
    function EmployerProfileComponent() {
        // IMAGES
        this.LOADER = __webpack_require__("./src/images/loader.gif");
        this.LOGO1 = __webpack_require__("./src/images/icon.png");
        this.LOGO2 = __webpack_require__("./src/images/icon2.png");
        this.KROW_LOGO = __webpack_require__("./src/images/krow-logo.png");
        this.KROW_HEADER_2 = __webpack_require__("./src/images/krow-header-2.png");
    }
    EmployerProfileComponent.prototype.scrollup = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    EmployerProfileComponent.prototype.ngOnInit = function () {
    };
    EmployerProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employer-profile',
            template: __webpack_require__("./src/app/employer/employer-profile/employer-profile.component.html"),
            styles: [__webpack_require__("./src/app/employer/employer-profile/employer-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployerProfileComponent);
    return EmployerProfileComponent;
}());



/***/ }),

/***/ "./src/app/main/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"block remove-bottom\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"account-popup-area signin-popup-box static\">\n                        <div class=\"account-popup\">\t\t\n                                <h3>Welcome to the Krow Network!</h3>\t\t\t\t\n                                <form>\n                                <div class=\"cfield\">\n                                    <input type=\"text\" placeholder=\"Username\" />\n                                    <i class=\"la la-user\"></i>\n                                </div>\n                                <div class=\"cfield\">\n                                    <input type=\"password\" placeholder=\"********\" />\n                                    <i class=\"la la-key\"></i>\n                                </div>\n                                <p class=\"remember-label\">\n                                    <input type=\"checkbox\" name=\"cb\" id=\"cb1\"><label for=\"cb1\">Remember me</label>\n                                </p>\n                                <a href=\"#\" title=\"\">Forgot Password?</a>\n                                <button (click)=\"navigateApplicant()\">Applicant</button>\n                                <button (click)=\"navigateEmployer()\">Employer</button>\n                            </form>\n                            <div class=\"extra-login\">\n                                <span>Or</span>\n                                <div class=\"login-social\">\n                                    <a class=\"fb-login\" href=\"#\" title=\"\"><i class=\"fa fa-facebook\"></i></a>\n                                    <a class=\"tw-login\" href=\"#\" title=\"\"><i class=\"fa fa-twitter\"></i></a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/main/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.navigateApplicant = function () {
        this.router.navigate(["applicant-profile"]);
    };
    LoginComponent.prototype.navigateEmployer = function () {
        this.router.navigate(["employer-profile"]);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/main/login/login.component.html"),
            styles: [__webpack_require__("./src/app/main/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"theme-layout\" id=\"scrollup\">\n\t<section>\n\t\t<div class=\"block no-padding\">\n\t\t\t<div class=\"container fluid\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t<div class=\"main-featured-sec witherror\">\n\t\t\t\t\t\t\t<ul class=\"main-slider-sec text-arrows\">\n\t\t\t\t\t\t\t\t<!-- TODO: Get svg image and disable overflow -->\n\t\t\t\t\t\t\t\t<li><img src=\"http://placehold.it/1600x800\" alt=\"\" /></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"error-sec\" style=\"top: 50%\">\n\t\t\t\t\t\t\t\t<img src=\"{{PNFIMAGE}}\" alt=\"\" />\n\t\t\t\t\t\t\t\t<span>We Are Sorry, Page Not Found</span>\n\t\t\t\t\t\t\t\t<p>Unfortunately the page you were looking for could not be found. It may be temporarily unavailable, moved or no longer exist. Check the Url you entered for any mistakes and try again.</p>\n\t\t\t\t\t\t\t\t<h6><a href=\"#\" title=\"\">Back To Homepage</a></h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</div>"

/***/ }),

/***/ "./src/app/main/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
        this.PNFIMAGE = __webpack_require__("./src/images/404.png");
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/main/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/main/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/main/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/main/register/register.component.html"),
            styles: [__webpack_require__("./src/app/main/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/shared/available-jobs/available-jobs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/available-jobs/available-jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  available-jobs works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/available-jobs/available-jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailableJobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AvailableJobsComponent = /** @class */ (function () {
    function AvailableJobsComponent() {
    }
    AvailableJobsComponent.prototype.ngOnInit = function () {
    };
    AvailableJobsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-available-jobs',
            template: __webpack_require__("./src/app/shared/available-jobs/available-jobs.component.html"),
            styles: [__webpack_require__("./src/app/shared/available-jobs/available-jobs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AvailableJobsComponent);
    return AvailableJobsComponent;
}());



/***/ }),

/***/ "./src/app/shared/coming-soon/coming-soon.component.css":
/***/ (function(module, exports) {

module.exports = "/* Position text in the middle */\r\n#middle {\r\n    height: inherit;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/shared/coming-soon/coming-soon.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"middle\">\n  <h1>COMING SOON!</h1>\n</div>"

/***/ }),

/***/ "./src/app/shared/coming-soon/coming-soon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComingSoonComponent = /** @class */ (function () {
    function ComingSoonComponent() {
    }
    ComingSoonComponent.prototype.ngOnInit = function () {
    };
    ComingSoonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-coming-soon',
            template: __webpack_require__("./src/app/shared/coming-soon/coming-soon.component.html"),
            styles: [__webpack_require__("./src/app/shared/coming-soon/coming-soon.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComingSoonComponent);
    return ComingSoonComponent;
}());



/***/ }),

/***/ "./src/app/shared/completed-jobs/completed-jobs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/completed-jobs/completed-jobs.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/completed-jobs/completed-jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedJobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-completed-jobs',
            template: __webpack_require__("./src/app/shared/completed-jobs/completed-jobs.component.html"),
            styles: [__webpack_require__("./src/app/shared/completed-jobs/completed-jobs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CompletedJobsComponent);
    return CompletedJobsComponent;
}());



/***/ }),

/***/ "./src/app/shared/hire-requests/hire-requests.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/hire-requests/hire-requests.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  hire-requests works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/hire-requests/hire-requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HireRequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HireRequestsComponent = /** @class */ (function () {
    function HireRequestsComponent() {
    }
    HireRequestsComponent.prototype.ngOnInit = function () {
    };
    HireRequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hire-requests',
            template: __webpack_require__("./src/app/shared/hire-requests/hire-requests.component.html"),
            styles: [__webpack_require__("./src/app/shared/hire-requests/hire-requests.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HireRequestsComponent);
    return HireRequestsComponent;
}());



/***/ }),

/***/ "./src/app/shared/in-progress-jobs/in-progress-jobs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/in-progress-jobs/in-progress-jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  in-progress-jobs works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/in-progress-jobs/in-progress-jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InProgressJobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InProgressJobsComponent = /** @class */ (function () {
    function InProgressJobsComponent() {
    }
    InProgressJobsComponent.prototype.ngOnInit = function () {
    };
    InProgressJobsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-in-progress-jobs',
            template: __webpack_require__("./src/app/shared/in-progress-jobs/in-progress-jobs.component.html"),
            styles: [__webpack_require__("./src/app/shared/in-progress-jobs/in-progress-jobs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InProgressJobsComponent);
    return InProgressJobsComponent;
}());



/***/ }),

/***/ "./src/app/shared/item-type-constructor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemType; });
var ItemType = /** @class */ (function () {
    function ItemType(component, data) {
        this.component = component;
        this.data = data;
    }
    return ItemType;
}());



/***/ }),

/***/ "./src/app/shared/job-search/job-search.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/job-search/job-search.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  job-search works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/job-search/job-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobSearchComponent = /** @class */ (function () {
    function JobSearchComponent() {
    }
    JobSearchComponent.prototype.ngOnInit = function () {
    };
    JobSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-job-search',
            template: __webpack_require__("./src/app/shared/job-search/job-search.component.html"),
            styles: [__webpack_require__("./src/app/shared/job-search/job-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JobSearchComponent);
    return JobSearchComponent;
}());



/***/ }),

/***/ "./src/app/shared/profile-info/profile-info.component.css":
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    margin: 0;\r\n    border-top: 1px solid #edeff7;\r\n    border-bottom: 0px;\r\n}\r\na {\r\n    margin-bottom: 15px;\r\n}"

/***/ }),

/***/ "./src/app/shared/profile-info/profile-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-left\">\n  <div class=\"social-edit\"  id=\"sn\">\n    <h3 id=\"app-responsive-component-profile\"></h3>\n    <form>\n      <div class=\"row\">\n        <div id=\"app-responsive-component-profile-first\" class=\"col-lg-6\">\n          <span class=\"pf-title\"></span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"\" id=\"\" value=\"\"/>\n          </div>\n        </div>\n        <div id=\"app-responsive-component-profile-second\" class=\"col-lg-12\">\n          <span class=\"pf-title\"></span> \n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"\" id=\"\" value=\"\"/>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-12\" style=\"display:none; padding:0\">\n        <a (click)=\"buttonPressed($event)\" class=\"post-job-btn\" style=\"float:right\" ng-disabled=\"false\">UPDATE</a>\n      </div>\n    </form>\n  </div>\n  <div class=\"social-edit\"  id=\"sn\">\n    <h3>Address</h3>\n    <form>\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Address</span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"4632 1/2 Hollywood Boulevard\" id=\"address\" value=\"\"/>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">City</span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"Loas Angeles\" id=\"city\" value=\"\"/>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">State</span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"California\" id=\"state\" value=\"\"/>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Country</span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"USA\" id=\"country\" value=\"\"/>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-12\" style=\"display:none; padding:0\">\n        <a (click)=\"buttonPressed($event)\" class=\"post-job-btn\" style=\"float:right\" ng-disabled=\"false\">UPDATE</a>\n      </div>\n    </form>\n  </div>\n  <div class=\"social-edit\"  id=\"sn\">\n    <h3>Social</h3>\n    <form>\n      <div class=\"row\" id=\"app-responsive-social-div\">\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Facebook</span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"www.facebook.com/sample\" id=\"urlFACEBOOK\" value=\"\"/>\n            <i class=\"fa fa-facebook\"></i>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Twitter</span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"www.twitter.com/sample\" id=\"urlTWITTER\" value=\"\"/>\n            <i class=\"fa fa-twitter\"></i>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Linkedin</span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"www.linkedin.com/sample\" id=\"urlLINKEDIN\" value=\"\"/>\n            <i class=\"la la-linkedin\"></i>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Website</span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"www.myDomain.com/sample\" id=\"urlWEBSITE\" value=\"\"/>\n            <i class=\"la la-external-link-square\"></i>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Phone</span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"+1 609 963 5896\" id=\"phoneNumber\" value=\"\"/>\n            <i class=\"la la-phone\"></i>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <span class=\"pf-title\">Mail</span>\n          <div class=\"pf-field\">\n            <input (keydown)=\"changeHandler($event)\" type=\"text\" placeholder=\"mail@mail.com\" id=\"email\" value=\"\"/>\n            <i class=\"la la-envelope\"></i>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-12\" style=\"display:none; padding:0\">\n        <a (click)=\"buttonPressed($event)\" class=\"post-job-btn\" style=\"float:right\" ng-disabled=\"false\">UPDATE</a>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/profile-info/profile-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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


var ProfileInfoComponent = /** @class */ (function () {
    function ProfileInfoComponent(http) {
        this.http = http;
    }
    ProfileInfoComponent.prototype.updateInfo = function (children) {
        var _this = this;
        // Test vatiable, get userId from login
        var test = document.getElementById("test-ID");
        var ID = test.attributes[3].value;
        var id = ID.toString()[6].toString() + ID.slice(7).toLowerCase().toString();
        // Url to API
        var url = "http://18.220.46.51:3000/api/" + id + "/" + ID;
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
        // Test Id, get from login in the future
        var test = document.getElementById("test-ID");
        var ID = test.attributes[3].value;
        if (ID == "SAMPLEEMPLOYER") {
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
            var url = "http://18.220.46.51:3000/api/Employer/" + ID;
            // Get Data
            this.http.get(url).subscribe(function (data) {
                console.log(data);
                // Display data fetched from API
                employerName.children[1].children[0].attributes[4].value = data["employerName"];
                description.children[1].children[0].attributes[4].value = data["description"];
                document.getElementById("address").attributes[4].value = data["address"];
                document.getElementById("city").attributes[4].value = data["city"];
                document.getElementById("state").attributes[4].value = data["state"];
                document.getElementById("country").attributes[4].value = data["country"];
                document.getElementById("phoneNumber").attributes[4].value = data["phoneNumber"];
                document.getElementById("email").attributes[4].value = data["email"];
                for (var i = 0; i < data["links"].length; i++) {
                    var curr = data["links"][i];
                    if (curr["type"] == "FACEBOOK") {
                        document.getElementById("urlFACEBOOK").attributes[4].value = curr["url"];
                    }
                    else if (curr["type"] == "TWITTER") {
                        document.getElementById("urlTWITTER").attributes[4].value = curr["url"];
                    }
                    else if (curr["type"] == "LINKEDIN") {
                        document.getElementById("urlLINKEDIN").attributes[4].value = curr["url"];
                    }
                    else if (curr["type"] == "WEBSITE") {
                        document.getElementById("urlWEBSITE").attributes[4].value = curr["url"];
                    }
                }
                // Test: Log Class
                console.log(data["$class"].split(".")[3].toUpperCase());
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
        else if (ID == "SAMPLEAPPLICANT") {
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
            var url = "http://18.220.46.51:3000/api/Applicant/" + ID;
            // Get Data
            this.http.get(url).subscribe(function (data) {
                console.log(data);
                // Display data fetched from API
                firstName.children[1].children[0].attributes[4].value = data["firstName"];
                lastName.children[1].children[0].attributes[4].value = data["lastName"];
                document.getElementById("address").attributes[4].value = data["address"];
                document.getElementById("city").attributes[4].value = data["city"];
                document.getElementById("state").attributes[4].value = data["state"];
                document.getElementById("country").attributes[4].value = data["country"];
                document.getElementById("phoneNumber").attributes[4].value = data["phoneNumber"];
                document.getElementById("email").attributes[4].value = data["email"];
                for (var i = 0; i < data["links"].length; i++) {
                    var curr = data["links"][i];
                    if (curr["type"] == "FACEBOOK") {
                        document.getElementById("urlFACEBOOK").attributes[4].value = curr["url"];
                    }
                    else if (curr["type"] == "TWITTER") {
                        document.getElementById("urlTWITTER").attributes[4].value = curr["url"];
                    }
                    else if (curr["type"] == "LINKEDIN") {
                        document.getElementById("urlLINKEDIN").attributes[4].value = curr["url"];
                    }
                    else if (curr["type"] == "WEBSITE") {
                        document.getElementById("urlWEBSITE").attributes[4].value = curr["url"];
                    }
                }
                // Test: Log Class
                console.log(data["$class"].split(".")[3].toUpperCase());
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
    ProfileInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-info',
            template: __webpack_require__("./src/app/shared/profile-info/profile-info.component.html"),
            styles: [__webpack_require__("./src/app/shared/profile-info/profile-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProfileInfoComponent);
    return ProfileInfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/requested-jobs/requested-jobs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/requested-jobs/requested-jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  requested-jobs works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/requested-jobs/requested-jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestedJobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequestedJobsComponent = /** @class */ (function () {
    function RequestedJobsComponent() {
    }
    RequestedJobsComponent.prototype.ngOnInit = function () {
    };
    RequestedJobsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-requested-jobs',
            template: __webpack_require__("./src/app/shared/requested-jobs/requested-jobs.component.html"),
            styles: [__webpack_require__("./src/app/shared/requested-jobs/requested-jobs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RequestedJobsComponent);
    return RequestedJobsComponent;
}());



/***/ }),

/***/ "./src/app/shared/terminated-jobs/terminated-jobs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/terminated-jobs/terminated-jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  terminated-jobs works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/terminated-jobs/terminated-jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminatedJobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TerminatedJobsComponent = /** @class */ (function () {
    function TerminatedJobsComponent() {
    }
    TerminatedJobsComponent.prototype.ngOnInit = function () {
    };
    TerminatedJobsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-terminated-jobs',
            template: __webpack_require__("./src/app/shared/terminated-jobs/terminated-jobs.component.html"),
            styles: [__webpack_require__("./src/app/shared/terminated-jobs/terminated-jobs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TerminatedJobsComponent);
    return TerminatedJobsComponent;
}());



/***/ }),

/***/ "./src/app/shared/update-resume.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateResumeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
            var currAttribute, componentsList, json, i, currentComponent, existsEmpty, componentInputs, currJson, itemClass, k, input, value, currType, j, currentComponent, node;
            return __generator(this, function (_a) {
                currAttribute = dom.localName.slice(11);
                componentsList = dom.children[0].children[0].children;
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
                    }
                    if (i == componentsList.length - 1) {
                        this.updateData(dom.children[0].children[1].children[1], json, currAttribute);
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
        updateButton.innerText = "Updating...";
        var url = "http://18.220.46.51:3000/api/Applicant/SAMPLEAPPLICANT";
        //var ID = "SAMPLEAPPLICANT";
        ///var urlUpdate = "http://18.220.46.51:3000/api/UpdateResume?filter=%7B%22applicant%22%3A%20%22resource%3Anetwork.krow.participants.Applicant%23" + ID + "%22%7D";
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
            if (err.error instanceof Error) {
                console.log("Client-side error occured.");
            }
            else {
                console.log("Server-side error occured.");
            }
        });
    };
    UpdateResumeService.prototype.postData = function (data, url, updateButton) {
        // Update entry
        this.http.put(url, data).subscribe(function (data) {
            updateButton.innerText = "UPDATE";
            updateButton.setAttribute("style", "display: none");
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
    UpdateResumeService.prototype.updateSkills = function (dom) {
        var attribute = "skills";
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
        this.updateData(dom.children[0].children[1].children[0], objArray, attribute);
        var _a;
    };
    UpdateResumeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UpdateResumeService);
    return UpdateResumeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/images/404.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/icon.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/icon2.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/krow-header-2.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAAAZCAYAAADHckkOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc1NUM2MEUxMkYwRTExRTg4QzA2QTRCQzVFMDgyM0ZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc1NUM2MEUyMkYwRTExRTg4QzA2QTRCQzVFMDgyM0ZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzU1QzYwREYyRjBFMTFFODhDMDZBNEJDNUUwODIzRkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzU1QzYwRTAyRjBFMTFFODhDMDZBNEJDNUUwODIzRkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5GnSBIAAAOW0lEQVR42uxc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"

/***/ }),

/***/ "./src/images/krow-logo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "krow-logo.c4332dee3d4d6bd8b5e0.png";

/***/ }),

/***/ "./src/images/loader.gif":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "loader.7efc2cb33ee4eb9d7625.gif";

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map