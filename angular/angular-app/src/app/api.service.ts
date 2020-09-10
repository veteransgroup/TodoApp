import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Task } from './task';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost/api/task/';
  constructor(private http: HttpClient, private auth: AuthService) { }
  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
    });
  }

  public postTask(new_task: FormData): Observable<Task> {
    return this.http.post<Task>(this.API_URL, new_task, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
    }).pipe(
      tap(_ => console.log(new_task))
    );
  }

  public putTask(the_task: Task): Observable<any> {
    return this.http.put(`${this.API_URL}${the_task.id}/`, the_task, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
    }).pipe(
      tap(_=>console.log(`updated the task id=${the_task.id}`))
    );
  }

  public deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.API_URL}${id}/`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
    }).pipe(
      tap(_=>console.log(`deleted the task id=${id}`))
    );
  }
}
