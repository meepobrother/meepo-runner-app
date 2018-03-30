import { Component } from '@angular/core';
declare const BMap: any;
@Component({
  selector: 'bmap-sigle',
  templateUrl: 'bmap-sigle.html'
})
export class BmapSigleComponent {

  map: any;

  constructor() { }

  ngOnInit() {
    this.map = new BMap.Map("bmap2");
    this.map['meepo'] = new Date().getTime();
    let location = JSON.parse(localStorage.getItem('_mylocation'));
    let point = new BMap.Point(116.404, 39.915);
    if (location) {
      point = new BMap.Point(location.lng, location.lat);
    }
    this.map.centerAndZoom(point, 15);
    this.router();
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

}
