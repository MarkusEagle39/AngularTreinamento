import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() name: any;
  @Input() naipe: any;
  @Input() color: any;

  @Output() cardClick = new EventEmitter();
  counter = 0;

  classApplied = false;

  constructor() {}

  ngOnInit(): void {}

  cardClickd() {
    this.counter = this.counter + 1;
    this.cardClick.emit(this.counter);
    console.log(this.counter);

    this.classApplied = !this.classApplied;
  }
}
