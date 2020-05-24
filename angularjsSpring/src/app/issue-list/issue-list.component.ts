import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  Issues: Issue[] = [
    {id:1, title:'issue1', description:'description1', place: 'place1',status:'NEW'},
    {id:2, title:'issue2', description:'description2', place: 'place2',status:'DONE'},
    {id:3, title:'issue3', description:'description3', place: 'place3',status:'DOING'},
    {id:4, title:'issue4', description:'description4', place: 'place4',status:'NEW'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
