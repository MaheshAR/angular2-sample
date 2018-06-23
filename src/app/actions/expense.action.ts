import {Injectable} from '@angular/core';

@Injectable()
export class ExpenseActions{
    onExpenseLoad(data) {
        return {
            type: 'ONEXPENSELOAD',
            payload: data
        }
    }
}