import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { GoodsDetailsPage } from '../goods-details/goods-details';
import { PostJounalOrderlistPage } from '../post-jounal-orderlist/post-jounal-orderlist';
/**
 * Generated class for the FarmerDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { DashboardProcurement } from '../dashboard-procurement/dashboard-procurement';

@Component({
  selector: 'page-farmer-dashboard',
  templateUrl: 'farmer-dashboard.html',
})
export class FarmerDashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FarmerDashboardPage');
  }
  receiveGoods(event){
    this.navCtrl.push(GoodsDetailsPage);
  }
  gobackdashboard(){
    this.navCtrl.push(DashboardProcurement);
  }
  postJournal(){
    this.navCtrl.push(PostJounalOrderlistPage);
  }
}
