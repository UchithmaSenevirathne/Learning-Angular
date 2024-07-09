import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [DynamicComponent],
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss'
})
export class HostComponent {
  @ViewChild('containerRef', {read: ViewContainerRef, static:true}) container!: ViewContainerRef;
  componentRef!: ComponentRef<DynamicComponent>;
  // constructor(private ViewContainerRef: ViewContainerRef){

  // }
  constructor(){}

  // ngOnInit(){
  //   this.ViewContainerRef.createComponent(DynamicComponent);
  // }

  ngOnInit(){

  }

  loadComponent(){
    this.container.clear();
    // this.container.createComponent(DynamicComponent);
    this.componentRef = this.container.createComponent(DynamicComponent);
    this.componentRef.instance.action.subscribe((message) => {
      console.log(message);
    })
  }
}
