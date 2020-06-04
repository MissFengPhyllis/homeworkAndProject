import { Injectable } from '@angular/core';
import { Issue } from './issue';  //引入issue.ts里面的issue类
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
export class IssueService {

// private issues: Issue[] = [
//     {id:1, title:'issue1', description:'description1', place: 'place1',status:'NEW'},
//     {id:2, title:'issue2', description:'description2', place: 'place2',status:'DONE'},
//     {id:3, title:'issue3', description:'description3', place: 'place3',status:'DOING'},
//     {id:4, title:'issue4', description:'description4', place: 'place4',status:'NEW'}
// ];
private issues :Issue[];

private issueUrl = '/api/budgets';

  constructor(
    private http: HttpClient
  ) { }

  getIssues(){
    // return this.issues;
    return this.http.get<Issue[]>(this.issueUrl,httpOptions).toPromise();
  }

  getOneIssue(id:number){
    return this.http.get<Issue>(`${this.issueUrl}/${id}`,httpOptions).toPromise();
    // return this.issues.find(issue=>issue.id===id);
  }

  updateIssue(id:number,data){
    console.log(id,data);
    // return this.http.put<Issue>(`http://localhost:8080/api/budgets/${id}`,data, httpOptions).toPromise();
    return this.http.put<Issue>(`${this.issueUrl}/${id}`,data, httpOptions).toPromise();
    // const issue = this.getOneIssue(id);
    // Object.assign(issue,data);
    // return issue;
  }

  addIssue(data){
    return this.http.post<Issue>(`${this.issueUrl}`,data, httpOptions).toPromise();
    // const newIssue = Object.assign(new Issue(),data);
    // newIssue.id = this.issues.length +1;
    // this.issues.push(newIssue);
    // return newIssue;
  }

  deleteIssue(id:Number){
    return this.http.delete<Issue>(`${this.issueUrl}/${id}`, httpOptions).toPromise();
    // this.issues = this.issues.filter(issue=>issue.id !== id);
  }
}
