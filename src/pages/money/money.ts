import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ScanProvider } from '../../providers/scan/scan';

@IonicPage()
@Component({
  selector: 'page-money',
  templateUrl: 'money.html',
})
export class MoneyPage {
  qrcode: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public user: UserProvider,
    private scan: ScanProvider,
    private modalCtrl: ModalController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoneyPage');
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
