import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FAQsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  anchorClick(id) {
    // const anchor = event.srcElement.getAttribute('anchor');
    document.getElementById(id).scrollIntoView();
  }

}
