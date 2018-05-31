import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderlistMsgPage } from './orderlist-msg';

@NgModule({
  declarations: [
    OrderlistMsgPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderlistMsgPage),
  ],
})
export class OrderlistMsgPageModule {}
