import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public home:HomeService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.home.getAllAbout();

  }

}
