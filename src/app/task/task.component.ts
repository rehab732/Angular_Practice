import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks/tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  // @Output() complete = new EventEmitter<string>();
  // private tasksService = inject(TasksService);
  constructor(private tasksService:TasksService){}

  onCompleteTask() {
    console.log("delete")
    this.tasksService.removeTask(this.task.id);
    // this.complete.emit(this.task.id);
  }

}
