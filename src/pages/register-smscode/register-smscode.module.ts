import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterSmscodePage } from './register-smscode';

@NgModule({
  declarations: [
    RegisterSmscodePage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterSmscodePage),
  ],
})
export class RegisterSmscodePageModule {}
