import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TasksProvider } from "../../providers/tasks/tasks";
import { ToastProvider } from "../../providers/toast/toast";
import { NavController } from "ionic-angular";
import { BmapProvider } from "../../providers/bmap/bmap";
import { TaskDriverProvider } from "../../providers/task-driver/task-driver";
@Component({
  selector: "task-take-order",
  templateUrl: "task-take-order.html"
})
export class TaskTakeOrderComponent {
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

  @Input() isDetail: boolean = false;

  constructor(
    public task: TasksProvider,
    public toast: ToastProvider,
    public navCtrl: NavController,
    public bmap: BmapProvider,
    public taskDriver: TaskDriverProvider
  ) {}

  ngOnInit() {}

  status: any[] = [
    {
      title: "已撤销",
      value: -1
    },
    {
      title: "待接单",
      value: 0
    },
    {
      title: "前往排队",
      value: 1
    },
    {
      title: "开始排队",
      value: 2
    },
    {
      title: "排队结束",
      value: 3
    },
    {
      title: "已办理",
      value: 4
    },
    {
      title: "已支付",
      value: 5
    },
    {
      title: "已完结",
      value: 6
    }
  ];
  getStatusTitle(status: number) {
    let str: string;
    this.status.map(res => {
      if (status == res.value) {
        str = res.title;
      }
    });
    return str;
  }

  btns: any[] = [
    {
      title: "立即接单",
      value: 0
    },
    {
      title: "到达排队地点",
      value: 1
    },
    {
      title: "开始排队",
      value: 2
    },
    {
      title: "排队结束",
      value: 3
    },
    {
      title: "已签收",
      value: 4
    },
    {
      title: "去评价",
      value: 5
    },
    {
      title: "已完结",
      value: 6
    }
  ];

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

  getColor(index, status) {
    return status > index ? "dark" : "danger";
  }
  // 可用
  isDisable(index, status) {
    status = parseInt(status);
    let result = status === index;
    return result;
  }
}
