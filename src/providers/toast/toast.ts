import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastProvider {

  constructor(
    public toastCtrl: ToastController
  ) {
  }

  show(msg: string, time: number = 3000) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: time
    });
    toast.present();
  }

}
