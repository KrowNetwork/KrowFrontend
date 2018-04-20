import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[experience-host]',
})
export class ExperienceDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}