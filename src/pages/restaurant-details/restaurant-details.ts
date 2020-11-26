import { Alert, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;
@IonicPage()
@Component({
  selector: 'page-restaurant-details',
  templateUrl: 'restaurant-details.html',
})
export class RestaurantDetailsPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'Surat, Gujarat';
  end = 'Mumbai, Maharastra';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  count: any = 1;
  isLiked: boolean = false;
  public menuItems: any = {};
  public currLat: any;
  public curLng: any;
  constructor(private geolocation: Geolocation, public navCtrl: NavController, public navParams: NavParams) {
    this.menuItems = this.navParams.get("restoItems");
    console.log('restoItems ', this.menuItems);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantDetailsPage');
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currLat = resp.coords.latitude;
      this.curLng = resp.coords.longitude;

    }).catch((error) => {
      console.log('Error getting location', error);
    });
    console.log('Error getting this.curLng', this.curLng);
    if (this.currLat != undefined && this.curLng != undefined) {
      this.initMap(this.currLat, this.curLng);
    } else {
      this.initMap(21.1864607, 72.8081281);
    }
  }
  initMap(lat, lng) {
    this.start = new google.maps.LatLng(lat, lng);
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 12,
      center: { lat: lat, lng: lng }
    });
    this.addMarker();
    this.directionsDisplay.setMap(this.map);
  }
  addMarker() {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let content = "<h4>My Location!</h4>";
    this.addInfoWindow(marker, content);

  }
  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}
