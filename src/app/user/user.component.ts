import { Component, computed, input, output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: false,
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
