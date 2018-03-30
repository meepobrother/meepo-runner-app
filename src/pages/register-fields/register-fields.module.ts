import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterFieldsPage } from './register-fields';
import { ComponentsModule } from '../../components/components.module';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    RegisterFieldsPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterFieldsPage),
    ComponentsModule
  ],
  providers: [
    Camera
  ]
})
export class RegisterFieldsPageModule {}
