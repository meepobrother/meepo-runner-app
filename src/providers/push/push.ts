import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PushProvider {

  constructor(
    public http: HttpClient
  ) {
  }
}
