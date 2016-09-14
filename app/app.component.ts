import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>Tea Shop</h1>
    <nav>
      <a routerLink="/" routerLinkActive="active">Home</a>
      <a routerLink="/teas" routerLinkActive="active">Products</a>
      <a routerLink="/shopping-cart" routerLinkActive="active">Cart</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }