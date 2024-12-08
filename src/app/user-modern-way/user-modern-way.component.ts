import {
  Component,
  computed,
  input,
  //  signal,
  output,
} from '@angular/core';
import { type UserModernWay } from './user-modern-way.model';

@Component({
  selector: 'app-user-modern-way',
  imports: [],
  templateUrl: './user-modern-way.component.html',
  styleUrl: './user-modern-way.component.css',
})
export class UserModernWayComponent {
  user = input.required<UserModernWay>();
  isSelected = input.required<boolean>();
  select = output<string>();

  imagePath = computed(() => 'assets/users/' + this.user().avatar);

  // selectedUser = signal({
  //   id: this.user().id,
  //   avatar: this.user().avatar,
  //   name: this.user().name,
  // });

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
