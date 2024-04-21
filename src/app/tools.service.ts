import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  constructor(private _http: HttpClient) {}

  getTool(): Observable<any> {
    return this._http.get('http://127.0.0.1:5000/tools');
  }

  toolDetails(id: any): Observable<any> {
    return this._http.get(`http://127.0.0.1:5000/ToolID=${id}`);
  }
}
