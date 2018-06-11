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
import { EmployerPostJobsComponent } from './employer/employer-post-jobs/employer-post-jobs.component';
import { RequestedJobsComponent } from './shared/requested-jobs/requested-jobs.component';
import { HireRequestsComponent } from './shared/hire-requests/hire-requests.component';

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
import { JobSearchComponent } from './shared/job-search/job-search.component';
import { BasicInfoCollectorComponent } from './shared/basic-info-collector/basic-info-collector.component';

// Profile components (shared)
import { ProfileInfoComponent } from './shared/profile-info/profile-info.component';
import { AvailableJobsComponent } from './shared/available-jobs/available-jobs.component';
import { CompletedJobsComponent } from './shared/completed-jobs/completed-jobs.component';
import { TerminatedJobsComponent } from './shared/terminated-jobs/terminated-jobs.component';
import { InProgressJobsComponent } from './shared/in-progress-jobs/in-progress-jobs.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
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
                component: ProfileInfoComponent
            },
            { 
                path: 'profile-info',
                component: ProfileInfoComponent
            },
            { 
                path: 'applicant-resume', 
                component: ApplicantResumeComponent
            },
            { 
                path: 'completed-jobs', 
                //component: CompletedJobsComponent, 
                component: ComingSoonComponent
            },
            { 
                path: 'terminated-jobs', 
                //component: TerminatedJobsComponent, 
                component: ComingSoonComponent
            },
            { 
                path: 'in-progress-jobs', 
                //component: InProgressJobsComponent, 
                component: ComingSoonComponent 
            },
            { 
                path: 'requested-jobs', 
                //component: RequestedJobsComponent, 
                component: ComingSoonComponent 
            },
            { 
                path: 'hire-requests', 
                //component: HireRequestsComponent, 
                component: ComingSoonComponent
            },
            { 
                path: 'job-search', 
                component: JobSearchComponent
                //component: ComingSoonComponent
            }
        ]
    },
    { 
        path: 'employer', 
        component: EmployerProfileComponent, 
        children: [
            { 
                path: '', 
                component: ProfileInfoComponent
            },
            { 
                path: 'profile-info',
                component: ProfileInfoComponent
            },
            { 
                path: 'employer-post-jobs', 
                //component: EmployerPostJobsComponent, 
                component: ComingSoonComponent 
            },
            { 
                path: 'completed-jobs', 
                //component: CompletedJobsComponent, 
                component: ComingSoonComponent
            },
            { 
                path: 'terminated-jobs', 
                //component: TerminatedJobsComponent, 
                component: ComingSoonComponent
            },
            { 
                path: 'in-progress-jobs', 
                //component: InProgressJobsComponent, 
                component: ComingSoonComponent
            },
            { 
                path: 'available-jobs', 
                //component: AvailableJobsComponent, 
                component: ComingSoonComponent
            },
            { 
                path: 'job-search', 
                component: JobSearchComponent, 
            }
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
];

const routes: Routes = [
    {
        path: '',
        children: [
            ...appRoutes,
            ...secureHome,
            {
                path: '',
                component: LoginComponent,
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