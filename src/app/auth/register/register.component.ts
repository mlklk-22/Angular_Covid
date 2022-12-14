import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private formBuilder: FormBuilder,private route:Router,private spinner :NgxSpinnerService,private user:UserService) { }


  registerForm :FormGroup= new FormGroup({
    fullname :new FormControl('',[Validators.required]),
    username :new FormControl('',[Validators.required]),
    phonenumber :new FormControl('',[Validators.required]),
    image:new FormControl(),
    Email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    age:new FormControl('',[Validators.required]),
  })

  uploadImage(file:any){
    if(file.length == 0)
    return;
    let fileToUpload=<File>file[0];
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    this.user.uploadAttachment(formdata);
  
} 
roleidd:any=1
submit(){
  this.spinner.show();
  setTimeout(()=>{
    this.spinner.hide();
  },3000)
 this.user.createUser(this.registerForm.value);
 this.route.navigate(['security/login']);
}




  ngOnInit(): void {
    
   } 
   siteKey:string="6LeWKnEjAAAAAEcVipIDQ2eyUbkyqu-JnIyhGs_S";

   matchError(){
    if(this.registerForm.controls['password'].value==
    this.registerForm.controls['confirmPassword'].value)
    this.registerForm.controls['confirmPassword'].setErrors(null);
    else 
    this.registerForm.controls['confirmPassword'].setErrors({mismatch:true});

  }
  goToLogin(){
    this.route.navigate(['security/login'])
  }

}
