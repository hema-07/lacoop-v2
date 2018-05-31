import { Component } from '@angular/core';
import { CreateOrder } from '../create-order/createorder';
import {  NavController, NavParams } from 'ionic-angular';
import { DashboardProcurement } from '../dashboard-procurement/dashboard-procurement';

@Component({
  selector: 'page-purchase',
  templateUrl: 'purchase.html'
})
export class DashboardPurchase {

  searchQuery: string = '';
  Order1: any[];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }
  initializeItems() {
      this.Order1 = [
        {ItemNo:"IT_101",ItemName: "Urea", Description: "46% Nitrogen",Rate:"1000"},
        {ItemNo:"IT_301",ItemName: "Calcium Ammonium Nitrate", Description: "26% Nitrogen",Rate:"800"},
        {ItemNo:"IT_231",ItemName: "Urea Ammonium Nitrate", Description: "32% Nitrogen",Rate:"950"},
        {ItemNo:"IT_131",ItemName: "N.P.K(10-26-26)", Description: "Nitrophosphate with potash",Rate:"900"},
        {ItemNo:"IT_046",ItemName: "N.P.K(22-22-11)", Description: "Nitrophosphate with potash",Rate:"920"},
        {ItemNo:"IT_289",ItemName: "Urea(coated)", Description: "45% Nitrogen",Rate:"1038"}
      ];
    }

    getItems(ev: any) {

    this.initializeItems();

    let val = ev.target.value;
    console.log(val,"target value");
    if (val && val.trim() != '') {
    this.Order1 = this.Order1.filter((item) => {
      return (item.ItemName.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaPage');
  }

orderDetail(event){
  this.navCtrl.push(CreateOrder);
}
gobackdashboard(){
  this.navCtrl.push(DashboardProcurement);
}
}