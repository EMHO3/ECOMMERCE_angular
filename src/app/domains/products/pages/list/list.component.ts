import { Component,signal,inject, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';
import {ProductComponent} from '../../componentes/product/product.component'
import { Product } from '../../../shared/models/Product.model';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { Category } from '../../../shared/models/category.model';

@Component({
  selector: 'app-list',
  imports: [CommonModule,ProductComponent,RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
}) 
export class ListComponent {
  products=signal<Product[]>([]);
  categories=signal<Category[]>([])
  private cartService=inject(CartService)
  private productServiceImp=inject(ProductService)
  private categoryServiceImpl=inject(CategoryService)

  @Input()slug?:string

  ngOnInit(){
    this.getProducts();
    this.getCategoria();
  }

  ngOnChanges(changes:SimpleChanges){
    const categori_id=changes['categori_id']
    if (categori_id) {
      this.getProducts()
    }
  }
  
  addToCart (product:Product){
    this.cartService.addToCart(product)
  }

  private getProducts(){
    this.productServiceImp.getProducts({category_slug:this.slug}).subscribe({next:(products)=>{
      this.products.set(products)
    },
    error:()=>{
     console.error('Failed to load products');
    }
  });
  }

  private getCategoria(){
    this.categoryServiceImpl.getAll().subscribe({next:(data)=>{
      this.categories.set(data)
    },
    error:()=>{
     console.error('Failed to load products');
    }
  });
  }
}
    