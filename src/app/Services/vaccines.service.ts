import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class VaccinesService {
  Vaccine:any=[{}];
  vaccineCertifcate:any[] = [];

  constructor(private http:HttpClient,private spinner :NgxSpinnerService,private toastr:ToastrService) { }
  getall(){
    this.spinner.show();
    this.http.get('https://localhost:44352/api/Vaccines').subscribe((res)=>{
      this.Vaccine=res;
      this.spinner.hide();
      this.toastr.success('Data Retrived successfully');

    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    }
    
    )

  }
  createVaccine(body:any){
this.spinner
this.http.post('https://localhost:44352/api/vaccines',body).subscribe((resp)=>{
  this.spinner.hide();
  this.toastr.success('saved successfully');
},err=>{
  this.spinner.hide();
  this.toastr.error(err.message, err.status);
}
)
  }

  UpdateVaccine(body:any){
    debugger
    this.spinner
    this.http.put('https://localhost:44352/api/vaccines',body).subscribe((resp)=>{
      this.spinner.hide();
      this.toastr.success('Update successfully');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    }
    )
      }

      deletevaccine(id:number){
        this.spinner.show();
        this.http.delete('https://localhost:44352/api/vaccines/' + id).subscribe((resp)=>{
          this.spinner.hide();
          this.toastr.success('deletd successfully');
        },err=>{
          this.spinner.hide();
          this.toastr.error(err.message, err.status);
        
      
    })
  }

  SearchVaccin(name:string){
    this.spinner.show();
    debugger;

    this.http.get('https://localhost:44352/api/vaccines/search/' + name).subscribe((resp:any)=>
    {
      this.Vaccine=resp;

      this.spinner.hide();
      this.toastr.success(' Successfully !!');

    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    })
  }
  GetCertificateVaccine(){
    this.spinner.show();
    debugger;
    this.http.get('https://localhost:44352/api/CertificateVaccine').subscribe((resp:any)=>
    {
      this.vaccineCertifcate=resp;

      this.spinner.hide();
      this.toastr.success(' Successfully Return Certificate');

    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    })
  }

  




}
