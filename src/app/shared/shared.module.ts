import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import{HttpClientModule}from '@angular/common/http'

@NgModule({
  declarations: [
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule
    
  ]
 
 
})
export class SharedModule { }
