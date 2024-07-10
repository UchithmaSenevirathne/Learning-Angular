import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { SUB_ITEM } from '../subitem.token';
import { ChildDefaultComponent } from '../child-default/child-default.component';
import { ChildPushComponent } from '../child-push/child-push.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildDefaultComponent, ChildPushComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  // @ContentChild(ChildComponent, {read: ElementRef}) childComponent!: ElementRef
  // @ContentChildren(ChildComponent, {read: ChildComponent}) childComponents!: QueryList<ChildComponent>

  // *****injection tree
  // @ContentChild(SUB_ITEM) subitemType!: string
  @ContentChildren(SUB_ITEM) subitemTypes!: QueryList<string>

  ngAfterContentInit(){
    // console.log(this.childComponents.length);
    // console.log(this.subitemType)
    this.subitemTypes.forEach((element) => {
      console.log(element);
    })
  }
}
