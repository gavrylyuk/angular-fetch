import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './api.interface';

@Injectable()
export class ApiService {

  API_URL: string = "http://localhost:8000/api/";

  constructor( 
    private http: HttpClient
  ) { }

  getItems() {
    const url: string = this.API_URL + "items";
    return this.http.get<Item[]>(url);
  }

  getItem(id) {
    const url: string = this.API_URL + "items/" + id;
    return this.http.get<Item>(url);
  }

  postItems(items) {
    const url: string = this.API_URL + "items";
    return this.http.post(url, items);
  }

  putItem(id, item) {
    const url: string = this.API_URL + "items/" + id;
    return this.http.put(url, item);
  }
}
