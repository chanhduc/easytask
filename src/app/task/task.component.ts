import { Component, input } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();
  // taskComplete = output<string>();

  constructor(private tasksService: TasksService) {}

  onCompleteClick() {
    this.tasksService.completeTask(this.task().id);
  }
}
