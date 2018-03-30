import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';

@Injectable()
export class GeolocationProvider {

  constructor(
    public http: HttpClient,
    private backgroundGeolocation: BackgroundGeolocation
  ) {
    console.log('Hello GeolocationProvider Provider');
  }

  configure() {
    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 30,
      debug: true,
      stopOnTerminate: false,
    };
    this.backgroundGeolocation.configure(config)
      .subscribe((location: BackgroundGeolocationResponse) => {
        console.log(location);
      });
    return this;
  }

  start() {
    this.backgroundGeolocation.start();
    return this;
  }

  stop() {
    this.backgroundGeolocation.stop();
    return this;
  }

}
