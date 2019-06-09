import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxMicroNavigationComponent } from './rx-micro-navigation/rx-micro-navigation.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { from } from 'rxjs';
import { ModemCompatibilityInfoHomePageComponent } from './modemCompatibilityInfo/modem-compatibility-info-home-page/modem-compatibility-info-home-page.component';
import { ModemInfoAddPageComponent } from './modemCompatibilityInfo/modem-info-add-page/modem-info-add-page.component';
import { ModemInfoViewPageComponent } from './modemCompatibilityInfo/modem-info-view-page/modem-info-view-page.component';
import { ModemInfoUpdatePageComponent } from './modemCompatibilityInfo/modem-info-update-page/modem-info-update-page.component';

const appRoutes: Routes = [
  {
    path: 'modemInfoHome',            //<---- parent component declared here
    component: ModemCompatibilityInfoHomePageComponent,
    children: [                          //<---- child components declared here
        {
            path:'modemAdd',
            component: ModemInfoAddPageComponent
        },
        {
            path:'modemView',
            component: ModemInfoViewPageComponent
        },
        {
            path:'modemInfoUpdate',
            component: ModemInfoUpdatePageComponent
        },
    ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
