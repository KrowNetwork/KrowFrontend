// Main imports
import { ModuleWithProviders } from '@angular/core';

// Router imports
import { RouterModule, Routes } from '@angular/router';

// Main components
import { LoginComponent } from './shared/main/login/login.component';
import { RegisterComponent } from './shared/main/register/register.component';
import { PageNotFoundComponent } from './shared/main/page-not-found/page-not-found.component';
import { NewPasswordComponent } from './shared/main/newpassword/newpassword.component';
import { RegistrationConfirmationComponent, LogoutComponent } from './shared/main/confirm/confirmRegistration.component';
import { HomeComponent } from "./shared/main/home/home.component";
import { ForgotPassword2Component, ForgotPasswordStep1Component } from './shared/main/forgot/forgotPassword.component';
import { ResendCodeComponent } from './shared/main/resend/resendCode.component';

// Employer components
// import { EmployerProfileComponent } from './employer/employer-profile/employer-profile.component';

import { SearchComponent } from './shared/search/search.component';

// Job components

import { UploadPicComponent } from './shared/upload-pic/upload-pic.component'
import { CalendarComponent } from './shared/calendar/calendar.component';

// Applicant components
import { ApplicantProfileComponent } from './applicant/applicant-profile/applicant-profile.component';
import { ApplicantResumeComponent } from './applicant/applicant-resume/applicant-resume.component';
import { ResumeEducationComponent } from './applicant/applicant-resume/resume-education/resume-education.component';
import { ResumeSkillsComponent } from './applicant/applicant-resume/resume-skills/resume-skills.component';
import { ResumeExperienceComponent } from './applicant/applicant-resume/resume-experience/resume-experience.component';
import { ResumeAchievementsComponent } from './applicant/applicant-resume/resume-achievements/resume-achievements.component';
import { ResumeAffiliationsComponent } from './applicant/applicant-resume/resume-affiliations/resume-affiliations.component';

// Shared components
import { ComingSoonComponent } from './shared/coming-soon/coming-soon.component';
import { BasicInfoCollectorComponent } from './shared/basic-info-collector/basic-info-collector.component';

// Profile components (shared)
import { ProfileInfoComponent } from './shared/profile-info/profile-info.component';
import { ProfileInfo2Component } from './shared/profile-info2/profile-info2.component';

// import { HireRequestsComponent } from "./shared/profile-info2/applicant-profile-info/hire-requests/hire-requests.component"


import { HelpComponent } from './shared/help/help.component';
import { EditComponent } from "./applicant/edit/edit.component";
import { EmployerEditComponent } from './employer/employer-edit/employer-edit.component';
import { EmployerProfileInfoComponent } from './employer/employer-profile-info/employer-profile-info.component';
import { ManageJobsComponent } from './employer/manage-jobs/manage-jobs.component';
import { PostJobsComponent } from './employer/post-jobs/post-jobs.component';
import { CandidateListComponent } from './employer/candidate-list/candidate-list.component';

// import { EmployerProfileInfoComponent } from './shared/profile-info2/employer-profile-info/employer-profile-info.component'
import { HomepageComponent } from './shared/homepage/homepage.component'
import { FAQsComponent } from './shared/faqs/faqs.component'
// import { DeleteComponent } from './delete/delete.component';
import { FeedbackComponent } from './shared/feedback/feedback.component';
import { MessagingComponent } from './shared/messaging/messaging.component';

import { VerifyJobComponent } from './shared/verify-job/verify-job.component';
import {TermsComponent} from "./shared/terms/terms.component"
import {PrivacypolicyComponent} from "./shared/privacypolicy/privacypolicy.component"

