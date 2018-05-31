import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dashboard } from '../dashboard/dashboard';
import { FinanceInvoice } from '../finance-invoice/finance-invoice';
import { AccountPayable } from '../account-payable/account-payable';
import { PaPage } from '../pa/pa';
@Component({
  selector: 'page-finance',
  templateUrl: 'finance.html'
})
export class FinanceDashboard {

  constructor(public navCtrl: NavController) {

  }

   financeInvoice() {
     this.navCtrl.push(FinanceInvoice);
 
   }
   payment(){
       this.navCtrl.push(PaPage);
   }
     gobackdashboard(){
     this.navCtrl.push(Dashboard);
   }
   accountsPayable(){
    this.navCtrl.push(AccountPayable);
   }
}
