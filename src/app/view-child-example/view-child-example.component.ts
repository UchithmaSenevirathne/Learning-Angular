import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { HoverClickComponent } from '../hover-click/hover-click.component';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-view-child-example',
  standalone: true,
  imports: [HoverClickComponent, HighlightDirective],
  templateUrl: './view-child-example.component.html',
  styleUrl: './view-child-example.component.scss'
})
export class ViewChildExampleComponent {
  @ViewChild('myRef', {static: true, read: ElementRef}) myRef !: ElementRef
  @ViewChild('hoverComponent', {read: HoverClickComponent}) hoverComponent !: HoverClickComponent;
  @ViewChild('containerRef', {read: ViewContainerRef}) containerRef!: ViewContainerRef;
  @ViewChild('HighlightDirective', {read: HighlightDirective}) highlightDirective!: HighlightDirective;

  ngOnInit(){
    console.log('ngOnInit')
  }

  ngAfterViewInit(){
    console.log(this.myRef)
    console.log(this.hoverComponent)
    console.log(this.containerRef)
    console.log(this.highlightDirective)
    // console.log(this.myRef.nativeElement.innerHTML)
    // console.log(this.hoverComponent.onMouseEnter())
  }
}
