import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-kefu',
  templateUrl: 'kefu.html',
})
export class KefuPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public user: UserProvider,
    public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KefuPage');
  }

  toMessage() {
    this.navCtrl.push('MyMessagePage');
  }

  login() {
    let check = this.user.checkLogin();
    if (!this.user.checkLogin()) {
      let login = this.modalCtrl.create('LoginPage');
      login.onDidDismiss(() => { });
      login.present();
    }
  }

}
