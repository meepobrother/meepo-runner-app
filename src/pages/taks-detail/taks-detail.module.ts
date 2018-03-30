import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaksDetailPage } from './taks-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TaksDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TaksDetailPage),
    ComponentsModule
  ],
})
export class TaksDetailPageModule {}
