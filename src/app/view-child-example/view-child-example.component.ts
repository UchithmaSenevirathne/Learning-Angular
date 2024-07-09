import { Component, ElementRef, ViewChild } from '@angular/core';
import { HoverClickComponent } from '../hover-click/hover-click.component';

@Component({
  selector: 'app-view-child-example',
  standalone: true,
  imports: [HoverClickComponent],
  templateUrl: './view-child-example.component.html',
  styleUrl: './view-child-example.component.scss'
})
export class ViewChildExampleComponent {
  @ViewChild('myRef', {static: false}) myRef !: ElementRef
  @ViewChild('hoverComponent') hoverComponent !: HoverClickComponent;

  ngOnInit(){
    console.log('ngOnInit')
  }

  ngAfterViewInit(){
    // console.log(this.myRef.nativeElement.innerHTML)
    // console.log(this.hoverComponent.onMouseEnter())
  }
}
