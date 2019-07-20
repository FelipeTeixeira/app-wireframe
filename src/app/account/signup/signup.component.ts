import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
    selector: 'ns-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    moduleId: module.id,
})
export class SignupComponent implements OnInit {

    constructor(private page: Page) { }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

}
