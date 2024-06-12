import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsOrderComponent } from './ds-order.component';

describe('DsOrderComponent', () => {
  let component: DsOrderComponent;
  let fixture: ComponentFixture<DsOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
