import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/shared/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Array<Product>> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Product>> {
    return of([{name: "PS5", price: 27990}, { name: "switch", price: 13000}]);
  }
}
