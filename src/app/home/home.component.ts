import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private toastr:ToastrService,public home:HomeService) { }

  ngOnInit(): void {
    this.home.getAllHome();

  } 


}
