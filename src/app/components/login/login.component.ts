import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {ApiCallService} from '../../services/apiCall.service';
import {UtilityService} from '../../services/utilityService';
import {Toastr_Token} from '../../services/toastr.service';

import {UrlConstants} from '../../constants/url.constants';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ],
	providers: []
})

export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	showLoader: boolean;
	loginStatus$: Observable<any>;
	regiterStatus$: Observable<any>;

	constructor(private formBuilder: FormBuilder,
				private router: Router,
				private apiCallService: ApiCallService,
				private utilityService: UtilityService,
				@Inject(Toastr_Token) private toastrService: any,
				private store: Store<any>
	){}

	ngOnInit(){
		this.loginForm = this.formBuilder.group({
			'username': [null, Validators.required],
			'password': [null, Validators.required]
		})

		this.loginStatus$ = this.store.select('Login');
		this.loginStatus$.subscribe(
			res => {
				if(Object.keys(res).length){
					res.success ? this.onLoginSucess(res) : this.onLoginError(res);
				}
			},
			err => {
				this.onLoginError(err);
			}
		)
	}

	login(form: FormGroup, mode: string){
		this.showLoader = true;
		if(mode === 'login'){
			this.store.dispatch({type: 'LOGIN', payload: form.value});
		}
	}

	onLoginSucess(data){
		this.showLoader = false;
		this.utilityService.storeLoggedInUser(data.result);
		this.router.navigate(['/dashboard']);
	}

	onLoginError(err){
		this.toastrService.warning(err.err);
		this.showLoader = false;
	}
}