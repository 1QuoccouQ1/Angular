import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DstaskComponent } from './dstask.component';

describe('DstaskComponent', () => {
  let component: DstaskComponent;
  let fixture: ComponentFixture<DstaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DstaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DstaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
