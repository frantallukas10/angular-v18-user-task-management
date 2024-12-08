import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { CourseCardComponent } from './course-card/course-card.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
// import { UserModernWayComponent } from './user-modern-way/user-modern-way.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // CourseCardComponent,
    HeaderComponent,
    UserComponent,
    // UserModernWayComponent,
    TasksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // define more styles for one components is is good for define global styles for 2 components for example
  // styleUrls: ['./app.component.css', './app.component.scss'],
  // another way you can write styles in the same file but it is not recommended
  // styles: [`h1 { color: red; }`]
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find(
      (user: { id?: string }) => user.id === this.selectedUserId
    );
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
