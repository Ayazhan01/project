import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindtimetableComponent } from './findtimetable.component';

describe('FindtimetableComponent', () => {
  let component: FindtimetableComponent;
  let fixture: ComponentFixture<FindtimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindtimetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindtimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
