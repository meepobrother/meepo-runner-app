import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoneyPage } from './money';

@NgModule({
  declarations: [
    MoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(MoneyPage),
  ],
  providers: []
})
export class MoneyPageModule {}
