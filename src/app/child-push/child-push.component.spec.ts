import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPushComponent } from './child-push.component';

describe('ChildPushComponent', () => {
  let component: ChildPushComponent;
  let fixture: ComponentFixture<ChildPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildPushComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
