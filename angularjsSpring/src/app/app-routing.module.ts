import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { BudgetAboutComponent } from './budget-about/budget-about.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'budgets',
    component: IssueListComponent
  },
  {
    path: 'budgets/new',
    component: IssueEditComponent
  },
  {
    path: 'budgets/:id',
    component: IssueDetailComponent
  },
  {
    path: 'budgets/:id/edit',
    component: IssueEditComponent
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
