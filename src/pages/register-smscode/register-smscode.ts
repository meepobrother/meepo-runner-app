import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SmsProvider } from '../../providers/sms/sms';
import { ToastProvider } from '../../providers/toast/toast';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-register-smscode',
  templateUrl: 'register-smscode.html',
})
export class RegisterSmscodePage {
  mobile: any;
  btnTitle: string = '点击重新获取';
  isView: boolean = false;
  form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private sms: SmsProvider,
    private toast: ToastProvider,
    private alertCtrl: AlertController,
    private view: ViewController,
    private user: UserProvider
  ) {
    this.mobile = this.navParams.data.mobile;
    this.isView = this.navParams.data.isView;
    this.form = this.fb.group({
      mobile: [this.navParams.data.mobile, Validators.required],
      code: ['', Validators.required],
      code_id: [this.navParams.data.code_id, Validators.required]
    });

    this.form.valueChanges.subscribe(res => {
      if (res.code.length === 4) {
        this.next();
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterSmscodePage');
  }

  next() {
    this.sms.check(this.form.value).subscribe((res: any) => {
      let uid = res.uid;
      localStorage.setItem('__uid', uid);
      localStorage.setItem('__sign', res.sign);
      if (res.code === 0) {
        this.user.form.patchValue(res.user);
        this.user.userinfo = res.user;
        this.showNotice();
      } else {
        this.toast.show(res.msg);
      }
    });
  }

  showNotice() {
    let alert = this.alertCtrl.create({
      title: '法律条款及隐私政策',
      subTitle: `
        您在使用本产品或服务前，
        请认真阅读并充分理解相关法律条款、平台规则及用户隐私政策，
        当您点击同意时，即表示您已经理解并同意该条款，
        该条款将对您构成法律约束力的法律文件。
        用户隐私政策如下：
        1、个人信息（手机号、姓名、身份证明、面部识别特征、车辆及位置信息）的收集及保存，
        使用与共享。
        2、设备权限（相机、通讯录等）的调用。
      `,
      buttons: [{
        text: '不同意',
        handler: data => {
          console.log('Cancel clicked');
        }
      }, {
        text: '同意',
        handler: data => {
          this.ok();
        }
      }]
    });
    alert.present();
  }

  ok() {
    this.toast.show('登录成功');
    if (this.isView) {
      this.view.dismiss().then(res => { }).catch(res => { });
    } else {
      this.navCtrl.push('RegisterFieldsPage').then(res => { }).catch(res => { });
    }
  }

}
