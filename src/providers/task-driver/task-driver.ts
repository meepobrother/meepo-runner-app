import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UrlProvider } from "../url/url";
@Injectable()
export class TaskDriverProvider {
  constructor(public http: HttpClient, public url: UrlProvider) {
    console.log("Hello TaskDriverProvider Provider");
  }
  // 接单 status 0->1
  reciver(item: any) {
    console.log("接单");
  }
  // 放弃 status 1->0
  giveup(item: any) {
    console.log("放弃");
  }
  // 购买，取货，去排队 status 1->2
  step1(item: any) {
    console.log("购买，取货，去排队");
    this.url.setEnvRoot(item.siteroot).setEnvUniacid(item.uniacid);
    let url = this.url.getOpenUrl("tasks/step1");
    this.http.get(url).subscribe(res => {
      // step1
      console.log(res);
    });
  }
  // 配送 status 2->3
  step2(item: any) {
    console.log("配送");
    this.url.setEnvRoot(item.siteroot).setEnvUniacid(item.uniacid);
    let url = this.url.getOpenUrl("tasks/step2");
    this.http.get(url).subscribe(res => {
      // step1
      console.log(res);
    });
  }
  // 送达 status 3->4
  step3(item: any) {
    console.log("送达");
    this.url.setEnvRoot(item.siteroot).setEnvUniacid(item.uniacid);
    let url = this.url.getOpenUrl("tasks/step3");
    this.http.get(url).subscribe(res => {
      // step1
      console.log(res);
    });
  }
  // 评价 status 5
  step4(item: any) {
    console.log("评价");
    this.url.setEnvRoot(item.siteroot).setEnvUniacid(item.uniacid);
    let url = this.url.getOpenUrl("tasks/step4");
    this.http.get(url).subscribe(res => {
      // step1
      console.log(res);
    });
  }
}
