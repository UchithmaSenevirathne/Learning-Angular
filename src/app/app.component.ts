import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ProfileComponent from './profile.component';
import CounterComponent from './counter/Counter.component';
import { GetterInputComponent } from './getter-input/getter-input.component';
import { PanelComponent } from './panel/panel.component';
import { CardComponent } from './card/card.component';
import { HoverClickComponent } from './hover-click/hover-click.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { CheckedLifeCycleComponent } from './checked-life-cycle/checked-life-cycle.component';
import { AfterRenderComponent } from './after-render/after-render.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ProfileComponent,
    CounterComponent,
    GetterInputComponent,
    PanelComponent,
    CardComponent,
    HoverClickComponent,
    LifeCycleHooksComponent,
    CheckedLifeCycleComponent,
    AfterRenderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = {name: 'testProject'};
  counter: number = 20;
  recieveDataFromChild = '';
  isActive = true; 

  dataRecieved(data: string){
    this.recieveDataFromChild = data;
  }

  changeTitle(){
    this.title.name = 'random string' + Math.random();
  }

  toggleHook(){
    this.isActive = !this.isActive;
  }

  updateCounter(){
    this.counter++;
  }
}
