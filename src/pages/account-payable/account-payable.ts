import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinanceDashboard } from '../finance-dashboard/finance';
import { ListInvoices } from '../list-invoices/list-invoices';
@Component({
  selector: 'page-account',
  templateUrl: 'account-payable.html'
})
export class AccountPayable {

  constructor(public navCtrl: NavController) {

  }
  openInvoice(){
    this.navCtrl.push(ListInvoices);
  }

   gobackdashboard(){
      this.navCtrl.push(FinanceDashboard);
   }
}
