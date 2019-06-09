import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ModemCompatibilityInfoHomePageComponent } from './modemCompatibilityInfo/modem-compatibility-info-home-page/modem-compatibility-info-home-page.component';
import { ModemInfoAddPageComponent } from './modemCompatibilityInfo/modem-info-add-page/modem-info-add-page.component';
import { ModemInfoViewPageComponent } from './modemCompatibilityInfo/modem-info-view-page/modem-info-view-page.component';
import { ModemInfoUpdatePageComponent } from './modemCompatibilityInfo/modem-info-update-page/modem-info-update-page.component';
import { ModemCompatibilityRoutingModule } from './modem.compatibility-routing.module';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatPaginatorModule,MatTableModule, MatCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { UpdateViewService } from './modemCompatibilityInfo/UpdateViewService/update-view.service';

@NgModule({
    imports: [
      CommonModule,
      ModemCompatibilityRoutingModule,
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
    ],
    declarations: [
      ModemCompatibilityInfoHomePageComponent,
      ModemInfoAddPageComponent,
      ModemInfoViewPageComponent,
      ModemInfoUpdatePageComponent,
    ],
    providers: [ UpdateViewService ]
  })
  export class ModemCompatibilityModule {}