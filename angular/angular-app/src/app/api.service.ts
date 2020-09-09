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

  public putTask(the_task: Task): Observable<any> {
    return this.http.put(`${this.API_URL}${the_task.id}/`, the_task).pipe(
      tap(_=>console.log(`updated the task id=${the_task.id}`))
    );
  }

  public deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.API_URL}${id}/`).pipe(
      tap(_=>console.log(`deleted the task id=${id}`))
    );
  }
}
