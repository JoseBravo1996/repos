import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListVscrollComponent } from './teamlistvscroll.component';

describe('TeamlistvscrollComponent', () => {
  let component: TeamListVscrollComponent;
  let fixture: ComponentFixture<TeamListVscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamListVscrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListVscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
