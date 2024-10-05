import { Component } from '@angular/core';
import { ContentTestComponent } from '../content-test/content-test.component';

@Component({
  selector: 'app-second-example',
  standalone: true,
  imports: [ContentTestComponent],
  templateUrl: './second-example.component.html',
  styleUrl: './second-example.component.css',
})
export class SecondExampleComponent {}
