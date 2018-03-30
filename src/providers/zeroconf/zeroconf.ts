import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Zeroconf } from '@ionic-native/zeroconf';
@Injectable()
export class ZeroconfProvider {

  constructor(
    public http: HttpClient,
    private zeroconf: Zeroconf
  ) {
    console.log('Hello ZeroconfProvider Provider');
  }

  watch() {
    this.zeroconf.watch('_http._tcp.', 'local.').subscribe(result => {
      if (result.action == 'added') {
        console.log('service added', result.service);
      } else {
        console.log('service removed', result.service);
      }
    });
  }

  register() {
    this.zeroconf.register('_http._tcp.', 'local.', 'Becvert\'s iPad', 80, {
      'foo': 'bar'
    }).then(result => {
      console.log('Service registered', result.service);
    });
  }

  unregister() {
    this.zeroconf.unregister('_http._tcp.', 'local.', 'Becvert\'s iPad');
  }

}
