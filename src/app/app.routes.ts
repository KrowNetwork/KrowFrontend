// Main imports
import { ModuleWithProviders } from '@angular/core';

// Router imports
import { RouterModule, Routes } from '@angular/router';

// Main components
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { NewPasswordComponent } from './main/newpassword/newpassword.component';
import { RegistrationConfirmationComponent, LogoutComponent } from './main/confirm/confirmRegistration.component';
import { HomeComponent } from "./main/home/home.component";
import { ForgotPassword2Component, ForgotPasswordStep1Component } from './main/forgot/forgotPassword.component';
import { ResendCodeComponent } from './main/resend/resendCode.component';

// Employer components
import { EmployerProfileComponent } from './employer/employer-profile/employer-profile.component';

import { SearchComponent } from './search/search.component';

// Job components

import { UploadPicComponent } from './upload-pic/upload-pic.component'
import { CalendarComponent } from './calendar/calendar.component';

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



import { HelpComponent } from './shared/help/help.component';
import { EditComponent } from "./shared/edit/edit.component"

import { EmployerProfileInfoComponent } from './shared/profile-info2/employer-profile-info/employer-profile-info.component'
import { HomepageComponent } from './homepage/homepage.component'
import { FAQsComponent } from './faqs/faqs.component'
// import { DeleteComponent } from './delete/delete.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MessagingComponent } from './messaging/messaging.component';

import { VerifyJobComponent } from './verify-job/verify-job.component';



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
        path: "chat",
        component: MessagingComponent,
        children: [
            {
                path: ":newChat",
                component: MessagingComponent
            }
        ]
    },
    {
        path: "calendar",
        component: CalendarComponent
    },
    {
        path: "verify/:id",
        component: VerifyJobComponent
    },
    {
        path: "search",
        component: SearchComponent
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
            },
            {
                path: "verify/:id",
                component: VerifyJobComponent
            },
            {
                path: "requestVerification/:id",
                component: VerifyJobComponent
            }
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
        path: 'employer', 
        component: EmployerProfileComponent, 
        children: [
            { 
                path: '', 
                component: EmployerProfileInfoComponent
            },
            { 
                path: 'profile-info',
                component: EmployerProfileInfoComponent
            },
            { 
                path: 'profile-info/:employerID',
                component: EmployerProfileInfoComponent
            },
            {
                path: "edit",
                component: EditComponent,
            },
            {
                path: "upload",
                component: UploadPicComponent
            },
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