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

  getData(type,subType,configData) {
    let url = configData.mainURL;
    switch (type) {
      case 'suppliers' :
        switch (subType) {
          case 'suppliers' :
            url = `${url}/admin/api/suppliers`;
            break;
          case 'categories' : 
            url = `${url}/admin/api/suppliers/categories`;
            break;
          case 'regions' :
            url = `${url}/admin/api/suppliers/regions`;
            break;
        }
        break;
      case 'products' : 
        switch (subType) {
          case 'products' :
            url = `${url}/guy/products`;
            break;
          case 'categories' : 
            url = `${url}/guy/products/categories`;
            break;
        }
        break;
    }
    let header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Token '+configData.token)
    }
    return this._http
        .get(url,header);
  }

  setData(type,data,configData) {
    let url = configData.mainURL;
    let body;
    let header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Token '+configData.token)
    }
    switch (type) {
      case 'suppliers' :
        url = `${url}/admin/api/suppliers`;
        body = new HttpParams()
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
        break;
      case 'products' :
        url = `${url}/guy/products`;
        body = new HttpParams()
          .set('name',  data.name)
          .set('categoryId',  data. category)
        break;
      case 'categories' : 
        url = `${url}/guy/products/categories`;
        body = new HttpParams()
          .set('name',  data.name)
        break;
    }
    return this._http
        .post(url,body,header)
  } 
}

