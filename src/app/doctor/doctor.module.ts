import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AcceptComponent } from './accept/accept.component';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ManageVaccineComponent } from './manage-vaccine/manage-vaccine.component';


@NgModule({
  declarations: [
    SidebarComponent,
    AcceptComponent,
    ManageVaccineComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
    MatDialogModule
  ]
})
export class DoctorModule { }
