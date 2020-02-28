import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../person';


@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css']
})
export class PersonTableComponent implements OnInit {

  @Input() listPerson:Person[];

  @Output() addedPerson:EventEmitter<Person>;
  constructor() { 
    this.addedPerson = new EventEmitter<Person>();
  }

  ngOnInit() {
    console.log(this.listPerson);
  }


  personWasAdded(event:Person){
    console.log(event);
    this.addedPerson.emit(event);
  }


  delete(event,i:number){
   if(event.target.id === 'delete'){
     document.getElementsByTagName('tr')[i+1].hidden=true;
     document.getElementsByTagName('tr')
   }
  }
}
