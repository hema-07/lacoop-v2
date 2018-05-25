import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MatchReceipts } from '../finance-matchreceipts/match-receipts';
import { FinanceInvoice } from '../finance-invoice/finance-invoice';
@Component({
  selector: 'page-past-journals',
  templateUrl: 'past-journals.html'
})
export class PastJournals {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
showConfirm1(event) {
      let confirm = this.alertCtrl.create({
        title: 'Create Invoice',
        message: 'Create Invoice of 500$ for order OA_01?',
        buttons: [
          {
            text: 'No',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Yes',
            handler: () => {
              
              this.navCtrl.push(MatchReceipts);
            }
          }
        ]
      });
      confirm.present();
    }
gobackdashboard(){
  this.navCtrl.push(FinanceInvoice);
}

}
