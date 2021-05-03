import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DataTableConfig } from 'src/app/shared/models/DataTableConfig';
import { Game } from 'src/app/shared/models/Game';
import { Product } from 'src/app/shared/models/Product';
import { GameCategoryRepositoryService } from 'src/app/shared/services/game-category-repository.service';
import { GameRepositoryService } from 'src/app/shared/services/game-repository.service';
import { ProductRepositoryService } from '../../shared/services/product-repository.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  columns = [
    { field: 'id', header: '#' },
    { field: 'name', header: 'Name' },
    { field: 'price', header: 'Price' },
    { field: 'categoryName', header: 'Category Name' },
    { field: 'categoryId', header: 'Category Id' },
  ];
  products: Product[];
  selectedProduct$: Observable<Product>;

  // Start of Stream Definitions:

  // Single Observable stream for getting all Games (endpoint: /games)
  gamesWithoutCategory$ = this.gameRepositoryService.getAllGames();
  // Single Observable stream for getting all Game Categories (endpoint: /categories)
  categories$ = this.gameCategoryRepositoryService.getAllGameCategory();

  // Combined 2 http request (endpoints: /games & /categories)
  gamesWithCategory$ = combineLatest([
    this.gameRepositoryService.getAllGames(),
    this.gameCategoryRepositoryService.getAllGameCategory()
  ]).pipe(
    map(([games, categories]) => {
      return games.map(game => ({
        ...game,
        categoryName: categories.find(c => game.categoryId === c.id).name
      }) as Game);
    })
  );

  // Combined Data Stream and Action Stream for filtering Games w/ Categories by CategoryId
  filteredGamesWithCategory$ = combineLatest([
    this.gamesWithCategory$,
    this.gameCategoryRepositoryService.selectedCategoryAction$
  ]).pipe(
    map(([gamesWithCategories, categoryId]) => {
      return gamesWithCategories.filter(game => {
        return categoryId ? game.categoryId === categoryId : true;
      })
    })
  );
  // End of Streams Def:

  dtConfig: DataTableConfig = {
    columns: this.columns,
    data: this.filteredGamesWithCategory$
  }

  constructor(private activatedRoute: ActivatedRoute,
    private productRepositoryService: ProductRepositoryService,
    private gameRepositoryService: GameRepositoryService,
    private gameCategoryRepositoryService: GameCategoryRepositoryService
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.products = data.products;
    });
    // console.log(this.activatedRoute.snapshot.data["products"]);
  }

  getProduct(id: number) {
    this.selectedProduct$ = this.productRepositoryService.getProductById(id)
  }

  selectedCategory(id: string) {
    this.gameCategoryRepositoryService.selectedCategoryId(+id);
  }

}
