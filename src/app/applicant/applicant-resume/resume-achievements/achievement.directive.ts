import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[achievements-host]',
})
export class AchievementDirective {
  @Input() isSignup: string = 'false';
  constructor(public viewContainerRef: ViewContainerRef) { }
}