import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { TeaService } from '../service/tea.service';
import { Subscription } from 'rxjs';
import { Tea } from '../data/tea';
import {CartService} from "../service/cart.service";

@Component({
    template: `
    <!--<h2>Product Page</h2>-->
    <!--<div *ngIf="tea">-->
    <!--<div class="text-container">-->
            <!--<div>{{tea.name}}</div>-->
            <!--<div>{{tea.description}}</div>-->
            <!--<div>{{tea.price}}</div>-->
    <!--</div>-->
    <!--<div class="thumb-container"><img src="{{tea.thumb}}"></div>-->
    <!--</div>-->
    
    <div *ngIf="tea" class="list-group-item">
        <p class="list-group-item-text my-list-item">
            <span class="list-group-item-heading my-list-item-heading">{{tea.name}}</span>
            <span class="my-list-item-body">{{tea.description}}</span>
            <span class="price">Price: {{tea.price| currency}}</span>
        </p>
        <div class="thumb-container thumbnail"><img src="{{tea.thumb}}"></div>
        <button class="btn btn-primary" (click)="addToCart()">Add To Cart</button>
        <button class="btn btn-primary" (click)="gotoTeas()">Back</button>
    </div>`,
    providers: [ TeaService, CartService ]
})
export class TeaDetailComponent implements OnInit, OnDestroy{
    // tea: Tea[];
    @Input() tea:any;
    private sub: Subscription;
    tea_id: number;
    errorMessage: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: TeaService,
        private cartService:CartService
    ){}
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.tea_id = +params['id']; // (+) converts string 'id' to a number
        });
        this.service.getTea(this.tea_id)
            .subscribe(
                tea => this.tea = tea,
                error =>  this.errorMessage = <any>error);
    }
    addToCart(){
        this.cartService.addItem(this.tea);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    gotoTeas() { this.router.navigate(['/teas']); }
}