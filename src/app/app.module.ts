import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RxMicroNavigationComponent } from './rx-micro-navigation/rx-micro-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatPaginatorModule,MatTableModule, MatCheckboxModule } from '@angular/material';

import { SecondPageComponent } from './second-page/second-page.component';


import { ModemCompatibilityModule } from './modem.compatibility.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ExportAsModule } from 'ngx-export-as';
import { ExcelService } from '../app/export-service/excel.service';


@NgModule({
  declarations: [
    AppComponent,
    RxMicroNavigationComponent,
    SecondPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    ModemCompatibilityModule,
    ExportAsModule,
    
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
