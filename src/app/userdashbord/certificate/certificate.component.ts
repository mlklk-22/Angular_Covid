import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { an } from 'chart.js/dist/chunks/helpers.core';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  title = 'html-to-pdf-angular-application';

  constructor(private router:Router,private auth:AuthService,public user:UserService) { }

  public convertToPDF()
{
html2canvas(document.getElementById("contentToConvert")).then(canvas => {
// Few necessary setting options
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jsPDF('p', 'mm', 'a5'); // A4 size page of PDF
var width = pdf.internal.pageSize.getWidth();
var height = canvas.height * width / canvas.width;
pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
pdf.save('Certificate.pdf'); // Generated PDF
});
}
  id:any 
role:any
Number_of_Vaccines:any
namevaccine:any
dateTime:any
fullname:any

  ngOnInit(): void {
    this.dateTime = new Date()

    this.auth.checkuseroflogin();
   
    this.id=Number.parseInt( localStorage.getItem("ID"));
    this.role=Number.parseInt( localStorage.getItem("Role"));
    this.Number_of_Vaccines=Number.parseInt(localStorage.getItem("Number_of_Vaccines"));
    this.namevaccine=localStorage.getItem("namevaccine");
    this.fullname=localStorage.getItem("fullname");

    this.user.srarchByid(this.id)

  }
  

}
