import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllconceptsComponent } from './allconcepts.component';

describe('AllconceptsComponent', () => {
  let component: AllconceptsComponent;
  let fixture: ComponentFixture<AllconceptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllconceptsComponent]
    });
    fixture = TestBed.createComponent(AllconceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
