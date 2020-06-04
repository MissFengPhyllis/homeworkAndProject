import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-budget-edit',
  templateUrl: './budget-edit.component.html',
  styleUrls: ['./budget-edit.component.css']
})
export class BudgetEditComponent implements OnInit {

  budget: Budget = new Budget();
  id :number = null;
  constructor(
    private budgetService:BudgetService,
    private route : ActivatedRoute,
    private location: Location,
    private router: Router
    ) { }

 async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if(id){
      this.id = +id; 
      this.budget = await this.budgetService.getOneBudget(this.id);
    }
    
  }

 async handleSave(formData){
    if(this.id){
      await this.budgetService.updateBudget(this.id,formData);
      this.location.back();
    }else{
     await this.budgetService.addBudget(formData);
      this.router.navigate(['budgets']);
    }
    
  }

}
