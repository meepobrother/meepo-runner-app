import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, MenuController } from 'ionic-angular';
import { SmsProvider } from '../../providers/sms/sms';
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  mobile: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private viewCtrl: ViewController,
    private sms: SmsProvider,
    private toast: ToastProvider,
    private menu: MenuController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register() {
    let register = this.modalCtrl.create('RegisterPage');
    register.present();
  }

  mobileChange(e: any) {
    this.mobile = e;
  }

  next() {
    localStorage.setItem('__mobile', this.mobile.pre + this.mobile.mobile);
    this.sms.send(this.mobile).subscribe((res: any) => {
      if (res.code === 0) {
        let code_id = res.data;
        let code = this.modalCtrl.create('RegisterSmscodePage', {
          mobile: this.mobile,
          code_id: code_id,
          isView: true
        });
        code.onDidDismiss(() => {
          this.cancel();
        });
        code.present();
      } else {
        this.toast.show(res.msg);
      }
    });
  }

  cancel() {
    this.viewCtrl && this.viewCtrl.dismiss();
  }

}
