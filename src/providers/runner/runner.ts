import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlProvider } from '../url/url';
@Injectable()
export class RunnerProvider {

  constructor(
    public http: HttpClient,
    private url: UrlProvider
  ) {
  }

  save(user: any) {
    let url = this.url.getOpenUrl('runner/save');
    return this.http.post(url, user);
  }

  login(user: any) {
    let url = this.url.getOpenUrl('runner/login');
    return this.http.post(url, user);
  }

  logout(user: any) {
    let url = this.url.getOpenUrl('runner/logout');
    return this.http.post(url, user);
  }

  checkLogin() {
    let uid = localStorage.getItem('__uid');
  }

}
