import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Prompts } from './prompts';
import { CurrentPrompts } from './current-prompts';

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

  getPromptsByCategory(category: string): Observable<any> {
    return this._http.get<CurrentPrompts[]>(`http://localhost:5000/prompts/category/${category}`).pipe(
      tap(data => console.log('API Response:', data))
    );
  }
}
