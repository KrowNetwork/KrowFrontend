import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[achievements-host]',
})
export class AchievementDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}