import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from 'src/app/Services/auth.service';
import { HomeService } from 'src/app/Services/home.service';
import { UserService } from 'src/app/Services/user.service';


 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  protected aFormGroup: FormGroup;


  constructor(private formBuilder: FormBuilder,private spinner:NgxSpinnerService,public home:HomeService,private auth:AuthService,private router:Router, public dialog:MatDialog, private user:UserService) { }
  @ViewChild('callUpdateDailog') callUpdateDailog!:TemplateRef<any> 
  username:FormControl = new FormControl('' ,[Validators.required ]);
  password:FormControl = new FormControl('' ,[Validators.required , Validators.minLength(8)] );
  recaptcha: FormControl =new FormControl (['', Validators.required]);

  
  ngOnInit(): void {
  
  }
  // siteKey:string="6LeWKnEjAAAAAEcVipIDQ2eyUbkyqu-JnIyhGs_S";
  submit(){
      this.auth.submit(this.username,this.password);
    }
   
   goToregister(){
    this.router.navigate(['security/register'])
 }

 updateForm:FormGroup= new FormGroup({
  userid:new FormControl(),
  fullname:new FormControl(),
  username:new FormControl(),
  image:new FormControl(),
  phonenumber:new FormControl(),
  age:new FormControl(),
  numberofvaccines:new FormControl(),
  email:new FormControl(),
  password:new FormControl(),
  roleid:new FormControl()
})
openUpdateDailog(){
  this.dialog.open(this.callUpdateDailog)
}
editForgetPass(){
  for (let index = 0; index < this.user.User.length; index++) {
    if (this.user.User[index].username == this.updateForm.controls['username'].value) {
      this.updateForm.controls['userid'].setValue(this.user.User[index].userid);
      this.updateForm.controls['fullname'].setValue(this.user.User[index].fullname);
      this.updateForm.controls['image'].setValue(this.user.User[index].image);
      this.updateForm.controls['phonenumber'].setValue(this.user.User[index].phonenumber);
      this.updateForm.controls['age'].setValue(this.user.User[index].age);
      this.updateForm.controls['numberofvaccines'].setValue(this.user.User[index].numberofvaccines);
      this.updateForm.controls['email'].setValue(this.user.User[index].email);
      this.updateForm.controls['roleid'].setValue(this.user.User[index].roleid);
    }
    
  }
this.auth.forgetPass(this.updateForm.controls['username'].value,
                     this.updateForm.controls['password'].value,
                     this.updateForm.value)
}
}
