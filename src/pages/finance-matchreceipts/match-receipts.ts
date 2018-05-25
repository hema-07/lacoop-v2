import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinanceInvoice } from '../finance-invoice/finance-invoice';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-match-receipts',
  templateUrl: 'match-receipts.html'
})
export class MatchReceipts {

  constructor(public navCtrl: NavController,private toastCtrl: ToastController) {

  }

presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Invoice is successfully downloaded',
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    this.navCtrl.push(FinanceInvoice);
  });

  toast.present();
}
present1(){

    this.navCtrl.push(FinanceInvoice);
}
}
