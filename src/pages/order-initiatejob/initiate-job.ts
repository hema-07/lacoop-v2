import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JobDetails } from '../order-init-detail/order-init-detail';
import { AlertController } from 'ionic-angular';

import { OrdersManagementDetails } from '../orders-management-details/orders-management-details';
@Component({
  selector: 'page-initiate',
  templateUrl: 'initiate-job.html'
})
export class InitiateJob {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  goBack4(){
    this.navCtrl.push(OrdersManagementDetails);
  }
initJob() {
  
    let confirm = this.alertCtrl.create({
      title: 'Order has been initiated and Job Id JO_01 created',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.push(JobDetails);
          }
        }
      ]
    });
    confirm.present();

  }
}