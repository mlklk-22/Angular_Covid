import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  constructor(public footer:HomeService){

  }
  ngOnInit(): void {
   this.footer.getAllFooter();
  }


}
