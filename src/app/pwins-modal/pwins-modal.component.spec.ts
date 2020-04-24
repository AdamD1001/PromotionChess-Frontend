import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PWinsModalComponent } from './pwins-modal.component';

describe('PWinsModalComponent', () => {
  let component: PWinsModalComponent;
  let fixture: ComponentFixture<PWinsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PWinsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PWinsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
