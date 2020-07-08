import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-maps-project';
  latitude: any;
  longitude: any;

  constructor () {}

  showLatitude(){
    alert(this.latitude);
    console.log(this.latitude);
  }

  showLongitude(){
    alert(this.longitude);
    console.log(this.longitude);
  }
  ngOnInit(){
    navigator.geolocation.watchPosition((position) => {

      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log(this.latitude);
      console.log(this.longitude);

    });
  }
}
