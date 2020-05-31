import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  issue: Issue = new Issue();

  constructor(
    private issueService:IssueService,
    private route : ActivatedRoute,
    private location:Location
    ) { }

  async ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issue = await this.issueService.getOneIssue(id);
  }

 async handleDelete(){
   await this.issueService.deleteIssue(this.issue.id);
    this.location.back();
  }

}
