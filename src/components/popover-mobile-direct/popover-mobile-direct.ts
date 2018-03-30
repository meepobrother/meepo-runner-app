import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-popover-mobile-direct',
  templateUrl: 'popover-mobile-direct.html',
})
export class PopoverMobileDirectPage {
  list: any[] = [
    {
      title: 'A',
      items: [{
        title: '安道尔',
        value: '+376'
      }]
    },
    {
      title: 'B',
      items: [{
        title: '比利时',
        value: '+32'
      }]
    },
    {
      title: 'C',
      items: [{
        title: '朝鲜',
        value: '+850'
      }]
    },
    {
      title: 'D',
      items: [{
        title: '德国',
        value: '+49'
      }]
    },
    {
      title: 'Z',
      items: [{
        title: '中国大陆',
        value: '+86'
      }]
    },
  ];

  @Input() data: string;
  @Output() dataChange: EventEmitter<any> = new EventEmitter();
  constructor(
    public viewCtrl: ViewController,
    private navParams: NavParams
  ) {
    this.data = this.navParams.data.data;
  }

  getItems(e: any) {
    console.log('list', e.target.value);
  }

  ionViewDidLoad() { 
    console.log(this.data);
  }

  change(e: any) {
    if (e != this.data) {
      this.viewCtrl.dismiss(e);
      this.data = e;
      this.dataChange.emit(e);
    }
  }
}
