import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/Services/reservation.service';

@Component({
  selector: 'app-your-reservation',
  templateUrl: './your-reservation.component.html',
  styleUrls: ['./your-reservation.component.css']
})
export class YourReservationComponent implements OnInit {

  constructor(private route:Router,public reservationn:ReservationService ,private dialog: MatDialog) { }
  id:any 
  reserveid:any=[{}]
  ngOnInit(): void {
    debugger
    this.id=Number.parseInt( localStorage.getItem("ID"));
    console.log(this.id),
    
    this.reservationn.getbyid(this.id);
  
    
    
  }

}
