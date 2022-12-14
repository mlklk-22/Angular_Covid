import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { t } from 'chart.js/dist/chunks/helpers.core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private toster:ToastrService,private route:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(state);
      const token=localStorage.getItem('token');
      if (token)
      {
       if(state.url.indexOf('admin')>=0)
          {
           let user:any = localStorage.getItem('user');
           if(user)
           {
           user=JSON.parse(user);  
             if(user.Role == "3")
               {
                 this.toster.success('Welcome');
                 return true;
               }
             else 
               {
                 this.toster.warning('Sorry , this page for Admin');
                 this.route.navigate(['security/login']);
                 localStorage.clear();
                 return false;
               }
           }

   
         }
         else{
          this.toster.warning('you are not user from db')
          return false;
         }
         return true;
     }
      else{
         this.route.navigate(['security/login']);
         this.toster.warning('Please Login');
         return false;}
     } 
     }
  
 
