import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projected-child',
  templateUrl: './projected-child.component.html',
  styleUrls: ['./projected-child.component.scss']
})
export class ProjectedChildComponent implements OnInit {
  @Input() number = 0
  constructor() { }

  ngOnInit(): void {
  }

  sayHello(): string {
    return "Hello!";
  }

  getNumber() {
    return this.number;
  }

}
