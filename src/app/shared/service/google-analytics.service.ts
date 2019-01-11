import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, NavigationEnd } from '@angular/router';

declare var gtag: Function

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
private subscription: Subscription
private isTrackingUser: Subscription
  constructor(private router: Router) {  }

  subscribe() {
    if (!this.subscription) {
      // subscribe to any router navigation and once it ends, write out the google script notices
      this.subscription = this.router.events.subscribe( e => {
        if (e instanceof NavigationEnd) {
          // this will find & use the ga function pulled via the google scripts
          try {
            // this.identifyUser()
            gtag('set', 'page', e.urlAfterRedirects);
            gtag('send', 'pageview');
            console.log(`logging: ${e.urlAfterRedirects} to google analytics`);
            // this.sendLoginEvent()
            
          } catch {
             console.log('tracking not found - make sure you installed the scripts');
          }
        }
      });
    }
  }

  unsubscribe() {
    if (this.subscription) {
      // --- clear our observable subscription
      this.subscription.unsubscribe();
    }
  }

  identifyUser() {
    var user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")

    if (user !== undefined && user != "") {
      try {
        gtag('config', 'UA-123402433-1', {"user_id": user});
        // gtag("set", {"user_id": user})
        console.log("Now tracking user " + user)
      } catch {
        console.log("user tracking failed")
      }
    }
  }

  sendLoginEvent() {
    var user = localStorage.getItem("CognitoIdentityServiceProvider.7tvb9q2vkudvr2a2q18ib0o5qt.LastAuthUser")
    try {
      // gtag('event', 'login', { eventCategory: 'button',
      //   eventAction: "login", eventValue: user
      // } );
      gtag('event', 'login', { 
        eventLabel: user
      })
      console.log("sent login event to google analytics")
    } catch (error) {
      console.log(`error: ${error}`);
    }
  }


}
