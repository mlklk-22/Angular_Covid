import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdashbordRoutingModule } from './userdashbord-routing.module';
import { ReservationComponent } from './reservation/reservation.component';
import { YourReservationComponent } from './your-reservation/your-reservation.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeUaerComponent } from './home-uaer/home-uaer.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CenterComponent } from './center/center.component';
import { CertificateComponent } from './certificate/certificate.component';
import { UserTestmonialComponent } from './user-testmonial/user-testmonial.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    ReservationComponent,
    YourReservationComponent,
    NavbarComponent,
    FooterComponent,
    HomeUaerComponent,
    EditProfileComponent,
    CenterComponent,
    CertificateComponent,
    UserTestmonialComponent,
  ],
  imports: [
    CommonModule,
    UserdashbordRoutingModule,
    SharedModule,
    MatSelectModule
  ]
})
export class UserdashbordModule { }
