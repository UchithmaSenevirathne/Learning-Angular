import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-getter-input',
  standalone: true,
  imports: [],
  templateUrl: './getter-input.component.html',
  styleUrl: './getter-input.component.scss'
})
export class GetterInputComponent {
  private _title = '';
  @Input()
  get title(){
    return this._title;
  }

  set title(value: string){
    this._title = value.trim().toUpperCase();
  }
}
