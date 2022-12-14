import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  constructor(public home:HomeService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.home.getAllAbout();

  }

}
