import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-vaccinaiation-cnter',
  templateUrl: './vaccinaiation-cnter.component.html',
  styleUrls: ['./vaccinaiation-cnter.component.css']
})
export class VaccinaiationCnterComponent implements OnInit {
  constructor(public home:HomeService, private dialog:MatDialog) { }
  ngOnInit(): void {
    this.home.getAllVacciniationCentre();
  }
  @ViewChild('callCrateTest') callCrateTest!:TemplateRef<any>
  @ViewChild('callUpdateTest') callUpdateTest!:TemplateRef<any>
  @ViewChild('callDeleteTest') callDeleteTest!:TemplateRef<any>

  centerid:number = 0;

  createform :FormGroup= new FormGroup({
        centername: new FormControl('', [Validators.required]),
        centerusercapacity: new FormControl('', [Validators.required]),
        centervaccinecapacity: new FormControl('', [Validators.required]),
        centeraddres: new FormControl('', [Validators.required]),
  })
  updateform :FormGroup= new FormGroup({
        centerid: new FormControl(),
        centername: new FormControl('', [Validators.required]),
        centerusercapacity: new FormControl('', [Validators.required]),
        centervaccinecapacity: new FormControl('', [Validators.required]),
        centeraddres: new FormControl('', [Validators.required]),
        vacCenterid: new FormControl()
  })
  counter:number = 0;
  
  openCreateDialog(){
   this.dialog.open(this.callCrateTest);
  }
  saveData(){
    this.home.createVacciniationCentre(this.createform.value);
  }
  p_data:any = {}; 
  openUpdateDialog(obj:any){
    this.p_data={
        centerid: obj.centerid,
        centername: obj.centername,
        centerusercapacity:obj.centerusercapacity,
        centervaccinecapacity:obj.centervaccinecapacity,
        centeraddres:obj.centeraddres,
        vacCenterid: obj.vacCenterid
    }
    this.updateform.controls['centerid'].setValue(this.p_data.centerid);
    this.updateform.controls['vacCenterid'].setValue(this.p_data.vacCenterid);
    this.dialog.open(this.callUpdateTest);
  }
  
  saveupdateData(){
    this.home.updateVacciniationCentre(this.updateform.value);
  }
  openDeleteDialog(id:number){
    const dialogRef = this.dialog.open(this.callDeleteTest);
    dialogRef.afterClosed().subscribe((res)=>{
        if(res != undefined){
          if(res == 'yes')
          this.home.deleteVacciniationCentre(id);
          else
          console.log('Good Choice');
        }
    })
  }

  searchTestInput(ev:any){
 this.centerid = ev.target.value;
  }
  search(){
    console.log(this.centerid);
    this.home.searchByVacciniationCentre(this.centerid);
  }
}
