import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'ns-checkout-payment',
    templateUrl: './checkout-payment.component.html',
    styleUrls: ['./checkout-payment.component.css'],
    moduleId: module.id,
})
export class CheckoutPaymentComponent implements OnInit {
    isTabWibx = true;
    isTabWibxStore = false;
    isTabStore = false;
    // TESTE, se nao tiver wibx, so deixar esse cara falso
    isWibx = true;


    constructor(private router: RouterExtensions) {
    }

    ngOnInit() {
    }

    toggleTabWibx() {
        this.isTabWibx = true;
        this.isTabWibxStore = false;
        this.isTabStore = false;
    }

    toggleTabWibxStore() {
        this.isTabWibx = false;
        this.isTabWibxStore = true;
        this.isTabStore = false;
    }

    toggleTabStore() {
        this.isTabWibx = false;
        this.isTabWibxStore = false;
        this.isTabStore = true;
    }

    backPage() {
        if (this.router.canGoBack()) {
            this.router.back();
        }
    }

    selectedPayment() {
        this.backPage();
    }

}
