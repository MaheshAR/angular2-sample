import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';

import {UtilityService} from '../../services/utilityService';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{
    userName: string;

    constructor(
        private utilityService: UtilityService
    ){}

    ngOnInit(){
        this.userName = this.utilityService.getLoggedInUser().username;
    }
}