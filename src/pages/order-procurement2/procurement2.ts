import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Procurement1 } from '../order-procurement1/procurement1';
import { AlertController } from 'ionic-angular';
import { OrderDashboard } from '../order-dashboard/order-dashboard';
@Component({
  selector: 'page-Procurement2',
  templateUrl: 'procurement2.html'
})

export class Procurement2 {
  constructor(public navCtrl: NavController,public alertCtrl: AlertController){

  }


 shipConfirm1() {
  
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
    this.navCtrl.push(Procurement1);
  }
}
