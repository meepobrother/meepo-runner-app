import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message';

@IonicPage()
@Component({
  selector: 'page-my-message',
  templateUrl: 'my-message.html',
})
export class MyMessagePage {
  list: any[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private msg: MessageProvider
  ) {
  }

  ionViewDidEnter() {
    this.msg.list().subscribe((res: any) => {
      this.list = res;
    });
  }

}
