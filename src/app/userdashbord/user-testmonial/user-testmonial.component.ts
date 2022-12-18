import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-user-testmonial',
  templateUrl: './user-testmonial.component.html',
  styleUrls: ['./user-testmonial.component.css']
})
export class UserTestmonialComponent implements OnInit {
  @ViewChild('callCrateTest') callCrateTest!:TemplateRef<any>

  constructor(public home:HomeService, private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  createform :FormGroup= new FormGroup({
    message:new FormControl('', [Validators.required]),
    image:new FormControl(),
   // status:new FormControl('', [Validators.required])
  })
  openCreateDialog(){
    
    this.dialog.open(this.callCrateTest);
   }
   saveData(){    
    this.home.createTestmonial(this.createform.value);
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

}
