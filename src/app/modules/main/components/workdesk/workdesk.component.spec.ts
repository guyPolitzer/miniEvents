import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdeskComponent } from './workdesk.component';

describe('WorkdeskComponent', () => {
  let component: WorkdeskComponent;
  let fixture: ComponentFixture<WorkdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
