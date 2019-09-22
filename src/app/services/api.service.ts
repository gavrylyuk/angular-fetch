import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Api } from './api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL: string = "http://localhost/api/";

  constructor( private http: HttpClient) { }

  getItems(): Observable<Api[]> {
    const url: string = this.API_URL + "items";
    return this.http.get<Api>(url).pipe(
      map((response) => response.results)
    );
  }
}
