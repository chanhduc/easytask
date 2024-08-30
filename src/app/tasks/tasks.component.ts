import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from "./new-task/new-task.model";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  isShowCompleteTasks: boolean = true;

  onShowCompleteTasks() {
    this.isShowCompleteTasks = !this.isShowCompleteTasks;
  }

  @Input({ required: true}) userId!: string
  @Input({required: true}) user?: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserIncompleteTasks() {
    return this.tasksService.getIncompleteTasksByUserId(this.userId)
  }

  get selectedUserCompleteTasks() {
    return this.tasksService.getCompleteTasksByUserId(this.userId)
  }

  // onTaskCompleted(taskId: string) {
  //   this.tasksService.completeTask(taskId)
  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onNewTaskAdded() {
    // this.tasksService.addTask(task, this.userId);
    this.isAddingTask = false;
  }

  onNewTaskClosed() {
    this.isAddingTask = false;
  }
  
}
