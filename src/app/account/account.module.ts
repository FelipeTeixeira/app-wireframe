import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        SignupComponent
    ],
    imports: [
        NativeScriptCommonModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [
        SignupComponent
    ]
})
export class AccountModule { }
