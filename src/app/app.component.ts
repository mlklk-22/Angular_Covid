import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewCOVID';
  constructor(private spinner:NgxSpinnerService,private toaster:ToastrService){
    this.spinner.show();
    setTimeout(() => {
      
      this.spinner.hide();
    }, 3000);
  }
  
ngOnInit(){
 
}

  
}
