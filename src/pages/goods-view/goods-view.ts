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

import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-goods-view',
  templateUrl: 'goods-view.html',
})
export class GoodsViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodsViewPage');
  }
  itemDetails(){
    
let alert = this.alertCtrl.create({
  title: 'Goods Received. Details has been Updated',
  buttons: [
    {
      text: 'OK',
      handler: () => {
        this.navCtrl.push(FarmerDashboardPage);
      }
    }
  ]

});
alert.present();
   
  }
  log(){
    this.navCtrl.push(FarmerDashboardPage);
  }
  gobackdashboard(){
    this.navCtrl.push(GoodsDetailsPage);
  }
}
