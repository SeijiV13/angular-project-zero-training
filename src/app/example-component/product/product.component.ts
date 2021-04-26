import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/Product';
import { ProductRepositoryService } from '../../shared/services/product-repository.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[];
  selectedProduct: Observable<Product>;
  constructor(private activatedRoute: ActivatedRoute, private productRepository: ProductRepositoryService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.products = data.products;
    });
    // console.log(this.activatedRoute.snapshot.data["products"]);
  }

  getProduct(id: number) {
    this.selectedProduct = this.productRepository.getProductById(id)
  }

}
