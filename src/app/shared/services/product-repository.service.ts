import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { ResourceEnums } from '../models/ResourceEnums';
import { FakeRestApiService } from './fake-rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {

  constructor(private fakeRestApiService: FakeRestApiService<Product>) { }

  getAllProducts() {
    return this.fakeRestApiService.getAllRecords(ResourceEnums.Products);
  }

  getProductById(id: number) {
    return this.fakeRestApiService.getRecordById(ResourceEnums.Products, id);
  }
}
