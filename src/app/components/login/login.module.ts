import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login.component';
import {LoaderModule} from '../loader/loader.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule, LoaderModule],
    exports: []
})

export class LoginModule {}