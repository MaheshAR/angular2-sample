import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {ExpenseListComponent} from '../expenseList/expenseList.component';

const childRoutes : Routes = [
    { path: '', component: DashboardComponent, 
      children: [
        {path: '', redirectTo: 'expenseList', pathMatch: 'full'},
        {path: 'expenseList', component: ExpenseListComponent}
      ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule{}