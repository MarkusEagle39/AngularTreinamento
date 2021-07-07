import { Component, OnInit } from '@angular/core';
import { decodeEntity } from 'html-entities';

@Component({
  selector: 'app-card-ngfor',
  templateUrl: './card-ngfor.component.html',
  styleUrls: ['./card-ngfor.component.scss'],
})
export class CardNgforComponent implements OnInit {
  public baralhos = [
    { id: 1, name: '2', naipe: decodeEntity('&clubs;'), cor: 'black' },
    { id: 2, name: '2', naipe: decodeEntity('&hearts;'), cor: 'red' },
    { id: 3, name: '2', naipe: decodeEntity('&diams;'), cor: 'red' },
    { id: 4, name: '2', naipe: decodeEntity('&spades;'), cor: 'black' },
  ];

  constructor() {}

  ngOnInit(): void {}

  displayCounter(count: any) {}
}
