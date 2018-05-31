import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FarmerDashboardPage } from '../farmer-dashboard/farmer-dashboard';

@Component({
  selector: 'page-orderlist-msg',
  templateUrl: 'orderlist-msg.html',
})
export class OrderlistMsgPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderlistMsgPage');
  }
  goBack3(){
    this.navCtrl.push(FarmerDashboardPage);
  }
  log(){
    this.navCtrl.push(FarmerDashboardPage);
    
  }
}
