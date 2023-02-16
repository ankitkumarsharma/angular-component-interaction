import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // for get/set method
  public isEnable: boolean = false;
  // for BehaviorSubject
  fullName = new BehaviorSubject('Ankit');
  getFullName = this.fullName.asObservable();
  constructor() { }
  // we are communication data between two component via service -- getter/setter method
  //-----------------------------------------------------------

  // setter method
  setData(data:any){
    this.isEnable = data;
  }
  // getter method
  getData(){
    return this.isEnable;
  }

  // data communicate via BehaviourSubject
  updateFullname(name:string){
    this.fullName.next(name);
  }
}
