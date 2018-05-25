import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PastJournals } from '../finance-pastjournals/past-journals';
import { FinanceDashboard } from '../finance-dashboard/finance';
@Component({
  selector: 'page-invoice',
  templateUrl: 'finance-invoice.html'
})
export class FinanceInvoice {

  constructor(public navCtrl: NavController) {

  }
gobackdashboard(){
  
  this.navCtrl.push(FinanceDashboard);
}
orderDetails(event){
    console.log("clicked");
  this.navCtrl.push(PastJournals);
  }
}
