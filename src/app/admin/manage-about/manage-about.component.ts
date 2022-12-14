import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-manage-about',
  templateUrl: './manage-about.component.html',
  styleUrls: ['./manage-about.component.css']
})
export class ManageAboutComponent implements OnInit {
  constructor(public home:HomeService, private dialog:MatDialog) { }
  ngOnInit(): void {
    this.home.getAllAbout();
  }


  
  @ViewChild('callCrateTest') callCrateTest!:TemplateRef<any>
  @ViewChild('callUpdateTest') callUpdateTest!:TemplateRef<any>
  @ViewChild('callDeleteTest') callDeleteTest!:TemplateRef<any>
  idtest:number = 0;  

  createform :FormGroup= new FormGroup({
         littleTitle1: new FormControl('', [Validators.required]),
         Title1 : new FormControl('', [Validators.required]),
         descriptionTitle1 : new FormControl('', [Validators.required]),
         imageTitle1 : new FormControl('', [Validators.required]),
         textButtonTitle1 : new FormControl('', [Validators.required]),
         whatTitle : new FormControl('', [Validators.required]),
         whatDescription : new FormControl('', [Validators.required]),
         whatdesc1 : new FormControl('', [Validators.required]),
         whatdesc2 : new FormControl('', [Validators.required]),
         whatdesc3 : new FormControl('', [Validators.required]),
         whatTextButton : new FormControl('', [Validators.required]),
         whatImage : new FormControl('', [Validators.required]),
         littleProtectTitle : new FormControl('', [Validators.required]),
         ProtectTitle : new FormControl('', [Validators.required]),
         descProtect : new FormControl('', [Validators.required]),
         protectpoint1 : new FormControl('', [Validators.required]),
         protectpoint2 : new FormControl('', [Validators.required]),
         point1desc1 : new FormControl('', [Validators.required]),
         point1desc2 : new FormControl('', [Validators.required]),
         point1desc3 : new FormControl('', [Validators.required]),
         point2desc1 : new FormControl('', [Validators.required]),
         point2desc2 : new FormControl('', [Validators.required]),
         point2desc3 : new FormControl('', [Validators.required]),
         protectImage : new FormControl('', [Validators.required]),
  })
  uploadimagetitle1(file:any){
    if(file.length == 0)
    return;
    let fileToUpload=<File>file[0];
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    this.home.uploadImageTitleAbout(formdata);
  }
  uploadImagewhAbout(file:any){
    if(file.length == 0)
    return;
    let fileToUpload=<File>file[0];
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    this.home.uploadImageWhAbout(formdata);
  }
  uploadImageProAbout(file:any){
    if(file.length == 0)
    return;
    let fileToUpload=<File>file[0];
    const formdata = new FormData();
    formdata.append('file', fileToUpload, fileToUpload.name);
    this.home.uploadImageProAbout(formdata);
  }
  
  updateform :FormGroup= new FormGroup({
         aboutid: new FormControl(),
         littleTitle1: new FormControl('', [Validators.required]),
         Title1 : new FormControl('', [Validators.required]),
         descriptionTitle1 : new FormControl('', [Validators.required]),
         imageTitle1 : new FormControl('', [Validators.required]),
         textButtonTitle1 : new FormControl('', [Validators.required]),
         whatTitle : new FormControl('', [Validators.required]),
         whatDescription : new FormControl('', [Validators.required]),
         whatdesc1 : new FormControl('', [Validators.required]),
         whatdesc2 : new FormControl('', [Validators.required]),
         whatdesc3 : new FormControl('', [Validators.required]),
         whatTextButton : new FormControl('', [Validators.required]),
         whatImage : new FormControl('', [Validators.required]),
         littleProtectTitle : new FormControl('', [Validators.required]),
         ProtectTitle : new FormControl('', [Validators.required]),
         descProtect : new FormControl('', [Validators.required]),
         protectpoint1 : new FormControl('', [Validators.required]),
         protectpoint2 : new FormControl('', [Validators.required]),
         point1desc1 : new FormControl('', [Validators.required]),
         point1desc2 : new FormControl('', [Validators.required]),
         point1desc3 : new FormControl('', [Validators.required]),
         point2desc1 : new FormControl('', [Validators.required]),
         point2desc2 : new FormControl('', [Validators.required]),
         point2desc3 : new FormControl('', [Validators.required]),
         protectImage : new FormControl('', [Validators.required]),
  })

  openCreateDialog(){
    this.dialog.open(this.callCrateTest);
   }
   saveData(){
     this.home.createAbout(this.createform.value);
   }
   p_data:any = {}; 
   openUpdateDialog(obj:any){
     this.p_data={
      aboutid:obj.aboutid,
      littletitle1: obj.littletitle1,
      title1 : obj.title1,
      descriptiontitle1 : obj.descriptiontitle1,
      imagetitle1 :obj.imagetitle1,
      textbuttontitle1 : obj.textbuttontitle1,
      whattitle : obj.whattitle,
      whatdescription : obj.whatdescription,
      whatdesc1 : obj.whatdesc1,
      whatdesc2 : obj.whatdesc2,
      whatdesc3 : obj.whatdesc3,
      whattextbutton : obj.whattextbutton,
      whatimage : obj.whatimage,
      littleprotecttitle : obj.littleprotecttitle,
      protecttitle : obj.protecttitle,
      descprotect : obj.descprotect,
      protectpoint1 : obj.protectpoint1,
      protectpoint2 : obj.protectpoint2,
      point1desc1 : obj.point1desc1,
      point1desc2 : obj.point1desc2,
      point1desc3 : obj.point1desc3,
      point2desc1 : obj.point2desc1,
      point2desc2 : obj.point2desc2,
      point2desc3 : obj.point2desc3,
      protectimage : obj.protectimage,
     }
     this.updateform.controls['aboutid'].setValue(this.p_data.aboutid);
     this.updateform.controls['imageTitle1'].setValue(this.p_data.imagetitle1);
     this.updateform.controls['whatImage'].setValue(this.p_data.whatimage);
     this.updateform.controls['protectImage'].setValue(this.p_data.protectimage);
     this.dialog.open(this.callUpdateTest);
   }
   
   saveupdateData(){
     this.home.updateAbout(this.updateform.value);
   }
   openDeleteDialog(id:number){
     const dialogRef = this.dialog.open(this.callDeleteTest);
     dialogRef.afterClosed().subscribe((res)=>{
         if(res != undefined){
           if(res == 'yes')
           this.home.deleteAbout(id);
           else
           console.log('Good Choice');
         }
     })
   }

}
