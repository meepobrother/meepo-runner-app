import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UrlProvider } from '../url/url';
import { MenuController } from 'ionic-angular';
@Injectable()
export class UserProvider {
  form: FormGroup;
  userinfo: any = {
    avatar: 'assets/imgs/logo.png'
  };
  constructor(
    public http: HttpClient,
    private fb: FormBuilder,
    private url: UrlProvider,
    private menu: MenuController
  ) {
    this.form = this.fb.group({
      mobile: [''],
      realname: [''],
      cardnum: [''],
      nickname: [''],
      sex: [0],
      sign: [''],
      avatar: ['assets/imgs/logo.png']
    });
  }

  info() {
    let url = this.url.getOpenUrl('member/info');
    this.http.get(url).subscribe((res: any) => {
      if (res.code == -1) {
        this.logout();
      } else {
        this.userinfo = res.data;
        this.userinfo['avatar'] = this.userinfo.avatar || 'assets/imgs/logo.png';
        this.form.patchValue(this.userinfo);
      }
    });
  }

  save() {
    this.form.get('avatar').setValue(this.userinfo.avatar);
    let url = this.url.getOpenUrl('member/save');
    return this.http.post(url, this.form.value);
  }

  login(user: any) {
    let url = this.url.getOpenUrl('member/login');
    return this.http.post(url, user);
  }

  logout() {
    localStorage.removeItem('__uid');
    localStorage.removeItem('__sign');
    this.userinfo = {
      avatar: 'assets/imgs/logo.png'
    };
    this.form.patchValue({
      mobile: '',
      realname: '',
      cardnum: '',
      nickname: '',
      sex: 0,
      sign: '',
      avatar: 'assets/imgs/logo.png'
    });
    this.menu.close();
  }

  checkLogin() {
    let uid = localStorage.getItem('__uid');
    let sign = localStorage.getItem('__sign');
    if (uid && sign) {
      return true;
    } else {
      return false;
    }
  }
}
