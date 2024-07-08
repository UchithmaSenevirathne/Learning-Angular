import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverClickComponent } from './hover-click.component';

describe('HoverClickComponent', () => {
  let component: HoverClickComponent;
  let fixture: ComponentFixture<HoverClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverClickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoverClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
