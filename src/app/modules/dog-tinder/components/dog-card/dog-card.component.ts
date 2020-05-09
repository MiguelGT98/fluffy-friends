import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ]),
    trigger('popOverState2', [
      state('show2', style({
        opacity: 1
      })),
      state('hide2', style({
        opacity: 0
      })),
      transition('show2 => hide2', animate('600ms ease-out')),
      transition('hide2 => show2', animate('1000ms ease-in'))
    ])

  ]
})
export class DogCardComponent implements OnInit {
  @Input() url: string;
  @Input() name: string;
  show = false;
  show2 = false;
  get likeDogo() {
    return this.show ? 'show' : 'hide'
  }
  get dislikeDogo() {
    return this.show2 ? 'show2' : 'hide2'
  }

  toggle() {
    this.show = !this.show;
  }
  toggle2() {
    this.show2 = !this.show2;
  }
  constructor() { }

  ngOnInit(): void { }
}
