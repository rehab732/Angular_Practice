import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  private tasks = signal<Task[]>([]);
  allTasks = this.tasks.asReadonly();

  addNewTask(taskData: { title: string, description: string }) {
    //update tasks by adding new task at the end 
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN'
    }
    this.tasks.update((oldTasks) => [...oldTasks, newTask])
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
       oldTasks.map((task) =>
         task.id === taskId ? { ...task, status: newStatus } : task
       )
     );
  }
}
