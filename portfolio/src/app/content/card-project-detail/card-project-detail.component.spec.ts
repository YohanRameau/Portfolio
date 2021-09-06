import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectDetailComponent } from './card-project-detail.component';

describe('CardProjectDetailComponent', () => {
  let component: CardProjectDetailComponent;
  let fixture: ComponentFixture<CardProjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProjectDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
