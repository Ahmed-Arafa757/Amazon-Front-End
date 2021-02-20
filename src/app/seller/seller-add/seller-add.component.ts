import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_model/product';
import { CategoryService } from 'src/app/_services/category.service';
import { ColorService } from 'src/app/_services/color.service';
import { ProductService } from 'src/app/_services/product.service';
import { WarehouseService } from 'src/app/_services/warehouse.service';

@Component({
  selector: 'app-seller-add',
  templateUrl: './seller-add.component.html',
  styleUrls: ['./seller-add.component.scss']
})
export class SellerAddComponent implements OnInit {
  product:Product={productImages:[],productInfo:[{color:[],description:''}],productPrice:{},keywords:[]};
  colors;
  categories;
  subCategories;
  isColor=false;
  keys:string[]=[];
  warehouses;
  editMode:boolean=false;
  index ;
  constructor(
    private colorService : ColorService ,
    private categoryService : CategoryService ,
    private productService : ProductService ,
    private warehouseService : WarehouseService,
    private activatedRoute:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.product.productPrice.onSale='1';
    this.colors=this.colorService.allColors();
    this.categories = this.categoryService.getAllCategories();
    this.warehouses = this.warehouseService.getAllWareHouses();
    this.index =0;
    this.editMode = this.activatedRoute.snapshot.url[1] && this.activatedRoute.snapshot.url[1].path === 'edit';
    if (this.editMode ) {
      const id = this.activatedRoute.snapshot.params.id
      this.productService.productById(id).subscribe(
        (res)=>{
          this.product = res;
          console.log(this.product.productInfo[0].color)
          console.log(res);
          this.applySub()
          //images
          for(let img of this.product.productImages)
          {
            this.addImg(img,'edit')
          }
          //product Info
          //color
          if(this.product.productInfo[0].color.length != 0)
          {
            this.isColor = true;
          }
          for(let info of Object.keys(this.product.productInfo[0]))
          {
            if(info!='color' && info!='material' && info!='weight'  && info!='description' )
            {
              let html = `<div class="mb-3">
                <label for="${info}" class="form-label" style="font-size: 14px;font-weight: 700;color: black;">${info}</label>
                <input type="text" class="form-control" value='${this.product.productInfo[0][info]}' id="${info}" name="${info}" [(ngModel)]='product.productInfo[${info}]' #info${info}='ngModel'>
                </div>`;
              document.getElementById('addInfo').insertAdjacentHTML('beforeend',html);
            }
          }
        },
        (err)=>{
          console.error(err);
        },
        ()=>{}
      );
    }
  }
  applySub()
  {
    this.subCategories = this.categoryService.getAllSubCategoriesOfACategryById(this.product.productCategory);
  }
  addImg(img,mode){  
      let firstImg = document.getElementById('0') as HTMLImageElement;
      if(mode == 'add'){
        this.product.productImages.push(img);
      }
      if(this.index==0)
      {
        firstImg.src = `../../../assets/images/test/${img}`
      }
      else if(this.index>=0)
      {
        let newImg = document.getElementById('imgPresent').innerHTML+`<div class="carousel-item">
            <img src="../../../assets/images/test/${img}" class="d-block w-100" alt="...">
          </div>`;
          document.getElementById('imgPresent').innerHTML=newImg;
      }
      else
      {
        document.getElementById('imgPresent').innerHTML=`<div class="carousel-item active">
        <img id="0" src="../../../assets/images/test/featured-image-placeholder.jpg" class="d-block w-100" alt="...">
        </div>`;
      }
      this.index++;
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
    <input type="${type}" class="form-control" [value]='product.productInfo[0][${keyId}]' id="${keyId}" name="${keyId}" [(ngModel)]='product.productInfo[${keyId}]' #info${keyId}='ngModel'>
    </div>`;
    document.getElementById('addInfo').insertAdjacentHTML('beforeend',html);
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
        if(form.value[color] && !this.product.productInfo[0].color.includes(color))
        {
          this.product.productInfo[0].color.push(color);
        }
      }
    }
    else{
      delete this.product.productInfo[0].color ;
    }
    this.productService.addProduct(this.product).subscribe(
      (res)=>{console.log(res);},
      (err)=>{console.error(err)},
      ()=>{}
    )   
  }
  fireUplodeImg(e){
    if(e.screenX !== 0)
    {
      document.getElementById('img').click();
    }
     
  }
  
}