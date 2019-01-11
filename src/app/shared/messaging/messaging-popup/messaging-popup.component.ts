import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../service/modal.service';

@Component({
  selector: 'app-messaging-popup',
  templateUrl: './messaging-popup.component.html',
  styleUrls: ['./messaging-popup.component.css']
})
export class MessagingPopupComponent implements OnInit {
  @Input() test: String
  constructor(
    public modalService: ModalService,
    // public options: {}
  ) { }

  ngOnInit() {
    console.log(this.test)
  }
  public close() {
    this.modalService.destroy();
  }

}
