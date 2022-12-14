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

  constructor(public vaccines:VaccinesService,public home:HomeService,private toastr:ToastrService) {

    
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

  map: google.maps.Map;
  lat = 32.01698046202276; 
  lng = 35.869886335648424;
  markers:any[] = [
    {
      position: new google.maps.LatLng(32.022247231004584, 35.8644982230424),
      title: "Marker 1"
    },
    {
      position: new google.maps.LatLng(32.02610529058295, 35.866810706305166),
      title: "Center 2"
    },
    {
      position: new google.maps.LatLng(32.013878230256424, 35.87187970310129),
      title: "Center 3"
    },
    {
     position: new google.maps.LatLng(32.012820578199765, 35.88042548987068),
     title: "Center 4"
   }
  ];


  


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