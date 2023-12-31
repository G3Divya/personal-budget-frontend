import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseDialogComponent } from './add-expense.component';

describe('AddExpenseDialogComponent', () => {
  let component: AddExpenseDialogComponent;
  let fixture: ComponentFixture<AddExpenseDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExpenseDialogComponent]
    });
    fixture = TestBed.createComponent(AddExpenseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
