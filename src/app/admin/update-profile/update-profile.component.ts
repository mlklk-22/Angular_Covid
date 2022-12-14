import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit{

  
constructor(private router:Router,public user:UserService,private dialog:MatDialog, private http:HttpClient){

}
 ngOnInit(): void {
    this.user.getUserById(this.adminid2);
}
@ViewChild('callUpdateDailog') callUpdateDailog!:TemplateRef<any> 

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
      namevaccine:obj.namevaccine

  }
  this.updateForm.controls['userid'].setValue(this.p_data.userid);
  this.updateForm.controls['roleid'].setValue(this.p_data.roleid);

  this.dialog.open(this.callUpdateDailog);
  }
  adminid:string = localStorage.getItem('ID');
  adminid2:number = +this.adminid
 

  savedata()
  {
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
