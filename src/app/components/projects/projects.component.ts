import { Component, OnInit } from '@angular/core';
import { trigger, animate, transition, style, state } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
  animations: [
    trigger('loadTransition', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX({{ xPosition }})' }),
        animate('{{ duration }} {{ delay }}')
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openExternalLink(link: string): void {
    window.open(link);
  }

}
