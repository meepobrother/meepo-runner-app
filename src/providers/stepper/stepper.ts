import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Stepcounter } from '@ionic-native/stepcounter';

@Injectable()
export class StepperProvider {

  constructor(
    public http: HttpClient,
    private stepcounter: Stepcounter
  ) {
    console.log('Hello StepperProvider Provider');
  }

  start() {
    let startingOffset = 0;
    this.stepcounter.start(startingOffset).then(onSuccess => console.log('stepcounter-start success', onSuccess), onFailure => console.log('stepcounter-start error', onFailure));
  }

  getHistory() {
    this.stepcounter.getHistory().then(historyObj => console.log('stepcounter-history success', historyObj), onFailure => console.log('stepcounter-history error', onFailure));
  }

  stop() {
    this.stepcounter.stop();
  }

  getStepCount() {
    return this.stepcounter.getStepCount();
  }

}
