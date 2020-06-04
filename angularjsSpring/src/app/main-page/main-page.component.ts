import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget';
import {BudgetService} from '../budget.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  title = 'Family Budget Application';
  budgets: Budget[] = [];
  constructor(private budgetService: BudgetService) { }
  totalInCome = 0;
  totalOutCome = 0;
  async ngOnInit(){
    this.budgets = await this.budgetService.getBudgets();
    this.budgets.forEach(budget => {
     this.totalInCome += budget.income;
     this.totalOutCome += budget.outcome;
     
   });
   console.log(this.totalInCome,this.totalOutCome);
    console.log(this.budgets)
  }

}
