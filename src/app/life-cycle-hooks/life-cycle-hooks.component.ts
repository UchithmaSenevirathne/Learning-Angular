import { CommonModule } from '@angular/common';
import { Component, ContentChild, DestroyRef, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import ProfileComponent from '../profile.component';

@Component({
  selector: 'app-life-cycle-hooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.scss'
})
export class LifeCycleHooksComponent {
  @Input() title = {name: ''};
  @Input() counter = 0;
  loading = true;
  @ContentChild(ProfileComponent) profileComponent !: ProfileComponent;

  @ViewChild('uchi') uchiElement !: ElementRef;

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
    this.loading = false;

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

  ngAfterContentInit(){
    console.log('ngAfterContentInit call')
  }

  ngAfterViewInit(){
    console.log(this.profileComponent)
    console.log(this.uchiElement.nativeElement);
    console.log('ngAfterViewInit call')
  }
}
