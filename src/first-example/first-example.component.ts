import { Component } from '@angular/core';
import { ContentTestComponent } from '../content-test/content-test.component';

@Component({
  selector: 'app-first-example',
  standalone: true,
  imports: [ContentTestComponent],
  templateUrl: './first-example.component.html',
  styles: 'div {color:green; margin-bottom:50px;}',
})
export class FirstExampleComponent {}
