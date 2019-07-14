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

        // apenas teste - REMOVER DEPOIS
        this.router.navigate(["/items"], {
            animated: true,
            transition: {
                name: "slideLeft",
            }
        });
    }

}
