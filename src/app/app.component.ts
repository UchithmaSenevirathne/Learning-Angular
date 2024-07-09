import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
import { ViewChildExampleComponent } from './view-child-example/view-child-example.component';
import { TaskComponent } from './task/task.component';

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
    ViewChildExampleComponent,
    TaskComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tasks = ['task 1', 'task 2', 'task 3', 'task 4']
  title = {name: 'testProject'};
  counter: number = 20;
  recieveDataFromChild = '';
  isActive = true; 

  @ViewChildren(TaskComponent, {read: ElementRef}) taskComponent!: QueryList<ElementRef>;

  dataRecieved(data: string){
    this.recieveDataFromChild = data;
  }

  ngAfterViewInit(){
    this.taskComponent.forEach(taskComponent => {
      console.log(taskComponent);
    })
    this.taskComponent.changes.subscribe(() => {
      console.log('child component has changed')
    })

    setTimeout(() => {
      this.tasks.push("hi uchi");
    }, 3000)
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
