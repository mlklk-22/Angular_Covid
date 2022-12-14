import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterComponent } from './center/center.component';
import { CertificateComponent } from './certificate/certificate.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeUaerComponent } from './home-uaer/home-uaer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { YourReservationComponent } from './your-reservation/your-reservation.component';

const routes: Routes = [
  {
    path:'',
    component:HomeUaerComponent
  },
  {
  path:'reservation',
  component:ReservationComponent
},
{
  path:'yourreservation',
  component:YourReservationComponent
},

{
  path:'edit',
  component:EditProfileComponent
},
{
  path:'center',
  component:CenterComponent
},
{
  path:'Certificate',
  component:CertificateComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserdashbordRoutingModule { }
