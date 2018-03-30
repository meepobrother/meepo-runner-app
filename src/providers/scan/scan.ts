import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { ZBar, ZBarOptions } from '@ionic-native/zbar';
@Injectable()
export class ScanProvider {

  constructor(
    public http: HttpClient,
    private qrScanner: QRScanner,
    private zbar: ZBar
  ) {
    console.log('Hello ScanProvider Provider');
  }

  qrScan() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });
          this.qrScanner.show();
        } else if (status.denied) {
        } else {
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  zbarScan() {
    let options: ZBarOptions = {
      flash: 'off',
      drawSight: false
    };
    this.zbar.scan(options)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

}
