import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_model/product';
import { CategoryService } from 'src/app/_services/category.service';
import { ColorService } from 'src/app/_services/color.service';
import { ImageService } from 'src/app/_services/image.service';
import { ProductService } from 'src/app/_services/product.service';
import { SellersService } from 'src/app/_services/sellers.service';
import { WarehouseService } from 'src/app/_services/warehouse.service';

@Component({
  selector: 'app-seller-add',
  templateUrl: './seller-add.component.html',
  styleUrls: ['./seller-add.component.scss']
})
export class SellerAddComponent implements OnInit {
  product:Product={productImages:[],productInfo:[{color:[],description:''}],productPrice:{},keywords:[]};
  colors;
  arrayOfImages = [];
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
    private imageService:ImageService,
    private sellerService:SellersService,
    ) { }

  ngOnInit(): void {
    let sellerId = JSON.parse(localStorage.getItem('sellerLoginStorage'))['_id'];    
    this.product.productSales= sellerId;
    /* this.sellerService.getSellerById(sellerId).subscribe(
      (res:any)=>{
        this.product.productSales= res.name;
      },
      (err)=>{console.error(err)},
    ); */
    this.product.productPrice.onSale='1';
    this.colors=this.colorService.allColors();
    this.categoryService.getAllCategories().subscribe(
      (res)=>{
        this.categories=res;
      },
      (err)=>{console.error(err)},
      ()=>{},
    )
    this.warehouses = this.warehouseService.getAllWareHouses();
    this.index =0;
    this.editMode = this.activatedRoute.snapshot.url[1] && this.activatedRoute.snapshot.url[1].path === 'edit';
    if (this.editMode ) {
      const id = this.activatedRoute.snapshot.params.id
      this.productService.productById(id).subscribe(
        (res)=>{
          this.product = res;
          this.arrayOfImages = this.product.productImages.slice();
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
          if(this.product.productInfo[0].color){
            if(this.product.productInfo[0].color.length != 0)
            {
              this.isColor = true;
            }
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
this.categoryService.getAllSubCategoriesOfACategryById(this.product.productCategory).subscribe(
  (res)=>{
    this.subCategories=res
  },
  (err)=>{console.error(err)},
  ()=>{},
)
  }
  addImg(img,mode){  
    let url;
    let firstImg = document.getElementById('0') as HTMLImageElement;
    if(mode == 'add'){
       url =  URL.createObjectURL(img.files[0]);
      this.arrayOfImages.push(img.files[0]);
    }
    else{
       url = img;
    }
    if(this.index==0)
    {
      firstImg.src = url
    }
    else if(this.index>=0)
    {
      let newImg = document.getElementById('imgPresent').innerHTML+`<div class="carousel-item">
          <img src=${url} class="d-block w-100" alt="...">
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

    if(this.arrayOfImages.length === 0)
    {
      alert('No image to remove ');
    }
    else{
    this.index--;
    this.arrayOfImages.pop();    
    document.getElementById('imgPresent').innerHTML='';
    if(this.arrayOfImages.length==0)
    {
      document.getElementById('imgPresent').innerHTML=`<div class="carousel-item active">
      <img id="0" src="../../../assets/images/test/featured-image-placeholder.jpg" class="d-block w-100" alt="...">
      </div>`;
    }
    else
    {
      let index = 0;
      for(let img of this.arrayOfImages)
      { let imgURL = img ;
        if(typeof img === 'object'){
          let i:any = img;
          imgURL = URL.createObjectURL(i);
        }
        if(index == 0)
        {
          index++;
          document.getElementById('imgPresent').innerHTML+=`<div class="carousel-item active">
          <img src=${imgURL} class="d-block w-100" alt="...">
        </div>`
        }else{
          document.getElementById('imgPresent').innerHTML+=`<div class="carousel-item ">
          <img src=${imgURL} class="d-block w-100" alt="...">
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
  let index = this.product.keywords.findIndex( k => k == key );
  this.product.keywords.splice(index,1);
  }
   submitAdd(form){     
    if(this.editMode){
      this.product.productInfo[0].color = [];
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
         this.product.productInfo[0][key]=input.value;
       }
       if(this.isColor){
        this.product.productInfo[0].color = [];
         for (let index = 0; index < this.colors.length; index++) {
           if (form.value['color-'+index]) {
             this.product.productInfo[0].color.push(true);
           }
           else
           {
             this.product.productInfo[0].color.push(false);
           }
         }
       }
       else{
         delete this.product.productInfo[0].color ;
       }  


         let index = 0;
        this.product.productImages=[];
        for(let i = 0 ; i < this.arrayOfImages.length; i++)
        {    
          console.log(typeof this.arrayOfImages[i])
          if(typeof this.arrayOfImages[i] === 'string' && i != this.arrayOfImages.length-1)
          {
            this.product.productImages.push(this.arrayOfImages[i]);
            console.log('string and not last index')
            continue;
          }
          else if(typeof this.arrayOfImages[i] === 'string' && i === this.arrayOfImages.length-1)
          {
            this.product.productImages.push(this.arrayOfImages[i]);
            console.log('string and last index')
            this.productService.updateProduct(this.product).subscribe(
              (res)=>{
                console.log(res);
                alert('Product Updated');
              },
              (err)=>{console.error(err)},
              ()=>{}
             )
          }
          else{
            console.log('else')
            let img:any = this.arrayOfImages[i];
            this.imageService.upload(img,this.product.productSales+this.product.productName.replace(/\s/g, "").trim()+index+Date.now()).subscribe(
              (res:any)=>{
                console.log(res.link);
                this.product.productImages.push(res.link)
                index++;
                if(i === this.arrayOfImages.length-1)
                {
                  this.productService.updateProduct(this.product).subscribe(
                    (res)=>{
                      console.log(res);
                      alert('Product Updated');
                    },
                    (err)=>{console.error(err)},
                    ()=>{}
                   )
                }
                else{
                  console.log(this.product);
                  
                }
              },
              (err)=>{console.error(err)},
              ()=>{}
            )
          }
          
        }
    }
    else
    {
    this.product.productInfo[0].color = [];
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
      this.product.productInfo[0][key]=input.value;
    }
    if(this.isColor){
      for (let index = 0; index < this.colors.length; index++) {
        if (form.value['color-'+index]) {
          this.product.productInfo[0].color.push(true);
        }
        else
        {
          this.product.productInfo[0].color.push(false);
        }
      }
    }
    else{
      delete this.product.productInfo[0].color ;
    }
    if(this.arrayOfImages.length > this.product.productImages.length )
       {
         let index = 0;
        for(let i = this.product.productImages.length ; i < this.arrayOfImages.length; i++)
        {      
          let img:any = this.arrayOfImages[i];
          console.log(img);
          
          this.imageService.upload(img,this.product.productSales+this.product.productName.replace(/\s/g, "").trim()+index+Date.now()).subscribe(
            (res:any)=>{
              console.log(res.link);
              this.product.productImages.push(res.link)
              index++;
              if(this.product.productImages.length === this.arrayOfImages.length)
              {
                this.productService.addProduct(this.product).subscribe(
                  (res)=>{
                    console.log(res);
                    alert('Product Added');
                  },
                  (err)=>{console.error(err)},
                  ()=>{}
                 )
              }
              else{
                console.log(this.product);
                
              }
            },
            (err)=>{console.error(err)},
            ()=>{}
          )
        }
       }
       else{
        this.productService.addProduct(this.product).subscribe(
          (res)=>{
            console.log(res);
            alert('Product Added');
          },
          (err)=>{console.error(err)},
          ()=>{}
         )
       }  
    
  }
  }
  fireUplodeImg(e){
    if(e.screenX !== 0)
    {
      document.getElementById('img').click();
    }
     
  }
  
}