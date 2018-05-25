import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderDashboard } from '../order-dashboard/order-dashboard';

@Component({
  selector: 'page-initiate-dashboard',
  templateUrl: 'order-init-dashboard.html'
})
export class InitiateDashboard {

  constructor(public navCtrl: NavController) {

  }

  goBack5(){

  this.navCtrl.push(OrderDashboard);
  }
}