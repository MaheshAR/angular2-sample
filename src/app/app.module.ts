import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {LoginModule} from './components/login/login.module';
import {AppRoutingModule} from './app.routing.module';

import {AppComponent} from './app.component';

import {ApiCallService} from './services/apiCall.service';
import {UtilityService} from './services/utilityService';
import {Toastr_Token} from './services/toastr.service';
import {ActivationGaurd} from './services/activationGaurd';


import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {Login} from './reducers/login.reducer';
import {Register} from './reducers/register.reducer';
import {Expense} from './reducers/expense.reducer';
import {AuthenticationActions} from './actions/authentication.action';
import {ExpenseActions} from './actions/expense.action';
import {AuthenticationEffects} from './effects/authentication.effect';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({Login, Register, Expense}),
    EffectsModule.forRoot([AuthenticationEffects])
  ],
  providers: [ApiCallService, 
              UtilityService, 
              ActivationGaurd,
              {provide: Toastr_Token, useValue: window["toastr"]},
              AuthenticationActions,
              ExpenseActions
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
