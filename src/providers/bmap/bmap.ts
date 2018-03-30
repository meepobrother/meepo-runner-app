import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
declare const BMap: any;
declare const BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: any;
export class BmapProvider {
  bmap: any;
  driving: any;
  walking: any;
  taxiFare: any;
  constructor() {}
  setBmap(bmap: any) {
    this.bmap = bmap;

    this.driving = new BMap.DrivingRoute(this.bmap, {
      renderOptions: {
        map: this.bmap,
        autoViewport: true,
        onSearchComplete: res => {
          this.taxiFare = res.taxiFare;
          console.log("onSearchComplete", this.taxiFare);
        }
      },
      policy: BMAP_DRIVING_POLICY_AVOID_HIGHWAYS
    });
  }
  getCurrentPosition() {}
  // 从我的位置-到任务起点-任务终点
  getDrivingAllRouter(myPoint, startPoint, endPoint) {
    console.log(this.bmap);
    console.log(myPoint);
    console.log(startPoint);
    console.log(endPoint);

    this.driving.search(myPoint, endPoint, {
      waypoints: startPoint
    });
  }

  routerStart(task: any) {
    let location = JSON.parse(localStorage.getItem("_mylocation"));
    let myPoint = new BMap.Point(location.lng, location.lat);
    let startPoint = new BMap.Point(task.from_lng, task.from_lat);
    let endPoint = new BMap.Point(task.to_lng, task.to_lat);
    this.driving.search(myPoint, startPoint);
  }

  routerEnd(task: any) {
    let location = JSON.parse(localStorage.getItem("_mylocation"));
    let myPoint = new BMap.Point(location.lng, location.lat);
    let startPoint = new BMap.Point(task.from_lng, task.from_lat);
    let endPoint = new BMap.Point(task.to_lng, task.to_lat);
    this.driving.search(myPoint, endPoint);
  }

  routerAll(task: any) {
    this.routerStart(task);
    this.routerStart(task);
  }

  getTaxiFare() {}
}
