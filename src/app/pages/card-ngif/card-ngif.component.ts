import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-ngif',
  templateUrl: './card-ngif.component.html',
  styleUrls: ['./card-ngif.component.scss']
})
export class CardNgifComponent implements OnInit {
  clubs3 = false;
  hearts3 = false;
  diams3 = true;
  spades3 = true;

  constructor() { }

  ngOnInit(): void {
  }

}
