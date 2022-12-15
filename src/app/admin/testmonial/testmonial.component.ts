import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { F } from 'chart.js/dist/chunks/helpers.core';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-testmonial',
  templateUrl: './testmonial.component.html',
  styleUrls: ['./testmonial.component.css']
})
export class TestmonialComponent implements OnInit{
  constructor(public home:HomeService, private dialog:MatDialog) { }
  ngOnInit(): void {
    this.home.GetAllTestmonials();
  }
  @ViewChild('callCrateTest') callCrateTest!:TemplateRef<any>
  @ViewChild('callUpdateTest') callUpdateTest!:TemplateRef<any>
  @ViewChild('callDeleteTest') callDeleteTest!:TemplateRef<any>
  idtest:number = 0;  

  createform :FormGroup= new FormGroup({
    message:new FormControl('', [Validators.required]),
    image:new FormControl(),
    status:new FormControl('', [Validators.required])
  })
  updateform :FormGroup= new FormGroup({
    idtest:new FormControl(),
    message:new FormControl('', [Validators.required]),
    userid:new FormControl(),
    image:new FormControl(),
    status:new FormControl('', [Validators.required])
  })
  counter:number = 0;

  openCreateDialog(){
    this.dialog.open(this.callCrateTest);
   }
   saveData(){
     this.home.createTestmonial(this.createform.value);
   }
   p_data:any = {}; 
   openUpdateDialog(obj:any){
     this.p_data={
       idtest:obj.idtest,
       message:obj.message,
       image:obj.image,
       userid:obj.userid,
       status:obj.status
     }
     this.updateform.controls['idtest'].setValue(this.p_data.idtest);
     this.updateform.controls['image'].setValue(this.p_data.image);
     this.updateform.controls['userid'].setValue(this.p_data.userid);
 
     this.dialog.open(this.callUpdateTest);
   }
   uploadfile(file:any)
  {
    if(file.length==0)
    return;
    let fileToUpload=<File>file[0]
    const formdata =new FormData();
    formdata.append('file',fileToUpload,fileToUpload.name);
    this.home.uploadTestmonialImage(formdata);
  }
   
   saveupdateData(){
     this.home.updateTestmonial(this.updateform.value);
   }
   openDeleteDialog(id:number){
     const dialogRef = this.dialog.open(this.callDeleteTest);
     dialogRef.afterClosed().subscribe((res)=>{
         if(res != undefined){
           if(res == 'yes')
           this.home.deleteTestmonial(id);
           else
           console.log('Good Choice');
         }
     })
   }
 
   searchTestInput(ev:any){
  this.idtest = ev.target.value;
   }
   search(){
     console.log(this.idtest);
     this.home.searchByTestmonial(this.idtest);
   }
}
