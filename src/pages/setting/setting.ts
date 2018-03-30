import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public user: UserProvider,
    private modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  toMessage() {
    this.navCtrl.push('MyMessagePage');
  }

  login(){
    let check = this.user.checkLogin();
    if (!this.user.checkLogin()) {
      let login = this.modalCtrl.create('LoginPage');
      login.onDidDismiss(() => { });
      login.present();
    }
  }
}
