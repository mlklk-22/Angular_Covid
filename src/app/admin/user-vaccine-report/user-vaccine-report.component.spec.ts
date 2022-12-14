import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVaccineReportComponent } from './user-vaccine-report.component';

describe('UserVaccineReportComponent', () => {
  let component: UserVaccineReportComponent;
  let fixture: ComponentFixture<UserVaccineReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVaccineReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserVaccineReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
