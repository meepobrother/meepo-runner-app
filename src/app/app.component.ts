import { Component } from '@angular/core';
import { Platform, ModalController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications, ILocalNotification } from '@ionic-native/local-notifications';
import { UserProvider } from '../providers/user/user';
import { GeolocationProvider } from '../providers/geolocation/geolocation';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'BmapPage';
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private localNotifications: LocalNotifications,
    private user: UserProvider,
    private modalCtrl: ModalController,
    private menuCtrl: MenuController,
    private geolocationProvider: GeolocationProvider
  ) {
    platform.ready().then(() => {
      statusBar.backgroundColorByHexString('#488aff');
      splashScreen.hide();
      this.notice();
      this.user.info();
      this.geolocationProvider.configure().start();
    }).catch(res => {
      console.log(res);
    });
  }

  notice() {
    let option: ILocalNotification = {
      id: 1,
      title: 'title',
      text: 'test',
      icon: '',
      badge: 10
    };
    setInterval(() => {
      this.localNotifications.schedule(option);
    }, 10000);
  }

  login() {
    let check = this.user.checkLogin();
    if (!this.user.checkLogin()) {
      let login = this.modalCtrl.create('LoginPage');
      login.onDidDismiss(() => { });
      login.present();
    } else {
      let fields = this.modalCtrl.create('RegisterFieldsPage', {
        isView: true
      });
      fields.onDidDismiss(() => { });
      fields.present();
    }
  }

  goPage(page) {
    this.rootPage = page;
    this.menuCtrl.close().then(res => { }).catch(res => { });
  }

}

