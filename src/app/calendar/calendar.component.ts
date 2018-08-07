import { Component, OnInit } from '@angular/core';
import * as Moment from 'moment';
declare var $: any
$(".details").hide()

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  change = 0
  length = 0
  blank = []
  count = []
  closed = true
  constructor() {

    $(".details").hide()

   }

  ngOnInit() {
    this.change = Moment().startOf('month').toDate().getDay()
    this.length = Moment().endOf('month').toDate().getDate()

    this.blank = Array(this.change - 1).fill(0)
    this.count = Array(this.length).map((x,i)=>i)
    console.log(this.count)
  }

  reveal(event: any) {
    console.log(event.target.getAttribute("id"))
    this.closed=false
  }

}
