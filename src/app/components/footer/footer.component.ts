import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendToSocialMedia(socialMedia): void {
    let url = '';
    switch (socialMedia) {
      case 'linkedin':
        url = 'https://www.linkedin.com/in/mauricio-alvarado-6089a3169/';
        break;
      case 'github':
        url = 'https://github.com/modi98';
        break;
      case 'instagram':
        url = 'https://www.instagram.com/modii_98/';
        break;
      case 'twitter':
        url = 'https://twitter.com/maualvaradoh';
        break;
      default:
        url = '';
        break;
    }
    window.open(url);
  }
}
