import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { CheckoutPaymentComponent } from "./checkout-payment/checkout-payment.component";
import { CheckoutHowWorksComponent } from "./checkout-how-works/checkout-how-works.component";
import { SignupComponent } from "./account/signup/signup.component";

const routes: Routes = [
    // { path: "", redirectTo: "/checkout-payment", pathMatch: "full" },
    // { path: "", redirectTo: "/success", pathMatch: "full" },

    { path: "", redirectTo: "/signup", pathMatch: "full" },
    { path: "signup", component: SignupComponent },
    { path: "items", component: ItemsComponent },
    { path: "checkout-payment", component: CheckoutPaymentComponent },
    { path: "success", component: CheckoutHowWorksComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
