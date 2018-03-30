import { Component, isDevMode } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions } from '@ionic-native/camera-preview';
import { TasksProvider } from '../../providers/tasks/tasks';
@IonicPage()
@Component({
  selector: 'page-camera-preview',
  templateUrl: 'camera-preview.html',
})
export class CameraPreviewPage {
  text: any;
  task: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cameraPreview: CameraPreview,
    private taskProvider: TasksProvider
  ) {
    this.task = this.navParams.data.task;
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.startCamera();
    }, 0);
  }

  ionViewDidLeave() {
    this.stopCamera();
  }

  startCamera() {
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    };
    this.cameraPreview.startCamera(cameraPreviewOpts).then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

  pictureOpts: CameraPreviewPictureOptions = {
    width: 1280,
    height: 1280,
    quality: 85
  };
  picture: string;

  takePicture() {
    this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
      this.picture = 'data:image/jpeg;base64,' + imageData;
      // 拍照取证
      console.log(this.picture);
      this.taskProvider.uploadPicture(this.task, this.picture).subscribe(res => {
        console.log(res);
        this.navCtrl.pop().then(res => { }).catch(res => { });
      });
      this.navCtrl.pop().then(res => { }).catch(res => { });
    }, (err) => { });
  }

  switchCamera() {
    this.cameraPreview.switchCamera().then(res => { }).catch(res => { });
  }

  stopCamera() {
    this.cameraPreview.stopCamera().then(res => { }).catch(res => { });
  }

}
