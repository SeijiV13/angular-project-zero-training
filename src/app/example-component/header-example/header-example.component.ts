import { ProjectedChildComponent } from './../projected-child/projected-child.component';
import { Component, OnInit, ViewChild, ViewChildren, QueryList, ContentChild, ContentChildren } from '@angular/core';

@Component({
  selector: 'app-header-example',
  templateUrl: './header-example.component.html',
  styleUrls: ['./header-example.component.scss']
})
export class HeaderExampleComponent implements OnInit {
  @ViewChildren('projectedChild') projectedChildren: QueryList<ProjectedChildComponent>;
  @ContentChildren('contentChild') contentChildren: QueryList<ProjectedChildComponent>;
  constructor() { }

  ngOnInit(): void {
  }

  getContentChild() {
  //  const test =  this.contentChildren.sayHello();
  //  console.log(test);
  }

  getContentChildren() {
    this.contentChildren.forEach((e: ProjectedChildComponent) => {
      console.log(e.getNumber());
    });
  }

  getNumber() {
    this.projectedChildren.forEach((e: ProjectedChildComponent) =>  {
      e.getNumber()
    });
  }



}
