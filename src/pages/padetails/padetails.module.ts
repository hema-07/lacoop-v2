import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PadetailsPage } from './padetails';

@NgModule({
  declarations: [
    PadetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PadetailsPage),
  ],
})
export class PadetailsPageModule {}
