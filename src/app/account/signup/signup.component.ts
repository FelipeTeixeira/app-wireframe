import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
    selector: 'ns-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    moduleId: module.id,
})
export class SignupComponent implements OnInit {
    isStep1 = true;
    isStep2 = false;
    isStep3 = false;
    isSecure = true;

    public hide: any;
    public countries: Array<any>;
    public loading: boolean = false;
    public done: boolean = false;
    public verify: boolean = false;
    public codeSended: boolean = false;
    public emailMatch: boolean = true;
    public passwordMatch: boolean = true;
    public codeSendedError: boolean = false;
    public passwordFocus: boolean = false;
    public lower: boolean = false;
    public upper: boolean = false;
    public useCpf: boolean = true;
    public usePassport: boolean = false;
    public numbers: boolean = false;
    public size: boolean = false;
    public special: boolean = false;
    public resendValidation: string;
    public serverError: string;
    public cameFromSignUp: boolean = false;
    public email: string;
    public cpf: string;
    public password: string;
    public passwordConfirmed: string;
    public secretcode: string;
    public name: string;
    public country: string = 'BR';
    public passport: string;
    public mailConfirmed: string;
    private routeSub: any;
    public firstStep: boolean = true;
    public secondStep: boolean;

    constructor(private page: Page) { }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    public selectedIndexChanged(args) {
        let picker = <any>args.object;
        this.country = this.countries[picker.selectedIndex].code;
    }

    public confirmEmail(args: any): void {
        let textField = <any>args.object;
        if(this.email) {
            this.emailMatch = this.email === textField.text;
        }
    }

    public confirmPassword(args: any): void {
        let textField = <any>args.object;
        if(this.email) {
            this.emailMatch = this.password === textField.text;
        }
    }


    public validatePassword(args: any): void {
        const passwordField: any = <any>args.object;
        const password = passwordField.text;

        const lowerCaseLetters = /[a-z]/g;
        // letra minúscula
        if (password.match(lowerCaseLetters)) {
            this.lower = true;
        } else {
            this.lower = false;
        }

        // letra maiúscula
        const upperCaseLetters = /[A-Z]/g;
        if (password.match(upperCaseLetters)) {
            this.upper = true;
        } else {
            this.upper = false;
        }

        // um número
        const numbers = /[0-9]/g;
        if (password.match(numbers)) {
            this.numbers = true;
        } else {
            this.numbers = false;
        }

        // pelo menos 8 caracteres.
        if (password.length >= 8) {
            this.size = true;
        } else {
            this.size = false;
        }

        const specialCaracter = /[^\w\*]/g;
        if (password.match(specialCaracter) && password.length !== 0) {
            this.special = true;
        } else {
            this.special = false;
        }
    }

    step1Previous() {
        this.isStep1 = true
        this.isStep2 = false;
    }

    step1Next() {
        this.isStep1 = false
        this.isStep2 = true;
    }

    step2Previous() {
        this.isStep2 = true;
        this.isStep3 = false;
    }

    step2Next() {
        this.isStep2 = false;
        this.isStep3 = true;
    }

    toggleSecure() {
        this.isSecure = !this.isSecure;
    }
}
