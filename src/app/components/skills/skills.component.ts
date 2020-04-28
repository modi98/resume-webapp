import { Component, OnInit } from '@angular/core';
import { trigger, animate, transition, style, state } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less'],
  animations: [
    trigger('loadTransition', [
      state('in', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY({{ yPosition }})' }),
        animate('{{ duration }} {{ delay }}')
      ])
    ]),
    trigger('loadBar', [
      state('in', style({ width: '80%' }),
      { params: { inWidth: '100%'}}),
      transition(':enter', [
        style({ width: '0%' }),
        animate('{{ duration }} {{ delay }}')
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
