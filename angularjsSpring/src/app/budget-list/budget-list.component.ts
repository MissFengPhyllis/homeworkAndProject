import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget';
import {BudgetService} from '../budget.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  budgets: Budget[] = [];
  //要想引用budgetServices必须要在这里先引入
  constructor( private budgetService: BudgetService) {
   
   }

  async ngOnInit(){
    this.budgets = await this.budgetService.getBudgets();

    console.log(this.budgets)
  }

}
