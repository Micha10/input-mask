import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatestestComponent } from './datestest.component';

describe('DatestestComponent', () => {
  let component: DatestestComponent;
  let fixture: ComponentFixture<DatestestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatestestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatestestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
