import { LoopComponent } from './../../example-component/loop/loop.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveFormGuard implements CanDeactivate<LoopComponent> {
  canDeactivate(
    component: LoopComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(component.form.dirty) {
      return confirm('Are you sure you want to leave?');
    }
      return true;
  }

}
