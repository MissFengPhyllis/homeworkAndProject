import { Injectable } from '@angular/core';
import { Budget } from './budget';  //引入budget.ts里面的budget类
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  })
};


@Injectable({
  providedIn: 'root'
})
export class BudgetService {

// private budgets: Budget[] = [
//     {id:1, title:'budget1', description:'description1', place: 'place1',status:'NEW'},
//     {id:2, title:'budget2', description:'description2', place: 'place2',status:'DONE'},
//     {id:3, title:'budget3', description:'description3', place: 'place3',status:'DOING'},
//     {id:4, title:'budget4', description:'description4', place: 'place4',status:'NEW'}
// ];
private budgets :Budget[];

private budgetUrl = '/api/budgets';

  constructor(
    private http: HttpClient
  ) { }

  getBudgets(){
    // return this.budgets;
    return this.http.get<Budget[]>(this.budgetUrl,httpOptions).toPromise();
  }

  getOneBudget(id:number){
    return this.http.get<Budget>(`${this.budgetUrl}/${id}`,httpOptions).toPromise();
    // return this.budgets.find(budget=>budget.id===id);
  }

  updateBudget(id:number,data){
    console.log(id,data);
    // return this.http.put<Budget>(`http://localhost:8080/api/budgets/${id}`,data, httpOptions).toPromise();
    return this.http.put<Budget>(`${this.budgetUrl}/${id}`,data, httpOptions).toPromise();
    // const budget = this.getOneBudget(id);
    // Object.assign(budget,data);
    // return budget;
  }

  addBudget(data){
    return this.http.post<Budget>(`${this.budgetUrl}`,data, httpOptions).toPromise();
    // const newBudget = Object.assign(new Budget(),data);
    // newBudget.id = this.budgets.length +1;
    // this.budgets.push(newBudget);
    // return newBudget;
  }

  deleteBudget(id:Number){
    return this.http.delete<Budget>(`${this.budgetUrl}/${id}`, httpOptions).toPromise();
    // this.budgets = this.budgets.filter(budget=>budget.id !== id);
  }
}
