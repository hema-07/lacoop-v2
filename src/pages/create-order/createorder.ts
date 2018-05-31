import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DashboardProcurement } from '../dashboard-procurement/dashboard-procurement';
import { DashboardPurchase } from '../dashboard-purchase/purchase';
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
    subTitle: 'Order has been confirmed with Nutrinor',
    buttons: [
           {
        text: 'OK',
        handler: data => {
          this.navCtrl.push(DashboardProcurement);
        }
      }
    ]
  });
  alert.present();
  }
  gobackdashboard(){
    this.navCtrl.push(DashboardPurchase);
  }
}