import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prompts } from './prompts';

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

  getCategories(): Observable<any> {
    return this._http.get('http://localhost:5000/categories');
  }
  getPromptsByCategory(category: string): Observable<any> {  // Adjust the return type based on your data structure
    return this._http.get(`http://localhost:5000/prompts/category/${category}`);
  }
}
