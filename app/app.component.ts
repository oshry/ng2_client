import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>Tea Shop</h1>
    <ul class="nav nav-pills" >
      <li role="presentation" routerLink="/" class="active"><a href="#">Home</a></li>
      <li role="presentation" routerLink="/teas" ><a href="#">Products</a></li>
      <li role="presentation" routerLink="/shopping-cart"><a href="#">Cart</a></li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }