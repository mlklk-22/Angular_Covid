import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUaerComponent } from './home-uaer.component';

describe('HomeUaerComponent', () => {
  let component: HomeUaerComponent;
  let fixture: ComponentFixture<HomeUaerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUaerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeUaerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
