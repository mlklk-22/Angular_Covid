import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from 'src/app/Services/auth.service';
import { HomeService } from 'src/app/Services/home.service';


 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  protected aFormGroup: FormGroup;


  constructor(private formBuilder: FormBuilder,private spinner:NgxSpinnerService,public home:HomeService,private auth:AuthService,private router:Router) { }
  username:FormControl = new FormControl('' ,[Validators.required ]);
  password:FormControl = new FormControl('' ,[Validators.required , Validators.minLength(8)]);
  recaptcha: FormControl =new FormControl (['', Validators.required]);

  
  ngOnInit(): void {
  
  }
  siteKey:string="6LeWKnEjAAAAAEcVipIDQ2eyUbkyqu-JnIyhGs_S";
  submit(){
      this.auth.submit(this.username,this.password);
    }
   
   goToregister(){
    this.router.navigate(['security/register'])
 }
}
