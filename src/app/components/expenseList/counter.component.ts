import {Component, OnInit, OnDestroy, Input} from '@angular/core';

let count: number = 0;

@Component({
    selector: 'counter',
    template: `<div>{{id}}{{name}}</div>`
})
export class CounterComponent implements OnInit, OnDestroy{
    id: number;
    @Input() name: string;

    constructor(){
        this.id = ++count;
    }

    ngOnInit(){
        console.log('counter initialization');
    }

    ngOnDestroy(){
        console.log('counter destroy');
    }
}