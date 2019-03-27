// Main imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { SidebarModule } from 'ng-sidebar';


// UI Materials
/*
  VIVEK
*/
import { PdfViewerModule } from 'ng2-pdf-viewer';


// Enable Http to get data from server
import { HttpClientModule } from '@angular/common/http';

// Router imports
import { routing } from './app.routes';

// Main components
import { LoginComponent } from './shared/main/login/login.component';
import { RegisterComponent } from './shared/main/register/register.component';
import { PageNotFoundComponent } from './shared/main/page-not-found/page-not-found.component';
import { ComingSoonComponent } from './shared/coming-soon/coming-soon.component';
import { NewPasswordComponent } from './shared/main/newpassword/newpassword.component';
import { RegistrationConfirmationComponent, LogoutComponent } from './shared/main/confirm/confirmRegistration.component';
import { HomeComponent } from './shared/main/home/home.component';
import { ForgotPassword2Component, ForgotPasswordStep1Component } from './shared/main/forgot/forgotPassword.component';
import { ResendCodeComponent } from './shared/main/resend/resendCode.component';

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
import { UpdateResumeService } from './shared/service/update-resume.service';
import { CognitoUtil } from './shared/service/cognito.service';
import { AwsUtil } from './shared/service/aws.service';
import { UserLoginService } from './shared/service/user-login.service';
import { UserParametersService } from './shared/service/user-parameters.service';
import { UserRegistrationService } from './shared/service/user-registration.service';
import { CreateUserService } from './shared/service/create-user.service';
import { CustomHttpService } from "./shared/service/custom-http.service";
import { PreviousRouteService } from "./shared/service/previous-route.service";
import { DomService } from "./shared/service/dom.service";
import { ModalService } from "./shared/service/modal.service";

// Directives
import { EducationDirective } from './applicant/applicant-resume/resume-education/education.directive';
import { ExperienceDirective } from './applicant/applicant-resume/resume-experience/experience.directive';
import { AchievementDirective } from './applicant/applicant-resume/resume-achievements/achievement.directive';
import { VolunteerDirective } from './applicant/applicant-resume/resume-volunteer/volunteer.directive';
import { AffiliationsDirective } from './applicant/applicant-resume/resume-affiliations/affiliations.directive';
import { BottomBarComponent } from './shared/bottom-bar/bottom-bar.component';
import { HelpComponent } from './shared/help/help.component';
import { ProfileInfo2Component } from './shared/profile-info2/profile-info2.component';
import { ApplicantProfileInfoPrivateComponent } from './shared/profile-info2/applicant-profile-info/applicant-profile-info.component';
import { EditComponent } from "./applicant/edit/edit.component";

// import { EmployerProfileInfoComponent } from './shared/profile-info2/employer-profile-info/employer-profile-info.component';
import { HomepageComponent } from './shared/homepage/homepage.component';
import { FAQsComponent } from './shared/faqs/faqs.component';
import { UploadPicComponent } from './shared/upload-pic/upload-pic.component'


// import { ImageCropperModule } from 'ngx-image-cropper';
// import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';
import {ImageCropperModule } from "ng2-img-cropper";
import { CalendarComponent } from './shared/calendar/calendar.component';
import { ContractComponent } from './shared/contract/contract.component';
// import { DeleteComponent } from './delete/delete.component';


import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
// import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { FeedbackComponent } from './shared/feedback/feedback.component';
import { MessagingComponent } from './shared/messaging/messaging.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
// import { VirtualListModule } from 'angular-virtual-list';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { ContextMenuModule } from 'ngx-contextmenu';
import { MessagingPopupComponent } from './shared/messaging/messaging-popup/messaging-popup.component';
import { NewEventCalendarPopupComponent } from './shared/calendar/new-event-calendar-popup/new-event-calendar-popup.component';
import { VerifyJobComponent } from './shared/verify-job/verify-job.component';
import { SearchComponent } from './shared/search/search.component';
// import { ContextMenuService } from 'angular2-contextmenu/src/contextMenu.service';
// import { luegg } from "angularjs-scroll-glue"
import {TermsComponent} from "./shared/terms/terms.component"
import {PrivacypolicyComponent} from "./shared/privacypolicy/privacypolicy.component"
import { AdminLoginComponent } from "./shared/admin/admin-login/admin-login.component";
import { AdminHomeComponent } from './shared/admin/admin-home/admin-home.component';
import { UserSearchComponent } from './shared/admin/user-search/user-search.component'
import {ShareLinkPopupComponent} from "./shared/profile-info2/applicant-profile-info/share-link-popup/share-link-popup.component";
// import { EmployerPostJobsComponent } from './shared/employer-post-jobs/employer-post-jobs.component'
// import {JobProfileComponent}
import {GoogleAnalyticsService} from "./shared/service/google-analytics.service";
import { SearchJobComponent } from './shared/search-job/search-job.component';
import { MarkdownModule } from 'ngx-markdown';
import { ManageJobsComponent } from './employer/manage-jobs/manage-jobs.component';
import { PostJobsComponent } from './employer/post-jobs/post-jobs.component';
import { EmployerProfileComponent } from './employer/employer-profile/employer-profile.component';
import { CandidateListComponent } from './employer/candidate-list/candidate-list.component';
import { EmployerEditComponent } from './employer/employer-edit/employer-edit.component';
import { ResumeParserComponent } from './shared/resume-parser/resume-parser.component';
import { EmployerProfileInfoComponent } from './employer/employer-profile-info/employer-profile-info.component';
import { PdfViewerComponent } from './shared/pdf-viewer/pdf-viewer.component';
import { TutorialComponent } from './shared/tutorial/tutorial.component';
import { NewPostJobsComponent } from './employer/new-post-jobs/new-post-jobs.component';
import { JobInfoComponent } from './shared/job-info/job-info.component';
import { NewManageJobsComponent } from './employer/new-manage-jobs/new-manage-jobs.component';
import { NewCandidateListComponent } from './employer/new-candidate-list/new-candidate-list.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { MyJobsComponent } from './applicant/my-jobs/my-jobs.component';
import { JobEditComponent } from './employer/job-edit/job-edit.component';
import { JobListComponent } from './shared/job-list/job-list.component';
import { AdminPostJobComponent } from './shared/admin/admin-post-job/admin-post-job.component';

// import { CompareService } from './service/compare.service'
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
    SearchJobComponent,
    ManageJobsComponent,
    PostJobsComponent,
    EmployerProfileComponent,
    CandidateListComponent,
    EmployerEditComponent,
    ResumeParserComponent,
    EmployerProfileInfoComponent,
    PdfViewerComponent,
    TutorialComponent,
    NewPostJobsComponent,
    JobInfoComponent,
    NewManageJobsComponent,
    NewCandidateListComponent,
    SideBarComponent,
    MyJobsComponent,
    JobEditComponent,
    JobListComponent,
    AdminPostJobComponent,

    // EmployerPostJobsComponent,
    // EditJobComponent,
    // HireRequestsComponent
    // DeleteComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    ImageCropperModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    VirtualScrollModule,
    ContextMenuModule.forRoot(),
    MarkdownModule.forRoot(),
    PdfViewerModule,
    SidebarModule.forRoot()
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
    AppComponent,
    SideBarComponent
  ],
  
})
export class AppModule { }
