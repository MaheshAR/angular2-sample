import {Injectable} from '@angular/core';
import {ApiCallService} from './apiCall.service';
import {UrlConstants} from '../constants/url.constants';
import {UtilityService} from './utilityService';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExpenseListService{
    constructor(private apiCallService: ApiCallService,
                private utilityService: UtilityService){}

    getExpenseListUrl(): string {
        const userId: string = this.utilityService.getLoggedInUser().id;

        return UrlConstants.expenseListByUserId + userId;
    }

    transformExpenseListData(res){
        let expenses = res.result;

        expenses.forEach((exp) => {
            exp.amount = +exp.amount;
            exp.remainingAmount = 0;
            Object.keys(exp.expense).forEach((dexp) => {
                exp.remainingAmount += +exp.expense[dexp].amount;
            });
        });

        return expenses;
    }

    // getExpenseList(): Promise<any>{
    //     return new Promise((resolve, reject) => {
    //         const userId: string = this.utilityService.getLoggedInUser().id;
    //         const url: string = UrlConstants.expenseListByUserId + userId;

    //         this.apiCallService.apicall(url, 'GET', {}).subscribe(
    //             res => {
    //                 let expenses = res.result;

    //                 expenses.forEach((exp) => {
    //                     exp.amount = +exp.amount;
    //                     exp.remainingAmount = 0;
    //                     Object.keys(exp.expense).forEach((dexp) => {
    //                         exp.remainingAmount += +exp.expense[dexp].amount;
    //                     });
    //                 });

    //                 resolve(expenses);
    //             }
    //         );
    //     });
    // }
}