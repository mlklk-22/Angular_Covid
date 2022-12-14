import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptComponent } from './accept/accept.component';
import { ManageVaccineComponent } from './manage-vaccine/manage-vaccine.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [{
  path:'user',
  component:ManageVaccineComponent
}
,
{
  path:'accept',
  component:AcceptComponent
},
{
  path:'sidebar',
  component:SidebarComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
