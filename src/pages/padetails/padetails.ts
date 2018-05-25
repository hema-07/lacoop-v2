import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GobackPage } from '../goback/goback';

/**
 * Generated class for the PadetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-padetails',
  templateUrl: 'padetails.html',
})
export class PadetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PadetailsPage');
  }
  payRecieved(event){
    let confirm = this.alertCtrl.create({
      title: 'Successfully Paid',
      message: 'Auto reconcile completed & invoice completely paid',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.push(GobackPage);
          }
        }
      ]
    });
        confirm.present();
  }
}
