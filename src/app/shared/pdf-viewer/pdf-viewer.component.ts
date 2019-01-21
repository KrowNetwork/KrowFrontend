import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }
  url = ""
  ngOnInit() {
    this.url = this.route.snapshot.params["url"];
    console.log(this.url)
  }

}
