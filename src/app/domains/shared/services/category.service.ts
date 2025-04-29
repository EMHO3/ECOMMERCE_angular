import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http=inject(HttpClient)

  constructor() { }

  getAll(){
      return this.http.get<Category[]>(`${environment.apiUrl}/api/v1/categories`)
  }
}
