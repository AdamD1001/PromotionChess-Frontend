import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayervsAIComponent } from './playervs-ai.component';

describe('PlayervsAIComponent', () => {
  let component: PlayervsAIComponent;
  let fixture: ComponentFixture<PlayervsAIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayervsAIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayervsAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
