import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  @ViewChild('callUpdateDailog') callUpdateDailog!:TemplateRef<any> 
  constructor(private router:Router,private auth:AuthService,public user:UserService,private dialog:MatDialog) { }

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
    roleid:new FormControl(),
    namevaccine:new FormControl(),
  })
  id:any 
role:any
Number_of_Vaccines:any
namevaccine:any
  ngOnInit(): void {
    this.auth.checkuseroflogin();
    
   
    this.id=Number.parseInt( localStorage.getItem("ID"));
   
    this.role=Number.parseInt( localStorage.getItem("Role"));
    this.user.srarchByid(this.id)
    
    console.log(this.id);
    console.log("ahmad")
   console.log(this.role)
   
  }

  p_data :any={};
  openUpdateDailog(obj:any)
  {
    this.p_data={
      userid:obj.userid,
      fullname:obj.fullname,
      username:obj.username,
     
      phonenumber:obj.phonenumber,
      age:obj.age,
      numberofvaccines:obj.numberofvaccines,
      email:obj.email,
      password:obj.password,
      roleid:obj.roleid,
      image:obj.image,


  }
  this.updateForm.controls['userid'].setValue(this.p_data.userid);
  this.dialog.open(this.callUpdateDailog);
  }




  
  savedata()
  {
    this.updateForm.controls['userid'].setValue(this.id)
    this.updateForm.controls['roleid'].setValue(this.role)
    this.updateForm.controls['numberofvaccines'].setValue(this.Number_of_Vaccines)
    this.updateForm.controls['namevaccine'].setValue(this.namevaccine)
    debugger
    this.user.updateUser(this.updateForm.value);
  }

 
  uploadfile(file:any)
  {
    if(file.length==0)
    return;
    let fileToUpload=<File>file[0]
    const formdata =new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.user.uploadAttachment(formdata);
  }

}
