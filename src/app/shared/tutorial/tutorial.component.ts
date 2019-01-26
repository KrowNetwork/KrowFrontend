import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../shared/service/modal.service'; 

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  constructor(
    public modalService: ModalService,
  ) { }

  ngOnInit() {
  }

  close() {
    this.modalService.destroy()
  }


}
