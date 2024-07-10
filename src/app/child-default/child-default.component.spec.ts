import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDefaultComponent } from './child-default.component';

describe('ChildDefaultComponent', () => {
  let component: ChildDefaultComponent;
  let fixture: ComponentFixture<ChildDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildDefaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
