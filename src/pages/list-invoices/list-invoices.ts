import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccountPayable } from '../account-payable/account-payable';
import { InvoiceDetail } from '../invoice-detail/invoice-detail';
@Component({
  selector: 'page-list',
  templateUrl: 'list-invoices.html'
})

export class ListInvoices {
  constructor(public navCtrl: NavController){

  }
  goBack2(){
    this.navCtrl.push(AccountPayable);
  }
  expandDetails(){
    this.navCtrl.push(InvoiceDetail);
  }
}
