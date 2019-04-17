import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkdeskService {

  constructor(
    private _http: HttpClient,
  ) { }

  getData(type,configData) {
    let url = `${configData.mainURL}/admin/api/`;
    switch (type) {
      case 'suppliers' :
        url = `${url}suppliers`;
        break;
      case 'categories' : 
        url = `${url}suppliers/categories`;
        break;
      case 'regions' :
        url = `${url}suppliers/regions`;
        break;
    }
    let header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Token '+configData.token)
    }
    return this._http
        .get(url,header);
  }

  setData(data,configData) {
    let header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Token '+configData.token)
    }
    let url = `${configData.mainURL}/admin/api/suppliers`;
    let body = new HttpParams()
    .set('name',  data.name)
    .set('email', data.email)
    .set('phone', data.phone)
    .set('products', data.products)
    .set('services', data.services)
    .set('website', data.website)
    .set('facebook', data.facebook)
    .set('subRegionId', data.subRegionId)
    .set('address', data.address)
    .set('delivery', data.delivery)
    .set('categoryIds', data.categoryIds)
    return this._http
        .post(url,body,header)
  } 
}

