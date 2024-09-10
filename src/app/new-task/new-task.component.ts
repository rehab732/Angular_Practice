import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() cancel = new EventEmitter()
  @Output() addTask = new EventEmitter<NewTaskData>()
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';

  onSubmit() {
    this.addTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    })
  }
  onCancel() {
    this.cancel.emit();
  }
}
