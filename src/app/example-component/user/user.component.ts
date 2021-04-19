import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    //URL PARAMETERS
    // using params
    console.log( this.activateRoute.snapshot.paramMap.get('id'));
    console.log( this.activateRoute.snapshot.paramMap.get('idtwo'));
    // using subscription or param observable
    this.activateRoute.paramMap.subscribe((data) => {
      console.log(data);
    });
    // also same as .subscribe (function(data) {

    //})

    //QUERY PARAMETERS
    console.log(this.activateRoute.snapshot.queryParamMap.get('test'));
    this.activateRoute.queryParamMap.subscribe((data) => {
      console.log(data);
    })

  }

}
