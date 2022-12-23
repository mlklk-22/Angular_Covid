import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Services/home.service';
import { VaccinesService } from 'src/app/Services/vaccines.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  result:any;
  fan:any[] =[];
  latitude:number;
  langitude:number;
  center:string;
  markers:any[]|undefined = [];
  constructor(public vaccines:VaccinesService,public home:HomeService,private toastr:ToastrService, private http:HttpClient) {

    
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



  @ViewChild('mapContainer', { static: false }) gmap: ElementRef 



  ngOnInit(): void {
  return this.home.getAllVacciniationCentre();
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
  this.markers.forEach(markerInfo => {
    //Creating a new marker object
    const marker = new google.maps.Marker({...markerInfo
    });

    //creating a new info window with markers info
    const infoWindow = new google.maps.InfoWindow({
      content: marker.getTitle()
    });

    //Add click event to open info window on marker
    marker.addListener("click", () => {
      infoWindow.open(marker.getMap(), marker);
    });

    //Adding marker to google map
    marker.setMap(this.map);
  });
});
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