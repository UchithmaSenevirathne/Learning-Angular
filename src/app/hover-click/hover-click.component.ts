import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-hover-click',
  standalone: true,
  imports: [],
  templateUrl: './hover-click.component.html',
  styleUrl: './hover-click.component.scss',
  //host property
  host: {
    role: 'presentation',
    '[id]': 'otherId',
    '[class.hovered]': 'isHovered',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)':'onMouseLeave()',
    '(click)': 'onClick()'
  }
})
export class HoverClickComponent {
  //host binding and host listner
  // @HostBinding('class.hovered') isHovered = false;

  // @HostListener('click') onClick() {
  //   console.log('element clicked');
  // }

  // @HostListener('mouseenter') onMouseEnter(){
  //   this.isHovered = true;
  // }

  // @HostListener('mouseleave') onMouseLeave(){
  //   this.isHovered = false;
  // }

  //host property
  isHovered = false;
  otherId = 'hi uchi';

  onClick() {
    console.log('element clicked');
  }

  onMouseEnter(){
    this.isHovered = true;
  }

  onMouseLeave(){
    this.isHovered = false;
  }
}
