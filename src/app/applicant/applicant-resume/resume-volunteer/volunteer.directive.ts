import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[volunteers-host]',
})
export class VolunteerDirective {
  @Input() isSignup: string = 'false';
  constructor(public viewContainerRef: ViewContainerRef) { }
}