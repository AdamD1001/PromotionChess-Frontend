import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiVsAiComponent } from './ai-vs-ai.component';

describe('AiVsAiComponent', () => {
  let component: AiVsAiComponent;
  let fixture: ComponentFixture<AiVsAiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiVsAiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiVsAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
