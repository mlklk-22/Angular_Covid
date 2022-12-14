import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import { VaccinesService } from 'src/app/Services/vaccines.service';

@Component({
  selector: 'app-user-vaccine-report',
  templateUrl: './user-vaccine-report.component.html',
  styleUrls: ['./user-vaccine-report.component.css']
})
export class UserVaccineReportComponent implements OnInit{
  constructor(public vaccineReport:VaccinesService) { }
@ViewChild('content',{static:false}) el!:ElementRef;
  makePDF(){
    let pdf = new jsPDF('p','px','a2');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("REPORT.pdf");

      }
    });
  }
  ngOnInit(): void {
    this.vaccineReport.GetCertificateVaccine();
  }

}
