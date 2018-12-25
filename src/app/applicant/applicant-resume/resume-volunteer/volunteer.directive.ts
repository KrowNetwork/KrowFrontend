import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[volunteer-host]',
})
export class EducationDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}