import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployerProfileComponent } from './employer-profile/employer-profile.component';

const appRoutes: Routes = [
  { path: 'app-employer-profile', component: EmployerProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployerProfileComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
