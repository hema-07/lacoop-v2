import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { OrderlistMsgPage } from '../orderlist-msg/orderlist-msg';
import { ToastController } from 'ionic-angular';
import { PostJounalOrderlistPage } from '../post-jounal-orderlist/post-jounal-orderlist';
/**
 * Generated class for the PostJounalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-jounal-details',
  templateUrl: 'post-jounal-details.html',
})
export class PostJounalDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostJounalDetailsPage');
  }
  userConfirm(event){
    let confirm = this.alertCtrl.create({
      title: 'Confirm posting?',
      message: 'Do you want to post this journal to GL?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
              let toast = this.toastCtrl.create({
              message: 'Journal posted to GL successfully',
              duration: 3000,
              position: 'top'
            });
            toast.present();
            this.navCtrl.push(OrderlistMsgPage);
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
  goBack3(){
    this.navCtrl.push(PostJounalOrderlistPage);
  }
}
