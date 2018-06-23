import {Component, OnInit} from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: './expenseList.component.html',
    styleUrls: ['./expenseList.component.scss'],
})

export class ExpenseListComponent implements OnInit{
    expenseList:any = [];
    showModalWindow: boolean = false;
    text1: string = "hai";
    text2: any = {
        aaa: "hai"
    };
    contentText: string = "content text";

    constructor(private store: Store<any>
            ){}

    ngOnInit(){
        this.store.select('Expense').subscribe(
            (res: any) => {
                if(Object.keys(res).length){
                    this.expenseList = res;
                }
            }
        );

        this.store.dispatch({type: 'LOADEXPENSES', payload: {}});
    }

    addExpense(){
        this.showModalWindow = true;
    }

    closeModalWindow(){
        this.showModalWindow = false;
    }
}