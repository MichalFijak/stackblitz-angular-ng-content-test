import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FirstExampleComponent } from './first-example/first-example.component';
import { SecondExampleComponent } from './second-example/second-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstExampleComponent, SecondExampleComponent],
  styles:
    ' h2 {color: purple; text-align: center;} h1{color:grey; text-align: center;}',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <h2>
      ngContent-test
    </h2>
<hr/>
<app-first-example/>
<app-second-example/>
  `,
})
export class App {
  name = 'Angular Sandbox';
}

bootstrapApplication(App);
