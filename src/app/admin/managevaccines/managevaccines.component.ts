import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { VaccinesService } from 'src/app/Services/vaccines.service';

@Component({
  selector: 'app-managevaccines',
  templateUrl: './managevaccines.component.html',
  styleUrls: ['./managevaccines.component.css']
})
export class ManagevaccinesComponent implements OnInit{
  
  constructor(private route:Router,public vaccines:VaccinesService ,private dialog: MatDialog) { }
@ViewChild('callUpdateDailog') callUpdateDailog!:TemplateRef<any>
@ViewChild('callDelteDailog') callDelteDailog!:TemplateRef<any>
@ViewChild('callCreateDailog') callCreateDailog!:TemplateRef<any>

  updateForm:FormGroup = new FormGroup ({
    vaccineid: new FormControl(),
    vaccinename:new FormControl('',Validators.required),
    vaccinedoses:new FormControl('',Validators.required),
    vaccineexp:new FormControl('',Validators.required)
  })
  createForm:FormGroup = new FormGroup ({
    vaccinename:new FormControl('',Validators.required),
    vaccinedoses:new FormControl('',Validators.required),
    vaccineexp:new FormControl('',Validators.required)

  })

  ngOnInit(): void {
    this.vaccines.getall();
  }

  openCreateDialog(){
    this.dialog.open(this.callCreateDailog)
  }
  
  P_data:any={};
  openUpdateDailog(obj:any){
    this.P_data={
      vaccineid:obj.vaccineid,
      vaccinename:obj.vaccinename,
      vaccinedoses:obj.vaccinedoses,
      vaccineexp:obj.vaccineexp}
    this.updateForm.controls['vaccineid'].setValue(this.P_data.vaccineid);
    this.dialog.open(this.callUpdateDailog);
  }

  saveData(){
    this.vaccines.UpdateVaccine(this.updateForm.value);

}
saveCREATEData(){
  this.vaccines.createVaccine(this.createForm.value);

}
openDelteDailog(id:number){
  const dialogRef = this.dialog.open(this.callDelteDailog);
  dialogRef.afterClosed().subscribe((res)=>{
    if(res != undefined){
      if(res == 'yes')
      this.vaccines.deletevaccine(id);
      else
      console.log('not delted');
    }
})
}

name:any='';


inputValue(ev:any){
  

  
  this.name=ev.target.value;
 
  console.log(ev.target.value);

}

  

search(){
  if(this.name != ''){

  this.vaccines.SearchVaccin(this.name);
  }
  else{
    this.vaccines.getall();

  }
  
}
}
