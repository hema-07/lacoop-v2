import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrdersManagement } from '../orders-management/orders-management';
import { Dashboard } from '../dashboard/dashboard';
import { Procurement } from '../order-procurement/procurement';
import { InitiateDashboard } from '../order-init-dashboard/order-init-dashboard';
import { JobList } from '../joblist/joblist';
import { ShipmentAdviceDashboard } from '../shipment-advice/shipment-advice';
@Component({
  selector: 'page-order',
  templateUrl: 'order-dashboard.html'
})
export class OrderDashboard {

  constructor(public navCtrl: NavController) {

  }

  ordersmanagement() {
     this.navCtrl.push(OrdersManagement);
   }
   gobackdashboard(){
     this.navCtrl.push(Dashboard);
   }
   procurement(){
     this.navCtrl.push(Procurement);
   }
   initDash(){
     this.navCtrl.push(InitiateDashboard);
   }
   jobList(){
      this.navCtrl.push(JobList);
   }
   shipAdvice(){
      this.navCtrl.push(ShipmentAdviceDashboard);
   }
}
