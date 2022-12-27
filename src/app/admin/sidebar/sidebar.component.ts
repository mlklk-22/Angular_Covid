import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Services/home.service';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private router:Router,private toastr:ToastrService,public user:UserService) { }
  n:number
  ngOnInit(): void {
    this.toastr.success('success');
    this.n =Number.parseInt(localStorage.getItem("ID"));
    this.user.getUserById(this.n)

  }
  logout()
  {
    localStorage.clear();
    this.router.navigate(['security/login']);
  }
}
