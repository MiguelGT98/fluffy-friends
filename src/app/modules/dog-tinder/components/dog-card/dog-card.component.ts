import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss'],
})
export class DogCardComponent implements OnInit {
  @Input() url: string;
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}
}
