import {Injectable} from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable'
import { Action } from "@ngrx/store";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/of'
import {ExpenseActions} from './../actions/expense.action';
import {ApiCallService} from '../services/apiCall.service';
import {ExpenseListService} from '../services/expenseList.service';

@Injectable()
export class DashboardEffects{
    constructor(
        private action$: Actions,
        private expenseAction: ExpenseActions,
        private apiCallService: ApiCallService,
        private expenseListService: ExpenseListService
    ){}

    @Effect() login$ = this.action$
    .ofType('LOADEXPENSES')
    .switchMap((action: any) => this.apiCallService.apicall(this.expenseListService.getExpenseListUrl(), 'GET', {})
        .map((data: any) => {
            let res = this.expenseListService.transformExpenseListData(this.apiCallService.extractData(data));

            return this.expenseAction.onExpenseLoad(res);
        })
        .catch((err: any): any => Observable.of(this.expenseAction.onExpenseLoad(this.apiCallService.handleError(err))))
    );
}