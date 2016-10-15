import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
import { Tea }              from '../data/tea';
import { TeaService }       from '../service/tea.service';

@Component({
    selector: 'products-list',
    template: `
    <h2>Products:</h2>
    <span>Filters: </span>
    <button class="btn btn-primary" (click)="under20()">Under 20</button>  
    <button class="btn btn-primary" (click)="all()">All</button>
    <ul class="my-list list-group">
      <li *ngFor="let tea of teas" class="list-group-item" (click)="gotoDetails(tea)">
        <p class="list-group-item-text my-list-item">
            <span class="list-group-item-heading my-list-item-heading">{{tea.name}}</span>
            <span class="my-list-item-body">{{tea.description}}</span>
            <span class="price">Price: {{tea.price| currency}}</span>
        </p>
        <div class="thumb-container thumbnail"><img src="{{tea.thumb}}"></div>
      </li>
    </ul>`,
    providers: [ TeaService ]
})

export class ProductsListComponent implements OnInit {
    errorMessage: string;
    teas: Tea[];
    mode = 'Observable';

    constructor (private router: Router, private teaService: TeaService) {}

    gotoDetails(tea: Tea) {
        this.router.navigate(['/tea', tea.id]);
    }
    under20(){
        let under20 = [];
        this.teas.forEach((entry) => {

                if(entry.price < 20){
                    console.log(entry);
                    under20.push(entry);
                }
        });
        this.teas = under20;
    }
    all(){
        this.teaService.getTeas()
            .subscribe(
                teas => this.teas = teas,
                error =>  this.errorMessage = <any>error);
    }
    ngOnInit() {
        this.teaService.getTeas()
            .subscribe(
                teas => this.teas = teas,
                error =>  this.errorMessage = <any>error);
    }
}