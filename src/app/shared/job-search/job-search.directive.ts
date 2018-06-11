import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[job-search-host]',
})
export class JobSearchDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}