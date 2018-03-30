import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UrlProvider } from "../url/url";

@Injectable()
export class BmapGeosearchProvider {
  constructor(public http: HttpClient, private url: UrlProvider) {
    console.log("Hello BmapGeosearchProvider Provider");
  }

  local(params = {}) {
    let url = this.url.getOpenUrl("tasks/local", params);
    return this.http.get(url);
  }

  bound() {}

  nearby() {}

  detail() {}
}
