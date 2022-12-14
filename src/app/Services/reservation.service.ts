import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservation:any=[{}];
  reserveid: any;
  userid: any;
  status: any;
  massage: any;
  actualdatedose1: any;
  actualdatedose2: any;
  constructor(private http:HttpClient,private spinner :NgxSpinnerService,private toastr:ToastrService) { }
  getall(){
    this.spinner.show();
    this.http.get('https://localhost:44352/api/Reservation/getall').subscribe((res)=>{
      this.reservation=res;
      this.spinner.hide();
      this.toastr.success('Data Retrived successfully');

    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    }
    
    )

  }
  getbyid(num:number){

    this.spinner.show();
  debugger;
  this.http.get('https://localhost:44352/api/Reservation/GetById/'+num).subscribe((res:any)=>{
      debugger
      this.reservation =[ res] ;
      this.spinner.hide();
      this.toastr.success('Successfully !!');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message,err.status);
    }
    )
  }

  createreservation(body:any){
    debugger
this.spinner
this.http.post('https://localhost:44352/api/Reservation',body).subscribe((resp)=>{
  this.spinner.hide();
  this.toastr.success('saved successfully');
},err=>{
  this.spinner.hide();
  this.toastr.error(err.message, err.status);
}
)
  }

  Updatereservation(body:any){
    debugger
    body.actualdatedose1 = new Date(body.actualdatedose1);
    body.actualdatedose2 = new Date(body.actualdatedose2);

    this.spinner
    this.http.put('https://localhost:44352/api/Reservation',body).subscribe((resp)=>{
      this.spinner.hide();
      this.toastr.success('Update successfully');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    }
    )
      }

      deletereservation(id:number){
        this.spinner.show();
        this.http.delete('https://localhost:44352/api/Reservation/' + id).subscribe((resp)=>{
          this.spinner.hide();
          this.toastr.success('deletd successfully');
        },err=>{
          this.spinner.hide();
          this.toastr.error(err.message, err.status);
        
      
    })
  }

  SearchBetweenFirstDose(DateFrom:any, DateTo:any){
    this.spinner.show();
    this.http.get('https://localhost:44352/api/Reservation/searchByFirstDose/' + DateFrom + '/' + DateTo).subscribe((resp)=>{
      this.reservation = resp;  
    this.spinner.hide();
      this.toastr.success('Getting successfully');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message, err.status);
    
  
})
}
allBySearchSecondDose:any;
SearchBetweenSecondDose(DateFrom:any, DateTo:any){
  this.spinner.show();
  this.http.get('https://localhost:44352/api/Reservation/searchBySecondDose/' + DateFrom + '/' + DateTo).subscribe((resp)=>{
    this.reservation = resp;
    this.spinner.hide();
    this.toastr.success('Getting successfully');
  },err=>{
    this.spinner.hide();
    this.toastr.error(err.message, err.status);
  

})
}
}
