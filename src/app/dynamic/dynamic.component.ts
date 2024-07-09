import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.scss'
})
export class DynamicComponent {
  @Input() message: string = 'default message';
  @Output() action = new EventEmitter<string>();

  sendEvent(){
    this.action.emit('event sent')
  }
}
