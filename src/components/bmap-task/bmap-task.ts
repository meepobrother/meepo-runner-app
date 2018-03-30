import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
declare const BMapLib: any;
declare const BMap: any;
@Component({
  selector: 'bmap-task',
  templateUrl: 'bmap-task.html'
})
export class BmapTaskComponent {
  @ViewChild('tpl') tpl: ElementRef;
  @Input() task: any;

  constructor(
    public navCtrl: NavController
  ) { }

  renderToMap() {
    let myRichMarker2 = new BMapLib.RichMarker(this.tpl.nativeElement, new BMap.Point(this.task.location[0], this.task.location[1]), {
      "anchor": new BMap.Size(20, 15),
      "enableDragging": true
    });
    myRichMarker2.addEventListener('onclick', () => {
      const data = {
        id: this.task.task_id,
        send_type: this.task.send_type
      };
      this.navCtrl.push('TaksDetailPage', data);
    });
    myRichMarker2.disableDragging();
    return myRichMarker2;
  }

  getMarker() {
    let point = new BMap.Point(this.task.location[0], this.task.location[1]);
    let marker = new BMap.Marker(point);
    return marker;
  }
}

