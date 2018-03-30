import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MobileInputComponent } from './mobile-input/mobile-input';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { PopoverMobileDirectPage } from './popover-mobile-direct/popover-mobile-direct';
import { BmapComponent } from './bmap/bmap';
import { TaskSendComponent } from './task-send/task-send';
import { TaskTakeComponent } from './task-take/task-take';
import { TaskTakeOrderComponent } from './task-take-order/task-take-order';
import { TaskBuyComponent } from './task-buy/task-buy';
import { BmapTaskComponent } from './bmap-task/bmap-task';
import { BmapSigleComponent } from './bmap-sigle/bmap-sigle';

@NgModule({
	declarations: [
		MobileInputComponent,
		PopoverMobileDirectPage,
		BmapComponent,
		TaskSendComponent,
		TaskTakeComponent,
		TaskTakeOrderComponent,
		TaskBuyComponent,
		BmapTaskComponent,
		BmapSigleComponent
	],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [
		MobileInputComponent,
		PopoverMobileDirectPage,
		BmapComponent,
		TaskSendComponent,
		TaskTakeComponent,
		TaskTakeOrderComponent,
		TaskBuyComponent,
		BmapTaskComponent,
		BmapSigleComponent
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	entryComponents: [
		PopoverMobileDirectPage
	]
})
export class ComponentsModule { }
