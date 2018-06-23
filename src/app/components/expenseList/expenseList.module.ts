import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EffectsModule} from '@ngrx/effects';

import {SharedModule} from '../shared/shared.module';
import {ExpenseListComponent} from './expenseList.component';
import {ExpenseWidgetComponent} from './expenseWidget/expenseWidget.component';
import {CurrencyFormatterPipe} from '../../pipes/currencyFormatter.pipe';

import {ExpenseListService} from '../../services/expenseList.service';
import {DashboardEffects} from '../../effects/dashboard.effect';

import {DummyComponent} from './dummy.component';
import {CounterComponent} from './counter.component';

@NgModule({
    declarations: [ExpenseListComponent, ExpenseWidgetComponent, CurrencyFormatterPipe, DummyComponent, CounterComponent],
    imports: [CommonModule, SharedModule, EffectsModule.forFeature([DashboardEffects])],
    exports: [],
    providers: [ExpenseListService]
})

export class ExpenseListModule{}