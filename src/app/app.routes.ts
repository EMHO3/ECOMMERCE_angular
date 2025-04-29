import { Routes } from '@angular/router';

import { LayoutComponent } from './domains/shared/componentes/layout/layout.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component:LayoutComponent,
        children:[
            {
                path: '',
                loadComponent:()=> import('./domains/products/pages/list/list.component').then(m =>m.ListComponent)
            },
            {
                path: 'category/:slug',
                loadComponent:()=> import('./domains/products/pages/list/list.component').then(m =>m.ListComponent)
            },
            {
                path: 'about',
                loadComponent:()=> import('./domains/info/pages/about/about.component').then(m =>m.AboutComponent),
            },
            {
                path: 'product/:id',
                loadComponent:()=> import('./domains/products/pages/product-detail/product-detail.component').then(m =>m.ProductDetailComponent),
            },
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
