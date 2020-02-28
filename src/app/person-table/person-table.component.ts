import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css']
})
export class PersonTableComponent implements OnInit {

  @Input() listPerson:Person[];
  constructor() { }

  ngOnInit() {
    console.log(this.listPerson);
  }



  delete(event,i:number){
   if(event.target.id === 'delete'){
     document.getElementsByTagName('tr')[i+1].hidden=true;
     document.getElementsByTagName('tr')
   }
  }
}
