import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { TeaService } from '../service/tea.service';
import { Subscription } from 'rxjs';
import { Tea }              from '../data/tea';

@Component({
    template: `
    <h2>Product Page</h2>
    <div *ngIf="tea">
    <div class="text-container">
            <div>{{tea.name}}</div>
            <div>{{tea.description}}</div>
            <div>{{tea.price}}</div>
    </div>
    <div class="thumb-container"><img src="{{tea.thumb}}"></div>
    </div>
    <p>
        
      <button class="btn btn-primary" (click)="addToCart()">Add To Cart</button>
      <button class="btn btn-primary" (click)="gotoTeas()">Back</button>
    </p>`,
    providers: [ TeaService ]
})
export class TeaDetailComponent implements OnInit, OnDestroy{
    tea: Tea[];
    private sub: Subscription;
    tea_id: number;
    errorMessage: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: TeaService
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
        // console.log('sdssd'+this.tea_id );
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    gotoTeas() { this.router.navigate(['/teas']); }
}