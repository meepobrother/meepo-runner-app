import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KefuPage } from './kefu';

@NgModule({
  declarations: [
    KefuPage,
  ],
  imports: [
    IonicPageModule.forChild(KefuPage),
  ],
})
export class KefuPageModule {}
