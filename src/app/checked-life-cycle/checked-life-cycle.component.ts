import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-checked-life-cycle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checked-life-cycle.component.html',
  styleUrl: './checked-life-cycle.component.scss'
})
export class CheckedLifeCycleComponent {
  @ViewChild('inputField') inputElement !: ElementRef
  @ViewChild('scrollContainer') scrollContainer !: ElementRef

  items = [
    'item 1',
    'item 2',
    'item 3'
  ]

  ngAfterViewInit(){
    console.log('after view init fired');
    this.inputElement.nativeElement.focus();
  }

  addItem(){
    this.items.push(`Item ${this.items.length + 1}`)
  }

  ngDoCheck(){
    console.log('doCheck fired')
  }

  ngAfterContentInit(){
    console.log('after content init')
  }  

  ngAfterViewChecked(){
    console.log('after view checked')
    this.scrollToBottom();
  }

  ngAfterContentChecked(){
    console.log('after content checked')
  }

  scrollToBottom(){
    try{
      this.scrollContainer.nativeElement.scrollTop = 
      this.scrollContainer.nativeElement.scrollHeight;
    }catch(err){}
  }
}
