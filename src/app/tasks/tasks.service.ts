import { Injectable } from '@angular/core';
import { NewTaskData } from '../task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = [
    {
      id: "t1",
      userId: "u1",
      title: "Master Angular",
      summary: "Learn All The Basics and Advanced Features Of Angular",
      dueDate: "2024-5-18"
    },
    {
      id: "t2",
      userId: "u3",
      title: "Master Angular",
      summary: "Learn All The Basics and Advanced Features Of Angular",
      dueDate: "2024-5-18"
    }, {
      id: "t3",
      userId: "u3",
      title: "Master Angular",
      summary: "Learn All The Basics and Advanced Features Of Angular",
      dueDate: "2024-5-18"
    }, {
      id: "t4",
      userId: "u4",
      title: "Master Angular",
      summary: "Learn All The Basics and Advanced Features Of Angular",
      dueDate: "2024-5-18"
    },
  ]

  constructor() { }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  addNewTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    })
  }
  removeTask(id: string) {
  return  this.tasks.filter((task) => task.id !== id);
  }
}
