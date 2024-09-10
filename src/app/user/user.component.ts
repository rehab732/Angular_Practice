import { Component , computed, signal} from '@angular/core';
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
user=signal(DUMMY_USERS[randomIndex]);
imagePath=computed(()=>'assets/users'+this.user().avatar);//will not computed again

onSelectUser(){
  console.log("clicked");
}

get getImagePath(){
return "assets/users/"+ this.user().avatar
}

}
