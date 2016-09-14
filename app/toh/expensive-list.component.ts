// import { Component } from '@angular/core';
import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
import { Tea }              from '../data/tea';
import { TeaService }       from '../service/tea.service';


@Component({
    selector: 'expensive-list',
    template: `
    <h2>Most Expensive Teas: </h2>
    <ul>
      <li *ngFor="let tea of teas | top5" (click)="onSelect(tea)">
        <div class="text-container">
            <div>{{tea.name}}</div>
            <div>{{tea.description}}</div>
            <div>{{tea.price}}</div>
        </div>
        <div class="thumb-container"><img src="{{tea.thumb}}"></div>
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