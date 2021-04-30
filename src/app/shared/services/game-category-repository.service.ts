import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameCategory } from '../models/GameCategory';
import { ResourceEnums } from '../models/ResourceEnums';
import { FakeRestApiService } from './fake-rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class GameCategoryRepositoryService {
  /**
   * Note: As a good practice a Subject/BehaviorSubject/ReplaySubject definition
   *       must not expose to other class/symbols to prevent the unintended update to the stream.
   *       Instead: create a public property and assign the Observable version of
   *                Subject/BehaviorSubject/ReplaySubject.
   *       See the syntax below for Subject creation:
   */

  // Its recommended to use BehaviorSubject if we want to emit an initial value to our action streams
  private selectedCategorySubject = new BehaviorSubject<number>(0);
  // private selectedCategorySubject = new Subject<number>();
  selectedCategoryAction$ = this.selectedCategorySubject.asObservable();

  constructor(private fakeRestApiService: FakeRestApiService<GameCategory>) { }

  getAllGameCategory() {
    return this.fakeRestApiService.getAllRecords(ResourceEnums.Categories);
  }

  selectedCategoryId(id: number) {
    this.selectedCategorySubject.next(id);
  }
}
