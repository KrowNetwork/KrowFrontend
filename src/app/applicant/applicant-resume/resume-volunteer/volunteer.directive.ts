import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[volunteers-host]',
})
export class VolunteerDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}