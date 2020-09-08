import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost/api/task/';
  constructor(private http: HttpClient) { }
  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL);
  }

  public postTask(new_task: FormData): Observable<Task> {

    return this.http.post<Task>(this.API_URL, new_task).pipe(
      tap(_ => console.log(new_task))
    );
  }
}
