import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import {IssueService} from '../issue.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  title = 'Family Budget Application';
  issues: Issue[] = [];
  constructor(private issueService: IssueService) { }
  totalInCome = 0;
  totalOutCome = 0;
  async ngOnInit(){
    this.issues = await this.issueService.getIssues();
    this.issues.forEach(issue => {
     this.totalInCome += issue.income;
     this.totalOutCome += issue.outcome;
     
   });
   console.log(this.totalInCome,this.totalOutCome);
    console.log(this.issues)
  }

}
