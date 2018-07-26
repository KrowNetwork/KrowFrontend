// Main imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';

// UI Materials
/*
  VIVEK
*/

// Enable Http to get data from server
import { HttpClientModule } from '@angular/common/http';

// Router imports
import { routing } from './app.routes';

// Main components
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { ComingSoonComponent } from './shared/coming-soon/coming-soon.component';
import { NewPasswordComponent } from './main/newpassword/newpassword.component';
import { RegistrationConfirmationComponent, LogoutComponent } from './main/confirm/confirmRegistration.component';
import { HomeComponent } from './main/home/home.component';
import { ForgotPassword2Component, ForgotPasswordStep1Component } from './main/forgot/forgotPassword.component';
import { ResendCodeComponent } from './main/resend/resendCode.component';

// Employer components
import { EmployerProfileComponent } from './employer/employer-profile/employer-profile.component';
import { EmployerPostJobsComponent } from './employer/employer-post-jobs/employer-post-jobs.component';

// Job components
import { JobProfileComponent } from './job/job-profile/job-profile.component';
import { JobDetailsComponent } from './shared/job-details/job-details.component';


// Applicant components
import { ApplicantProfileComponent } from './applicant/applicant-profile/applicant-profile.component';
import { ApplicantResumeComponent } from './applicant/applicant-resume/applicant-resume.component';
import { RequestedJobsComponent } from './shared/requested-jobs/requested-jobs.component';
import { HireRequestsComponent } from './shared/hire-requests/hire-requests.component';
import { JobSearchComponent } from './shared/job-search/job-search.component';
  import { JobSearchMainComponent } from './shared/job-search/job-search-main.component';

// Resume components
import { ResumeEducationComponent } from './applicant/applicant-resume/resume-education/resume-education.component';
  import { EducationMainComponent } from './applicant/applicant-resume/resume-education/education-main.component'; 

import { ResumeSkillsComponent } from './applicant/applicant-resume/resume-skills/resume-skills.component';
  import { SkillsMainComponent } from './applicant/applicant-resume/resume-skills/skills-main.component';

import { ResumeExperienceComponent } from './applicant/applicant-resume/resume-experience/resume-experience.component';
  import { ExperienceMainComponent } from './applicant/applicant-resume/resume-experience/experience-main.component';

import { ResumeAchievementsComponent } from './applicant/applicant-resume/resume-achievements/resume-achievements.component';
  import { AchievementsMainComponent } from './applicant/applicant-resume/resume-achievements/achievements-main.component';

import { ResumeAffiliationsComponent } from './applicant/applicant-resume/resume-affiliations/resume-affiliations.component';
  import { AffiliationsMainComponent } from './applicant/applicant-resume/resume-affiliations/affiliations-main.component';

// Shared components
import { ProfileInfoComponent } from './shared/profile-info/profile-info.component';
import { AvailableJobsComponent } from './shared/available-jobs/available-jobs.component';
import { CompletedJobsComponent } from './shared/completed-jobs/completed-jobs.component';
import { TerminatedJobsComponent } from './shared/terminated-jobs/terminated-jobs.component';
import { InProgressJobsComponent } from './shared/in-progress-jobs/in-progress-jobs.component';
import { BasicInfoCollectorComponent } from './shared/basic-info-collector/basic-info-collector.component';

// Services
import { UpdateResumeService } from './service/update-resume.service';
import { CognitoUtil } from './service/cognito.service';
import { AwsUtil } from './service/aws.service';
import { UserLoginService } from './service/user-login.service';
import { UserParametersService } from './service/user-parameters.service';
import { UserRegistrationService } from './service/user-registration.service';
import { CreateUserService } from './service/create-user.service';
import { CustomHttpService } from "./service/custom-http.service";

// Directives
import { EducationDirective } from './applicant/applicant-resume/resume-education/education.directive';
import { ExperienceDirective } from './applicant/applicant-resume/resume-experience/experience.directive';
import { AchievementDirective } from './applicant/applicant-resume/resume-achievements/achievement.directive';
import { AffiliationsDirective } from './applicant/applicant-resume/resume-affiliations/affiliations.directive';
import { JobSearchDirective } from './shared/job-search/job-search.directive';
import { BottomBarComponent } from './shared/bottom-bar/bottom-bar.component';
import { HelpComponent } from './shared/help/help.component';
import { ProfileInfo2Component } from './shared/profile-info2/profile-info2.component';
import { ApplicantProfileInfoPrivateComponent } from './shared/profile-info2/applicant-profile-info/applicant-profile-info.component';
import { EditComponent } from "./shared/edit/edit.component";
import { EmployerProfileInfoComponent } from './shared/profile-info2/employer-profile-info/employer-profile-info.component';
import { EditJobComponent } from './shared/edit-job/edit-job.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FAQsComponent } from './faqs/faqs.component';
import { UploadPicComponent } from './upload-pic/upload-pic.component'


// import { ImageCropperModule } from 'ngx-image-cropper';
// import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';
import {ImageCropperModule } from "ng2-img-cropper";






@NgModule({
  declarations: [
    // VIVEK (Add module declarations here, I'll worry about splitting it up later)
    AppComponent,
    EmployerProfileComponent,
    EmployerPostJobsComponent,
    ApplicantProfileComponent,
    AvailableJobsComponent,
    CompletedJobsComponent,
    ProfileInfoComponent,
    TerminatedJobsComponent,
    InProgressJobsComponent,
    ApplicantResumeComponent,
    LoginComponent,
    RegisterComponent,
    ResumeEducationComponent,
    ResumeSkillsComponent,
    ResumeExperienceComponent,
    ResumeAchievementsComponent,
    ResumeAffiliationsComponent, 
    ComingSoonComponent,
    PageNotFoundComponent,
    RequestedJobsComponent,
    HireRequestsComponent,
    JobSearchComponent,
    JobSearchDirective,
    JobSearchMainComponent,
    AchievementsMainComponent,
    AchievementDirective,
    AffiliationsDirective,
    EducationMainComponent,
    EducationDirective,
    ExperienceMainComponent,
    ExperienceDirective,
    AffiliationsMainComponent,
    SkillsMainComponent,
    NewPasswordComponent,
    RegistrationConfirmationComponent,
    LogoutComponent,
    HomeComponent,
    ForgotPassword2Component,
    ForgotPasswordStep1Component,
    ResendCodeComponent,
    BasicInfoCollectorComponent,
    JobProfileComponent,
    JobDetailsComponent,
    BottomBarComponent,
    HelpComponent,
    ProfileInfo2Component,
    ApplicantProfileInfoPrivateComponent,
    EditComponent,
    EmployerProfileInfoComponent,
    EditJobComponent,
    HomepageComponent,
    FAQsComponent,
    UploadPicComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    ImageCropperModule 
    // ImageCropperModule,
    
  ],
  entryComponents: [ 
    ExperienceMainComponent,
    AffiliationsMainComponent,
    SkillsMainComponent,
    EducationMainComponent,
    AchievementsMainComponent,
    JobSearchMainComponent,
  ],
  providers: [ 
    UpdateResumeService,
    CognitoUtil,
    AwsUtil,
    UserLoginService,
    UserParametersService,
    UserRegistrationService,
    CreateUserService,
    CustomHttpService
  ],
  bootstrap: [ 
    AppComponent 
  ],
  
})
export class AppModule { }
