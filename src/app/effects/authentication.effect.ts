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
import {AuthenticationActions} from './../actions/authentication.action';
import {ApiCallService} from '../services/apiCall.service';
import {UrlConstants} from './../constants/url.constants';

@Injectable()
export class AuthenticationEffects{
    constructor(
        private action$: Actions,
        private authenticationAction: AuthenticationActions,
        private apiCallService: ApiCallService
    ){}

    @Effect() login$ = this.action$
    .ofType('LOGIN')
    .switchMap((action: any) => this.apiCallService.apicall(UrlConstants.login, 'POST', action.payload)
        .map((data: any) => this.authenticationAction.onLogin(this.apiCallService.extractData(data)))
        .catch((err: any): any => Observable.of(this.authenticationAction.onLogin(this.apiCallService.handleError(err))))
    );
}