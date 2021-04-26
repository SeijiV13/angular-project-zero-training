import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/shared/models/Product';
import { ProductRepositoryService } from '../../shared/services/product-repository.service';

@Injectable()
export class ProductResolver implements Resolve<Array<Product>> {

  constructor(private productRepository: ProductRepositoryService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    // return of([{name: "PS5", price: 27990}, { name: "switch", price: 13000}]);
    return this.productRepository.getAllProducts(); // Pre-fetch the data from local fake-api instead
  }
}
