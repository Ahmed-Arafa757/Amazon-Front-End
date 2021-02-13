import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var elms: any = document.getElementsByClassName('splide');
    for (var i = 0, len = elms.length; i < len; i++) {
      new Splide(elms[i], {
        type: 'loop',
        gap: 20,
        cover: true,
        height: '10rem',
        autoWidth: true,
        focus: 'center',
        autoplay: true,
        interval: 2000,
      }).mount();
    }
  }
}
