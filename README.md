# Angular fundamentals V18

- generate angular component

```bash
ng g c nameOfYourComponent
```

- String interpolation - double curly braces is one of the key features offered by Angular, when it comes to outputting content in your template.

```html
<div>{{name}}</div>
```

- another way property binding, here is example with dynamic path

```html
<img [src]="'assets/users/' + selectedUser.avatar" />
```

nice angular js feature from [zone.js](https://github.com/angular/angular/tree/main/packages/zone.js)<br/>

- cleaner way and prefer way don't use it inside html template is use getter inside ts file

```ts
 get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }
```

and use it inside html template

```html
<img [src]="imagePath" />
```

- if we want to handle click event let say event biding in angular and update state here is one example

```ts
onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
```

```html
<button (click)="onSelectUser()">
  <img [src]="imagePath" [alt]="selectedUser.name" />
  <span>{{ selectedUser.name }}</span>
</button>
```

- another way and new is signal here is example for updating state by signal
  (signal is stable from Angular v17)

```js
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath will calculate if this.selectedUser.avatar will change
  imagePath = computed(() => 'assets/users/' + this.selectedUser.avatar);

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
```

```html
<div>
  <button (click)="onSelectUser()">
    <img [src]="imagePath()" [alt]="selectedUser().name" />
    <span>{{ selectedUser().name }}</span>
  </button>
</div>
```

## angular `@Input decorator`

In Angular, components are the building blocks of the application. Communication between these components is essential for creating dynamic and interactive applications. The @Input decorator is a fundamental feature that allows a child component to receive data from its parent component.

Benefits of Using:

- Encapsulation: Keeps components independent and reusable.
- Clear Data Flow: Establishes a clear parent-to-child data flow.
- Ease of Maintenance: Simplifies debugging and updating code

Usage Steps

1. Import the Input Decorator
   First, import the Input decorator from @angular/core in your child component:

2. Declare an Input Property
   In the child component class, decorate the property you want to receive data with @Input:

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Received data: {{ data }}</p>`,
})
export class ChildComponent {
  // required means that data has to be define where the component is used
  @Input({ required: true }) data: string;
}
```

3. Bind to the Child Component in the Parent Template
   In the parent component's template, bind to the child component's input property using property binding syntax:

```html
<app-child [data]="parentData"></app-child>
```

4. Define the Data in the Parent Component
   In the parent component class, define the property that holds the data you want to pass:

```ts
@Component({
  selector: 'app-parent',
  template: `<app-child [data]="parentData"></app-child>`,
})
export class ParentComponent {
  parentData: string = 'Hello from Parent Component!';
}
```

- angular `input special function` same way as signal function

`input` signal function provides a new way to handle parent-to-child communication. it is more effective but The immutable and cannot be directly modified in the child.

```ts
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // inside input function you can specify default value if you need
  data = input.required<string>();
}
```

- angular `@Output decorator`

Is used to define an output property in a child component, allowing the component to emit custom events to its parent component. It plays a vital role in enabling communication from the child component to the parent component, typically through event binding.

- input 2 way binding
  don't forget define import inside component ts file `imports: [FormsModule]`

  regarding submit event we can simply handle it by ngSubmit which is disable browser to make auto http request...

```html
<form (ngSubmit)="onSubmit()">
  <p>
    <label for="title">Title</label>
    <input type="text" id="title" name="title" [(ngModel)]="enteredTitle" />
  </p>
  <p>
    <label for="summary">Summary</label>
    <textarea
      id="summary"
      rows="5"
      name="summary"
      [(ngModel)]="enteredSummary"
    ></textarea>
  </p>
  <p>
    <label for="due-date">Due Date</label>
    <input
      type="date"
      id="due-date"
      name="due-date"
      [(ngModel)]="enteredDate"
    />
  </p>
  <p class="actions">
    <button type="button" (click)="onCancel()">Cancel</button>
    <button type="submit">Create</button>
  </p>
</form>
```

- @if example in html template v17

```html
@if (yourCondition) {
<div>visible text if yourCondition is true</div>
} @else {
<div>visible text if yourCondition is false</div>
}
```

or for older version we have tu use directive `*ngIf`

```html
<div *ngIf="yourCondition; else fallback">
  visible text if yourCondition is true
</div>
<ng-template #fallback>
  <div id="fallback">visible text if yourCondition is false</div>
</ng-template>
```

- @for example in html template v17

```html
<ul>
  @for (task of selectedUserTasks; track task.id) {
  <li>
    <app-task [task]="task" />
  </li>
  }
</ul>
```

or for older version we have tu use directive `*ngFor`

```html
<ul>
  <li *ngFor="let task of tasks">
    <app-task [task]="task" />
  </li>
</ul>
```

- Content Projection

is mechanism for creating component as parent and wrap another component as children

this is parent html template

```html
<div>
  <ng-content />
</div>
```

this component is children and inside html template you can wrap it by parent

```html
<app-card>
  <div>children</div>
</app-card>
```

- [Pipes](https://angular.dev/api/common/DatePipe)

Formats a date value according to locale rules

```html
<time datetime="">{{ task.dueDate | date : "fullDate" }} </time>
```

- services decorator @Injectable({ providedIn: 'root' })

```ts
@Injectable({ providedIn: 'root' })
export class TaskService {}
```

- how to use service with sharing logic and data

```ts
  constructor(
    private taskService: TaskService
  ) {}
```

or better way

```ts
  private taskService = inject(TaskService);
```

## Angular modules old way

-it's a feature that mostly exists for historic reasons, though you can absolutely still use it today, if you, for example, prefer it over Standalone Components, or if you are working on some project that simply uses modules because it may be always used modules, or because it's using an older version of Angular.

```ts
@NgModule({
  declarations: [
    AppComponent,
    // We should define all components that interact and communicate with each other here.
  ],
  bootstrap: [AppComponent]
  imports: [BrowserModule, FormsModule]
})
export class AppModule {}
```

[demo]
