import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostJounalDetailsPage } from './post-jounal-details';

@NgModule({
  declarations: [
    PostJounalDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PostJounalDetailsPage),
  ],
})
export class PostJounalDetailsPageModule {}
