import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './task.model';
import { CardComponent } from "../shared/card/card.component";
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
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
