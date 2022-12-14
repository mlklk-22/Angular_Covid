import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/Services/doctor.service';
import { HomeService } from 'src/app/Services/home.service';
import { UserService } from 'src/app/Services/user.service';
import { VaccinesService } from 'src/app/Services/vaccines.service';

@Component({
  selector: 'app-manage-vaccine',
  templateUrl: './manage-vaccine.component.html',
  styleUrls: ['./manage-vaccine.component.css']
})
export class ManageVaccineComponent implements OnInit {
  @ViewChild('callUpdateDailog') callUpdateDailog!:TemplateRef<any> 
  @ViewChild('callDeleteDailog') callDeleteDailog!:TemplateRef<any> 
  num:number=0;
  constructor(private router:Router,public doctor:DoctorService,public home:HomeService,public vaccines:VaccinesService,public user:UserService,private dialog:MatDialog) { }

  
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
    vaccinename:new FormControl('', [Validators.required]),

  })

  updateVaccine:FormGroup= new FormGroup({
    
    vaccineid: new FormControl(),
    vaccinename:new FormControl('',Validators.required),
    vaccinedoses:new FormControl,
    vaccineexp:new FormControl,

  })
  updatecenter:FormGroup= new FormGroup({

    centerid: new FormControl(),
    centername: new FormControl('', [Validators.required]),
    centerusercapacity: new FormControl(),
    centervaccinecapacity: new FormControl(),
    centeraddres: new FormControl(),
    vacCenterid: new FormControl()

  })

  ngOnInit(): void {
    this.user.getALLUser();
  }


  p_data :any={};
  c_data:any={};
  v_data:any={};
  openUpdateDailog(obj:any)
  {
    debugger
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
      vaccinename:obj.vaccinename
    }
    //  this.v_data={
    //   vaccineid:obj.vaccineid,
    //   vaccinename:obj.vaccinename,
    //  }
    // this.c_data={
    //   centerid:obj.centerid,
    //   centername:obj.centername,
    //   centeraddres:obj.centeraddres,
    //   vacCenterid:obj.vacCenterid

    // }



  
  this.updateForm.controls['userid'].setValue(this.p_data.userid);
  this.updateForm.controls['fullname'].setValue(this.p_data.fullname);
  this.updateForm.controls['username'].setValue(this.p_data.username);
  this.updateForm.controls['phonenumber'].setValue(this.p_data.phonenumber);
  this.updateForm.controls['email'].setValue(this.p_data.email);
  this.updateForm.controls['roleid'].setValue(this.p_data.roleid);
  this.updateForm.controls['password'].setValue(this.p_data.password);
  this.updateForm.controls['image'].setValue(this.p_data.image);


  // this.updateVaccine.controls['vaccineid'].setValue(this.v_data.vaccineid);
  
  
  this.dialog.open(this.callUpdateDailog);
  }


  
  savedata()
  {
    
    
    this.user.updateUser(this.updateForm.value);
   // this.vaccines.UpdateVaccine(this.updateVaccine.value);
    
  }

  openDeleteDailog(id:number)
  {
    const dialogRef=this.dialog.open(this.callDeleteDailog);
     dialogRef.afterClosed().subscribe((result)=>{
       if(result!=undefined)
      {
        if(result=='yes')
       { 
         this.user.deleteUser(id);
       }
        else if (result=='no')
         console.log('thank you')
      }
     })
  }

  searchInput(ev:any){
    debugger
    this.num=ev.target.value;
  }
  Search(){
    debugger
    
    this.user.srarchByid(this.num);
  }

}
