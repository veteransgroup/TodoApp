import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;
  task_form: FormGroup;
  response;
  imageURL;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getTasks();
    this.task_form = this.formBuilder.group({
      title: '',
      content: '',
      attachment: ['']
    });
    this.task_form.controls["title"].setValidators([Validators.required]);
    this.task_form.controls["content"].setValidators([Validators.required]);
  }
  public getTasks(): void {
    // throw new Error("Method not implemented.");
    this.tasks$ = this.apiService.getTasks();
  }
  onSubmit(): void {
    const formData = new FormData();
    formData.append('title', this.task_form.get('title').value);
    formData.append('content', this.task_form.get('content').value);
    formData.append('attachment', this.task_form.get('attachment').value);

    this.apiService.postTask(formData).subscribe(
      (res) => {
        this.response = res;
        this.imageURL = `http://localost:8000/${res.attachment}`;
          console.log(res);
          console.log(this.imageURL);
          this.getTasks();
      },
      (err) => {  
        console.log(err);
      }
    );
    // reset the Form
    this.task_form.reset();
  }
  onChange(event) {
    if (event.target.files.length>0){
      const file = event.target.files[0];
      this.task_form.get('attachment').setValue(file);
    }    
  }

  deleteTask(task_id: number) {
    this.apiService.deleteTask(task_id).subscribe(
      (res) => {
        console.log(res);
        this.getTasks();
      }
    )
  }

  updateTask(task: Task) {
    this.apiService.putTask(task)
      .subscribe(
        (response) => {
          console.log(response);
          this.getTasks();
        }
      )
  }
}
