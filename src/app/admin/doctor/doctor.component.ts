import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  @ViewChild('callUpdateDailog') callUpdateDailog!:TemplateRef<any> 
  @ViewChild('callDeleteDailog') callDeleteDailog!:TemplateRef<any> 
  constructor(private router:Router,public user:UserService,private dialog:MatDialog) { }


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
  ngOnInit(): void {
    this.user.getALldoctor();
  }


  opendialog()
  {
  this.dialog.open(CreateUserComponent)
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

  openDeleteDailog(id:number)
  {
    const dialogRef=this.dialog.open(this.callDeleteDailog);
     dialogRef.afterClosed().subscribe((result)=>{
       if(result!=undefined)
      {
        if(result=='yes')
       { debugger
         this.user.deleteUser(id);
       }
        else if (result=='no')
         console.log('thank you')
      }
     })
  }



}
