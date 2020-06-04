import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Issue } from '../issue';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit,OnChanges {
  @Input() issue = new Issue();
  @Output() save= new EventEmitter<Issue>();    

  issueForm = this.fb.group({
    title: [''],
    income: 0,
    outcome: 0,
    category: [''],
  });

  get title() { return this.issueForm.get('title'); }
  get income() { return this.issueForm.get('income'); }
  get outcome() { return this.issueForm.get('outcome'); }
  get category() { return this.issueForm.get('category'); }

  constructor(private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(){
    this.issueForm.patchValue(this.issue);
  }

  onSubmit(){
    if(this.issueForm.valid){
      this.save.emit(this.issueForm.value);
    }

  }

}
