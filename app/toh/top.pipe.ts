import { Pipe, PipeTransform } from '@angular/core';
import { Tea }              from '../data/tea';

/*
 * Take top 5 teas
 */
@Pipe({name: 'top5'})
export class TopPipe implements PipeTransform {
    sortResults(teas, prop, asc) {
        teas = teas.sort(function(a, b) {
            let ap; let bp;
            if(prop === 'price'){
                ap = parseInt(a[prop]);
                bp = parseInt(b[prop]);
            }else{
                ap = a[prop];
                bp = b[prop];
            }
            if (asc) {
                return (ap > bp) ? 1 : ((ap < bp) ? -1 : 0);
            } else {
                return (bp > ap) ? 1 : ((bp < ap) ? -1 : 0);
            }
        });
        return teas;
    }
    transform(allTeas: Tea[]){
        if(typeof allTeas != 'undefined'){
            allTeas = this.sortResults(allTeas, 'price', false);
            allTeas = allTeas.slice(0, 5);
        }
        return allTeas;
    }
}