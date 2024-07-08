import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-hover-click',
  standalone: true,
  imports: [],
  templateUrl: './hover-click.component.html',
  styleUrl: './hover-click.component.scss'
})
export class HoverClickComponent {
  @HostBinding('class.hovered') isHovered = false;

  @HostListener('click') onClick() {
    console.log('element clicked');
  }
}
