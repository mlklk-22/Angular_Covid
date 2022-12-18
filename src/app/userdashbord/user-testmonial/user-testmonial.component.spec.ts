import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTestmonialComponent } from './user-testmonial.component';

describe('UserTestmonialComponent', () => {
  let component: UserTestmonialComponent;
  let fixture: ComponentFixture<UserTestmonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTestmonialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTestmonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
