import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http=inject(HttpClient)

  getProducts(params: {categori_id?:string;category_slug?:string}){
    const url=new URL('https://api.escuelajs.co/api/v1/products')
    if (params.categori_id) {
      url.searchParams.set('categoryId',params.categori_id)
    }
    if (params.category_slug) {
      url.searchParams.set('categorySlug',params.category_slug)
    }
    return this.http.get<Product[]>(url.toString())
  }

  getOneProduct(id:string){
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
}
