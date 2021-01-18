import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 24, job: 'Designer' },
    { name: 'Rick', age: 34, job: 'Developer' },
    { name: 'Lauren', age: 32, job: 'Engineer' },
    { name: 'Susan', age: 43, job: 'Designer' },
  ];
  headers = [{ key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'job', label: 'Job' }];
  constructor() {}

  ngOnInit(): void {}
}
