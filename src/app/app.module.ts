// Main imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Enable Http to get data from server
import { HttpClientModule } from '@angular/common/http';

// Router imports
import { RouterModule, Routes, DefaultUrlSerializer } from '@angular/router';

// Main components
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';

// Employer components
import { EmployerProfileComponent } from './employer/employer-profile/employer-profile.component';
import { EmployerPostJobsComponent } from './employer/employer-post-jobs/employer-post-jobs.component';

// Applicant components
import { ApplicantProfileComponent } from './applicant/applicant-profile/applicant-profile.component';
import { ApplicantResumeComponent } from './applicant/applicant-resume/applicant-resume.component';

// Shared components
import { ProfileInfoComponent } from './shared/profile-info/profile-info.component';
import { AvailableJobsComponent } from './shared/available-jobs/available-jobs.component';
import { CompletedJobsComponent } from './shared/completed-jobs/completed-jobs.component';
import { TerminatedJobsComponent } from './shared/terminated-jobs/terminated-jobs.component';
import { InProgressJobsComponent } from './shared/in-progress-jobs/in-progress-jobs.component';

import { UpdateResumeService } from './shared/update-resume.service';

import { ResumeEducationComponent } from './applicant/applicant-resume/resume-education/resume-education.component';
  import { EducationDirective } from './applicant/applicant-resume/resume-education/education.directive';
  import { EducationMainComponent } from './applicant/applicant-resume/resume-education/education-main.component'; 

import { ResumeSkillsComponent } from './applicant/applicant-resume/resume-skills/resume-skills.component';
  import { SkillsMainComponent } from './applicant/applicant-resume/resume-skills/skills-main.component';

import { ResumeExperienceComponent } from './applicant/applicant-resume/resume-experience/resume-experience.component';
  import { ExperienceDirective } from './applicant/applicant-resume/resume-experience/experience.directive';
  import { ExperienceMainComponent } from './applicant/applicant-resume/resume-experience/experience-main.component';

import { ResumeAchievementsComponent } from './applicant/applicant-resume/resume-achievements/resume-achievements.component';
  import { AchievementDirective } from './applicant/applicant-resume/resume-achievements/achievement.directive';
  import { AchievementsMainComponent } from './applicant/applicant-resume/resume-achievements/achievements-main.component';

import { ResumeAffiliationsComponent } from './applicant/applicant-resume/resume-affiliations/resume-affiliations.component';
  import { AffiliationsDirective } from './applicant/applicant-resume/resume-affiliations/affiliations.directive';
  import { AffiliationsMainComponent } from './applicant/applicant-resume/resume-affiliations/affiliations-main.component';

import { ComingSoonComponent } from './shared/coming-soon/coming-soon.component';

import { RequestedJobsComponent } from './shared/requested-jobs/requested-jobs.component';

import { HireRequestsComponent } from './shared/hire-requests/hire-requests.component';

import { JobSearchComponent } from './shared/job-search/job-search.component';

// Create nested Routing path
const appRoutes: Routes = [
  { 
    path: '',
    component: LoginComponent
  },
  { 
    path: 'employer-profile', 
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
        //component: JobSearchComponent, 
        component: ComingSoonComponent
      }
    ]
  },
  {
    path: 'applicant-profile', 
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
        //component: JobSearchComponent, 
        component: ComingSoonComponent
      }
    ]
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
    path: '**', 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  declarations: [
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
    AchievementsMainComponent,
    AchievementDirective,
    AffiliationsDirective,
    EducationMainComponent,
    EducationDirective,
    ExperienceMainComponent,
    ExperienceDirective,
    AffiliationsMainComponent,
    SkillsMainComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule
  ],
  entryComponents: [ 
    ExperienceMainComponent,
    AffiliationsMainComponent,
    SkillsMainComponent,
    EducationMainComponent,
    AchievementsMainComponent
  ],
  providers: [ 
    DefaultUrlSerializer, 
    UpdateResumeService 
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
