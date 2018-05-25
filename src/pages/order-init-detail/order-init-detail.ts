import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Procurement } from '../order-procurement/procurement';

import { InitiateJob } from '../order-initiatejob/initiate-job';
@Component({
  selector: 'page-initiate-detail',
  templateUrl: 'order-init-detail.html'
})
export class JobDetails {

  constructor(public navCtrl: NavController) {

  }

  createProcure(){
    this.navCtrl.push(Procurement);
  }
  goBack5(){

  this.navCtrl.push(InitiateJob);
  }
}