import { Component, EventEmitter, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  langFlag = '../../../assets/images/icons/english.png';

  cartArray = [];
  totalQuantity = 0;

  searchString: string;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.productAdded.subscribe(
      (res) => {
        this.totalQuantity = 0;
        for (let index = 0; index < res.length; index++) {
          this.totalQuantity += res[index].quantity;
        }
      },
      (err) => {
        console.error(err);
      },
      (completed) => {
        alert('Subscribe Operation Compeleted');
      }
    );
  }

  toggle(input) {
    if (input.id === 'english-lang') {
      this.langFlag = '../../../assets/images/icons/english.png';
    } else {
      this.langFlag = '../../../assets/images/icons/arabic.png';
    }
  }
}
