import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiVsAiModalComponent } from './ai-vs-ai-modal.component';

describe('AiVsAiModalComponent', () => {
  let component: AiVsAiModalComponent;
  let fixture: ComponentFixture<AiVsAiModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiVsAiModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiVsAiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
