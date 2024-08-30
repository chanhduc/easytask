import { Injectable } from "@angular/core";
import { NewTask } from "./new-task/new-task.model";

@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks = [
    {
      id: '1',
      userId: 'u1',
      title: 'Buy groceries',
      summary: 'Milk, Cheese, Pizza, Fruit, Tylenol',
      dueDate: '2021-11-01',
      completed: false,
    },
    {
      id: '2',
      userId: 'u1',
      title: 'Learn Angular',
      summary: 'Learn Angular fundamentals',
      dueDate: '2021-11-01',
      completed: false,
    },
    {
      id: '3',
      userId: 'u1',
      title: 'Learn Angular',
      summary: 'Learn Angular fundamentals',
      dueDate: '2021-11-01',
      completed: false,
    },
    {
      id: '4',
      userId: 'u1',
      title: 'Learn Angular',
      summary: 'Learn Angular fundamentals',
      dueDate: '2021-11-01',
      completed: false,
    },
    {
      id: '5',
      userId: 'u2',
      title: 'Learn Angular',
      summary: 'Learn Angular fundamentals',
      dueDate: '2021-11-01',
      completed: false,
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }

  }
  getTasks() {
    return this.tasks;
  }

  getTasksByUserId(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  getIncompleteTasksByUserId(userId: string) {
    return this.tasks.filter(
      (task) => task.userId === userId && !task.completed
    );
  }

  getCompleteTasksByUserId(userId: string) {
    return this.tasks.filter(
      (task) => task.userId === userId && task.completed
    );
  }

  addTask(task: NewTask, userId: string) {
    this.tasks.push({
      id: Math.random().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
      completed: false,
    });
  }

    completeTask(taskId: string) {
        const task = this.tasks.find((task) => task.id === taskId);
        if (task) {
        task.completed = true;
        }
    }

    private saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}

