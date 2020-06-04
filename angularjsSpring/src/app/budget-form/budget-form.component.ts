import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Budget } from '../budget';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit,OnChanges {
  @Input() budget = new Budget();
  @Output() save= new EventEmitter<Budget>();    

  budgetForm = this.fb.group({
    title: [''],
    income: 0,
    outcome: 0,
    category: [''],
  });

  get title() { return this.budgetForm.get('title'); }
  get income() { return this.budgetForm.get('income'); }
  get outcome() { return this.budgetForm.get('outcome'); }
  get category() { return this.budgetForm.get('category'); }

  constructor(private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(){
    this.budgetForm.patchValue(this.budget);
  }

  onSubmit(){
    if(this.budgetForm.valid){
      this.save.emit(this.budgetForm.value);
    }

  }

}
