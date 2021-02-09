import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  langFlag = '../../../assets/images/icons/english.png';

  cartArray: Product[] = [];
  newCart = [];
  index = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.productAdded.subscribe(
      (res) => {
        this.index = this.cartArray.indexOf(res);

        if (this.index >= 0) {
          this.newCart[this.index].quantity += 1;
        } else {
          this.cartArray.push(res);
          res.quantity = 1;
          this.newCart.push(res);
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
