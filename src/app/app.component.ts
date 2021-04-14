
import { User } from './shared/models/User';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  arrayOfUsers : Array<User> = [
    {
      name: "John Doe",
      age: 25,
      active: false
    },
    {
      name: "Jane Doe",
      age: 30,
      active: true
    },
    {
      name: "Seiji",
      age: 30,
      active: true,
    }
  ];
  usersForChild1: Array<User> = [];
  usersForChild2: Array<User> = [];
  constructor() {
    Object.assign(this.usersForChild1, this.arrayOfUsers);
    Object.assign(this.usersForChild2, this.arrayOfUsers);

  }
  selectedUserinApp: User;

  ngOnInit() {
  }

  addUser() {
    this.arrayOfUsers.push({
      name: "Glenn Olazo",
      age: 20,
      active: false
  })
}
receiveSelectedUser(user:User) {
  this.selectedUserinApp = user;
}

}
