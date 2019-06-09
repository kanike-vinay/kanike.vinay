import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-modem-compatibility-info-home-page',
  templateUrl: './modem-compatibility-info-home-page.component.html',
  styleUrls: ['./modem-compatibility-info-home-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModemCompatibilityInfoHomePageComponent implements OnInit {
  
 
  constructor() { }

  ngOnInit() {
    localStorage.setItem('dataSource', "1");
    console.log(localStorage.getItem('dataSource'));
  }

  tabClick(tab) {
    console.log(tab);
  }

}