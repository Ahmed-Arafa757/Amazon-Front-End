import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  private url: string = 'https://iti-upload.herokuapp.com/';
  /* private url: string = 'http://localhost:3000/'; */
  constructor(private http:HttpClient) {}
  
  upload(img,id){
    /* console.log(img); */
    const data : FormData = new FormData();
    data.append('file',img);
    return this.http.post(this.url+'upload/'+id,data)
  }

}
