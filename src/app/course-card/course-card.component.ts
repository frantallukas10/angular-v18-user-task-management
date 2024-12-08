import { Component } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  search = 'text';

  handleClick() {
    alert(this.search);
  }

  handleKeyUp(value: string) {
    this.search = value;
  }
}
