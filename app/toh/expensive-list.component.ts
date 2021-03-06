// import { Component } from '@angular/core';
import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
import { Tea }              from '../data/tea';
import { TeaService }       from '../service/tea.service';


@Component({
    selector: 'expensive-list',
    template: `
    <h2>Homepage</h2>
    <ul class="my-list list-group">
      <li class="list-group-item" *ngFor="let tea of teas | top5" (click)="onSelect(tea)">
        <p class="list-group-item-text my-list-item">
            <span class="list-group-item-heading my-list-item-heading">{{tea.name}}</span>
            <span class="my-list-item-body">{{tea.description}}</span>
            <span class="price">Price: {{ tea.price | currency}}</span>
        </p>
        <div class="thumb-container thumbnail"><img src="{{tea.thumb}}"></div>
      </li>
    </ul>`,
    providers: [ TeaService ]
})

export class ExpensiveListComponent implements OnInit {
    errorMessage: string;
    teas: Tea[];
    mode = 'Observable';

    constructor (private router: Router, private teaService: TeaService) {}

    onSelect(tea: Tea) {
        this.router.navigate(['/tea', tea.id]);
    }
    ngOnInit() {
        this.teaService.getTeas()
        .subscribe(
            teas => this.teas = teas,
            error =>  this.errorMessage = <any>error);
    }
}