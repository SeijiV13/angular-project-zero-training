import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeRestApiService<T> {
  private readonly baseUrl = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  public getAllRecords(path: string): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.baseUrl}/${path}`);
  }

  public getRecordById(path: string, id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.baseUrl}/${path}/${id}`);
  }

  public createRecord(path: string, payload: any): Observable<T> {
    return this.httpClient.post<T>(`${this.baseUrl}/${path}`, JSON.stringify(payload));
  }

  public updateRecord(path: string, id: number, payload: any): Observable<T> {
    return this.httpClient.put<T>(`${this.baseUrl}/${path}/${id}`, payload);
  }

  public deleteRecord(path: string, id: number) {
    return this.httpClient.delete<any>(`${this.baseUrl}/${path}/${id}`);
  }


}
