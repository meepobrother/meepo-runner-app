import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Camera, CameraOptions } from '@ionic-native/camera';
@IonicPage()
@Component({
  selector: 'page-register-fields',
  templateUrl: 'register-fields.html',
})
export class RegisterFieldsPage {
  isView: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private user: UserProvider,
    private viewCtrl: ViewController,
    private camera: Camera
  ) {
    this.isView = this.navParams.get('isView');
  }

  ionViewDidEnter() {
    this.user.info();
  }

  cancel() {
    if (this.isView) {
      this.viewCtrl.dismiss();
    } else {
      this.navCtrl.push('IndexPage').then(res => { }).catch(res => { });
    }
  }

  save() {
    this.user.save().subscribe(res => {
      this.cancel();
    });
  }
  uploadAvatar() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.user.userinfo.avatar = base64Image;
      this.user.form.get('avatar').setValue(base64Image);
    }, (err) => {
      // Handle error
    });
  }

}
