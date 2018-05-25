import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderDashboard } from '../order-dashboard/order-dashboard';
import { AlertController } from 'ionic-angular';
import { Procurement } from '../order-procurement/procurement';
@Component({
  selector: 'page-shipment',
  templateUrl: 'shipment-advice.html'
})

export class ShipmentAdvice {
  constructor(public navCtrl: NavController,public alertCtrl: AlertController){

  }


  shipConfirm() {
  
    let confirm = this.alertCtrl.create({
      title: 'Shipment advice has been created and sent to Carrier',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.push(OrderDashboard);
          }
        }
      ]
    });
    confirm.present();

  }
  goBack7()
  {
    this.navCtrl.push(Procurement);
  }
}