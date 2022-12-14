import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourReservationComponent } from './your-reservation.component';

describe('YourReservationComponent', () => {
  let component: YourReservationComponent;
  let fixture: ComponentFixture<YourReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
