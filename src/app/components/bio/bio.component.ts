import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.less'],
  animations: [
    trigger('profileTransitions', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.5s')
      ])
    ]),
    trigger('bioInfoTransitions', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('.5s .5s')
      ])
    ])
  ]
})
export class BioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
