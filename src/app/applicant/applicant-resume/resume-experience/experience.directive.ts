import { Directive, ElementRef, ViewContainerRef, Input } from '@angular/core';
@Directive({
  selector: '[experience-host]',
})
export class ExperienceDirective {
  @Input() isSignup: string = 'false';
  constructor(public viewContainerRef: ViewContainerRef,
              private el: ElementRef) { 
                // console.log("nae", el)
              }
}