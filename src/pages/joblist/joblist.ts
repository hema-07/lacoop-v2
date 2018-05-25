import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderDashboard } from '../order-dashboard/order-dashboard';

@Component({
  selector: 'page-joblist',
  templateUrl: 'joblist.html'
})
export class JobList {

  constructor(public navCtrl: NavController) {

  }

  goBack5(){

  this.navCtrl.push(OrderDashboard);
  }
}