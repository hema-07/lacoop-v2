import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrdersManagement } from '../orders-management/orders-management';
import { AlertController } from 'ionic-angular';
import { InitiateJob } from '../order-initiatejob/initiate-job';
@Component({
  selector: 'page-orders',
  templateUrl: 'orders-management-details.html'
})

export class OrdersManagementDetails {
  constructor(public navCtrl: NavController,public alertCtrl: AlertController){

  }
  goBack3(){
    this.navCtrl.push(OrdersManagement);
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Do you want to Accept the order?',
      buttons: [
        {
          text: 'No',
          // handler: () => {
          //   this.navCtrl.push(OrdersManagementDetails);
          // }
        },
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.push(InitiateJob);
          }
        }
      ]
    });
    confirm.present();
  }

}
