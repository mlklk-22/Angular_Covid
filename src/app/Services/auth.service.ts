// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from './home.service';
// import jwt_decode from "jwt-decode";
import jwtDecode from 'jwt-decode';
import { Token } from '@angular/compiler';
import { Route, Router } from '@angular/router';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private spinner:NgxSpinnerService ,private home:HomeService,private toster:ToastrService,private http:HttpClient,private router:Router ) { }

  submit(username:any , password:any){
          var body = {
            username: username.value.toString(),
            password: password.value.toString()
          }
          const headerDic = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
          const requestOptions = {
            headers: new HttpHeaders(headerDic)
          }
          debugger
          this.http.post('https://localhost:44352/api/JWT/',body,requestOptions).subscribe((resp:any)=>{            
          debugger  
          const responce={
              token:resp.toString()
            } 
            localStorage.setItem('token',responce.token);
            let data:any =jwtDecode(responce.token);
            console.log(resp);
            localStorage.setItem('ID',data.ID)
            localStorage.setItem('Role',data.Role)
            localStorage.setItem('Number_of_Vaccines',data.Number_of_Vaccines)
            localStorage.setItem('namevaccine',data.namevaccine)
            localStorage.setItem('fullname',data.fullname)

            localStorage.setItem('user',JSON.stringify({...data}));
            if(data.Role =="3"){
            this.router.navigate(['admin']);
            this.toster.success('Hello ' + localStorage.getItem('fullname'))
            }
            else if (data.Role == "2"){
            this.router.navigate(['managedoctor/user']);
            this.toster.success('Hello ' + localStorage.getItem('fullname'))
            }
            else if (data.Role== "1"){
            this.router.navigate(['userdashbord/']);
            this.toster.success('Hello ' + localStorage.getItem('fullname'))
            }

            
            } ,err=>{ 
            this.toster.error(err.message.err.status);
            })
          }
          forgetPass(username:any , password:any, body:any){
            this.spinner.show();
            this.http.put('https://localhost:44352/api/JWT/forgetPass/' + username + '/' + password, body).subscribe((resp:any)=>{            
            this.spinner.hide();
            this.toster.success('Your Password Updated :)');
              } ,err=>{ 
              this.spinner.hide();
              this.toster.error(err.message.err.status);
              })
            }

checkuseroflogin (){
  if(localStorage.getItem('user')==null)
  {
    this.router.navigate(['security/login'])
  }

}

          
   }
  
         
