import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-child-default',
  standalone: true,
  imports: [],
  templateUrl: './child-default.component.html',
  styleUrl: './child-default.component.scss',
})
export class ChildDefaultComponent {
  count = 0;

  constructor(){
    setInterval(() => {
      this.count++;
    }, 1000);
  }
}
