import {Injectable} from '@angular/core';
import {CanLoad} from '@angular/router';
import {UtilityService} from './utilityService';

@Injectable()
export class ActivationGaurd implements CanLoad{
    constructor(private utilityService: UtilityService){}

    canLoad(): Promise<boolean>{
        return new Promise((resolve, reject) => {
            resolve(this.utilityService.isUserLoggedIn())
        }).then((res: boolean) => {
            return res;
        }).catch(() => {
            return false;
        });
    }
}