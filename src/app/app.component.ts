import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy_users';
import { TasksComponent } from "./tasks/tasks.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get getSelectedUserName() {
    return this.users.find((user) => user.id === this.selectedUserId)!;

  }
  onSelectUser(id:string){
    this.selectedUserId=id;
  }
  test(id: string) {
    this.selectedUserId = id;
    console.log("user number :" + this.selectedUserId);
  }
}
