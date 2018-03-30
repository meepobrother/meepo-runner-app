import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class TaskMinerProvider {
  constructor(public http: HttpClient) {
    console.log("Hello TaskMinerProvider Provider");
  }
  // 加小费 status = 0
  addMoney() {}
  // 撤销 status = -1
  deleteOrder() {}
  // 编辑 status = 0
  editOrder() {}
  // 催单 status = 1
  cuiOrder() {}
  // 确认 status = 4->5
  confirm() {}
  // 评价 status 5
  comment() {}
  // 投诉 
  help() {}
}
