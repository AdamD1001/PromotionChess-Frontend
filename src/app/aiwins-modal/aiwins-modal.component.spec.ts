import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AIWinsModalComponent } from './aiwins-modal.component';

describe('AIWinsModalComponent', () => {
  let component: AIWinsModalComponent;
  let fixture: ComponentFixture<AIWinsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AIWinsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AIWinsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
