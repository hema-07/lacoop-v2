import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrdersManagement } from '../orders-management/orders-management';
import { AlertController } from 'ionic-angular';
import { InitiateJob1 } from '../order-initiatejob1/initiate-job1';
@Component({
  selector: 'page-orders1',
  templateUrl: 'item2.html'
})

export class ItemDetails2 {
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
            this.navCtrl.push(InitiateJob1);
          }
        }
      ]
    });
    confirm.present();
  }

}
