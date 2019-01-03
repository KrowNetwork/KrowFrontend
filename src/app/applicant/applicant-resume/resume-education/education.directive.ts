import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[education-host]',
})
export class EducationDirective {
  @Input() isSignup: string = 'false';
  constructor(public viewContainerRef: ViewContainerRef) { }
}