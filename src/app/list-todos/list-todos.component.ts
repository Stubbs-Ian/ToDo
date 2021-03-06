import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(public id: number, public description: string, public done: boolean, public targetDate: Date) {

  }
}



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Learn to Code', false, new Date()),
    new Todo(3, 'Learn to Rule the World', false, new Date())
    /*{id: 1, description: 'Learn to Dance', eyecolor: 'Green'},
    {id: 2, description: 'Learn to Code', eyecolor: 'Blue'},
    {id: 3, description: 'Learn to rule the world', eyecolor: 'Black'}*/
  ];
  /*todo = {
    id: 1,
    description: 'Learn to Dance',
    eyecolor: 'Green'
  };*/
  constructor() { }

  ngOnInit() {
  }

}
