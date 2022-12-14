import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagevaccinesComponent } from './managevaccines.component';

describe('ManagevaccinesComponent', () => {
  let component: ManagevaccinesComponent;
  let fixture: ComponentFixture<ManagevaccinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagevaccinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagevaccinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
