import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
import { Tea }              from '../data/tea';
import { TeaService }       from '../service/tea.service';

@Component({
    selector: 'products-list',
    template: `
    <h2>All Products List:</h2>
    <button class="btn btn-primary" (click)="under20()">Under 20</button>  
    <button class="btn btn-primary" (click)="all()">All</button>
    <ul class="list-group">
        
      <li *ngFor="let tea of teas" class="list-group-item" (click)="onSelect(tea)">
        <div class="text-container">
            <div>{{tea.name}}</div>
            <div>{{tea.description}}</div>
            <div>{{tea.price | currency}}</div>
        </div>
        <div class="thumb-container"><img src="{{tea.thumb}}"></div>
      </li>
    </ul>`,
    providers: [ TeaService ]
})

export class ProductsListComponent implements OnInit {
    errorMessage: string;
    teas: Tea[];
    mode = 'Observable';

    constructor (private router: Router, private teaService: TeaService) {}

    onSelect(tea: Tea) {
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