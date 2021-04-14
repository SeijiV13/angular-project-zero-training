import { User } from './../../shared/models/User';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  @Input('arrayOfUsers') users: Array<User> = [];
  @Output() selectedUserEmitter = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {

  }

  addUser() {
    this.users.push({
      name: "Glenn Olazo",
      age: 30,
      active: false
    });
  }

  selectUser(user: User) {
    this.selectedUserEmitter.emit(user);
  }

}
