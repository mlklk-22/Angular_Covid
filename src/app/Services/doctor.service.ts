import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  userReservation:any=[{}];

  userinfo:any=[{}];
  constructor(private http:HttpClient,private spinner :NgxSpinnerService ,private toastr:ToastrService) { }

  getALLUserReservation(){
    this.spinner.show();
    this.http.get('https://localhost:44352/api/userReservation').subscribe((res)=>{
      this.userReservation=res;
      this.spinner.hide();
      this.toastr.success('Data Retrieved!!');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message,err.status);
    }
    )
  }


  getUserinfo(){
    this.spinner.show();
    this.http.get('https://localhost:44352/api/UserInfo').subscribe((res)=>{
      this.userinfo=res;
      this.spinner.hide();
      this.toastr.success('Data Retrieved!!');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message,err.status);
    }
    )
  }


}
