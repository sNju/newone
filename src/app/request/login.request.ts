import { Injectable } from '@angular/core';
import {BaseRequest} from './baserequest';

@Injectable()
export class LoginRequest extends BaseRequest {
  parse(json : {}) {
    return json["data"];
  }

  getUrl() : string {
      return "/otplogin";
  }
}