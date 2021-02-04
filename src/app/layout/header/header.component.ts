import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  langFlag = '../../../assets/images/icons/english.png';

  constructor() {}

  ngOnInit(): void {}

  toggle(input) {
    if (input.id === 'english-lang') {
      this.langFlag = '../../../assets/images/icons/english.png';
    } else {
      this.langFlag = '../../../assets/images/icons/arabic.png';
    }
  }
}
