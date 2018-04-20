import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[education-host]',
})
export class EducationDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}