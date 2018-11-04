import { Directive, ElementRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[experience-host]',
})
export class ExperienceDirective {
  constructor(public viewContainerRef: ViewContainerRef,
              private el: ElementRef) { 
                console.log("nae", el)
              }
}