import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
@Plugin({
  pluginName: 'BmapProvider',
  plugin: 'cordova-plugin-baidumaplocation',
  pluginRef: 'plugins.actionsheet',
  repo: 'https://github.com/aruis/cordova-plugin-baidumaplocation',
  platforms: ['Android', 'iOS']
})
@Injectable()
export class BmapProvider {
  @Cordova()
  getCurrentPosition(): Promise<any> { return; }
}
