import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.css']
})
export class BudgetDetailComponent implements OnInit {

  budget: Budget = new Budget();

  constructor(
    private budgetService:BudgetService,
    private route : ActivatedRoute,
    private location:Location
    ) { }

  async ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.budget = await this.budgetService.getOneBudget(id);
  }

 async handleDelete(){
   await this.budgetService.deleteBudget(this.budget.id);
    this.location.back();
  }

}
