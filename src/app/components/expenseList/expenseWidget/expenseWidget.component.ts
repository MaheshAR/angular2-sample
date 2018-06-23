import {Component, Input} from '@angular/core';

@Component({
    selector: 'expense-widget',
    templateUrl: './expenseWidget.component.html'
})

export class ExpenseWidgetComponent{
    @Input() expense: any;
}