import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GoodsDetailsPage } from '../goods-details/goods-details';
/**
 * Generated class for the GoodsViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { FarmerDashboardPage } from '../farmer-dashboard/farmer-dashboard';

@Component({
  selector: 'page-goods-view',
  templateUrl: 'goods-view.html',
})
export class GoodsViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodsViewPage');
  }
  itemDetails(){
    this.navCtrl.push(FarmerDashboardPage);
  }
  log(){
    this.navCtrl.push(FarmerDashboardPage);
  }
}
