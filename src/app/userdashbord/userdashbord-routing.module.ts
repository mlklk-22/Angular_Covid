import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestmonialComponent } from '../admin/testmonial/testmonial.component';
import { CenterComponent } from './center/center.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeUaerComponent } from './home-uaer/home-uaer.component';
import { ReservationComponent } from './reservation/reservation.component';
import { UserTestmonialComponent } from './user-testmonial/user-testmonial.component';
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
{
  path:'usertestmonial',
  component:UserTestmonialComponent
},
{
  path:'contactUs',
  component:ContactUsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserdashbordRoutingModule { }
