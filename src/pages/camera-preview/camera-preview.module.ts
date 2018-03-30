import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPreviewPage } from './camera-preview';
import { CameraPreview } from '@ionic-native/camera-preview';

@NgModule({
  declarations: [
    CameraPreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPreviewPage),
  ],
  providers: [
    CameraPreview
  ]
})
export class CameraPreviewPageModule {}
