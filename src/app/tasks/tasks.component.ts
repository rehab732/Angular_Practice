import { Component, Input } from '@angular/core';
import { AppComponent } from "../app.component";
import { TaskComponent } from "../task/task.component";
import { NewTaskComponent } from "../new-task/new-task.component";
import { NewTaskData, Task } from '../task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [AppComponent, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) { }

  get selectedUserTasks() {
    // console.log("saDa"+this.tasksService.getUserTasks(this.userId))
    return this.tasksService.getUserTasks(this.userId);

    // return this.tasks.filter((task) => task.userId === this.userId);
  }

  // onCompleteTask(id: string) {
  //   this.tasksService.removeTask(id);
  //   // this.tasks = this.tasks.filter((task) => task.id !== id);
  //   // console.log("task complete number" + id)

  // }
  onAddNewTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
   

}
