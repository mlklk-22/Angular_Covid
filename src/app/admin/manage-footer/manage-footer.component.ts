import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-manage-footer',
  templateUrl: './manage-footer.component.html',
  styleUrls: ['./manage-footer.component.css']
})
export class ManageFooterComponent implements OnInit {
  @ViewChild('callUpdateDailog') callUpdateDailog!:TemplateRef<any> 
  @ViewChild('callDeleteDailog') callDeleteDailog!:TemplateRef<any>
  @ViewChild('callCreateDailog') callCreateDailog!:TemplateRef<any>
  constructor(public footer:HomeService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.footer.getAllFooter();
  }
  createForm:FormGroup= new FormGroup({
 
    title1 :new FormControl('',Validators.required),
    link1title1 :new FormControl('',Validators.required),
    link2title1 :new FormControl('',Validators.required),
    link3title1 :new FormControl('',Validators.required),
    link4title1 :new FormControl('',Validators.required),
    title2 :new FormControl('',Validators.required),
    desctitle2 :new FormControl('',Validators.required),
    title3 :new FormControl('',Validators.required),
    link1title3 :new FormControl('',Validators.required),
    link2title3 :new FormControl('',Validators.required),
    link3title3 :new FormControl('',Validators.required),
    link4title3 :new FormControl('',Validators.required),
    title4 :new FormControl('',Validators.required),
    link1title4 :new FormControl('',Validators.required),
    link2title4 :new FormControl('',Validators.required),
    link3title4 :new FormControl('',Validators.required),
    link4title4 :new FormControl('',Validators.required)
  })

  openCreateDialog(){
    this.dialog.open(this.callCreateDailog);
   }

  savedata()
  {
    debugger
    this.footer.createFooter(this.createForm.value);

  }

  updateForm :FormGroup= new FormGroup({
    footerid: new FormControl(),
    title1 :new FormControl('',Validators.required),
    link1title1 :new FormControl('',Validators.required),
    link2title1 :new FormControl('',Validators.required),
    link3title1 :new FormControl('',Validators.required),
    link4title1 :new FormControl('',Validators.required),
    title2 :new FormControl('',Validators.required),
    desctitle2 :new FormControl('',Validators.required),
    title3 :new FormControl('',Validators.required),
    link1title3 :new FormControl('',Validators.required),
    link2title3 :new FormControl('',Validators.required),
    link3title3 :new FormControl('',Validators.required),
    link4title3 :new FormControl('',Validators.required),
    title4 :new FormControl('',Validators.required),
    link1title4 :new FormControl('',Validators.required),
    link2title4 :new FormControl('',Validators.required),
    link3title4 :new FormControl('',Validators.required),
    link4title4 :new FormControl('',Validators.required)
})

p_data:any = {}; 
   openUpdateDialog(obj:any){
     this.p_data={
      footerid:obj.footerid,
      title1 :obj.title1,
      link1title1 :obj.link1title1,
      link2title1 :obj.link2title1,
      link3title1 :obj.link3title1,
      link4title1 :obj.link4title1,
      title2 :obj.title2,
      desctitle2 :obj.desctitle2,
      title3 :obj.title3,
      link1title3 :obj.link1title3,
      link2title3 :obj.link2title3,
      link3title3 :obj.link3title3,
      link4title3 :obj.link4title3,
      title4 :obj.title4,
      link1title4 :obj.link1title4,
      link2title4 :obj.link2title4,
      link3title4 :obj.link3title4,
      link4title4 :obj.link4title4
     }
     this.updateForm.controls['footerid'].setValue(this.p_data.footerid);
     
     this.dialog.open(this.callUpdateDailog);
   }
   saveupdateData(){
    this.footer.updateFooter(this.updateForm.value);
  }

  openDeleteDialog(id:number){
    const dialogRef = this.dialog.open(this.callDeleteDailog);
    dialogRef.afterClosed().subscribe((res)=>{
        if(res != undefined){
          if(res == 'yes')
          this.footer.deleteFooter(id);
          else
          console.log('Good Choice');
        }
    })
  }
}
