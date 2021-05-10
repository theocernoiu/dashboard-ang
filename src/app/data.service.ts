import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './register/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_URL = "http://localhost:8080"
  
  constructor(private httpClient: HttpClient) { }

  register(user:User): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Access-Control-Allow-Origin', '*');

    const body=JSON.stringify(user);
    console.log(body);
    return this.httpClient.post(this.REST_API_URL + '/register', body,{'headers':headers});
  }
}
