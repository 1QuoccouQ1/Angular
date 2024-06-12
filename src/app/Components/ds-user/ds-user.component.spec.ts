import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsUserComponent } from './ds-user.component';

describe('DsUserComponent', () => {
  let component: DsUserComponent;
  let fixture: ComponentFixture<DsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
