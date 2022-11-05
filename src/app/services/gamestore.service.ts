import { Injectable } from '@angular/core';

import { GameData } from '../data/GameData';

import gameStore from '../../assets/data/game_data.json'


@Injectable({
  providedIn: 'root'
})
export class GamestoreService {

  constructor() { }

  allGames(): GameData[] {
    return gameStore;
  }

  oneGame(id: number): GameData {
    return gameStore[id];
  }
}
