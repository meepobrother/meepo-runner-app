import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BmapPage } from './bmap';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BmapPage,
  ],
  imports: [
    IonicPageModule.forChild(BmapPage),
    ComponentsModule
  ],
})
export class BmapPageModule {}
