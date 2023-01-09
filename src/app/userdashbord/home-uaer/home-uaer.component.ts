import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-home-uaer',
  templateUrl: './home-uaer.component.html',
  styleUrls: ['./home-uaer.component.css']
})
export class HomeUaerComponent implements OnInit {

  constructor(private toastr:ToastrService,public home:HomeService) { }

  ngOnInit(): void {
    this.home.getAllHome();
    this.home.getAllAbout();

  }

}
