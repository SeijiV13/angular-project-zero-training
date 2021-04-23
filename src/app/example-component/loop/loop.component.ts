import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.scss']
})
export class LoopComponent implements OnInit {
  selectedUserinApp: User;
  arrayOfUsers: Array<User> = [
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
  userData: User[];
  form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    Object.assign(this.usersForChild1, this.arrayOfUsers);
    Object.assign(this.usersForChild2, this.arrayOfUsers);
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [''],
    });
  }

  addUser() {
    this.arrayOfUsers.push({
      name: "Glenn Olazo",
      age: 20,
      active: false
    });
  }

  receiveSelectedUser(user: User) {
    this.selectedUserinApp = user;
  }
  redirect(url: string) {
    this.router.navigate([url]);
  }

}
