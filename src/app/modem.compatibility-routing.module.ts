import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModemCompatibilityInfoHomePageComponent } from './modemCompatibilityInfo/modem-compatibility-info-home-page/modem-compatibility-info-home-page.component';
import { ModemInfoAddPageComponent } from './modemCompatibilityInfo/modem-info-add-page/modem-info-add-page.component';
import { ModemInfoViewPageComponent } from './modemCompatibilityInfo/modem-info-view-page/modem-info-view-page.component';
import { ModemInfoUpdatePageComponent } from './modemCompatibilityInfo/modem-info-update-page/modem-info-update-page.component';

const modemRoutes: Routes = [
  { path: 'modemInfoHome',  component: ModemCompatibilityInfoHomePageComponent },
  { path: 'modemAdd', component: ModemInfoAddPageComponent },
  { path: 'modemView', component: ModemInfoViewPageComponent },
  { path: 'modemInfoUpdate', component: ModemInfoUpdatePageComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(modemRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ModemCompatibilityRoutingModule { }