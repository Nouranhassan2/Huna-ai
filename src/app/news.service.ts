import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _http:HttpClient) { }


  getAllNews(): Observable<any> {
    return this._http.get('http://localhost:5000/ainews');
  }
  newsDetails(id: any): Observable<any> {
    return this._http.get(`http://localhost:5000/ainews/${id}`);
  }
}
