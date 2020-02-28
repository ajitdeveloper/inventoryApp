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

/*
* The added user is being pushed to list of array of person 
*/
  newPerson(event:Person){
    if(event.userName!=undefined && event.role!=undefined){
      if(!this.personArray.includes(event)){
        this.personArray.push(event);
      }
    }
  }

  ngOnInit() {
  }

}
