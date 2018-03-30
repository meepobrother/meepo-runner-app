import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

export class Task {
  send_type: number = 0;
  types: any[] = [];
  cfg: any = {};
}

export class TaskBuy extends Task {
  send_type: number = 1;
  cfg: any = [{
    title: '购买内容',
    code: 'goods_type.goods_name',
    value: ''
  }, {
    title: '收货地址',
    code: 'to_address.to_usernote',
    value: ''
  }, {
    title: '购买地址',
    code: 'from_address.from_usernote',
    value: ''
  }, {
    title: '购买要求',
    code: 'note',
    value: ''
  }, {
    title: '跑腿费',
    code: 'runner_money',
    value: ''
  }];
  constructor(res: any) {
    super();
  }
}

export class TaskSend extends Task {
  send_type: number = 2;
  constructor(res: any) {
    super();
  }
}

export class TaskTake extends Task {
  send_type: number = 3;
  constructor(res: any) {
    super();
  }
}


export class TaskTakeOrder extends Task {
  send_type: number = 4;
  constructor(res: any) {
    super();
  }
}
@IonicPage()
@Component({
  selector: 'page-taks-detail',
  templateUrl: 'taks-detail.html',
})
export class TaksDetailPage {
  id: any;
  send_type: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.id = this.navParams.get('id');
    this.send_type = this.navParams.get('send_type');
  }

  ionViewDidLoad() { }

  toDetail(item) {
    console.log(item);
  }
}
