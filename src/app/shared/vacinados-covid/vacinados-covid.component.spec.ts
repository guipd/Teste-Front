import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinadosCovidComponent } from './vacinados-covid.component';

describe('VacinadosCovidComponent', () => {
  let component: VacinadosCovidComponent;
  let fixture: ComponentFixture<VacinadosCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinadosCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinadosCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
