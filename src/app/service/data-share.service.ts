import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private sharedSource = new BehaviorSubject('default message');
  shared = this.sharedSource.asObservable();

  constructor() { }

  changeData(data) {
    this.sharedSource.next(data)
  }

  test(any) {
    console.log(any)
  }
 
}
