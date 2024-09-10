import { Component , computed, EventEmitter, Input, output, Output, signal} from '@angular/core';
import { DUMMY_USERS } from '../dummy_users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
//   //! without using input decorator
// user=signal(DUMMY_USERS[randomIndex]);
// imagePath=computed(()=>'assets/users'+this.user().avatar);//will not computed again

// onSelectUser(){
//   console.log("clicked");
// }

// get getImagePath(){
// return "assets/users/"+ this.user().avatar
// }

//? Using Input()
@Input() avatar! : string;
@Input() name! : string;
@Input({required:true}) id!: string;

@Output() select=new EventEmitter<string>();
selectTest=output<string>();

onSelectUser(){
  this.select.emit(this.id);
  // this.selectTest.emit(this.id);
  console.log("clicked");
}

get ImagePath(){
  return 'assets/users/'+this.avatar;
}

}
