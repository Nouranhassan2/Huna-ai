import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private _http: HttpClient) {
  }

  signUp(userData: any): Observable<any> {
    return this._http.post('http://localhost:5000/signup', userData);
  }

  logIn(data: any): Observable<any> {
    return this._http.post('http://localhost:5000/login', data, { withCredentials: true });
  }
  
  forgotPassword(email: string):Observable<any>{
    return this._http.post('http://localhost:5000/forgot-password', { email });
  }
  


  resetPassword(token: string, newPassword: string): Observable<any> {
    const url = 'http://localhost:5000/reset-password';
    const body = {
      token: token,
      new_password: newPassword
    };
    return this._http.post(url, body);
  }
}

