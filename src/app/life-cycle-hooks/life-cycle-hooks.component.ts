import { Component, DestroyRef, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.scss'
})
export class LifeCycleHooksComponent {
  @Input() title = {name: ''};
  @Input() counter = 0;
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
    setTimeout(() => {
      console.log('set time out');
      this.name = this.title.name + 'added on ngOnInit'
    }, 2000);
    // this.name = this.title + 'added ngOnInit'
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChange call')
    console.log(changes)
  }

  ngDoCheck(){
    console.log('ngDoCheck call')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy call')
  }
}
