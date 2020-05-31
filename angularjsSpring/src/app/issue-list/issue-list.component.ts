import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import {IssueService} from '../issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  //要想引用issueServices必须要在这里先引入
  constructor( private issueService: IssueService) {
   
   }

  async ngOnInit(){
    this.issues = await this.issueService.getIssues();

    console.log(this.issues)
  }

}
