
import { User } from './shared/models/User';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private activateRoute: ActivatedRoute) {

  }

  ngOnInit() {

  }

  redirect(url: string) {
   this.router.navigate([url]);

  }

}
