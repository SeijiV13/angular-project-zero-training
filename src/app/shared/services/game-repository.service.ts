import { Injectable } from '@angular/core';
import { Game } from '../models/Game';
import { ResourceEnums } from '../models/ResourceEnums';
import { FakeRestApiService } from './fake-rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class GameRepositoryService {
  constructor(private fakeRestApiService: FakeRestApiService<Game>) { }

  getAllGames() {
    return this.fakeRestApiService.getAllRecords(ResourceEnums.Games);
  }
}
