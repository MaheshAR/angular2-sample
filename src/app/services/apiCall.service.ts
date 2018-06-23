import { Injectable } from '@angular/core';
import { Http, Response, Request, RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'

@Injectable()
export class ApiCallService {

  constructor (private http: Http) {}

  apicall(url, method, payload) {
    return this.http.request(new Request({
      method: this.getRequestMethod(method),
      url: url,
      body: payload
    }))
      //.map(this.extractData)
      //.catch(this.handleError);
  }

  private getRequestMethod(method) {
    let methodName = method.toLowerCase();

    switch (methodName) {
      case 'get':
        methodName = RequestMethod.Get;
        break;

      case 'post':
        methodName = RequestMethod.Post;
        break;

      case 'put':
        methodName = RequestMethod.Put;
        break;

      case 'delete':
        methodName = RequestMethod.Delete;
        break;
    }

    return methodName;
  }

  extractData(res: Response) {
    const body = res.json() || {};

    return body;
  }

  handleError (error: Response | any) {
    const body = error.json();

    return body;
  }
}
