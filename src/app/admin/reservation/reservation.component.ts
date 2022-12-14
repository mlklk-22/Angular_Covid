import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/Services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  
  constructor(private route:Router,public reservation:ReservationService ,private dialog: MatDialog) { }
@ViewChild('callUpdateDailog') callUpdateDailog!:TemplateRef<any>
@ViewChild('callDelteDailog') callDelteDailog!:TemplateRef<any>
@ViewChild('callCreateDailog') callCreateDailog!:TemplateRef<any>

datefromSecond:any = '';
datetoSecond:any =''; 
datefromFirst:any ='';
datetoFirst:any ='';

////////Search First Date
searchInputFromFirst(ev:any){
  this.datefromFirst = ev.target.value;
   }
   searchInputToFirst(ev:any){
    this.datetoFirst = ev.target.value;
     } 
  SearchBetweenFirstDose(){
    if(this.datefromFirst == '' && this.datetoFirst == '')
    this.reservation.getall();
    else if(this.datefromFirst != '' && this.datetoFirst != '')
    this.reservation.SearchBetweenFirstDose(this.datefromFirst, this.datetoFirst);
    else if(this.datefromFirst != '' && this.datetoFirst == ''){
    this.datetoFirst = '2024-12-31';
    this.reservation.SearchBetweenFirstDose(this.datefromFirst, this.datetoFirst);
    }
    else {
      this.datefromFirst = '0001-01-01';
      this.reservation.SearchBetweenFirstDose(this.datefromFirst, this.datetoFirst);
    }

  }
////////Search Second Date
searchInputFromSecond(ev:any){
  this.datefromSecond = ev.target.value;
   }
   searchInputToSecond(ev:any){
    this.datetoSecond = ev.target.value;
     }
     
  SearchBetweenSecondDose(){
    if(this.datefromSecond == '' && this.datetoSecond == '')
    this.reservation.getall();
    else if(this.datefromSecond != '' && this.datetoSecond != '')
    this.reservation.SearchBetweenSecondDose(this.datefromSecond, this.datetoSecond);
    else if(this.datefromSecond != '' && this.datetoSecond == ''){
    this.datetoSecond = '2024-12-31';
    this.reservation.SearchBetweenSecondDose(this.datefromSecond, this.datetoSecond);
    }
    else {
      this.datefromSecond = '0001-01-01';
      this.reservation.SearchBetweenSecondDose(this.datefromSecond, this.datetoSecond);
    }
  }
  
  updateForm:FormGroup = new FormGroup ({
    Id: new FormControl(),
    actualdatedose1:new FormControl('',Validators.required),
    actualdatedose2:new FormControl('',Validators.required),
  })
  createForm:FormGroup = new FormGroup ({
    actualdatedose1:new FormControl('',Validators.required),
    actualdatedose2:new FormControl('',Validators.required),

  })
  ngOnInit(): void {
    this.reservation.getall();
  }
  openCreateDialog(){
    this.dialog.open(this.callCreateDailog)
  }
  
  P_data:any={};
  openUpdateDailog(obj:any){
    this.P_data={
      Id:obj.Id,
      ActualDateDose1:obj.ActualDateDose1,
      ActualDateDose2:obj.ActualDateDose2,
    }
    this.updateForm.controls['Id'].setValue(this.P_data.Id);
    this.dialog.open(this.callUpdateDailog);
  }

  saveData(){
    this.reservation.Updatereservation(this.updateForm.value);

}
saveCREATEData(){
  this.reservation.createreservation(this.createForm.value);

}
openDelteDailog(Id:number){
  const dialogRef = this.dialog.open(this.callDelteDailog);
  dialogRef.afterClosed().subscribe((res)=>{  
    if(res != undefined){
      if(res == 'yes')
      this.reservation.deletereservation(Id);
      else
      console.log('not delted');
    }
})
}
}
