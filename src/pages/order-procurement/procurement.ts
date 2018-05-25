import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShipmentAdvice } from '../order-shipmentadvice/shipment-advice';
import { AlertController } from 'ionic-angular';
import { InitiateJob } from '../order-initiatejob/initiate-job';
@Component({
  selector: 'page-Procurement',
  templateUrl: 'procurement.html'
})

export class Procurement {
  constructor(public navCtrl: NavController,public alertCtrl: AlertController){

  }

goBack6()
{
  this.navCtrl.push(InitiateJob);
}
 createShipment() {
    let confirm = this.alertCtrl.create({
      title: 'Job Details has been Updated. Proceed to Shipment',
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
            this.navCtrl.push(ShipmentAdvice);
          }
        }
      ]
    });
    confirm.present();
  }
}
