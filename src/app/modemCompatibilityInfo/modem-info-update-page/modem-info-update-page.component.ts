import { Component, OnInit, Input } from '@angular/core';
import { UpdateViewService } from '../updateViewService/update-view.service';
import { UpdateInfoModel } from '../updateInfoDetail/update.info'
import { FormGroup, NgForm } from '@angular/forms';

import {Router} from '@angular/router';

@Component({
  selector: 'app-modem-info-update-page',
  templateUrl: './modem-info-update-page.component.html',
  styleUrls: ['./modem-info-update-page.component.css']
})

export class ModemInfoUpdatePageComponent implements OnInit {

  @Input() public viewData;
  updateInfo : UpdateInfoModel[];

  arr: any[]=[];
  constructor( private updateService : UpdateViewService, private router: Router ) { }

  ngOnInit() {
    this.updateService.cast.subscribe(updateInfo=> this.updateInfo = updateInfo);
  }

  updateModemInfo(form : NgForm){
    this.arr = form.value;
    console.log(JSON.stringify( this.arr));
    console.log(JSON.stringify( form.value));
    form.reset();
  }

  cancel(){
    this.router.navigate(["modemInfoHome"]);
  }

}
