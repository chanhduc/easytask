import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [RouterOutlet,
  //   HeaderComponent,
  //   UserComponent,
  //   NgFor, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'essentials';
  users = DUMMY_USERS;
  selectedUserId: string | null = null;

  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
  
  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }
}
