import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetEditComponent } from './budget-edit/budget-edit.component';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';
import { BudgetAboutComponent } from './budget-about/budget-about.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'budgets',
    component: BudgetListComponent
  },
  {
    path: 'budgets/new',
    component: BudgetEditComponent
  },
  {
    path: 'budgets/:id',
    component: BudgetDetailComponent
  },
  {
    path: 'budgets/:id/edit',
    component: BudgetEditComponent
  },
  {
    path: 'about',
    component: BudgetAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
