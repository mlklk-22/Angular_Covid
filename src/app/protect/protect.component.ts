import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-protect',
  templateUrl: './protect.component.html',
  styleUrls: ['./protect.component.css']
})
export class ProtectComponent implements OnInit {

  constructor(public home:HomeService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.home.getAllAbout();

  }

}
