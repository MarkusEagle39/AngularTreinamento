import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardForComponent } from './card-for.component';

describe('CardForComponent', () => {
  let component: CardForComponent;
  let fixture: ComponentFixture<CardForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
