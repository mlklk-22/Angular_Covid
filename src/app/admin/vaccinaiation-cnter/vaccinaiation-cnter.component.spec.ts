import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinaiationCnterComponent } from './vaccinaiation-cnter.component';

describe('VaccinaiationCnterComponent', () => {
  let component: VaccinaiationCnterComponent;
  let fixture: ComponentFixture<VaccinaiationCnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinaiationCnterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VaccinaiationCnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
