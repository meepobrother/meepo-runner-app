import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, FabList, FabContainer } from 'ionic-angular';
import { TasksProvider } from '../../providers/tasks/tasks';
import { UserProvider } from '../../providers/user/user';
import { ToastProvider } from '../../providers/toast/toast';
import { BmapGeosearchProvider } from '../../providers/bmap-geosearch/bmap-geosearch';


@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  list: any[] = [];
  params: any = {
    send_type: '-1',
    opt: 'all'
  };
  constructor(
    public navCtrl: NavController,
    public task: TasksProvider,
    private modalCtrl: ModalController,
    private user: UserProvider,
    private toast: ToastProvider,
    private bmapGeosearchProvider: BmapGeosearchProvider
  ) {

  }

  changePageType(e: any) {
    let type = this.params.opt;
    if (type === 'mine') {
      this.login();
    }
    this.init();
  }

  ionViewDidEnter() {
    this.init();
    // 百度lbs搜索
    this.bmapGeosearchProvider.local();
  }

  init() {
    this.task.getList(this.params).subscribe((res: any) => {
      this.list = res || [];
    });
  }

  toRegister() {
    this.navCtrl.push('RegisterPage').then(res => { }).catch(res => { })
  }

  toMessage() {
    this.navCtrl.push('MyMessagePage');
  }

  toBmap() {
    this.navCtrl.push('BmapPage');
  }

  toDetail(item) {
    const data = {
      id: item.id,
      send_type: item.send_type
    };
    this.navCtrl.push('TaksDetailPage', data).then(res => { }).catch(res => { });
  }
  title: string = '全部';
  @ViewChild('fab') fab: FabContainer;
  changeType(e: any, title: string) {
    this.params.send_type = e;
    this.title = title;
    this.fab.close();
    this.init();
  }

  login() {
    let check = this.user.checkLogin();
    if (!this.user.checkLogin()) {
      let login = this.modalCtrl.create('LoginPage');
      login.onDidDismiss((e) => {
        this.changePageType('');
      });
      login.present();
    }
  }

  toTest() {
    this.navCtrl.push('CameraPreviewPage').then(res => { }).catch(res => { });
  }
}
