import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http=inject(HttpClient)

  constructor() {}
  getProducts(categori_id?:string){
    const url=new URL('https://api.escuelajs.co/api/v1/products')
    if (categori_id) {
      url.searchParams.set('categoryId',categori_id)
    }
    return this.http.get<Product[]>(url.toString())
  }

  getOneProduct(id:string){
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
}
