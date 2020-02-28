import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  personArray:Person[];

  constructor() { 
    this.personArray = [
      new Person('Sharon', 'user'),
      new Person('David', 'admin'),
      new Person('Smith', 'user')
    ]  
  }

  ngOnInit() {
  }

}
