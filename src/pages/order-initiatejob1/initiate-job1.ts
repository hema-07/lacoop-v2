import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { JobDetails1 } from '../order-init-detail1/order-init-detail1';
import { OrdersManagementDetails } from '../orders-management-details/orders-management-details';
@Component({
  selector: 'page-initiate1',
  templateUrl: 'initiate-job1.html'
})
export class InitiateJob1 {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  goBack4(){
    this.navCtrl.push(OrdersManagementDetails);
  }
initJob() {
  
    let confirm = this.alertCtrl.create({
      title: 'Order has been initiated and Job Id JO_02 created',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.push(JobDetails1);
          }
        }
      ]
    });
    confirm.present();

  }
}