import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrdersManagementDetails } from '../orders-management-details/orders-management-details';
import { OrderDashboard } from '../order-dashboard/order-dashboard';
import { ItemDetails2 } from '../orders-management-details-item2/item2';
@Component({
  selector: 'page-orders',
  templateUrl: 'orders-management.html'
})

export class OrdersManagement {
  constructor(public navCtrl: NavController){

  }
  expandDetails(){
    this.navCtrl.push(OrdersManagementDetails);
  }
  goBack2(){
    this.navCtrl.push(OrderDashboard);
  }
    expandDetails1(){
    this.navCtrl.push(ItemDetails2);
  }
}
