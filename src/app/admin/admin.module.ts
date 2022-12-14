import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ManageAboutComponent } from './manage-about/manage-about.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManagevaccinesComponent } from './managevaccines/managevaccines.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TablesComponent } from './tables/tables.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UserVaccineReportComponent } from './user-vaccine-report/user-vaccine-report.component';
import { VaccinaiationCnterComponent } from './vaccinaiation-cnter/vaccinaiation-cnter.component';
import { ManageFooterComponent } from './manage-footer/manage-footer.component';

@NgModule({
  declarations: [
    CreateDoctorComponent,
    CreateUserComponent,
    DashboardComponent,
    SidebarComponent,
    DoctorComponent,
    ManageAboutComponent,
    ManageHomeComponent,
    ManageUserComponent,
    ManagevaccinesComponent,
    ReservationComponent,
    TablesComponent,
    TestmonialComponent,
    UpdateProfileComponent,
    UserVaccineReportComponent,
    VaccinaiationCnterComponent,
    ManageFooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ]
})
export class AdminModule { }
