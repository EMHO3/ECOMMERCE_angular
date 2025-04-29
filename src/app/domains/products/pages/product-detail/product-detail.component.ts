import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/Product.model';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input()id?: string
  product=signal<Product | null>(null)
  cover=signal("")

  private productService=inject(ProductService)
  private cartService=inject(CartService)

  ngOnInit(){
    if(this.id){
      this.productService.getOneProduct(this.id).subscribe({
        next:(product)=>{
          this.product.set(product)
          if(product.images.length>0){
            this.cover.set(product.images[0])
          }
        }
      })
    }
  }

  changeOver(newImg:string){
    this.cover.set(newImg)
  }

  addToCart(){
    const product=this.product()
    if(product){
      this.cartService.addToCart(product)
    }
  }
  
}
