import { Component, DestroyRef, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.scss'
})
export class LifeCycleHooksComponent {
  @Input() title = '';
  name = '';
  constructor(private destroyRef: DestroyRef){
    console.log('constructor called');
    destroyRef.onDestroy(() => {
      console.log('destroyRef called');
    })
    // console.log(this.title)
  }

  ngOnInit(){
    console.log('ngOnInit called');
    // this.name = this.title + 'added ngOnInit'
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChange call')
    console.log(changes)
  }

  ngOnDestroy(){
    console.log('ngOnDestroy call')
  }
}
