import { Component, OnInit } from '@angular/core';
import { COMPONENT_INTERACTION_TYPE } from './core/home.constant';
import { ComponentInteractionTypes } from './core/home.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public componentType: ComponentInteractionTypes[] = COMPONENT_INTERACTION_TYPE;
  constructor() { }

  ngOnInit(): void {
  }

}
