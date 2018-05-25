import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InitiateJob1 } from '../order-initiatejob1/initiate-job1';
import { Procurement2 } from '../order-procurement2/procurement2';
@Component({
  selector: 'page-Procurement1',
  templateUrl: 'procurement1.html'
})

export class Procurement1 {
  constructor(public navCtrl: NavController,public alertCtrl: AlertController){

  }

goBack6()
{
  this.navCtrl.push(InitiateJob1);
}
make(){
    let confirm = this.alertCtrl.create({
      title: 'Job Details has been Updated. PO has been created for Item 2. Proceed to Shipment',
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
            this.navCtrl.push(Procurement2);
          }
        }
      ]
    });
    confirm.present();
  }
}
