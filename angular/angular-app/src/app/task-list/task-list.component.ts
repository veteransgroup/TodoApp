import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getTasks();
  }
  public getTasks() {
    // throw new Error("Method not implemented.");
    this.tasks$ = this.apiService.getTasks();
  }

}
