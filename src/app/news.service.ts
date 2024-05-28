import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl: string = environment.apiUrl;

  constructor(private _http:HttpClient) { }


  getAllNews(): Observable<any> {
    return this._http.get(`${this.baseUrl}/ainews `);
  }
  newsDetails(id: any): Observable<any> {
    return this._http.get(`${this.baseUrl}/ainews/${id}`);
  }
}