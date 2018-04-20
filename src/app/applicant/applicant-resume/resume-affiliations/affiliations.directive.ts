import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[affiliations-host]',
})
export class AffiliationsDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}