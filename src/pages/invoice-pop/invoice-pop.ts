import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InvoiceDetail } from '../invoice-detail/invoice-detail';
import { AccountPayable } from '../account-payable/account-payable';
@Component({
  selector: 'page-pop',
  templateUrl: 'invoice-pop.html',
})
export class InvoicePop {
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {

  }
paymentRelease(){
let alert = this.alertCtrl.create({
    title: 'Payment Released',
    subTitle: 'Payment has been released.',
    buttons: [
      {
        text: 'OK',
        handler: () => {
          this.navCtrl.push(AccountPayable);
        }
      }
    ]

  });
  alert.present();
}
goBack2(){
  this.navCtrl.push(InvoiceDetail);
}
}