import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
colors = [
  "red",
  "black",
  "silver",
  "gold",
  "blue",
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
