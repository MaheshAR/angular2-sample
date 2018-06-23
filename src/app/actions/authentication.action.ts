import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationActions{
    onLogin(data) {
        return {
            type: 'ONLOGIN',
            payload: data
        }
    }
    onRegister(data) {
        return {
            type: 'ONREGISTER',
            payload: data
        }
    }
}