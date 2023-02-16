import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CONTACT_HEADER } from '../core/service-get-set-based.constant';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  contactData = CONTACT_HEADER;
  constructor(private dataService: DataService) { }
  changeValue:any;
  ngOnInit() {
    this.changeValue = this.dataService.getData();
  }
  changeCondition(){
    // for set/get method
    this.changeValue = !this.changeValue;
    this.dataService.setData(this.changeValue);
    // for behaviourSubject
    this.dataService.updateFullname('Ankit Kumar Sharma');
    // show alert
    alert('Done, Now click on Go to Parent');
  }

}
