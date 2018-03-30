import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { UrlProvider, ENV } from '../providers/url/url';
import { SmsProvider } from '../providers/sms/sms';
import { ToastProvider } from '../providers/toast/toast';
import { UserProvider } from '../providers/user/user';
import { TasksProvider } from '../providers/tasks/tasks';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { PushProvider } from '../providers/push/push';
import { SpeechProvider } from '../providers/speech/speech';
import { RunnerProvider } from '../providers/runner/runner';
import { DefaultInterceptor } from '../providers/default-interceptor/default-interceptor';
import { MessageProvider } from '../providers/message/message';
import { GeolocationProvider } from '../providers/geolocation/geolocation';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { ScanProvider } from '../providers/scan/scan';
import { QRScanner } from '@ionic-native/qr-scanner';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { TtsProvider } from '../providers/tts/tts';
import { ZBar } from '@ionic-native/zbar';
import { ZeroconfProvider } from '../providers/zeroconf/zeroconf';
import { Zeroconf } from '@ionic-native/zeroconf';
import { StepperProvider } from '../providers/stepper/stepper';
import { BmapGeosearchProvider } from '../providers/bmap-geosearch/bmap-geosearch';
import { BmapProvider } from '../providers/bmap/bmap';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'push',
      iconMode: 'ios',
      mode: 'ios',
      backButtonText: '返回',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true},
    {
      provide: ENV,
      useValue: {
        root: 'https://meepo.com.cn/',
        i: 2,
        m: 'runner_open'
      }
    },
    UrlProvider,
    SmsProvider,
    ToastProvider,
    UserProvider,
    TasksProvider,
    LocalNotifications,
    PushProvider,
    SpeechProvider,
    RunnerProvider,
    MessageProvider,
    GeolocationProvider,
    BackgroundGeolocation,
    ScanProvider,
    QRScanner,
    TextToSpeech,
    TtsProvider,
    ZBar,
    ZeroconfProvider,
    Zeroconf,
    StepperProvider,
    BmapGeosearchProvider,
    BmapProvider
  ]
})
export class AppModule { }
