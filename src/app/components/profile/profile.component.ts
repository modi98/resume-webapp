import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('titleBox') titleBox: ElementRef;
  @Output() sticky = new EventEmitter();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 164) {
        this.titleBox.nativeElement.classList.add('sticky-title');
        this.sticky.emit(true);
      } else {
        this.titleBox.nativeElement.classList.remove('sticky-title');
        this.sticky.emit(false);
      }
    });
  }
}
