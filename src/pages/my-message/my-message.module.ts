import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyMessagePage } from './my-message';

@NgModule({
  declarations: [
    MyMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(MyMessagePage),
  ],
})
export class MyMessagePageModule {}
