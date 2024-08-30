import { Component, Input, computed, signal, input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({ required: true})
  // name!: string;
  // @Input({ required: true})
  // avatar!: string;
  user = input.required<User>();
  selected = input.required<boolean>();

  select = output<string>();

  avatarPath = computed(() => `assets/users/${this.user().avatar}`);
  // get avatarPath() {
  //   return `assets/users/${this.avatar}`
  // };

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
