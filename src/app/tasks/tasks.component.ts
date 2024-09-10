import { Component, Input } from '@angular/core';
import { AppComponent } from "../app.component";
import { TaskComponent } from "../task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [AppComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required:true}) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = [
    {
      id: "t1",
      userId:"u1",
      title: "Master Angular",
      summary: "Learn All The Basics and Advanced Features Of Angular",
      dueDate: "2024-5-18"
    },
    {
      id: "t2",
      userId:"u3",
      title: "Master Angular",
      summary: "Learn All The Basics and Advanced Features Of Angular",
      dueDate: "2024-5-18"
    }, {
      id: "t3",
      userId:"u3",
      title: "Master Angular",
      summary: "Learn All The Basics and Advanced Features Of Angular",
      dueDate: "2024-5-18"
    }, {
      id: "t4",
      userId:"u4",
      title: "Master Angular",
      summary: "Learn All The Basics and Advanced Features Of Angular",
      dueDate: "2024-5-18"
    },
  ]
onCompleteTask(id:string){
  this.tasks=this.tasks.filter((task)=>task.id!==id);
  console.log("task complete number"+ id)

}
  get selectedUserTasks()
  {
    return this.tasks.filter((task)=>task.userId===this.userId);
  }
}
