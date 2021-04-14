import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  @Input() users: Array<User> = [];
  @Input() selectedUser: User;
  constructor() { }

  ngOnInit() {
  }

  addUser() {
    this.users.push({
      name: "Glenn Olazo",
      age: 20,
      active: false
    })
  }

}
