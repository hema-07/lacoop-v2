import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { PadetailsPage} from '../padetails/padetails';
import { FinanceDashboard } from '../finance-dashboard/finance';

@Component({
  selector: 'page-pa',
  templateUrl: 'pa.html',
})
export class PaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaPage');
  }
paDetails(event){
  this.navCtrl.push(PadetailsPage);
}
goBack6(){
 this.navCtrl.push(FinanceDashboard);
}
}
