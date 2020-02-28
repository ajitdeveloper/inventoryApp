import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../person';
import * as $ from 'jquery';
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  newUSer:Person;
  constructor() { 
    this.personAdded = new EventEmitter();
  }

  ngOnInit() {
  }

  @Output() personAdded:EventEmitter<Person>;

  onAddUser(person:Person){
    this.newUSer = person;
    this.personAdded.emit(this.newUSer);
  }
close(){

  console.log("close");
  console.log(document.getElementById('modalLoginForm'));
  (<any>jQuery('#modalLoginForm')).modal('hide');  
}
}
