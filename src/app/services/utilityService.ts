import {Injectable, Inject} from '@angular/core';

@Injectable()
export class UtilityService{
    storeLoggedInUser(data){
        sessionStorage.setItem('userCredentials', JSON.stringify(data));
    }

    getLoggedInUser(){
        return JSON.parse(sessionStorage.getItem('userCredentials'));
    }

    isUserLoggedIn(){
        return (this.getLoggedInUser() !== null);
    }
}