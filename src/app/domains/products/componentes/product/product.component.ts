import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Product } from '../../../shared/models/Product.model';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-product',
  imports: [CommonModule,TimeAgoPipe,RouterLinkWithHref,NgOptimizedImage],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true})product!:Product;
  @Output() addToCart=new EventEmitter();

  addCartHandler(){
    console.log('click from child')
    this.addToCart.emit(this.product)
  }

}
