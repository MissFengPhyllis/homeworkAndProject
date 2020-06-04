import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BudgetEditComponent } from './budget-edit/budget-edit.component';
import { BudgetAboutComponent } from './budget-about/budget-about.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent,
    MainPageComponent,
    BudgetDetailComponent,
    BudgetFormComponent,
    BudgetEditComponent,
    BudgetAboutComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
