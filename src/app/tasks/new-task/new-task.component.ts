import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';

import {type NewTask } from './new-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() addTask = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TasksService);
  
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');
  cancelAddTask() {
    this.close.emit();
  }

  onSubmit() {
    var newTask: NewTask = {
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDueDate()
    };  
    this.addTask.emit();

    this.tasksService.addTask(newTask, this.userId);
  }
}
