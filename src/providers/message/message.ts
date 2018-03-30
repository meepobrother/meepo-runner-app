import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlProvider } from '../url/url';
@Injectable()
export class MessageProvider {

  constructor(
    public http: HttpClient,
    public url: UrlProvider
  ) {
    console.log('Hello MessageProvider Provider');
  }

  list() {
    let url = this.url.getOpenUrl('message/list');
    return this.http.get(url);
  }

  get(id: number) {
    let url = this.url.getOpenUrl('message/get', { message_id: id });
    return this.http.get(url);
  }

  unread() {
    let url = this.url.getOpenUrl('message/unread');
    return this.http.get(url);
  }

  add(msg: any) {
    let url = this.url.getOpenUrl('message/add');
    return this.http.post(url, msg);
  }

}
