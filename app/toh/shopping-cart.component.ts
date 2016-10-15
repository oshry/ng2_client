import { Component } from '@angular/core';
// import {NgIf, FORM_DIRECTIVES} from "@angular/common";

import {Tea} from "../data/tea";
import {CartService} from "../service/cart.service";
// import {TeaDetailComponent} from "./details.component";


@Component({
    template: `
    <h2>Shopping Cart</h2>
    <!--<ul class="my-list list-group">-->
      <!--<li *ngFor="let tea of cartItems">-->
        <!--<div class="text-container">-->
            <!--<div>{{tea.name}}</div>-->
            <!--<div>{{tea.description}}</div>-->
            <!--<div>{{tea.price| currency}}</div>-->
            <!--<div>{{tea.count}}</div>-->
            <!--<button class="btn btn-primary" (click)="removeFromCart(tea.id)" >Remove</button>-->
        <!--</div>-->
        <!--<div class="thumb-container"><img src="{{tea.thumb}}"></div>-->
      <!--</li>-->
      
      <table class="table">
        <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
        </tr>
        <tr *ngFor="let tea of cartItems" class="list-group-item-text">
            <td><img src="{{tea.thumb}}"></td>
            <td>{{tea.name}}</td>
            <td>{{tea.description}}</td>
            <td>{{tea.price| currency}}</td>
            <td *ngIf="tea.count">{{tea.count}}</td>
            <td *ngIf="!tea.count">1</td>
            <td>
                <button class="btn btn-primary" (click)="removeFromCart(tea.id)" >Remove</button>
            </td>
        </tr>
        
      </table>
    <!--</ul>-->
    <p></p>`,
    providers: [ CartService ]
})
export class ShoppingCartComponent {
    public cartItems = [];
    public totalPrice: any;
    public sum: number = 0;
    constructor(private cartService:CartService){
        this.cartService = cartService;
        this.cartItems = cartService.getCart();
        this.totalPrice = this.getTotalPrice(this.cartItems);
    }
    getTotalPrice(items){
        items.forEach(function(entry) {
                if (entry.count > 1) {
                    this.sum += parseInt(entry.price) * parseInt(entry.count);
                } else {
                    this.sum += parseInt(entry.price);
                }
        }, this);
        console.log(this.sum);
    }
    removeFromCart(id){
        this.cartService.remove('blat', id);
        window.location.reload();
    }
}