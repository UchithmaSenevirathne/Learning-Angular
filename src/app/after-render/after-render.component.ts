import { afterNextRender, afterRender, AfterRenderPhase, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-after-render',
  standalone: true,
  imports: [],
  templateUrl: './after-render.component.html',
  styleUrl: './after-render.component.scss'
})
export class AfterRenderComponent {

  @ViewChild('uchi') uchi !: ElementRef;

  constructor(){
    afterNextRender(() => {
      this.uchi.nativeElement.style.color = 'red';
      console.log('after next render fired')
    },
    {phase: AfterRenderPhase.Write});

    afterRender(() => {
      console.log(this.uchi.nativeElement.style.color)
      console.log('after render fired')
    }, 
    {phase: AfterRenderPhase.Read});
  }
}
