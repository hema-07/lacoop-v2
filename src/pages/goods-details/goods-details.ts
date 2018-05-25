import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { GoodsViewPage } from '../goods-view/goods-view';
/**
 * Generated class for the GoodsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-goods-details',
  templateUrl: 'goods-details.html',
})
export class GoodsDetailsPage {
  Order1: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.initializeItems();
  }
  initializeItems() {
      this.Order1 = [
        {Item: "UREA", code: "PO106", Quantity:"2"},
        {Item: "Potassium Nitrate", code: "PO101", Quantity:"1"},
        {Item: "Calcium Nitrate", code: "PO103", Quantity:"4"},
        {Item: "Ammonium Chloride", code: "PO104", Quantity:"1"},
        {Item: "Ammonium Nitrate", code: "PO105", Quantity:"0.5"}
      ];
    }
    getItems(ev: any) {

    this.initializeItems();

    let val = ev.target.value;
    console.log(val,"target value");
    if (val && val.trim() != '') {
    this.Order1 = this.Order1.filter((item) => {
       console.log(item.code.toLowerCase(),"item here")
    //  console.log(item.Item.toLowerCase().indexOf(val.toLowerCase()),"index"));
      return (item.code.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodsDetailsPage');
  }
  itemDetails(ev){
    this.navCtrl.push(GoodsViewPage);
  }

}
