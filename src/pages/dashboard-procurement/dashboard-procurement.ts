import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FarmerDashboardPage } from '../farmer-dashboard/farmer-dashboard';
import { DashboardPurchase } from '../dashboard-purchase/purchase';

import { Dashboard } from '../dashboard/dashboard';
@Component({
  selector: 'page-pro',
  templateUrl: 'dashboard-procurement.html'
})
export class DashboardProcurement {

  Items: string[];
  Flag:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
    this.initializeItems();
  }
  initializeItems() {
    this.Items = [
    "Fertilizers","Crops","AgroChemicals","Animal Fodders","Cattle feed supplements","Pesticides","Someelse","Grains"];
  }
  buy(){
    this.navCtrl.push(DashboardPurchase);
  }
  getItems(ev: any) {

  this.initializeItems();

  let val = ev.target.value;
  if(val==''){
    this.Flag =false;
  }
  if (val && val.trim() != '') {
  this.Flag= true;
  this.Items = this.Items.filter((item) => {
    return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  })
  }

  }
  openItem(event,item){
    if(item == "Fertilizers"){
      this.navCtrl.push(DashboardPurchase);
    }
  }
  inventory(){
    this.navCtrl.push(FarmerDashboardPage);
  }
  gobackdashboard(){
    
    this.navCtrl.push(Dashboard);
  }
}

