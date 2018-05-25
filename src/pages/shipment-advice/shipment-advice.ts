import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderDashboard } from '../order-dashboard/order-dashboard';

@Component({
  selector: 'page-shipment-advice',
  templateUrl: 'shipment-advice.html'
})
export class ShipmentAdviceDashboard {

  constructor(public navCtrl: NavController) {

  }

  goBack5(){

  this.navCtrl.push(OrderDashboard);
  }
}