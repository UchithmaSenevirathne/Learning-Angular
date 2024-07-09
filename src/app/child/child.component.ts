import { Component } from '@angular/core';
import { SUB_ITEM } from '../subitem.token';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  // <!-- **injection tree -->
  providers: [{provide: SUB_ITEM, useValue: 'child component value'}],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  message: string = 'hello from child component'

  showMessage(){
    alert(this.message);
  }
}
