// Main imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Enable Http to get data from server
import { HttpClientModule } from '@angular/common/http';

// Router imports
import { RouterModule, Routes } from '@angular/router';

// Test
import { TestComponent } from './test/test.component';

// Main components
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';

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
import { ResumeEducationComponent } from './applicant/applicant-resume/resume-education/resume-education.component';
import { ResumeSkillsComponent } from './applicant/applicant-resume/resume-skills/resume-skills.component';
import { ResumeExperienceComponent } from './applicant/applicant-resume/resume-experience/resume-experience.component';
import { ResumeAchievementsComponent } from './applicant/applicant-resume/resume-achievements/resume-achievements.component';
import { ResumeAffiliationsComponent } from './applicant/applicant-resume/resume-affiliations/resume-affiliations.component';

// Create nested Routing path
const appRoutes: Routes = [
  { 
    path: 'app-employer-profile', 
    component: EmployerProfileComponent, 
    children: [
      { 
        path: '', 
        component: ProfileInfoComponent, 
        outlet: "testing-employer" 
      },
      { 
        path: 'app-profile-info',
        component: ProfileInfoComponent,
        outlet: "testing-employer"
      },
      { 
        path: 'app-employer-post-jobs', 
        component: EmployerPostJobsComponent, 
        outlet: "testing-employer"  
      },
      { 
        path: 'app-completed-jobs', 
        component: CompletedJobsComponent, 
        outlet: "testing-employer"  
      },
      { 
        path: 'app-terminated-jobs', 
        component: TerminatedJobsComponent, 
        outlet: "testing-employer"  
      },
      { 
        path: 'app-in-progress-jobs', 
        component: InProgressJobsComponent, 
        outlet: "testing-employer"  
      },
      { 
        path: 'app-available-jobs', 
        component: AvailableJobsComponent, 
        outlet: "testing-employer"  
      }
    ]
  },
  {
    path: 'app-applicant-profile', 
    component: ApplicantProfileComponent, 
    children: [
      { 
        path: '', 
        component: ProfileInfoComponent, 
        outlet: "testing-applicant" 
      },
      { 
        path: 'app-profile-info',
        component: ProfileInfoComponent,
        outlet: "testing-applicant"
      },
      { 
        path: 'app-applicant-resume', 
        component: ApplicantResumeComponent, 
        outlet: "testing-applicant"  
      },
      { 
        path: 'app-completed-jobs', 
        component: CompletedJobsComponent, 
        outlet: "testing-applicant"  
      },
      { 
        path: 'app-terminated-jobs', 
        component: TerminatedJobsComponent, 
        outlet: "testing-applicant"  
      },
      { 
        path: 'app-in-progress-jobs', 
        component: InProgressJobsComponent, 
        outlet: "testing-applicant"  
      },
      { 
        path: 'app-available-jobs', 
        component: AvailableJobsComponent, 
        outlet: "testing-applicant"  
      }
    ]
  },
  { 
    path: 'app-test', 
    component: TestComponent,
    children: [
      { 
        path: 'app-applicant-profile', 
        component: ApplicantProfileComponent
      },
      {
        path: 'app-employer-profile', 
        component: EmployerProfileComponent
      }
    ]
  },
  {
    path: 'app-login',
    component: LoginComponent
  },
  {
    path: 'app-register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployerProfileComponent,
    TestComponent,
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
    ResumeAffiliationsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
