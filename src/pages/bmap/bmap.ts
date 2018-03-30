import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BmapComponent } from '../../components/bmap/bmap';
import { TasksProvider } from '../../providers/tasks/tasks';
import { BmapProvider } from '../../providers/bmap/bmap';
@IonicPage()
@Component({
  selector: 'page-bmap',
  templateUrl: 'bmap.html',
})
export class BmapPage {
  @ViewChild('bmap') bmap: BmapComponent;

  list: any[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private task: TasksProvider,
    private bmapCtrl: BmapProvider
  ) {
  }

  ionViewDidLoad() {
    this.bmap.centerMe();
    this.task.local().subscribe((res: any) => {
      this.list = res.contents;
      setTimeout(() => {
        this.bmap.renderTaskToMap();
      }, 100);
    });
  }

  ionViewDidEnter() {}

  ngAfterContentInit() { }

  toMessage() {
    this.navCtrl.push('MyMessagePage');
  }

  toIndex() {
    this.navCtrl.push('IndexPage');
  }

}
