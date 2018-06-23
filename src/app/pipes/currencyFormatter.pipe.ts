import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'currencyFormatter'})
export class CurrencyFormatterPipe implements PipeTransform{
    transform(value: string, args: string[]){
        if(!value){
            return value;
        }

        return parseInt(value).toLocaleString('en-IN', {style: 'currency', currency: 'INR'});
    }

}