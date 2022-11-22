import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getDepartments(): Observable<any> {
  
    return this.http.get<any>('http://localhost:3000/api/departments');
  }
  saveDepartment(req: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/departments', req);
  }
}