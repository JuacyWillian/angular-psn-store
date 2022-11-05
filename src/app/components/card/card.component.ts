import { Component, Input, OnInit } from '@angular/core';
import { GameData } from '../../data/GameData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  game: GameData | undefined;

  constructor() { }

  ngOnInit(): void { }

}
