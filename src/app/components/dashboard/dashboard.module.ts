import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard.routing.module';
import {ExpenseListModule} from '../expenseList/expenseList.module'
import {SharedModule} from '../shared/shared.module';

import {DashboardComponent} from './dashboard.component';


@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, ExpenseListModule, DashboardRoutingModule, SharedModule],
    exports: [ExpenseListModule, DashboardRoutingModule, SharedModule]
})

export class DashboardModule{};