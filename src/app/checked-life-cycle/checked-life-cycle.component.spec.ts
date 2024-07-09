import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedLifeCycleComponent } from './checked-life-cycle.component';

describe('CheckedLifeCycleComponent', () => {
  let component: CheckedLifeCycleComponent;
  let fixture: ComponentFixture<CheckedLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckedLifeCycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckedLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
