import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Procurement1 } from '../order-procurement1/procurement1';

import { InitiateJob1 } from '../order-initiatejob1/initiate-job1';
@Component({
  selector: 'page-initiate-detail1',
  templateUrl: 'order-init-detail1.html'
})
export class JobDetails1 {

  constructor(public navCtrl: NavController) {

  }

  createProcure(){
    this.navCtrl.push(Procurement1);
  }
  goBack5(){

  this.navCtrl.push(InitiateJob1);
  }
}