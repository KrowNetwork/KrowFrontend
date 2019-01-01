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
// import { EmployerProfileComponent } from './employer/employer-profile/employer-profile.component';

// Job components
import { JobProfileComponent } from './shared/profile-info2/job-profile/job-profile.component';


// Applicant components
import { ApplicantProfileComponent } from './applicant/applicant-profile/applicant-profile.component';
import { ApplicantResumeComponent } from './applicant/applicant-resume/applicant-resume.component';

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

import { ResumeVolunteerComponent } from './applicant/applicant-resume/resume-volunteer/resume-volunteer.component';
  import { VolunteerMainComponent } from './applicant/applicant-resume/resume-volunteer/volunteer-main.component';

// Shared components
import { ProfileInfoComponent } from './shared/profile-info/profile-info.component';
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
import { PreviousRouteService } from "./service/previous-route.service";
import { DomService } from "./service/dom.service";
import { ModalService } from "./service/modal.service";

// Directives
import { EducationDirective } from './applicant/applicant-resume/resume-education/education.directive';
import { ExperienceDirective } from './applicant/applicant-resume/resume-experience/experience.directive';
import { AchievementDirective } from './applicant/applicant-resume/resume-achievements/achievement.directive';
import { VolunteerDirective } from './applicant/applicant-resume/resume-volunteer/volunteer.directive';
import { AffiliationsDirective } from './applicant/applicant-resume/resume-affiliations/affiliations.directive';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { HelpComponent } from './shared/help/help.component';
import { ProfileInfo2Component } from './shared/profile-info2/profile-info2.component';
import { ApplicantProfileInfoPrivateComponent } from './shared/profile-info2/applicant-profile-info/applicant-profile-info.component';
import { EditComponent } from "./shared/edit/edit.component";
// import { EmployerProfileInfoComponent } from './shared/profile-info2/employer-profile-info/employer-profile-info.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FAQsComponent } from './faqs/faqs.component';
import { UploadPicComponent } from './upload-pic/upload-pic.component'


// import { ImageCropperModule } from 'ngx-image-cropper';
// import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';
import {ImageCropperModule } from "ng2-img-cropper";
import { CalendarComponent } from './calendar/calendar.component';
import { ContractComponent } from './contract/contract.component';
// import { DeleteComponent } from './delete/delete.component';


import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { FeedbackComponent } from './feedback/feedback.component';
import { MessagingComponent } from './messaging/messaging.component';
import { TopBarComponent } from './top-bar/top-bar.component';
// import { VirtualListModule } from 'angular-virtual-list';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { ContextMenuModule } from 'ngx-contextmenu';
import { MessagingPopupComponent } from './messaging/messaging-popup/messaging-popup.component';
import { NewEventCalendarPopupComponent } from './calendar/new-event-calendar-popup/new-event-calendar-popup.component';
import { VerifyJobComponent } from './verify-job/verify-job.component';
import { SearchComponent } from './search/search.component';
// import { ContextMenuService } from 'angular2-contextmenu/src/contextMenu.service';
// import { luegg } from "angularjs-scroll-glue"
import {TermsComponent} from "./terms/terms.component"
import {PrivacypolicyComponent} from "./privacypolicy/privacypolicy.component"
import { AdminLoginComponent } from "./admin/admin-login/admin-login.component";
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserSearchComponent } from './admin/user-search/user-search.component'
import {ShareLinkPopupComponent} from "./shared/profile-info2/applicant-profile-info/share-link-popup/share-link-popup.component";
// import { EmployerPostJobsComponent } from './shared/employer-post-jobs/employer-post-jobs.component'
// import {JobProfileComponent}
import {GoogleAnalyticsService} from "./service/google-analytics.service";
// import { EditJobComponent } from './shared/edit-job/edit-job.component';
// import { HireRequestsComponent } from "./shared/profile-info2/applicant-profile-info/hire-requests/hire-requests.component"
@NgModule({
  declarations: [
    // VIVEK (Add module declarations here, I'll worry about splitting it up later)
    AppComponent,
    // EmployerProfileComponent,
    ApplicantProfileComponent,
    ProfileInfoComponent,
    ApplicantResumeComponent,
    LoginComponent,
    RegisterComponent,
    ResumeEducationComponent,
    ResumeSkillsComponent,
    ResumeExperienceComponent,
    ResumeAchievementsComponent,
    ResumeAffiliationsComponent, 
    ResumeVolunteerComponent,
    ComingSoonComponent,
    PageNotFoundComponent,
    AchievementsMainComponent,
    AchievementDirective,
    AffiliationsDirective,
    EducationMainComponent,
    EducationDirective,
    ExperienceMainComponent,
    ExperienceDirective,
    VolunteerMainComponent,
    VolunteerDirective,
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
    BottomBarComponent,
    HelpComponent,
    ProfileInfo2Component,
    ApplicantProfileInfoPrivateComponent,
    EditComponent,
    // EmployerProfileInfoComponent,
    HomepageComponent,
    FAQsComponent,
    UploadPicComponent,
    CalendarComponent,
    ContractComponent,
    FeedbackComponent,
    MessagingComponent,
    TopBarComponent,
    MessagingPopupComponent,
    NewEventCalendarPopupComponent,
    VerifyJobComponent,
    SearchComponent,
    TermsComponent,
    PrivacypolicyComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    UserSearchComponent,
    ShareLinkPopupComponent,
    // EmployerPostJobsComponent,
    // EditJobComponent,
    // HireRequestsComponent
    // DeleteComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    ImageCropperModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    VirtualScrollModule,
    ContextMenuModule.forRoot(),
    // luegg.directives
    // Websocket
    // Modal,
    // bootstrap4Mode
    // Modal
    // BootstrapModalModule
    // ImageCropperModule,
    
  ],
  entryComponents: [ 
    ExperienceMainComponent,
    AffiliationsMainComponent,
    SkillsMainComponent,
    EducationMainComponent,
    AchievementsMainComponent,
    VolunteerMainComponent,
    MessagingPopupComponent,
    NewEventCalendarPopupComponent,
    ShareLinkPopupComponent
  ],
  providers: [ 
    UpdateResumeService,
    CognitoUtil,
    AwsUtil,
    UserLoginService,
    UserParametersService,
    UserRegistrationService,
    CreateUserService,
    CustomHttpService,
    PreviousRouteService,
    DomService,
    ModalService,
    GoogleAnalyticsService
  ],
  bootstrap: [ 
    AppComponent 
  ],
  
})
export class AppModule { }
