import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import {ToastrModule, ToastNoAnimation,  ToastNoAnimationModule}  from 'ngx-toastr'
import{HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import { CenterComponent } from './center/center.component';
import { AboutComponent } from './about/about.component';
import { ProtectComponent } from './protect/protect.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { TokenInterceptor } from 'src/Interceptor/token.Interceptor';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CenterComponent,

    
    
    AboutComponent,
    ProtectComponent,
    SymptomsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastNoAnimationModule.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule,
    SharedModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    
  ],
  exports: [],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
