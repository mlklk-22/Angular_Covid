import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { position } from 'html2canvas/dist/types/css/property-descriptors/position';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../Services/home.service';
import { VaccinesService } from '../Services/vaccines.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements AfterViewInit  {
  result:any;
  adress:any;
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef 
   fan:any[] =[];
   latitude:number;
   langitude:number;
   center:string;
   markers:any[]|undefined = [];
  constructor(public vaccines:VaccinesService,public home:HomeService,private toastr:ToastrService,private http:HttpClient) {
    render(
      {
          id: "#payments",
          currency: "USD",
          value: "5.00",

          onApprove: (resp:any)=>{
            this.toastr.success("thanks for donation")
      
          }
        }

        
      );
   }
   ngOnInit(): void {
    this.home.getAllVacciniationCentre();
  }

   CenterAdress(){
    return this.http.get("https://localhost:44352/api/VaccinationCenter").toPromise().then((data)=>{
      return data
    })
  }
  
   map: google.maps.Map;
   lat = 32.01698046202276; 
   lng = 35.869886335648424;
   
  
   coordinates = new google.maps.LatLng(this.lat, this.lng);
 
   mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 14
   };
 
   marker = new google.maps.Marker({
   });
 
   ngAfterViewInit() {
     this.mapInitializer();
   }
   
 
   mapInitializer() {
     this.map = new google.maps.Map(this.gmap.nativeElement, 
     this.mapOptions);
     this.marker.setMap(this.map);
     //Adding Click event to default marker
     this.marker.addListener("click", () => {
       const infoWindow = new google.maps.InfoWindow({
         content: this.marker.getTitle()
       });
       infoWindow.open(this.marker.getMap(), this.marker);
     });
 //Adding default marker to map
 this.marker.setMap(this.map);
 
 //Adding other markers
 this.loadAllMarkers();
   }
 loadAllMarkers(): void {
  this.CenterAdress().then((res)=>{
    this.result=res;
  for (let index = 0; index < this.result.length; index++) {
       this.latitude =  +this.result[index].lat;
       this.langitude =  +this.result[index].lng;
       this.center = this.result[index].centername;
    this.markers.push({position: new google.maps.LatLng(this.latitude, this.langitude)
                  ,title: this.center})
  }
   
    //console.log(this.fan)
    // this.adress=this.result.map((coin:any)=>coin.centeraddres);
    // console.log(this.adress)console.log(this.markers)
   this.markers.forEach((markerInfo) => {
     //Creating a new marker object
     const marker = new google.maps.Marker({...markerInfo
     });
      const infoWindow = new google.maps.InfoWindow({
       content: marker.getTitle()
     });
      marker.addListener("click", () => {
       infoWindow.open(marker.getMap(), marker);
     });
  marker.setMap(this.map);
   });
 
  })  
  
 
     //creating a new info window with markers info
    
 
     //Add click event to open info window on marker
    
     //Adding marker to google map
    
 }
 name:any='';


 inputValue(ev:any){
   this.name=ev.target.value;
   console.log(ev.target.value);
 }
 
 search(){
   if(this.name != ''){
 
   this.home.SearchVaccinationCenter(this.name);
   }
   else{
     this.home.getAllVacciniationCentre();
 
   }
 }
 

}
 
 
 
