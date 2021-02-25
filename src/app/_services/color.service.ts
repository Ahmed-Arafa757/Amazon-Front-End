import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
colors = [
    {id:1,name:"red"},
    {id:2,name:"black"},
    {id:3,name:"silver"},
    {id:4,name:"gold"},
    {id:5,name:"blue"}
]
  constructor() { }
  allColors(){
    return this.colors;
  }
  addColor(newColor){
    this.colors.push(newColor);
  }
  deleteColor(color){
    let index = this.colors.findIndex(p=>p===color)
    this.colors.splice(index,1);
  }
}