import { AdminLoginComponent } from "./shared/admin/admin-login/admin-login.component"
import { AdminHomeComponent } from './shared/admin/admin-home/admin-home.component'
import { UserSearchComponent } from './shared/admin/user-search/user-search.component'
// import { EmployerPostJobsComponent } from './shared/employer-post-jobs/employer-post-jobs.component'
import { JobProfileComponent } from './shared/profile-info2/job-profile/job-profile.component';
// import { EditJobComponent } from './shared/edit-job/edit-job.component'
import { SearchJobComponent } from './shared/search-job/search-job.component';
import { EmployerProfileComponent } from "./employer/employer-profile/employer-profile.component"
// import { EmployerEditComponent } from "./employer/employer-edit/employer-edit.component"
import { ResumeParserComponent } from "./shared/resume-parser/resume-parser.component"
const appRoutes: Routes = [
    {
        path: '',
        // redirectTo: '/login',
        // pathMatch: 'full'
        component: HomepageComponent
    },
    {
        path: 'home',
        component: HomepageComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'newPassword', 
        component: NewPasswordComponent
    },
    {
        path: 'confirmRegistration/:username',
        component: RegistrationConfirmationComponent
    },
    {
        path: 'forgotPassword/:email', 
        component: ForgotPassword2Component
    },
    {
        path: 'forgotPassword', 
        component: ForgotPasswordStep1Component
    },
    {
        path: 'resendCode',
        component: ResendCodeComponent
    },
    {
        path: "help",
        component: HelpComponent
    },
    {
        path: "faqs",
        component: FAQsComponent
    },
    {
        path: "feedback",
        component: FeedbackComponent
    },
    {
        path: "tac",
        component: TermsComponent
    },
    {
        path: "privacypolicy",
        component: PrivacypolicyComponent
    },
    // {
    //     path: "sitemap.xml"

    // }
    // {
    //     path: "chat",
    //     component: MessagingComponent,
    //     children: [
    //         {
    //             path: ":newChat",
    //             component: MessagingComponent
    //         }
    //     ]
    // },
    // {
    //     path: "calendar",
    //     component: CalendarComponent
    // },
    // {
    //     path: "verify/:id",
    //     component: VerifyJobComponent
    // },
    {
        path: "search",
        component: SearchComponent
    },
    {
        path: "search-job",
        component: SearchJobComponent
    },
    {
        path: "admin-login",
        component: AdminLoginComponent
    }

];

const secureHome: Routes = [
    {
        path: '',
        redirectTo: '/secureHome',
        pathMatch: 'full'
    },
    {
        path: 'secureHome',
        component: HomeComponent
    },
    {
        path: 'basicInfo',
        component: BasicInfoCollectorComponent   
    },
    {
        path: 'applicant', 
        component: ApplicantProfileComponent, 
        children: [
            { 
                path: '', 
                component: ProfileInfo2Component
            },
            { 
                path: 'profile-info',
                component: ProfileInfo2Component
            },
            { 
                path: 'profile-info/:applicantID',
                component: ProfileInfo2Component
            },
            { 
                path: 'applicant-resume', 
                component: ApplicantResumeComponent
            },
            { 
                path: 'applicant-resume/:applicantID', 
                component: ApplicantResumeComponent
            },
            { 
                path: 'edit', 
                component: EditComponent
                //component: ComingSoonComponent
            },
            {
                path: "upload",
                component: UploadPicComponent
            }
            // {
            //     path: "hire-requests",
            //     component: HireRequestsComponent
            // }
            // {
            //     path: "verify/:id",
            //     component: VerifyJobComponent
            // },
            // {
            //     path: "requestVerification/:id",
            //     component: VerifyJobComponent
            // }
            // {
            //     path: "calendar",
            //     component: CalendarComponent
            // }
            // {
            //     path: "delete",
            //     component: DeleteComponent
            // }
        ]
    },
    { 
        path: 'job', 
        children: [
            { 
                path: ':jobID', 
                component: JobProfileComponent
            },
            // { 
            //     path: ':jobID/edit', 
            //     component: EditJobComponent
            // },
            // {
            //     path: ":jobID/edit",
            //     component: EditJobComponent
            // }
            
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
        path: 'admin',
        children: [
            {
                path: "home",
                component: AdminHomeComponent
            },
            {
                path: "user-search",
                component: UserSearchComponent

            }
        ]
    },
    { 
        path: 'employer',  
        component: EmployerProfileComponent, 
        children: [
            { 
                path: '', 
                component: EmployerProfileInfoComponent
            },
    //         { 
    //             path: 'profile-info',
    //             component: EmployerProfileInfoComponent
    //         },
    //         { 
    //             path: 'profile-info/:employerID',
    //             component: EmployerProfileInfoComponent
    //         },
            {
                path: 'edit',
                component: EmployerEditComponent,
            },
            {
                path: "resume-parser",
                component: ResumeParserComponent
            },
            {
                path: "upload",
                component: UploadPicComponent
            },
            {
                path: "manage-jobs",
                component: ManageJobsComponent
            },
            {
                path: "post-jobs",
                component: PostJobsComponent
            },
            {
                path: "candidate-list",
                component: CandidateListComponent
            },
            // {
    //             path: "create",
    //             component: EmployerPostJobsComponent
    //         }
    //         // {
    //         //     path: "calendar",
    //         //     component: CalendarComponent
    //         // }
    //         // {
    //         //     path: "delete",
    //         //     component: DeleteComponent
    //         // }
        ]
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    { 
        path: '**', 
        component: PageNotFoundComponent,
    },
    // { 
    //     path: 'error', 
    //     component: PageNotFoundComponent,
    // },
];

const routes: Routes = [
    {
        path: '',
        children: [
            ...appRoutes,
            ...secureHome,
            {
                path: '',
                component: HomepageComponent,
            }
        ]
    },
    { 
        path: '**', 
        component: PageNotFoundComponent, 
    },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);