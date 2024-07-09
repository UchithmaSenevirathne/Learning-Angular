import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { SUB_ITEM } from '../subitem.token';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  // <!-- **injection tree -->
  providers: [{provide: SUB_ITEM, useValue: 'task component value'}],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() taskName!: string;

  // <!-- **injection tree -->
  constructor(@Inject(SUB_ITEM) public injectedItem: string){

  }
}
