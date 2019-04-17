import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(
    private _http: HttpClient,
  ) { }

  getConfigData() {
    let data;
    return this._http
      .get('./assets/configData.json')
      .pipe(map((res : any) => res))
  }

  logIn(loginData,configData) {
    let url = `${configData.mainURL}/admin/login`;
    let body = new HttpParams()
    .set('email', loginData.email)
    .set('password',loginData.password)
    return this._http
        .post(url,body)
  }
}
