import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DashboardProcurement } from '../dashboard-procurement/dashboard-procurement';
@Component({
  selector: 'page-order',
  templateUrl: 'createorder.html'
})
export class CreateOrder {
  Order1: any[];
  pet:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  
  }
  buy(event,item){
    let alert = this.alertCtrl.create({
    title: 'Order Confirmed',
    subTitle: 'Order has been confirmed with farmers',
    buttons: [
           {
        text: 'ok',
        handler: data => {
          this.navCtrl.push(DashboardProcurement);
        }
      }
    ]
  });
  alert.present();
  }
}