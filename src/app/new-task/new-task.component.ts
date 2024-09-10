import { TasksService } from './../tasks/tasks.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() cancel = new EventEmitter()
  // @Output() addTask = new EventEmitter<NewTaskData>()
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';

  constructor(private tasksService: TasksService) { }

  onSubmit() {
    // this.addTask.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   dueDate: this.enteredDueDate
    // })
    this.tasksService.addNewTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, this.userId);
    this.cancel.emit();
  }
  onCancel() {
    this.cancel.emit();
  }
}
