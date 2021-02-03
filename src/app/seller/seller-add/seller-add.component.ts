import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';

@Component({
  selector: 'app-seller-add',
  templateUrl: './seller-add.component.html',
  styleUrls: ['./seller-add.component.scss']
})
export class SellerAddComponent implements OnInit {
  product:Product={productImages:[]};
  constructor() { }

  ngOnInit(): void {
  }
  addImg(e){
    document.getElementById('imgPresent').innerHTML=`<div class="carousel-item active">
    <img id="0" src="../../../assets/images/test/featured-image-placeholder.jpg" class="d-block w-100" alt="...">
    </div>`;
    let images = e.target.files;
    let index = 0;    
    if(e.target.files.length > 1)
    {
      for(let img of images)
      {
        this.product.productImages.push(img.name);
        if(index == 0)
        {
          let firstimg = document.getElementById('0') as HTMLImageElement;
          firstimg.src = `../../../assets/images/test/${img.name}`
          index++;
        }
        else
        {
          index++;
          let newImg = document.getElementById('imgPresent').innerHTML+`<div class="carousel-item">
          <img id="${index}" src="../../../assets/images/test/${img.name}" class="d-block w-100" alt="...">
        </div>`;
          document.getElementById('imgPresent').innerHTML=newImg;
        }
        
      }
    }
    else if (e.target.files.length == 1)
    {
      this.product.productImages.push(images[0].name);
      let img = document.getElementById('0') as HTMLImageElement;
      img.src = `../../../assets/images/test/${images[0].name}`
    }
    console.log(this.product.productImages);
  }
}
