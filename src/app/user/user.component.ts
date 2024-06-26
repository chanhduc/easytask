import { Component, Input, computed, signal, input } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({ required: true})
  // name!: string;
  // @Input({ required: true})
  // avatar!: string;

  avatar = input.required<string>();
  name = input.required<string>();

  avatarPath = computed(() => `assets/users/${this.avatar()}`);
  // get avatarPath() {
  //   return `assets/users/${this.avatar}`
  // };

  onSelectUser() {
    
  }
}
