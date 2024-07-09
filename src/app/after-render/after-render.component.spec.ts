import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterRenderComponent } from './after-render.component';

describe('AfterRenderComponent', () => {
  let component: AfterRenderComponent;
  let fixture: ComponentFixture<AfterRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfterRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
