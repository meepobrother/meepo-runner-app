import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlProvider } from '../url/url';

import { ModalController, NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ToastProvider } from '../../providers/toast/toast';
import { MessageProvider } from '../message/message';

@Injectable()
export class TasksProvider {
  types: any[] = [{
    title: '帮我买',
    value: '1'
  }, {
    title: '帮我送',
    value: '2'
  }, {
    title: '帮我取',
    value: '3'
  }, {
    title: '帮排队',
    value: '4'
  }];


  constructor(
    public http: HttpClient,
    private url: UrlProvider,
    private user: UserProvider,
    private toast: ToastProvider,
    private modalCtrl: ModalController,
    private msg: MessageProvider
  ) {
  }

  local(params = {}) {
    let url = this.url.getOpenUrl('tasks/local', params);
    return this.http.get(url);
  }

  getList(params: any) {
    let url = this.url.getOpenUrl('runner/list', params);
    return this.http.get(url);
  }

  getType(type: any) {
    let str: string = '';
    this.types.map(res => {
      if (res.value == type) {
        str = res.title;
      }
    });
    return str;
  }

  getDetail(id: string) {
    let url = this.url.getOpenUrl('getorderdetail', { id: id });
    return this.http.get(url);
  }

  recive(item: any) {
    let url = this.url.getOpenUrl('tasks/recive');
    return this.http.post(url, { id: item.id });
  }

  mineBtns: any[] = [{
    title: '撤销',
    value: 0
  }, {
    title: '催单',
    value: 1
  }, {
    title: '询问',
    value: 2
  }, {
    title: '签收',
    value: 3
  }, {
    title: '支付',
    value: 4
  }, {
    title: '评价',
    value: 5
  }, {
    title: '查看',
    value: 6
  }];

  getMineBtnTitle(status: number) {
    let str: string = '';
    this.mineBtns.map(res => {
      if (res.value == status) {
        str = res.title;
      }
    });
    return str;
  }

  isMine(item: any) {
    let uid = localStorage.getItem('__uid');
    return item.openid == uid;
  }

  isMineRecive(item: any) {
    let uid = localStorage.getItem('__uid');
    return item.driver_jobnum == uid;
  }

  freeBtns: any[] = [{
    title: '立即接单',
    value: 0
  }, {
    title: '订单已被抢',
    value: 1
  }, {
    title: '订单已被抢',
    value: 2
  }, {
    title: '订单已被抢',
    value: 3
  }, {
    title: '订单已被抢',
    value: 4
  }, {
    title: '订单已被抢',
    value: 5
  }, {
    title: '订单已被抢',
    value: 6
  }];

  getFreeBtnTitle(status: any) {
    let str: string = '';
    this.freeBtns.map(res => {
      if (res.value == status) {
        str = res.title;
      }
    });
    return str;
  }

  isFree(item: any) {
    if (this.isMine(item)) {
      return false;
    }
    if (this.isMineRecive(item)) {
      return false;
    }
    return true;
  }

  reciveTask(task: any) {
    // 检查登录
    let check = this.user.checkLogin();
    let uid = localStorage.getItem('__uid');
    let mobile = localStorage.getItem('__mobile');

    if (check) {
      this.recive(task).subscribe((res: any) => {
        if (res.code == '-2') {
          this.user.logout();
        } else if (res.code == '-1') {
          this.toast.show(res.msg);
        } else {
          this.toast.show(res.msg);
          const data = {
            id: task.id,
            send_type: task.send_type
          };
          this.msg.add({
            title: '接单通知',
            content: '您发布的任务我接了，我的工号是：' + uid + ',联系电话：' + mobile + ',目前正在进行中，有进展我会立马通知您！',
            link: this.url.getMobileUrl('taskdetail', { task_id: task.id }),
            type: 1,
            icon: this.user.userinfo.avatar,
            uid: task.openid,
            fuid: uid
          }).subscribe(res => {
            console.log(res);
          });
          this.navCtrl.push('TaksDetailPage', data).then(res => { }).catch(res => { });
        }
      });
    } else {
      let login = this.modalCtrl.create('LoginPage');
      login.onDidDismiss(() => { });
      login.present();
    }
  }
  navCtrl: NavController;
  handler(item: any, navCtrl: NavController) {
    this.navCtrl = navCtrl;
    if (item.status == 0) {
      this.reciveTask(item);
    } else if (item.status == 1) {
      // 拍照取证
      this.takePicture(item);
    } else if (item.status == 2) {
      // 配送完成
      this.finish(item);
    } else if (item.status == 3) {
      // 用户签收
      this.qianshou(item);
    } else if (item.status == 4) {
      // 评价
      this.comment(item);
    } else if (item.status == 5) {
      // 完结
      this.all(item);
    } else {
      // 查看任务历程
    }
  }

  handelMine(item: any) {
    if (item.status == 0) {
      this.recive(item);
    } else if (item.status == 1) {
      // 拍照取证
      this.takePicture(item);
    } else if (item.status == 2) {
      // 配送完成
      this.finish(item);
    } else if (item.status == 3) {
      // 用户签收
      this.qianshou(item);
    } else if (item.status == 4) {
      // 评价
      this.comment(item);
    } else if (item.status == 5) {
      // 完结
      this.all(item);
    } else {
      // 查看任务历程
    }
  }

  handelFree() { }

  all(item: any) {

  }

  comment(item: any) {

  }

  qianshou(item: any) {

  }

  finish(item: any) {

  }

  takePicture(item: any) {
    console.log('takePicture');
    this.navCtrl.push('CameraPreviewPage', { task: item }).then(res => { }).catch(res => { });
  }

  uploadPicture(item: any, img: string) {
    let url = this.url.getOpenUrl('runner/attachments');
    return this.http.post(url, { id: item.id, img: img });
  }

}
