import { Component, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [DynamicComponent],
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss'
})
export class HostComponent {
  constructor(private ViewContainerRef: ViewContainerRef){

  }

  ngOnInit(){
    this.ViewContainerRef.createComponent(DynamicComponent);
  }
}
