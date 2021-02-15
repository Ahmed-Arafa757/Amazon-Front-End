import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById('toTopBtn').addEventListener('click', () => {
      document.documentElement.scrollTop = 0;
    });
  }
}





