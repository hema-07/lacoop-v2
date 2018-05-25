import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinanceDashboard } from '../finance-dashboard/finance';
/**
 * Generated class for the GobackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goback',
  templateUrl: 'goback.html',
})
export class GobackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GobackPage');
  }
  goBack6(){
 this.navCtrl.push(FinanceDashboard);
  }

}
