import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserButtonsComponent } from './user-buttons.component';

describe('UserButtonsComponent', () => {
  let component: UserButtonsComponent;
  let fixture: ComponentFixture<UserButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
