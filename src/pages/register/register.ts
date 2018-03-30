import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SmsProvider } from '../../providers/sms/sms';
import { ToastProvider } from '../../providers/toast/toast';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  mobile: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public sms: SmsProvider,
    public toast: ToastProvider,
    private modalCtrl: ModalController,
    private viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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
          code_id: code_id
        });
        code.present();
      } else {
        this.toast.show(res.msg);
      }
    });
  }

  cancel() {
    console.log('cancel');
    this.viewCtrl.dismiss().then(res => { }).catch(res => { });
  }

}
