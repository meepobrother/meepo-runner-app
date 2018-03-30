import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TasksProvider } from '../../providers/tasks/tasks';
import { ToastProvider } from '../../providers/toast/toast';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'task-buy',
  templateUrl: 'task-buy.html'
})
export class TaskBuyComponent {

  @Input()
  set id(id: string) {
    this.task.getDetail(id).subscribe((res: any) => {
      if (res.code == -1) {
        this.toast.show(res.msg);
      } else {
        this.item = res.data;
      }
    });
  }

  @Input() item: any = {};

  constructor(
    public task: TasksProvider,
    private toast: ToastProvider,
    public navCtrl: NavController
  ) {
  }

  ngOnInit(){
  }
  status: any[] = [{
    title: '已撤销',
    value: -1
  }, {
    title: '待接单',
    value: 0
  }, {
    title: '前往购买',
    value: 1
  }, {
    title: '已购买',
    value: 2
  }, {
    title: '配送中',
    value: 3
  }, {
    title: '已送达',
    value: 4
  }, {
    title: '待支付',
    value: 5
  }, {
    title: '已完结',
    value: 6
  }];

  btns: any[] = [{
    title: '立即接单',
    value: 0
  }, {
    title: '购买完成',
    value: 1
  }, {
    title: '去配送',
    value: 2
  }, {
    title: '已送达',
    value: 3
  }, {
    title: '已签收',
    value: 4
  }, {
    title: '去评价',
    value: 5
  }, {
    title: '已完结',
    value: 6
  }];
  getStatusTitle(status: number) {
    let str: string;
    this.status.map(res => {
      if (status == res.value) {
        str = res.title;
      }
    });
    return str;
  }


  getBtnTitle(status: number) {
    let str: string;
    this.btns.map(res => {
      if (status == res.value) {
        str = res.title;
      }
    });
    return str;
  }

  @Output() onDetail: EventEmitter<any> = new EventEmitter();
  toDetail(item: any) {
    this.onDetail.emit(item);
  }

}
