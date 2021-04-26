import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { FakeRestApiService } from './fake-rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {

  constructor(private fakeRestApiService: FakeRestApiService<Product>) { }

  getAllProducts() {
    const resource = "products";
    return this.fakeRestApiService.getAllRecords(resource);
  }

  getProductById(id: number) {
    const resource = "products";
    return this.fakeRestApiService.getRecordById(resource, id);
  }
}
