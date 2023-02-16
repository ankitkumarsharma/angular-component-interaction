import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  show_flag:any;
  name!:string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
    // for BehaviorSubject
    this.dataService.getFullName.subscribe((data:string)=>{
      this.name = data;
    })
  }
  getData(){
    this.show_flag = this.dataService.getData();
  }
}
