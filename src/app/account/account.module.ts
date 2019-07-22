import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SignupComponent } from './signup/signup.component';
import { NativeScriptLocalizeModule } from "nativescript-localize/angular";
import { IconPasswordMustComponent } from '../icon-password-must/icon-password-must.component';

@NgModule({
    declarations: [
        SignupComponent,
        IconPasswordMustComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptLocalizeModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [
        SignupComponent
    ]
})
export class AccountModule { }
