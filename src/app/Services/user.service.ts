import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  User:any=[{}];
  doctor:any=[{}];
  sarch:any=[{}];
  TotalUsers=0

  TotalDoctors=0
    display_image:any;
  constructor(private http:HttpClient,private spinner :NgxSpinnerService ,private toastr:ToastrService) { }
  GetTotalUsers(){
    this.spinner.show();
    this.http.get('https://localhost:44352/api/UserAccount/Totalusers').subscribe((resp:any)=>
    {
     this.TotalUsers = resp;
     this.spinner.hide();
     this.toastr.success('All Testmonials');
     console.log(this.TotalUsers)

   },
   err=>
   {
   this.spinner.hide();
   this.toastr.error(err.message, err.status);
   }
 );
  }
  GetTotalDoctors(){
    this.spinner.show();
    this.http.get('https://localhost:44352/api/UserAccount/totalDoctors').subscribe((resp:any)=>
    {
     this.TotalDoctors = resp;
     this.spinner.hide();
     console.log(this.TotalDoctors)

     this.toastr.success('All Testmonials');
   },
   err=>
   {
   this.spinner.hide();
   this.toastr.error(err.message, err.status);
   }
 );
  }

  getALLUser(){
    
    this.spinner.show();
    this.http.get('https://localhost:44352/api/UserAccount').subscribe((res)=>{
      this.User=res;
      this.spinner.hide();
      this.toastr.success('Data Retrieved!!');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message,err.status);
    }
    )
  }

  getALldoctor(){
    
    this.spinner.show();
    this.http.get('https://localhost:44352/api/UserAccount/doctro').subscribe((res)=>{
      
      this.doctor=res;
      this.spinner.hide();
      this.toastr.success('Data Retrieved!!');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message,err.status);
    }
    )

  }






  createUser(body:any){
    body.roleid = 1;  
    body.image=this.display_image;
    this.spinner.show();
    debugger
  this.http.post('https://localhost:44352/api/UserAccount/',body).subscribe((resp)=>{
    this.spinner.hide();
        this.toastr.success('Created !!');
  },err=>{
    this.spinner.hide();
    this.toastr.error(err.message,err.status);
  })
  
  }


  
uploadAttachment(file:FormData){
  debugger
  this.http.post('https://localhost:44352/api/UserAccount/uploadImage/',file).subscribe((resp:any)=>{
    this.display_image=resp.image;
  },err=>{
    this.toastr.error('Can not Upload Image');
    console.log(err);

  })
}

updateUser(body:any){
  debugger
  body.imageName=this.display_image;

  this.spinner.show();
  debugger
  this.http.put('https://localhost:44352/api/UserAccount',body).subscribe((resp)=>{
    this.spinner.hide();
    this.toastr.success('Updated Successfully !!');

  },err=>{
    this.spinner.hide();
    this.toastr.error(err.message,err.status);
  })
}
getUserById(id:number){
  this.spinner.show();
  debugger
  this.http.get('https://localhost:44352/api/UserAccount/GetById/' + id).subscribe((resp)=>{
    this.User=[resp];
    this.spinner.hide();
    this.toastr.success('returnd Successfully !!');

  },err=>{
    this.spinner.hide();
    this.toastr.error(err.message,err.status);
  })
}
deleteUser(id:number)
{
  this.spinner.show();
 this.http.delete('https://localhost:44352/api/UserAccount/Delete/'+id).subscribe((resp)=>{
  this.spinner.hide();
  this.toastr.success('Deleted Successfully !!');
 },err=>{
  this.spinner.hide();
  this.toastr.error(err.message,err.status);
 })
}

srarchByid(num:number)
{
  this.spinner.show();
  debugger;
  this.http.get('https://localhost:44352/api/UserAccount/GetById/'+num).subscribe((res:any)=>{
      debugger
      this.User =[ res] ;
      this.spinner.hide();
      this.toastr.success('Successfully sarch !!');
    },err=>{
      this.spinner.hide();
      this.toastr.error(err.message,err.status);
    }
    )

}


}
