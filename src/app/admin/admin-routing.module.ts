import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ManageAboutComponent } from './manage-about/manage-about.component';
import { ManageFooterComponent } from './manage-footer/manage-footer.component';
import { ManageHomeComponent } from './manage-home/manage-home.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManagevaccinesComponent } from './managevaccines/managevaccines.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TablesComponent } from './tables/tables.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UserVaccineReportComponent } from './user-vaccine-report/user-vaccine-report.component';
import { VaccinaiationCnterComponent } from './vaccinaiation-cnter/vaccinaiation-cnter.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'user',
    component:ManageUserComponent
  },
  {
    path:'vaccine',
    component:ManagevaccinesComponent
  },
  {
    path:'testmonial',
    component:TestmonialComponent
  },
  {
    path:'vaccinaiationcenter',
    component:VaccinaiationCnterComponent
  },
  {
    path:'doctor',
    component:DoctorComponent
  },
  {
    path:'manageHome',
    component:ManageHomeComponent
  },
  {
    path:'managereservation',
    component:ReservationComponent
  },
  {
    path:'tables',
    component:TablesComponent
    
  },
  {
    path:'manageAbout',
    component:ManageAboutComponent
    
  },
  {
    path:'userVaccineReport',
    component:UserVaccineReportComponent
    
  },
  {
    path:'updateprofile',
    component:UpdateProfileComponent
  },
  {
    path:'manageFooter',
    component:ManageFooterComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
