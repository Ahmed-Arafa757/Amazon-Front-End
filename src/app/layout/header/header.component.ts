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

  cartArray = [];
  cartQuantity = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.productAdded.subscribe(
      (res) => {
        res.quantity = 1;
        let inCart = false;

        for (let index = 0; index < this.cartArray.length; index++) {
          if (this.cartArray[index]._id === res._id) {
            if (this.cartArray[index].quantity < 5) {
              this.cartArray[index].quantity += 1;
              this.cartQuantity++;
            }
            inCart = true;
            break;
          }
        }

        if (inCart === false) {
          let deepCopy = JSON.parse(JSON.stringify(res));
          this.cartArray.push(deepCopy);
          this.cartQuantity++;
        }

        console.log(this.cartArray);

        this.productService.addProductsToCart(this.cartArray);
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
