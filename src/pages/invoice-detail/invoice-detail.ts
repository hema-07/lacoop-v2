import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { InvoicePop } from '../invoice-pop/invoice-pop';
import { ListInvoices } from '../list-invoices/list-invoices';
@Component({
  selector: 'page-detail',
  templateUrl: 'invoice-detail.html',
})
export class InvoiceDetail {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaPage');
  }
  userConfirm(event){
    this.navCtrl.push(InvoicePop);
  }
  goBack2(){
    this.navCtrl.push(ListInvoices);
  }
}