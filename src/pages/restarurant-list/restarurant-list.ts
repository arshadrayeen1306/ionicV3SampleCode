import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RestaurantDetailsPage } from '../restaurant-details/restaurant-details';

@IonicPage()
@Component({
  selector: 'page-restarurant-list',
  templateUrl: 'restarurant-list.html',
})
export class RestarurantListPage {
  dataRes:any;
  AllData:any;
  reviewData=5;
  items: any = [];
  public menuItems: Array<any> = [];

  public selectedItems: Array<any> = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth:AuthProvider,
    ) {}

  ionViewDidLoad() {
    // console.log('ionViewDidLoad RestarurantListPage');
    this.fnGetAllRestarurant();
  }
  fnGetAllRestarurant() {
      this.auth.serviceGet('/restaurants?city=Chicago').then((result) => {
        this.dataRes = result;
        console.log('ii i ',this.dataRes.restaurants);
        
        if (JSON.stringify(this.dataRes.restaurants)!='[]') {
        //  this.AllData=this.dataRes.restaurants;
         this.menuItems = this.dataRes.restaurants;
         for (var i = 0; i <= this.menuItems.length - 1; i++) {
            this.selectedItems.push(this.menuItems[i]);
            this.items = this.selectedItems;
        }
         
        } else {

        }
      }, (err) => {
      });
  }
  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != "") {
      this.items = this.items.filter(data => {
        return data.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }
  initializeItems() {
    this.items = this.selectedItems;
  }
  navigate(item) {
    console.log(item);
    
    this.navCtrl.push(RestaurantDetailsPage, { restoItems: item });
  }

}
