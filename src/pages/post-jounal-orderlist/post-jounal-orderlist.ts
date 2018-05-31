import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostJounalDetailsPage } from '../post-jounal-details/post-jounal-details';
import { FarmerDashboardPage } from '../farmer-dashboard/farmer-dashboard';

/**
 * Generated class for the PostJounalOrderlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-jounal-orderlist',
  templateUrl: 'post-jounal-orderlist.html',
})
export class PostJounalOrderlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostJounalOrderlistPage');
  }
  orderDetails(event){
    this.navCtrl.push(PostJounalDetailsPage);
  }
  goBack3(){
    this.navCtrl.push(FarmerDashboardPage);
  }

}
