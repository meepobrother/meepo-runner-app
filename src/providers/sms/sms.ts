import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlProvider } from '../url/url';
@Injectable()
export class SmsProvider {
  constructor(
    public http: HttpClient,
    public url: UrlProvider
  ) {
  }

  send(mobile: any) {
    let url = this.url.getOpenUrl('sms/send');
    return this.http.post(url, mobile);
  }

  check(form: { mobile: any, code_id: any, code: any }) {
    let url = this.url.getOpenUrl('sms/check');
    return this.http.post(url, form);
  }

}
