import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ColorService } from 'src/app/_services/color.service';

@Component({
  selector: 'app-seller-add',
  templateUrl: './seller-add.component.html',
  styleUrls: ['./seller-add.component.scss']
})
export class SellerAddComponent implements OnInit {
  product:Product={productImages:[],productInfo:{color:[]},productPrice:{},keywords:[]};
  colors;
  isColor:true;
  keys:string[]=[];
  constructor(private colorService : ColorService) { }

  ngOnInit(): void {
    this.colors=this.colorService.allColors();
  }
  addImg(e){    
    let firstImg = document.getElementById('0') as HTMLImageElement;
    let image = e.target.files[0];    
    this.product.productImages.push(image.name);
    if(this.product.productImages.length==1)
    {
      firstImg.src = `../../../assets/images/test/${image.name}`
    }
    else if(this.product.productImages.length>=1)
    {
      let newImg = document.getElementById('imgPresent').innerHTML+`<div class="carousel-item">
          <img src="../../../assets/images/test/${image.name}" class="d-block w-100" alt="...">
        </div>`;
        document.getElementById('imgPresent').innerHTML=newImg;
    }
    else
    {
      document.getElementById('imgPresent').innerHTML=`<div class="carousel-item active">
      <img id="0" src="../../../assets/images/test/featured-image-placeholder.jpg" class="d-block w-100" alt="...">
      </div>`;
    }    
  }
  removeImg(){
    let index = 0;
    if(this.product.productImages.length==0)
    {
      alert('No image to remove ');
    }
    else{
    this.product.productImages.pop();    
    document.getElementById('imgPresent').innerHTML='';
    if(this.product.productImages.length==0)
    {
      document.getElementById('imgPresent').innerHTML=`<div class="carousel-item active">
      <img id="0" src="../../../assets/images/test/featured-image-placeholder.jpg" class="d-block w-100" alt="...">
      </div>`;
    }
    else
    {
      for(let img of this.product.productImages)
      {
        if(index == 0)
        {
          index++;
          document.getElementById('imgPresent').innerHTML+=`<div class="carousel-item active">
          <img src="../../../assets/images/test/${img}" class="d-block w-100" alt="...">
        </div>`
        }else{
          document.getElementById('imgPresent').innerHTML+=`<div class="carousel-item ">
          <img src="../../../assets/images/test/${img}" class="d-block w-100" alt="...">
        </div>`
        }
      }
    }
  }
  }
  transform(value: string ): string  {
    return value.length === 0 ? '' :
    value.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ));  }

  addInfo(type){
    const input = document.getElementById('infoKey') as HTMLInputElement; 
    let key = this.transform(input.value);
    let value = [];
    if(key == '' || key == null || key == ' '|| key == '  ')
    {
      throw 'Please Enter Valid Key';
    }
    let keyId = key.replace(/\s/g, "").trim();
    this.keys.push(keyId);
    let html = `<div class="mb-3">
    <label for="${keyId}" class="form-label" style="font-size: 14px;font-weight: 700;color: black;">${key}</label>
    <input type="${type}" class="form-control" id="${keyId}" name="${keyId}" [(ngModel)]='product.productInfo[${keyId}]' #info${keyId}='ngModel'>
    </div>`;
    for( let k of this.keys)
    {
      value.push(document.getElementById(k).value)
    }
    console.log(value);
    
    document.getElementById('addInfo').innerHTML+=html;
    input.value = '';
  }
  onKeyWordAdded(keyWordInput)
  {
    this.product.keywords.push(keyWordInput.value);
    keyWordInput.value='';
  }
  removeKey(key){
   /*  let filterd = this.product.keywords.filter((k) => { 
      return k != key; 
  });
  this.product.keywords = filterd ; */

  let index = this.product.keywords.findIndex( k => k == key );
  this.product.keywords.splice(index,1);
  }
  submitAdd(form){
    if(form.value.prodSale == 0)
    {

      this.product.productPrice.finalPrice = (this.product.productPrice.currentPrice - this.product.productPrice.discount);
    }
    else
    {
      this.product.productPrice.finalPrice = this.product.productPrice.currentPrice;
    }
    
    for(let key of this.keys)
    {
      let input = document.getElementById(key) as HTMLInputElement;
      this.product.productInfo[key]=input.value;
    }
    if(this.isColor){
      for(let color of this.colors)
      {
        if(form.value[color])
        {
          this.product.productInfo.color.push(color);
        }
      }
    }
    else{
      this.product.productInfo.color = [];
    }
    
    console.log(this.product);
    
  }
  fireUplodeImg(e){
    if(e.screenX !== 0)
    {
      document.getElementById('img').click();
    }
    
  }
  
}
