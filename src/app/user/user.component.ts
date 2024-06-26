import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';


const randomIndex = Math.random() * DUMMY_USERS.length | 0;
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  selectedUser = DUMMY_USERS[randomIndex];

  get avatarPath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    const newRandomIndex = Math.random() * DUMMY_USERS.length | 0;
    this.selectedUser = DUMMY_USERS[newRandomIndex];
    }
}
