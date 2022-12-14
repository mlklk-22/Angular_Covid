import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-manage-home',
  templateUrl: './manage-home.component.html',
  styleUrls: ['./manage-home.component.css']
})
export class ManageHomeComponent implements OnInit{
  constructor(public home:HomeService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.home.getAllHome();
  }
  @ViewChild('callCrateTest') callCrateTest!:TemplateRef<any>
  @ViewChild('callUpdateTest') callUpdateTest!:TemplateRef<any>
  @ViewChild('callDeleteTest') callDeleteTest!:TemplateRef<any>
  idtest:number = 0;  

  createform :FormGroup= new FormGroup({
        imageLogo: new FormControl('', [Validators.required]),
         littleTitle1: new FormControl('', [Validators.required]),
         Title1 : new FormControl('', [Validators.required]),
         descriptionTitle1 : new FormControl('', [Validators.required]),
         imageTitle1 : new FormControl('', [Validators.required]),
         textButton : new FormControl('', [Validators.required]),
         statisticsTitle : new FormControl('', [Validators.required]),
         descriptionStatistics : new FormControl('', [Validators.required]),
         desc1Statistics : new FormControl('', [Validators.required]),
         desc2Statistics : new FormControl('', [Validators.required]),
         desc3Statistics : new FormControl('', [Validators.required]),
         newsTitle : new FormControl('', [Validators.required]),
         newsImage1 : new FormControl('', [Validators.required]),
         newsImage2 : new FormControl('', [Validators.required]),
         newsImage3 : new FormControl('', [Validators.required]),
         newsdesc1 : new FormControl('', [Validators.required]),
         newsdesc2 : new FormControl('', [Validators.required]),
         newsdesc3 : new FormControl('', [Validators.required]),
  })
  uploadimagelogo(file:any){
    if(file.length == 0)
    return;
    let fileToUpload=<File>file[0];
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    this.home.uploadLogoImage(formdata);
  }
  uploadimagetitle1(file:any){
    if(file.length == 0)
    return;
    let fileToUpload=<File>file[0];
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    this.home.uploadImageTitle1(formdata);
  }
  uploadnewsImage1(file:any){
    if(file.length == 0)
    return;
    let fileToUpload=<File>file[0];
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    this.home.uploadNewsIm1(formdata);
  }
  uploadnewsImage2(file:any){
    if(file.length == 0)
    return;
    let fileToUpload=<File>file[0];
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    this.home.uploadNewsIm2(formdata);
  }
  uploadnewsImage3(file:any){
    if(file.length == 0)
    return;
    let fileToUpload=<File>file[0];
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    this.home.uploadNewsIm3(formdata);
  }
  updateform :FormGroup= new FormGroup({
         homeid: new FormControl(),
         imagelogo: new FormControl('', [Validators.required]),
         littletitle1: new FormControl('', [Validators.required]),
         title1 : new FormControl('', [Validators.required]),
         descriptiontitle1 : new FormControl('', [Validators.required]),
         imagetitle1 : new FormControl('', [Validators.required]),
         textbutton : new FormControl('', [Validators.required]),
         statisticstitle : new FormControl('', [Validators.required]),
         descriptionstatistics : new FormControl('', [Validators.required]),
         desc1statistics : new FormControl('', [Validators.required]),
         desc2statistics : new FormControl('', [Validators.required]),
         desc3statistics : new FormControl('', [Validators.required]),
         newstitle : new FormControl('', [Validators.required]),
         newsimage1 : new FormControl('', [Validators.required]),
         newsimage2 : new FormControl('', [Validators.required]),
         newsimage3 : new FormControl('', [Validators.required]),
         newsdesc1 : new FormControl('', [Validators.required]),
         newsdesc2 : new FormControl('', [Validators.required]),
         newsdesc3 : new FormControl('', [Validators.required])
  })

  openCreateDialog(){
    this.dialog.open(this.callCrateTest);
   }
   saveData(){
     this.home.createHome(this.createform.value);
   }
   p_data:any = {}; 
   openUpdateDialog(obj:any){
     this.p_data={
         homeid: obj.homeid,
         imagelogo: obj.imagelogo,
         littletitle1: obj.littletitle1,
         title1 : obj.title1,
         descriptiontitle1 :obj.descriptiontitle1,
         imagetitle1 : obj.imagetitle1,
         textbutton : obj.textbutton,
         statisticstitle : obj.statisticstitle,
         descriptionstatistics : obj.descriptionstatistics,
         desc1statistics : obj.desc1statistics,
         desc2statistics : obj.desc2statistics,
         desc3statistics : obj.desc3statistics,
         newstitle : obj.newstitle,
         newsimage1 : obj.newsimage1,
         newsimage2 : obj.newsimage2,
         newsimage3 : obj.newsimage3,
         newsdesc1 : obj.newsdesc1,
         newsdesc2 : obj.newsdesc2,
         newsdesc3 : obj.newsdesc3
     }
     this.updateform.controls['homeid'].setValue(this.p_data.homeid);
     this.updateform.controls['imagetitle1'].setValue(this.p_data.imagetitle1);
     this.updateform.controls['newsimage1'].setValue(this.p_data.newsimage1);
     this.updateform.controls['newsimage2'].setValue(this.p_data.newsimage2);
     this.updateform.controls['newsimage3'].setValue(this.p_data.newsimage3);
     this.updateform.controls['imagelogo'].setValue(this.p_data.imagelogo);
 
     this.dialog.open(this.callUpdateTest);
   }
   
   saveupdateData(){
     this.home.updateHome(this.updateform.value);
   }
   openDeleteDialog(id:number){
     const dialogRef = this.dialog.open(this.callDeleteTest);
     dialogRef.afterClosed().subscribe((res)=>{
         if(res != undefined){
           if(res == 'yes')
           this.home.deleteHome(id);
           else
           console.log('Good Choice');
         }
     })
   }
 

}
