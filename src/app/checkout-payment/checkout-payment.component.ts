import { Component, OnInit } from '@angular/core';

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


    constructor() {
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


}
