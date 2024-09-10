import { Component , computed, EventEmitter, Input, output, Output, signal} from '@angular/core';
import { DUMMY_USERS } from '../dummy_users';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
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
// @Input() avatar! : string;
// @Input({required:true}) name! : string;
// @Input({required:true}) id!: string;
//* passing object

@Input({required:true}) user!:{
  id:string,
  avatar:string,
  name:string
}

@Output() select=new EventEmitter<string>();
selectTest=output<string>();
@Input({required:true}) selected!:boolean;
onSelectUser(){
  // this.select.emit(this.id);
  // this.selectTest.emit(this.id);
  this.select.emit(this.user.id)
  console.log("clicked");
}

get ImagePath(){
  return 'assets/users/'+this.user.avatar;
}

}
