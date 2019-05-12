import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solid-foundations 1';

  todos = [{
    text: 'Prepare 1st Workshop',
    isComplete: true
  }, {
    text: 'Prepare 2st Workshop',
    isComplete: false
  }, {
    text: 'Prepare 3st Workshop',
    isComplete: true
  }, {
    text: 'Prepare 4st Workshop',
    isComplete: false
  }];

  show(todo) {
    alert(todo.text);
  }
}
