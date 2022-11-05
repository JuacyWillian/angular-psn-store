import { Component, OnInit } from '@angular/core';
import { GameData } from 'src/app/data/GameData';
import { GamestoreService } from 'src/app/services/gamestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gameList: GameData[] | undefined;
  constructor(private gameStoreService: GamestoreService) { }

  ngOnInit(): void {
    this.gameList = this.gameStoreService.allGames();
  }
}
