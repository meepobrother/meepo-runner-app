import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { BmapTaskComponent } from '../bmap-task/bmap-task';
import { BmapProvider } from '../../providers/bmap/bmap';
declare const BMap: any;
declare const BMAP_STATUS_SUCCESS: any;
@Component({
  selector: 'bmap-container',
  templateUrl: 'bmap.html'
})
export class BmapComponent {
  key: string = '4AufC349tpFrS3y8wbOvjiO9wmIEhBRx';

  @Input() start: any;
  @Input() end: any;
  map: any;

  @ContentChildren(BmapTaskComponent) tasks: QueryList<BmapTaskComponent>;
  constructor(
    private bmap: BmapProvider
  ) { }

  ngOnInit() {
    this.map = new BMap.Map("bmap");
    this.map['meepo'] = new Date().getTime();
    let location = JSON.parse(localStorage.getItem('_mylocation'));
    let point = new BMap.Point(116.404, 39.915);
    if (location) {
      point = new BMap.Point(location.lng, location.lat);
    }
    this.map.centerAndZoom(point, 18);
    this.bmap.setBmap(this.map);
  }

  renderTaskToMap() {
    this.tasks.map(res => {
      let marker = res.renderToMap();
      let markerCopy = res.getMarker();
      this.map && this.map.addOverlay(markerCopy);
      this.map && this.map.addOverlay(marker);
    });
  }

  ionViewWillLeave() {

  }

  router() {
    var driving = new BMap.DrivingRoute(this.map, {
      renderOptions: {
        map: this.map,
        autoViewport: true
      }
    });
    driving.search("天坛公园", "故宫");
  }

  centerMe() {
    var geolocation = new BMap.Geolocation();
    let that = this;
    geolocation.getCurrentPosition(function (r) {
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        localStorage.setItem('_mylocation', JSON.stringify(r.point));
        that.map && that.map.panTo(r.point);
      } else {
        alert('failed' + this.getStatus());
      }
    });
  }

}
