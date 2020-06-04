import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetAboutComponent } from './budget-about.component';

describe('BudgetAboutComponent', () => {
  let component: BudgetAboutComponent;
  let fixture: ComponentFixture<BudgetAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
