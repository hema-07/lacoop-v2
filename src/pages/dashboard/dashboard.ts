import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderDashboard } from '../order-dashboard/order-dashboard';
import { FinanceDashboard } from '../finance-dashboard/finance';
import { DashboardProcurement } from '../dashboard-procurement/dashboard-procurement';
@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})

export class Dashboard {
  constructor(public navCtrl: NavController){

  }
  ordersdashboard() {
       this.navCtrl.push(OrderDashboard);
}
  finance(){
    this.navCtrl.push(FinanceDashboard);
}
procurement(){
    this.navCtrl.push(DashboardProcurement);
}
}
