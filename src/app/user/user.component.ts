import { Component, Input, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true})
  name!: string;
  @Input({ required: true})
  avatar!: string;

  get avatarPath() {
    return `assets/users/${this.avatar}`
  };

  onSelectUser() {
    
  }
}
