import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-child-push',
  standalone: true,
  imports: [],
  templateUrl: './child-push.component.html',
  styleUrl: './child-push.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildPushComponent {
  count = 0;

  constructor(){
    setInterval(() => {
      this.count++;
    }, 1000);
  }
}
